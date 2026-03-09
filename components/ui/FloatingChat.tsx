"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingChat() {
    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 2 }}
            className="fixed bottom-8 right-8 z-[100] bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-all group"
            onClick={() => alert("Chat support coming soon!")}
        >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-4 bg-bg-card border border-white/10 px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Need help? Chat with us!
            </span>
        </motion.button>
    );
}
