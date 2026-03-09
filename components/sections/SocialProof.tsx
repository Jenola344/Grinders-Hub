"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
    {
        name: "Alex",
        age: 24,
        achievement: "I landed my first freelance client in 3 weeks using the Copywriting track.",
        stat: "+$5k/mo",
        image: "https://i.pravatar.cc/150?u=alex"
    },
    {
        name: "Sarah",
        age: 29,
        achievement: "The AI Automation course changed how I work. I saved 20 hours a week.",
        stat: "Saved 20h/wk",
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "David",
        age: 22,
        achievement: "Built a drop-shipping store from scratch. Hit $2k revenue in month one.",
        stat: "$2k Rev",
        image: "https://i.pravatar.cc/150?u=david"
    },
    {
        name: "Elena",
        age: 26,
        achievement: "The mentorship here is insane. Finally broke through my income plateau.",
        stat: "2x Income",
        image: "https://i.pravatar.cc/150?u=elena"
    },
    {
        name: "Jordan",
        age: 31,
        achievement: "The community keeps you accountable. Best investment I've made in years.",
        stat: "Promoted",
        image: "https://i.pravatar.cc/150?u=jordan"
    },
    {
        name: "Maya",
        age: 25,
        achievement: "From zero to building simple apps. The technical writing track is gold.",
        stat: "+$3k/mo",
        image: "https://i.pravatar.cc/150?u=maya"
    }
];

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const stepTime = 50;
            const increment = end / (duration / stepTime);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function SocialProof() {
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        loop: true,
        skipSnaps: false,
        dragFree: true
    });

    return (
        <section id="results" className="section-padding bg-bg-main overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl mb-4">Real People. Real Results.</h2>
                        <p className="text-xl">
                            Join <span className="text-primary font-bold"><Counter value={1000} suffix="+" /></span> grinders who are already leveling up.
                        </p>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_31%] min-w-0">
                                <div className="card-base h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-primary/20" />
                                            <div>
                                                <h4 className="text-white text-lg font-bold">{t.name}, {t.age}</h4>
                                                <div className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded uppercase tracking-wider">
                                                    Verified Grinder
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-white italic leading-relaxed mb-6">
                                            "{t.achievement}"
                                        </p>
                                    </div>

                                    {t.stat && (
                                        <div className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg inline-block self-start">
                                            {t.stat}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center gap-2">
                    {/* Navigation dots could be added here */}
                </div>
            </Container>
        </section>
    );
}
