import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Sarah Jenkins",
    handle: "@sjenkins",
    role: "CTO, NextScale",
    content: "SaaSify has completely transformed our infrastructure. We were able to cut our server costs by 40% while improving response times globally.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Michael Chen",
    handle: "@mchen_dev",
    role: "Lead Engineer",
    content: "The easiest deployment pipeline I've ever used. Their CLI is incredibly intuitive, and the documentation is top-notch. Highly recommended for any serious dev team.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Elena Rodriguez",
    handle: "@erod_design",
    role: "Product Designer",
    content: "Not only is the backend robust, but the dashboard UI is gorgeous. It gives our whole team exactly what they need to manage users without friction.",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    name: "David Smith",
    handle: "@dsmith_cloud",
    role: "DevOps Architect",
    content: "I've tried almost every PaaS out there. SaaSify is the first one that perfectly hits the sweet spot between developer experience and enterprise-grade control.",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    name: "Aisha Patel",
    handle: "@apatel_tech",
    role: "Startup Founder",
    content: "We launched our MVP on SaaSify. The built-in analytics and free tier practically kept our startup alive during the first 6 months. Unbeatable value.",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Loved by builders everywhere
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. See what top engineers and founders are saying about SaaSify.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Gradient Masks for smooth fading on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex w-[200%] sm:w-[150%] md:w-[120%] lg:w-[100%] gap-4 animate-marquee py-4">
            {[...reviews, ...reviews].map((review, idx) => (
              <Card
                key={idx}
                className="w-[300px] md:w-[350px] shrink-0 bg-background/60 shadow-md border-border"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm leading-none">{review.name}</span>
                    <span className="text-sm text-muted-foreground">{review.handle}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    "{review.content}"
                  </p>
                </CardContent>
                <CardFooter className="pt-2">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {review.role}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Reverse Marquee */}
          <div className="flex w-[200%] sm:w-[150%] md:w-[120%] lg:w-[100%] gap-4 animate-marquee-reverse py-4 mt-4">
            {[...reviews, ...reviews].reverse().map((review, idx) => (
              <Card
                key={`rev-${idx}`}
                className="w-[300px] md:w-[350px] shrink-0 bg-background/60 shadow-md border-border"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm leading-none">{review.name}</span>
                    <span className="text-sm text-muted-foreground">{review.handle}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    "{review.content}"
                  </p>
                </CardContent>
                <CardFooter className="pt-2">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {review.role}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
