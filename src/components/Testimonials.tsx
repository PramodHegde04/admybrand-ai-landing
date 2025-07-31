"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MotionDiv } from "./MotionDiv";

const testimonialData = [
  { 
    name: "Sarah L.", 
    company: "CEO, TechBloom", 
    quote: "This tool cut our marketing analysis time by 90%. An absolute game-changer for our team.", 
    avatar: "/avatars/sarah.png" // Placeholder path
  },
  { 
    name: "Mike R.", 
    company: "Founder, Creative Co.", 
    quote: "The AI content generation is scarily good. Our engagement rates have doubled since we started using it.", 
    avatar: "/avatars/mike.png" // Placeholder path
  },
  { 
    name: "Jessica B.", 
    company: "CMO, StartupX", 
    quote: "I finally have a clear view of my ad spend ROI across all channels. I don't know how we operated without it.", 
    avatar: "/avatars/jessica.png" // Placeholder path
  },
    { 
    name: "David Chen", 
    company: "E-commerce Manager", 
    quote: "The e-commerce integration was seamless. We saw a 15% increase in attributable revenue in the first month.", 
    avatar: "/avatars/david.png" // Placeholder path
  }
];

export function Testimonials() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-secondary/30"
    >
      <section id="testimonials" className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Loved by Marketers Worldwide</h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers say about their success.
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonialData.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="bg-background/50 h-full flex flex-col">
                      <CardContent className="flex flex-col items-center text-center justify-center p-6 flex-grow">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          width={72} 
                          height={72} 
                          className="rounded-full mb-4 border-2 border-primary/50"
                          onError={(e) => { e.currentTarget.src = 'https://placehold.co/72x72/27272a/a1a1aa?text=A'; }} // Fallback
                        />
                        <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
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
}