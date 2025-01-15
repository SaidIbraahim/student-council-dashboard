import { Award, Users, Vote, FileText } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/StatsCard";
import ElectionChart from "@/components/ElectionChart";
import CandidateApprovalList from "@/components/CandidateApprovalList";

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-2">Welcome back, Super Admin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Candidates"
            value="24"
            icon={<Users className="h-6 w-6 text-primary" />}
            description="+4 pending approval"
          />
          <StatsCard
            title="Active Elections"
            value="2"
            icon={<Vote className="h-6 w-6 text-primary" />}
            description="3 scheduled"
          />
          <StatsCard
            title="Total Votes"
            value="1,234"
            icon={<Award className="h-6 w-6 text-primary" />}
            description="Across all elections"
          />
          <StatsCard
            title="Reports Generated"
            value="15"
            icon={<FileText className="h-6 w-6 text-primary" />}
            description="This month"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ElectionChart />
          <CandidateApprovalList />
        </div>
      </div>
    </DashboardLayout>
  );
}