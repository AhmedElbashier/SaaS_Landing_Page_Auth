import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { OverviewChart } from "@/components/dashboard/OverviewChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { ProjectsTable } from "@/components/dashboard/ProjectsTable";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground">
            Here's what's happening in your projects today.
          </p>
        </div>

        <StatsGrid />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <div className="lg:col-span-4 bg-card rounded-xl border shadow-sm flex flex-col">
            <OverviewChart />
          </div>
          <div className="lg:col-span-3 bg-card rounded-xl border shadow-sm flex flex-col">
            <RecentActivity />
          </div>
        </div>

        <div className="bg-card rounded-xl border shadow-sm">
          <ProjectsTable />
        </div>
      </div>
    </Suspense>
  );
}
