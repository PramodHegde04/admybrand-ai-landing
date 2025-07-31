"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionDiv } from "./MotionDiv";
import { Badge } from "@/components/ui/badge";

const pricingData = [
  {
    title: "Starter",
    price: "49",
    description: "For small teams & individuals just getting started.",
    features: [
      "AI Content Generation",
      "Basic Market Analysis",
      "5 Social Media Profiles",
      "Email Support",
    ],
    isPopular: false,
  },
  {
    title: "Pro",
    price: "99",
    description: "For growing businesses that need more power and automation.",
    features: [
      "Everything in Starter",
      "Ad Spend Optimization",
      "Advanced Trend Analysis",
      "25 Social Media Profiles",
      "Priority Support",
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Dedicated Account Manager",
      "Custom Integrations",
      "API Access",
      "24/7/365 Support",
    ],
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <section id="pricing" className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Find the Perfect Plan
            </h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              Start for free, then upgrade to a plan that fits your needs. Simple, transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingData.map((tier) => (
              <Card
                key={tier.title}
                className={`flex flex-col ${tier.isPopular ? "border-primary shadow-lg shadow-primary/10" : "border-border"}`}
              >
                <CardHeader className="relative">
                  {tier.isPopular && (
                    <Badge className="absolute top-[-1rem] right-6">Most Popular</Badge>
                  )}
                  <CardTitle>{tier.title}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">
                      {typeof tier.price === 'string' && !tier.price.toLowerCase().includes('custom') ? `$${tier.price}` : tier.price}
                    </span>
                    {typeof tier.price === 'string' && !tier.price.toLowerCase().includes('custom') && (
                        <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.isPopular ? "default" : "outline"}>
                    {tier.title === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}