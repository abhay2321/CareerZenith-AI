This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

->

# 🚀 CareerZenith - AI-Powered Career Development Platform

CareerZenith is a comprehensive, AI-driven career development platform designed to revolutionize how professionals approach career growth. Built with cutting-edge technology, it provides personalized guidance, intelligent tools, and real-time market insights to accelerate professional success.

## ✨ Features

### 🧠 AI-Powered Intelligence
- **Intelligent Career Co-Pilot**: Personalized career path recommendations and actionable insights
- **Adaptive Interview Simulator**: AI-generated questions with instant feedback
- **Smart Job Matching**: AI-analyzed job opportunities based on your profile
- **Skill Gap Analysis**: Personalized learning recommendations and development plans

### 📝 Professional Document Creation
- **AI-Enhanced Resume Builder**: ATS-compliant resumes with intelligent optimization
- **Cover Letter Generator**: Persuasive, tailored cover letters for any position
- **Document Templates**: Professional layouts for various industries and roles

### 🎯 Career Development Tools
- **Real-Time Market Intelligence**: Live industry trends, salary data, and market insights
- **Interview Preparation**: Mock interviews with AI feedback and performance analytics
- **Professional Networking**: Connect with industry professionals and mentors
- **Career Analytics**: Track progress and identify improvement areas

### 🛡️ Security & Privacy
- **Enterprise-Grade Security**: Your data is protected with industry-standard security
- **Privacy First**: We never share your personal information with third parties
- **Secure Authentication**: Powered by Clerk for reliable user management

## 🏗️ Technology Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Node.js, Prisma ORM, PostgreSQL
- **AI/ML**: Google Gemini AI, Natural Language Processing
- **Authentication**: Clerk Authentication
- **Deployment**: Vercel Platform
- **Styling**: Tailwind CSS, Radix UI Components
- **Charts**: Recharts for data visualization
- **PDF Generation**: html2pdf.js for document export

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/careerzenith.git
   cd careerzenith
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/careerzenith"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   GEMINI_API_KEY="your_gemini_api_key"
   ```

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
careerzenith/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (main)/            # Main application routes
│   │   ├── dashboard/     # User dashboard
│   │   ├── resume/        # Resume builder
│   │   ├── interview/     # Interview preparation
│   │   ├── ai-cover-letter/ # Cover letter generator
│   │   └── onboarding/    # User onboarding
│   ├── api/               # API routes
│   └── lib/               # Utility libraries
├── components/             # Reusable UI components
├── data/                  # Static data and content
├── hooks/                 # Custom React hooks
├── lib/                   # Core libraries and configurations
├── prisma/                # Database schema and migrations
└── public/                # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Key Features Analysis

### 1. **AI-Powered Career Guidance**
- **Technology**: Google Gemini AI integration
- **Benefits**: Personalized recommendations, industry insights, skill analysis
- **Use Cases**: Career path planning, skill development, market analysis

### 2. **Intelligent Document Creation**
- **Technology**: AI content generation, markdown processing
- **Benefits**: Professional-quality documents, ATS optimization, time savings
- **Use Cases**: Resume building, cover letter creation, document templates

### 3. **Real-Time Market Intelligence**
- **Technology**: Data analytics, industry trend analysis
- **Benefits**: Informed career decisions, salary insights, market awareness
- **Use Cases**: Job searching, salary negotiation, industry research

### 4. **Interview Preparation System**
- **Technology**: AI question generation, performance analytics
- **Benefits**: Confidence building, skill improvement, performance tracking
- **Use Cases**: Interview practice, skill assessment, progress monitoring

## 🎯 Target Audience

- **Job Seekers**: Looking for career advancement opportunities
- **Career Changers**: Transitioning to new industries or roles
- **Students**: Preparing for entry into the job market
- **Professionals**: Seeking career growth and development
- **HR Professionals**: Understanding market trends and candidate expectations

## 🚀 Future Enhancements

- **Mobile App**: Native iOS and Android applications
- **Advanced Analytics**: Machine learning-powered career predictions
- **Integration APIs**: Connect with job boards and HR systems
- **Video Interviews**: AI-powered video interview practice
- **Mentorship Platform**: Connect with industry experts
- **Learning Management**: Integrated skill development courses

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Documentation**: [docs.careerzenith.com](https://docs.careerzenith.com)
- **Email**: support@careerzenith.com
- **Discord**: [Join our community](https://discord.gg/careerzenith)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- AI powered by [Google Gemini](https://ai.google.dev/)
- Authentication by [Clerk](https://clerk.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by the CareerZenith Team**