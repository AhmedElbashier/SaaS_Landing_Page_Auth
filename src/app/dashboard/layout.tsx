import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <div className="flex bg-background min-h-screen">
        <Sidebar className="hidden md:flex flex-col w-64 border-r shrink-0" />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/10">
            {children}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
