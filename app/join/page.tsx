import Pricing from "@/components/sections/Pricing";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Join The Grinders Hub | Lock In Your Rate",
    description: "Choose the plan that fits your grind. Get full access to all skill tracks, mentorship, and the private community.",
};

export default function JoinPage() {
    return (
        <main className="min-h-screen flex flex-col" style={{ background: "#000000" }}>
            {/* Top Nav */}
            <div className="w-full px-6 py-6 flex items-center" style={{ background: "#000000" }}>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm font-bold text-white/60 hover:text-primary transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            {/* Decorative top accent */}
            {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" /> */}

            {/* Logo */}
            <div className="flex justify-center mt-4 mb-0">
                <img
                    src="/photo_2026-02-28_07-57-54.jpg"
                    alt="The Grinders Hub"
                    className="h-20 w-auto object-contain drop-shadow-[0_0_18px_rgba(204,85,0,0.3)]"
                />
            </div>

            {/* Pricing Section — no top padding so logo sits close to heading */}
            <div className="[&_section]:pt-4">
                <Pricing />
            </div>

            {/* Footer note */}
            <div className="text-center py-8 text-xs text-text-secondary/40 italic">
                © {new Date().getFullYear()} The Grinders Hub. All rights reserved.
            </div>
        </main>
    );
}
