"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { MoveRight, Check, BarChart, Bot, FileText, ShoppingCart, Target, TrendingUp, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Helper component for animations
const MotionDiv = motion.div;

// --- Data for Components ---

const featureData = [
  { icon: <BarChart className="h-6 w-6" />, title: "Market Trend Analysis", description: "Leverage predictive analytics to forecast market shifts with over 95% accuracy." },
  { icon: <Target className="h-6 w-6" />, title: "Ad Spend Optimization", description: "Our AI algorithm analyzes your campaign performance in real-time to maximize ROI." },
  { icon: <Bot className="h-6 w-6" />, title: "AI Content Generation", description: "Go from idea to publication in minutes. Create compelling, high-converting copy." },
  { icon: <TrendingUp className="h-6 w-6" />, title: "Performance Tracking", description: "Monitor your key marketing metrics with our beautiful, intuitive dashboard." },
  { icon: <ShoppingCart className="h-6 w-6" />, title: "E-commerce Integration", description: "Sync with Shopify, WooCommerce, and more to attribute revenue correctly." },
  { icon: <FileText className="h-6 w-6" />, title: "Automated Reporting", description: "Receive beautiful, insightful reports delivered directly to your inbox." },
];

const testimonialData = [
  { name: "Sarah L.", company: "CEO, TechBloom", quote: "This tool cut our marketing analysis time by 90%. An absolute game-changer.", avatar: "/avatars/sarah.png" },
  { name: "Mike R.", company: "Founder, Creative Co.", quote: "The AI content generation is scarily good. Our engagement rates have doubled.", avatar: "/avatars/mike.png" },
  { name: "Jessica B.", company: "CMO, StartupX", quote: "I finally have a clear view of my ad spend ROI. I don&apos;t know how we operated without it.", avatar: "/avatars/jessica.png" },
  { name: "David Chen", company: "E-commerce Manager", quote: "The e-commerce integration was seamless. We saw a 15% increase in attributable revenue.", avatar: "/avatars/david.png" }
];

const faqData = [
  { q: "What is ADmyBRAND AI Suite?", a: "It&apos;s an all-in-one marketing platform that uses AI for market analysis, ad optimization, content generation, and performance tracking." },
  { q: "Is there a free trial?", a: "Yes, we offer a 14-day free trial on our Pro plan. No credit card is required to get started." },
  { q: "What integrations do you support?", a: "We support major e-commerce platforms like Shopify, social media platforms like Facebook, and analytics tools like Google Analytics." },
  { q: "Can I cancel my subscription at any time?", a: "Absolutely. You can cancel your subscription at any time from your account dashboard with no hidden fees." },
];

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// --- Section Components ---

const Features = () => (
  <MotionDiv initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Everything You Need, Nothing You Don&apos;t</h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">Unlock a suite of powerful, AI-driven features designed to give you an unfair advantage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <MotionDiv key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className="bg-secondary/40 border-primary/20 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">{feature.icon}</div>
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
  </MotionDiv>
);

const Testimonials = () => (
    <MotionDiv initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="w-full bg-secondary/30">
        <section id="testimonials" className="w-full py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Loved by Marketers Worldwide</h2>
                    <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what our customers say.</p>
                </div>
                <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
                    <CarouselContent>
                        {testimonialData.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-2 h-full">
                                    <Card className="bg-background/50 h-full flex flex-col">
                                        <CardContent className="flex flex-col items-center text-center justify-center p-6 flex-grow">
                                            <Image src={testimonial.avatar} alt={testimonial.name} width={72} height={72} className="rounded-full mb-4 border-2 border-primary/50" onError={(e) => { e.currentTarget.src = 'https://placehold.co/72x72/27272a/a1a1aa?text=A'; }} />
                                            <p className="italic text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                                            <p className="font-bold mt-4">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    </MotionDiv>
);

const Pricing = () => {
    const [contacts, setContacts] = useState(10000);
    type PricingTier = {
        title: string;
        basePrice?: number;
        perContact?: number;
        price?: string;
        description: string;
        features: string[];
        isPopular: boolean;
    };

    const pricingData: PricingTier[] = [
        { title: "Starter", basePrice: 29, perContact: 0.002, description: "For small teams & individuals.", features: ["AI Content Generation", "Basic Market Analysis", "5 Social Profiles", "Email Support"], isPopular: false },
        { title: "Pro", basePrice: 79, perContact: 0.002, description: "For growing businesses.", features: ["Everything in Starter", "Ad Spend Optimization", "Advanced Trend Analysis", "25 Social Profiles", "Priority Support"], isPopular: true },
        { title: "Enterprise", price: "Custom", description: "For large organizations.", features: ["Everything in Pro", "Dedicated Account Manager", "Custom Integrations", "API Access", "24/7/365 Support"], isPopular: false },
    ];
    const calculatePrice = (tier: PricingTier) => {
        if (tier.price === "Custom") return "Custom";
        const total = (tier.basePrice ?? 0) + (contacts * (tier.perContact ?? 0));
        return Math.round(total);
    };

    return (
        <MotionDiv initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <section id="pricing" className="w-full py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Find the Perfect Plan</h2>
                        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">Simple, transparent pricing that scales with you. No hidden fees.</p>
                    </div>
                    <div className="max-w-2xl mx-auto mb-12">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold">Number of Contacts</h3>
                            <div className="text-2xl font-bold text-primary">{contacts.toLocaleString()}</div>
                        </div>
                        <Slider defaultValue={[10000]} value={[contacts]} min={1000} max={100000} step={1000} onValueChange={(value) => setContacts(value[0])} />
                         <div className="flex justify-between text-xs text-muted-foreground mt-2">
                            <span>1,000</span>
                            <span>100,000</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pricingData.map((tier) => (
                            <Card key={tier.title} className={`flex flex-col ${tier.isPopular ? "border-primary shadow-lg shadow-primary/10" : "border-border"}`}>
                                <CardHeader className="relative">
                                    {tier.isPopular && <Badge className="absolute top-[-1rem] right-6">Most Popular</Badge>}
                                    <CardTitle>{tier.title}</CardTitle>
                                    <CardDescription>{tier.description}</CardDescription>
                                    <div className="pt-4">
                                        <span className="text-4xl font-bold">{tier.price === 'Custom' ? 'Custom' : `$${calculatePrice(tier)}`}</span>
                                        {tier.price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-3">
                                        {tier.features.map((feature) => (<li key={feature} className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /><span>{feature}</span></li>))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" variant={tier.isPopular ? "default" : "outline"}>{tier.title === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </MotionDiv>
    );
};

const Faq = () => (
    <MotionDiv initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <section id="faq" className="w-full py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                    <p className="text-lg text-muted-foreground mt-3">Have questions? We have answers. If you can&apos;t find what you&apos;re looking for, contact us.</p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    </MotionDiv>
);

const ContactForm = () => {
    const form = useForm<z.infer<typeof contactFormSchema>>({ resolver: zodResolver(contactFormSchema), defaultValues: { name: "", email: "", message: "" } });
    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        console.log("Form Submitted!", values);
        alert("Thank you for your message! We'll be in touch soon.");
        form.reset();
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => (<FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="message" render={({ field }) => (<FormItem><FormLabel>Your Message</FormLabel><FormControl><Textarea placeholder="Tell us how we can help you..." className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <Button type="submit" className="w-full">Send Message</Button>
            </form>
        </Form>
    );
};

const Footer = () => (
    <footer className="w-full bg-background border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                <div className="col-span-2 lg:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-4"><Bot className="h-6 w-6 text-primary" /><span className="font-bold text-lg">ADmyBRAND AI</span></Link>
                    <p className="text-sm text-muted-foreground">Supercharging marketing with AI.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Product</h4>
                    <ul className="space-y-2">
                        <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
                        <li><Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
                        <li><Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary">Testimonials</Link></li>
                        <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                        <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                        <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                        <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Github /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} ADmyBRAND AI Suite. All rights reserved.</p>
            </div>
        </div>
    </footer>
);


// --- Main Page Component ---

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      
      {/* Hero Section */}
      <MotionDiv initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Supercharge Your Marketing with AI
                </h1>
                <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
                  ADmyBRAND AI Suite analyzes market trends, optimizes ad spend, and generates high-converting content. Stop guessing, start growing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="shadow-lg shadow-primary/20">Get Started for Free <MoveRight className="ml-2 h-5 w-5" /></Button>
                  <Button size="lg" variant="outline">Request a Demo</Button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                >
                  <Image
                    src="/hero-visual.jpg"
                    alt="AI visualizing market trends, ad optimization, and content generation"
                    width={480}
                    height={480}
                    className="rounded-2xl shadow-2xl shadow-purple-500/20"
                    priority
                  />
                </MotionDiv>
              </div>
            </div>
          </div>
        </section>
      </MotionDiv>

      <Features />
      <Testimonials />
      <Pricing />
      <Faq />

      {/* Final CTA & Contact Section */}
       <MotionDiv initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full">
        <section className="w-full py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Your Marketing?</h2>
            <p className="text-lg text-muted-foreground mb-8">Let&apos;s get in touch. Fill out the form below and one of our experts will contact you shortly.</p>
            <div className="max-w-xl mx-auto text-left">
              <ContactForm />
            </div>
          </div>
        </section>
      </MotionDiv>

      <Footer />
      
    </main>
  );
}