"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Menu,
    Home,
    Users,
    Zap,
    GraduationCap,
    Star,
    CreditCard,
    HelpCircle,
    ChevronRight
} from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { name: "Home", icon: <Home className="w-5 h-5" />, href: "#" },
    { name: "Student Results", icon: <Users className="w-5 h-5" />, href: "#results" },
    { name: "Our Philosophy", icon: <Zap className="w-5 h-5" />, href: "#philosophy" },
    { name: "Course Structure", icon: <GraduationCap className="w-5 h-5" />, href: "#curriculum", hasChevron: true },
    { name: "Key Features", icon: <Star className="w-5 h-5" />, href: "#features" },
    { name: "Pricing", icon: <CreditCard className="w-5 h-5" />, href: "/join" },
    { name: "FAQ", icon: <HelpCircle className="w-5 h-5" />, href: "#faq" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/")) {
            // Let normal Next.js Link or ahref navigation handle it. We just close the menu.
            onClose();
            return;
        }

        e.preventDefault();
        onClose();

        if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 left-0 h-full w-[280px] bg-[#05070A] z-[101] shadow-2xl border-r border-white/5 flex flex-col"
                    >
                        {/* Top Bar Accent */}
                        <div className="h-1 w-full bg-gradient-to-r from-blue-900 via-primary/50 to-blue-900" />

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <Menu className="w-5 h-5 text-white/50" />
                                <span className="text-white font-bold tracking-[0.2em] text-[11px] uppercase">Menu</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-white/5 rounded-md transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5 text-white/50 hover:text-white" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col overflow-y-auto">
                            {menuItems.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                    className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.03] transition-all group border-b border-white/[0.05]"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="text-white/40 group-hover:text-primary transition-colors">
                                            {item.icon}
                                        </span>
                                        <span className="text-[15px] font-bold text-white/90 group-hover:text-white transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                    {item.hasChevron && (
                                        <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-primary transition-colors" />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-auto p-6 bg-gradient-to-t from-black to-transparent">
                            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                                <p className="text-[9px] text-text-secondary uppercase tracking-[0.2em] mb-1 font-bold">Grinders Hub Status</p>
                                <p className="text-white font-bold text-sm">Join the Elite Community</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
