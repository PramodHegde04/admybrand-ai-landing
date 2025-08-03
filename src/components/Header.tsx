// src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Bot, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

// An array to hold navigation link data for easier mapping
const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">ADmyBRAND AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* CTA Button for Desktop */}
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="#pricing">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-6 p-6">
                  {/* Mobile Logo */}
                  <Link href="/" className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-primary" />
                    <span className="font-bold">ADmyBRAND AI</span>
                  </Link>
                  {/* Mobile Nav Links */}
                  <nav className="grid gap-4">
                    {navLinks.map((link) => (
                      <SheetClose key={link.label} asChild>
                         <Link
                           href={link.href}
                           className="text-lg font-medium"
                         >
                           {link.label}
                         </Link>
                      </SheetClose>
                    ))}
                  </nav>
                   {/* Mobile CTA Button */}
                  <SheetClose asChild>
                     <Button asChild>
                       <Link href="#pricing">Get Started</Link>
                     </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}