import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for trying out our platform and side projects.",
      price: "$0",
      duration: "/month",
      features: ["Up to 3 projects", "Basic analytics", "Community support", "24-hour response time"],
      buttonText: "Start for free",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      description: "Everything you need to ship and scale your production apps.",
      price: "$29",
      duration: "/month",
      features: [
        "Unlimited projects",
        "Advanced real-time analytics",
        "Priority email support",
        "1-hour response time",
        "Custom domains",
      ],
      buttonText: "Get Pro",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom tailored solutions for large teams and organizations.",
      price: "Custom",
      duration: "",
      features: [
        "Unlimited everything",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom SLA",
        "On-premise deployment",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. Choose the plan that best fits your needs and scale up as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col h-full bg-background/60 backdrop-blur-sm transition-all duration-300 ${
                plan.popular ? "border-primary shadow-xl shadow-primary/10 md:scale-105 z-10" : "border-border hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1 uppercase tracking-wide font-semibold shadow-sm">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pt-8 pb-4">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="h-10">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-center mb-8">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground font-medium">{plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-base h-12" variant={plan.buttonVariant}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
