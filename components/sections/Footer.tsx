"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Send
} from "lucide-react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("loading");
        // Mock API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <footer className="bg-bg-main border-t border-white/5 pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-4">Get free skill tips every week</h3>
                        <p className="text-text-secondary mb-8 max-w-md">
                            Join 12,000+ subscribers getting actionable advice on AI, copywriting, and freelancing directly in their inbox.
                        </p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 sm:gap-2 max-w-md">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-grow w-full bg-bg-card border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                            <Button type="submit" disabled={status === "loading"} className="px-6 flex w-full sm:w-auto items-center justify-center min-w-[120px]">
                                {status === "loading" ? "..." : status === "success" ? "Subscribed!" : "Subscribe"}
                            </Button>
                        </form>
                        {status === "success" && (
                            <p className="mt-4 text-primary font-bold animate-pulse text-sm">
                                Welcome to the hub! Check your inbox soon.
                            </p>
                        )}
                    </div>

                    {/* Links & Brand */}
                    <div className="flex flex-col md:flex-row justify-between gap-12">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-6 font-serif">The Grinders Hub</h4>
                            <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-[240px]">
                                Empowering the next generation of digital entrepreneurs.
                                Learn. Practice. Earn.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all text-text-secondary">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all text-text-secondary">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all text-text-secondary">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all text-text-secondary">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <h5 className="text-white font-bold mb-6">Company</h5>
                                <ul className="space-y-4 text-sm text-text-secondary">
                                    <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                                    <li><a href="mailto:hello@thegrindershub.com" className="hover:text-primary transition-colors">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white font-bold mb-6">Explore</h5>
                                <ul className="space-y-4 text-sm text-text-secondary">
                                    <li><a href="#curriculum" className="hover:text-primary transition-colors">Courses</a></li>
                                    <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                                    <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-text-secondary/60">
                        © 2025 The Grinders Hub. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-text-secondary/40 font-mono">
                        <span>Powered by</span>
                        <span className="text-text-secondary/60 font-bold uppercase tracking-widest">Growth Engine</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
