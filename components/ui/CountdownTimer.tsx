"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

    useEffect(() => {
        // Set target to exactly 6 days, 23 hours, 56 mins, 40 secs from now as per the screenshot
        const target = new Date();
        target.setDate(target.getDate() + 6);
        target.setHours(target.getHours() + 23);
        target.setMinutes(target.getMinutes() + 56);
        target.setSeconds(target.getSeconds() + 40);

        const timer = setInterval(() => {
            const now = new Date();
            const diff = target.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft(null);
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) return null;

    const TimeBlock = ({ value, label }: { value: number, label: string }) => (
        <div className="flex flex-col items-center gap-1.5">
            <div className="bg-[#1A0D05] border border-primary/30 rounded-lg w-12 h-12 flex items-center justify-center shadow-inner group">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={value}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="text-primary font-bold text-lg font-mono"
                    >
                        {value.toString().padStart(2, '0')}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-text-secondary/60">{label}</span>
        </div>
    );

    return (
        <div className="flex items-start gap-2.5">
            <TimeBlock value={timeLeft.days} label="Days" />
            <span className="text-primary/40 font-bold mt-3.5">:</span>
            <TimeBlock value={timeLeft.hours} label="Hrs" />
            <span className="text-primary/40 font-bold mt-3.5">:</span>
            <TimeBlock value={timeLeft.minutes} label="Min" />
            <span className="text-primary/40 font-bold mt-3.5">:</span>
            <TimeBlock value={timeLeft.seconds} label="Sec" />
        </div>
    );
}
