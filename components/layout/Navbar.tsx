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
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <AnimatePresence>
                {/* Navbar is always docked at the top, integrating the burger menu cleanly */}
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-main/90 backdrop-blur-md flex shadow-xl border-b border-white/5 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}
                >
                    <Container className="flex items-center justify-between w-full">
                        {/* Burger Menu Button - Now perfectly aligned flush with the navbar content */}
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className={`p-2.5 sm:p-3 md:p-4 rounded-full text-white transition-all group ${isScrolled ? 'bg-white/5 hover:bg-primary' : 'bg-bg-main/50 backdrop-blur-md border border-white/10 hover:bg-primary shadow-2xl'}`}
                                aria-label="Open menu"
                            >
                                <Menu className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                            </button>

                            <h1
                                className={`text-lg sm:text-xl md:text-2xl text-white font-serif tracking-tight cursor-pointer truncate transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                The Grinders <span className="text-primary italic">Hub</span>
                            </h1>
                        </div>

                        <div className={`flex items-center gap-4 md:gap-6 shrink-0 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                            <span className="hidden xl:inline text-sm text-text-secondary font-medium italic">
                                Enrollment closing soon...
                            </span>
                            <Button
                                className="px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-[11px] sm:text-sm md:text-base h-auto whitespace-nowrap"
                                onClick={() => window.location.href = '/join'}
                            >
                                <span className="hidden sm:inline">Join Now</span>
                                <span className="sm:hidden">Join</span>
                            </Button>
                        </div>
                    </Container>
                </motion.nav>
            </AnimatePresence>
        </>
    );
}
