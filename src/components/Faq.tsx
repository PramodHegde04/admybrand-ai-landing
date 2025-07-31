// src/components/Faq.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    { q: "What is ADmyBRAND AI Suite?", a: "It's an all-in-one AI platform..." },
    { q: "Is there a free trial?", a: "Yes, we offer a 14-day free trial..." },
    { q: "What integrations do you support?", a: "We support Shopify, WooCommerce..." }
];

export function Faq() {
  return (
    <section id="faq" className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{item.q}</AccordionTrigger>
                        <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  );
}