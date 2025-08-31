import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    title: "Create Your Career Profile",
    description: "Begin by providing details about your professional background and career aspirations to tailor the experience.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Generate Winning Documents",
    description: "Leverage AI to build impactful, ATS-friendly resumes and persuasive cover letters effortlessly.",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Master Your Interviews",
    description: "Hone your skills with realistic, AI-driven mock interviews that are specifically adapted to your target job.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Analyze and Improve",
    description: "Review in-depth analytics from your practice sessions to identify strengths and areas for improvement.",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];