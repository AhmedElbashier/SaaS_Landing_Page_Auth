"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ShieldCheck, Zap, Globe, Cpu, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built on Edge runtime for sub-millisecond responses globally.",
      icon: Zap,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "Bank-Grade Security",
      description: "Encrypted at rest and in transit. SOC2 Type II certified.",
      icon: ShieldCheck,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      title: "Real-time Analytics",
      description: "Monitor your key metrics with gorgeous dashboards.",
      icon: Activity,
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
    },
    {
      title: "Global Reach",
      description: "Deployed across 35 regions worldwide instantly.",
      icon: Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "AI-Powered",
      description: "Our machine learning models optimize your workflows.",
      icon: Cpu,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Seamless Integration",
      description: "Connects flawlessly with your existing toolchain.",
      icon: Layers,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="features" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need to ship faster
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide a complete suite of tools to help you build, launch, and scale your applications without the headache.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-background/60 backdrop-blur-sm border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.bgColor} ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
