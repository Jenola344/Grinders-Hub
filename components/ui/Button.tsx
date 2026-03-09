"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
    const baseStyles = variant === "primary" ? "btn-primary" : "btn-secondary";

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, className)}
            {...(props as any)}
        >
            {children}
        </motion.button>
    );
}
