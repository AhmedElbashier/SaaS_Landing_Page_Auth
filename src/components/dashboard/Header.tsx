"use client";

import { Bell, Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function Header() {
  return (
    <header className="flex h-16 items-center border-b bg-card/50 px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-2 md:hidden">
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 px-0 outline-none">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 border-r w-64">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex ml-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Overview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="relative w-full max-w-sm hidden sm:flex">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="w-full bg-background pl-8 sm:w-[300px] border-muted-foreground/20 rounded-full"
          />
        </div>
        <ThemeToggle />
        <Button variant="outline" size="icon" className="rounded-full relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-background" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <Button className="hidden md:flex rounded-full">Create New Project</Button>
      </div>
    </header>
  );
}
