"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
import { Show, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:bg-primary/90 transition-colors">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">SaaSify</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Show when="signed-out">
            <Link href="/sign-in" className={buttonVariants({ variant: "ghost", className: "text-sm font-medium" })}>Log in</Link>
            <Link href="/sign-up" className={buttonVariants({ className: "text-sm font-medium" })}>Get Started</Link>
          </Show>
          <Show when="signed-in">
            <Link href="/dashboard" className={buttonVariants({ variant: "ghost", className: "text-sm font-medium" })}>Dashboard</Link>
            <div className="h-8 w-8 flex items-center justify-center">
              <UserButton />
            </div>
          </Show>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 px-0 outline-none">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col h-full mt-8">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium py-2 text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4 pb-8">
                  <Show when="signed-out">
                    <Link href="/sign-in" className={buttonVariants({ variant: "outline", className: "w-full" })}>Log in</Link>
                    <Link href="/sign-up" className={buttonVariants({ className: "w-full" })}>Get Started</Link>
                  </Show>
                  <Show when="signed-in">
                    <Link href="/dashboard" className={buttonVariants({ variant: "outline", className: "w-full" })}>Dashboard</Link>
                    <div className="flex justify-center mt-2">
                      <UserButton />
                    </div>
                  </Show>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
