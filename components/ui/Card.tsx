"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function Card({ children, className, delay = 0 }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn("card-base", className)}
        >
            {children}
        </motion.div>
    );
}
