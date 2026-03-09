"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ArrowRight, BookOpen, PenTool, DollarSign } from "lucide-react";

const steps = [
    {
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        title: "Learn",
        description: "Expert-led courses"
    },
    {
        icon: <PenTool className="w-8 h-8 text-primary" />,
        title: "Practice",
        description: "Hands-on projects"
    },
    {
        icon: <DollarSign className="w-8 h-8 text-primary" />,
        title: "Earn",
        description: "Monetize your skill"
    }
];

export default function Philosophy() {
    return (
        <section id="philosophy" className="section-padding bg-secondary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                            What successful people <span className="text-primary italic">don't want you to know</span>
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed mb-8">
                            Here’s the hard truth: the system wasn’t designed to see you thrive. It was designed to keep 
                            you comfortable enough to stay dependent on salaries, shifting policies, and promises that 
                            rarely change anything.
                        </p>
                        <p className="text-xl text-text-secondary leading-relaxed mb-10">
                            The Grinders Club is different. It’s not just another platform, it's a reset.
                        </p>
                        <p className="text-xl text-text-secondary leading-relaxed mb-10">
                            Inside, you learn practical skills that actually generate income, get guidance from experts who’ve done it themselves, and start building real cashflow. More than money, you gain independence and governance over your direction.
                        </p>

                        <a
                            href="#features"
                            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all group"
                        >
                            See how it works <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                    className="bg-bg-main/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-primary/30 transition-all"
                                >
                                    <div className="mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-white text-xl font-bold mb-2">{step.title}</h4>
                                    <p className="text-sm text-text-secondary">{step.description}</p>
                                </motion.div>
                            ))}

                            {/* Connecting path for desktop */}
                            <div className="hidden md:block absolute top-[40%] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -z-10" />
                        </div>

                        {/* Glowing background effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
