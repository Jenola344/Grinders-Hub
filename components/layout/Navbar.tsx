"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Burger Menu Button (Persistent for easier access) */}
            <div className="fixed top-6 left-6 z-[60] md:top-8 md:left-8">
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="p-4 bg-bg-main/50 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-primary transition-all group shadow-2xl"
                    aria-label="Open menu"
                >
                    <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
            </div>

            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <AnimatePresence>
                {isScrolled && (
                    <motion.nav
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        className="fixed top-0 left-0 w-full z-50 bg-bg-main/80 backdrop-blur-md border-b border-white/5 py-4"
                    >
                        <Container className="flex items-center justify-between pl-[4.5rem] md:pl-[5.5rem] lg:pl-8">
                            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-serif tracking-tight cursor-pointer truncate mr-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                The Grinders <span className="text-primary italic">Hub</span>
                            </h1>
                            <div className="flex items-center gap-4 md:gap-6 shrink-0">
                                <span className="hidden xl:inline text-sm text-text-secondary font-medium italic">
                                    Enrollment closing soon...
                                </span>
                                <Button
                                    className="px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base h-auto whitespace-nowrap"
                                    onClick={() => window.location.href = '/join'}
                                >
                                    <span className="hidden sm:inline">Join Now</span>
                                    <span className="sm:hidden">Join</span>
                                </Button>
                            </div>
                        </Container>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}
