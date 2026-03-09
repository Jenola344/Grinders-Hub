"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";

const faqs = [
    {
        question: "I have no experience. Is that a problem?",
        answer: "Not at all. Our tracks start from absolute basics and guide you step by step. We assume you're starting from zero and build your skills progressively."
    },
    {
        question: "I have a full‑time job – can I still learn?",
        answer: "Yes! Lessons are bite‑sized and designed to fit into 30 minutes a day. You can learn at your own pace whenever you have a gap in your schedule."
    },
    {
        question: "Will this actually help me get a job or clients?",
        answer: "We focus on skills that are in high demand right now. Many students land freelance gigs or promotions within months by applying the exact systems we teach."
    },
    {
        question: "Is the community active?",
        answer: "Absolutely. Daily discussions, accountability threads, and live events keep everyone engaged. You're never alone on this journey."
    },
    {
        question: "Can I access the community before joining?",
        answer: "Yes! Join our free Telegram group for updates and sneak peeks. It's a great way to see what we're about before committing to a pass."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="section-padding bg-bg-main">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl"
                    >
                        Still thinking? <span className="text-primary italic">Frequently Asked Questions</span>
                    </motion.h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-white/5 rounded-2xl overflow-hidden bg-bg-card/50"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-xl font-bold text-white">{faq.question}</span>
                                <ChevronDown
                                    className={`w-6 h-6 text-primary transition-transform duration-300 ${activeIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-white/5 mt-0">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-text-secondary mb-6">Didn't find what you're looking for?</p>
                    <button className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors">
                        <MessageSquare className="w-5 h-5 text-primary" /> Chat with our support team
                    </button>
                </div>
            </Container>
        </section>
    );
}
