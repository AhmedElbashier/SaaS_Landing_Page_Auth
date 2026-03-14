import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none dark:hidden">
        <div className="absolute top-0 right-1/4 translate-x-1/2 w-[800px] h-[400px] bg-red-100/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none hidden dark:block">
        <div className="absolute top-0 right-1/4 translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-slate-800/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-muted text-muted-foreground border mb-8 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="flex items-center justify-center bg-primary text-primary-foreground rounded-full w-6 h-6">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          Introducing SaaSify 2.0
          <span className="w-px h-3 bg-border mx-1" />
          <Link href="#" className="text-foreground hover:underline inline-flex items-center gap-1">
            Read the release notes
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6 text-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
          Supercharge your workflow with our smart platform
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          Build, scale, and manage your products effortlessly. SaaSify gives you the tools you need to accelerate your business in record time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
          <Button size="lg" className="h-12 px-8 text-base group">
            Start solving for free
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base">
            Book a demo
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto relative rounded-xl overflow-hidden border bg-background/50 shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <div className="flex items-center border-b px-4 py-3 bg-muted/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
          <div className="aspect-[16/9] w-full bg-muted/20 p-8 flex items-center justify-center flex-col gap-4">
            <div className="h-full w-full border border-dashed rounded-lg bg-background/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground">
              {/* Placeholder for actual dashboard image */}
              <span className="text-sm font-medium">Dashboard Interface Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
