"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Video,
    Globe,
    Layers
} from "lucide-react";

const features = [
    {
        icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
        title: "Step‑by‑Step Curriculum",
        description: "Bite‑sized lessons, real projects. No fluff, just what you need to master the skill."
    },
    {
        icon: <Video className="w-10 h-10 text-primary" />,
        title: "Live Mentorship",
        description: "Weekly Q&A with industry pros who've been where you are and built what you want."
    },
    {
        icon: <Globe className="w-10 h-10 text-primary" />,
        title: "The Grinders Network",
        description: "Private community. Accountability threads. Daily job and collaboration opportunities."
    },
    {
        icon: <Layers className="w-10 h-10 text-primary" />,
        title: "Portfolio Builder",
        description: "Show, don't just tell. Complete real‑world projects that prove you can deliver results."
    }
];

export default function Features() {
    return (
        <section id="features" className="section-padding bg-bg-main">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl"
                    >
                        Everything you need to <span className="text-primary italic">succeed.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-bg-card border border-white/5 hover:border-primary/20 transition-all flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                            <p className="text-text-secondary">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
