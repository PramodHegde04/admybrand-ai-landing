"use client"; // Required for Framer Motion components

import { BarChart, Bot, FileText, ShoppingCart, Target, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MotionDiv } from "@/components/MotionDiv";

// An array holding the data for our feature cards
const featureData = [
  { 
    icon: <BarChart className="h-6 w-6" />, 
    title: "Market Trend Analysis", 
    description: "Leverage predictive analytics to forecast market shifts with over 95% accuracy and stay ahead of the curve." 
  },
  { 
    icon: <Target className="h-6 w-6" />, 
    title: "Ad Spend Optimization", 
    description: "Our AI algorithm analyzes your campaign performance in real-time to maximize ROI by allocating your budget intelligently." 
  },
  { 
    icon: <Bot className="h-6 w-6" />, 
    title: "AI Content Generation", 
    description: "Go from idea to publication in minutes. Create compelling, high-converting copy for ads, emails, and social media." 
  },
  { 
    icon: <TrendingUp className="h-6 w-6" />, 
    title: "Performance Tracking", 
    description: "Monitor your key marketing metrics with our beautiful, intuitive dashboard. See what works and what doesn't, instantly." 
  },
  { 
    icon: <ShoppingCart className="h-6 w-6" />, 
    title: "E-commerce Integration", 
    description: "Sync with Shopify, WooCommerce, and other major platforms seamlessly to track sales and attribute revenue correctly." 
  },
  { 
    icon: <FileText className="h-6 w-6" />, 
    title: "Automated Reporting", 
    description: "Receive beautiful, insightful reports delivered directly to your inbox daily, weekly, or monthly." 
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            Unlock a suite of powerful, AI-driven features designed to give you an unfair advantage in the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-secondary/40 border-primary/20 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}