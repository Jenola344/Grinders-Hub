"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const perks = [
        "Full access to ALL skill tracks",
        "Private Grinders community",
        "Weekly live group mentorship",
        "Real-world project templates",
        "Job board & gig opportunities",
        "Resume & portfolio reviews"
    ];

    return (
        <section id="pricing" className="section-padding relative overflow-hidden" style={{ background: "#000000" }}>
            {/* Decorative elements */}
            {/* <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" /> */}

            <Container className="relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl mb-6"
                    >
                        Invest in yourself. <span className="text-primary italic">Lock in your rate.</span>
                    </motion.h2>

                    {/* Billing Toggle */}
                    <div className="flex flex-col items-center gap-6 mb-8">
                        <div className="flex items-center justify-center gap-4">
                            <span className={billingCycle === "monthly" ? "text-white font-bold" : "text-text-secondary"}>Monthly</span>
                            <button
                                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                                className="w-16 h-8 bg-bg-main rounded-full relative p-1 transition-colors border border-white/10"
                            >
                                <motion.div
                                    animate={{ x: billingCycle === "monthly" ? 0 : 32 }}
                                    className="w-6 h-6 bg-primary rounded-full shadow-lg"
                                />
                            </button>
                            <span className={billingCycle === "yearly" ? "text-white font-bold" : "text-text-secondary"}>
                                Yearly <span className="text-primary text-sm font-bold ml-1">(Save 30%)</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[2rem] p-6 sm:p-8 md:p-12 border border-primary/20 shadow-2xl relative"
                        style={{
                            background: "radial-gradient(ellipse at 50% 0%, rgba(204,85,0,0.12) 0%, rgba(15,10,5,0.98) 60%, #0a0602 100%)",
                            boxShadow: "0 0 60px rgba(204,85,0,0.08), 0 0 120px rgba(204,85,0,0.04), inset 0 1px 0 rgba(255,255,255,0.05)",
                            border: "1px solid rgba(204,85,0,0.2)"
                        }}
                    >
                        <div className="absolute top-0 right-4 sm:right-8 md:right-12 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                            Most Popular
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">The Grinder's Pass</h3>
                                <p className="text-text-secondary">Everything you need to go from zero to earning.</p>
                            </div>
                            <div className="text-left md:text-right">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={billingCycle}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex items-end gap-1 md:justify-end"
                                    >
                                        <span className="text-5xl font-bold text-white">
                                            {billingCycle === "monthly" ? "$49" : "$399"}
                                        </span>
                                        <span className="text-text-secondary mb-2">
                                            /{billingCycle === "monthly" ? "month" : "year"}
                                        </span>
                                    </motion.div>
                                </AnimatePresence>
                                {billingCycle === "yearly" && (
                                    <p className="text-primary text-sm font-bold">Only $33/month billed annually</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {perks.map((perk, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1 p-0.5 bg-primary/20 text-primary rounded-full">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-white/90">{perk}</span>
                                </div>
                            ))}
                        </div>


                        <Button className="w-full text-xl py-6 mb-6">
                            Join The Grinders Hub
                        </Button>

                        <div className="text-center">
                            <p className="text-sm text-text-secondary mb-2">
                                <span className="text-white font-bold">30‑day money‑back guarantee.</span> No questions asked.
                            </p>
                            <p className="text-xs text-text-secondary/60 italic">Cancel anytime. Your growth is our priority.</p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
