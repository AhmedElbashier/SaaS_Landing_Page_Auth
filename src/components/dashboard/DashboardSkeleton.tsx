import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div>
        <Skeleton className="h-9 w-48 mb-2" />
        <Skeleton className="h-5 w-64" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border bg-card p-6 flex flex-col justify-between">
            <div className="flex justify-between pb-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <div className="space-y-2 mt-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-3 w-32" />
            </div>
            <Skeleton className="h-16 w-full mt-4" />
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4 rounded-xl border p-6 flex flex-col space-y-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-[350px] w-full" />
        </div>
        <div className="lg:col-span-3 rounded-xl border p-6 flex flex-col space-y-8">
           <Skeleton className="h-6 w-32" />
           {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-9 w-9 rounded-full" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
           ))}
        </div>
      </div>
    </div>
  );
}
