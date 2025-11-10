import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./_components/dashboard-view";

const IndustryInsightPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  
  if (!isOnboarded) {
    redirect("/onboarding");
  }

  let insights = null;
  let error = null;

  try {
    insights = await getIndustryInsights();
  } catch (err) {
    error = err.message;
  }

  return (
     <div className="container mx-auto">
        <DashboardView insights={insights} error={error}/>
      </div>
      )
};

export default IndustryInsightPage;
