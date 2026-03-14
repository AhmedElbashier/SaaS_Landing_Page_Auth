import { Cpu, Blocks, Cloud, Code, Gamepad2, Layers, Monitor, Hexagon } from "lucide-react";

export function TrustedBy() {
  const logos = [
    { name: "TechCorp", icon: Cpu },
    { name: "BuildFlow", icon: Blocks },
    { name: "CloudSync", icon: Cloud },
    { name: "DevLogic", icon: Code },
    { name: "PlayForge", icon: Gamepad2 },
    { name: "StackSoft", icon: Layers },
    { name: "ViewPoint", icon: Monitor },
    { name: "HexaData", icon: Hexagon },
  ];

  return (
    <section className="py-12 border-b bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-8">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors cursor-default">
              <logo.icon className="w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
