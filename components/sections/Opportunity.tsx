"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Users } from "lucide-react";

const reasons = [
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: "First‑mover advantage",
        description: "The AI revolution is just beginning. Get ahead while others wait. Early adopters capture the market share."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
        title: "Compound learning",
        description: "Skills stack. Start today, and you'll be earning while others are still planning. Your future self will thank you."
    },
    {
        icon: <Users className="w-10 h-10 text-primary" />,
        title: "Community momentum",
        description: "Learn faster with peers who push you. Accountability is the secret sauce to finishing what you start."
    }
];

export default function Opportunity() {
    return (
        <section className="section-padding bg-bg-main">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl"
                    >
                        Why start <span className="text-primary italic">now?</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="text-center md:text-left group"
                        >
                            <div className="mb-6 flex justify-center md:justify-start">
                                <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    {reason.icon}
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">{reason.title}</h4>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button
                        className="text-lg px-12"
                        onClick={() => window.location.href = '/join'}
                    >
                        Claim your spot
                    </Button>
                </div>
            </Container>
        </section>
    );
}
