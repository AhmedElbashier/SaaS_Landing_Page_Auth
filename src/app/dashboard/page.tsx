import { Navbar } from "@/components/Navbar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted/10">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="bg-background rounded-xl shadow-sm border p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome to your Dashboard</h1>
          <p className="text-muted-foreground mb-8">
            This is a protected route. Only authenticated users can see this page.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Total Views</h3>
              <p className="text-3xl font-bold text-primary">12,450</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Active Projects</h3>
              <p className="text-3xl font-bold text-primary">4</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Revenue</h3>
              <p className="text-3xl font-bold text-primary">$4,250</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
