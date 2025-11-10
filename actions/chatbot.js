"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

// System context about CareerZenith
const SYSTEM_CONTEXT = `
You are an AI assistant for CareerZenith, an AI-powered career development platform. You help users with:

1. PLATFORM FEATURES:
   - Resume Builder: AI-enhanced, ATS-compliant resume creation with markdown editing and PDF export
   - Cover Letter Generator: AI-powered personalized cover letters for job applications
   - Interview Preparation: Mock interviews with AI-generated questions and performance analytics
   - Industry Insights Dashboard: Real-time market intelligence, salary ranges, and industry trends
   - Onboarding: User profile setup with industry and skills selection

2. HOW TO USE THE PLATFORM:
   - Dashboard: View industry insights, salary data, growth rates, and recommended skills
   - Resume: Create resumes using form-based builder or markdown editor, export to PDF
   - Cover Letters: Generate tailored cover letters by providing job details
   - Interview Prep: Take mock quizzes with 10 AI-generated questions, get instant feedback
   - Navigation: Use the header menu to access all features

3. TECHNICAL STACK:
   - Frontend: Next.js 15, React 19, Tailwind CSS
   - Backend: Node.js, Prisma ORM, PostgreSQL
   - AI: Google Gemini AI for intelligent features
   - Authentication: Clerk for secure user management

4. COMMON ISSUES:
   - Complete onboarding first to access all features
   - Set your industry to get personalized insights
   - Quizzes are generated based on your industry and skills
   - Resume content is saved automatically

Answer questions about the platform, guide users on how to use features, and provide general career advice.
Be helpful, concise, and friendly. If unsure about platform-specific details, provide general career guidance.
`;

export async function sendChatMessage(message, conversationHistory = []) {
  try {
    const { userId } = await auth();
    
    // Get user context if authenticated
    let userContext = "";
    if (userId) {
      const user = await db.user.findUnique({
        where: { clerkUserId: userId },
        select: {
          name: true,
          industry: true,
          skills: true,
          experience: true,
        },
      });

      if (user) {
        userContext = `
User Context:
- Name: ${user.name || "Not provided"}
- Industry: ${user.industry || "Not set"}
- Skills: ${user.skills?.join(", ") || "Not specified"}
- Experience: ${user.experience ? `${user.experience} years` : "Not specified"}
`;
      }
    }

    // Build conversation context
    const conversationContext = conversationHistory
      .map((msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
      .join("\n");

    // Create the full prompt
    const prompt = `${SYSTEM_CONTEXT}

${userContext}

Previous Conversation:
${conversationContext}

Current User Question: ${message}

Provide a helpful, concise response. If the question is about CareerZenith features, explain them clearly. 
If it's general career advice, provide professional guidance. Keep responses under 200 words unless more detail is needed.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return {
      success: true,
      message: text,
    };
  } catch (error) {
    console.error("Chatbot error:", error);
    return {
      success: false,
      message: "I apologize, but I'm having trouble processing your request. Please try again.",
      error: error.message,
    };
  }
}

export async function getChatSuggestions() {
  const { userId } = await auth();
  
  const suggestions = [
    "How do I create a resume on CareerZenith?",
    "What features does the interview preparation include?",
    "How does the AI cover letter generator work?",
    "Tell me about industry insights dashboard",
    "How can I improve my interview skills?",
    "What makes a good resume?",
    "How do I prepare for a job interview?",
    "What are the latest trends in my industry?",
  ];

  // Add personalized suggestions if user is logged in
  if (userId) {
    try {
      const user = await db.user.findUnique({
        where: { clerkUserId: userId },
        select: { industry: true },
      });

      if (user?.industry) {
        suggestions.unshift(`What are the salary trends in ${user.industry}?`);
        suggestions.unshift(`What skills should I learn for ${user.industry}?`);
      }
    } catch (error) {
      console.error("Error fetching user for suggestions:", error);
    }
  }

  return suggestions;
}
