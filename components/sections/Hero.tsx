"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { GraduationCap, TrendingUp, Users, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const pillFeatures = [
    {
        label: "Elite-level",
        title: "Education",
        icon: <GraduationCap className="w-7 h-7 text-white" />,
    },
    {
        label: "Scale YOUR INCOME From Zero",
        title: "to $5K monthly",
        icon: <TrendingUp className="w-7 h-7 text-white" />,
    },
    {
        label: "1V1 coaching",
        title: "From Experts",
        icon: <Users className="w-7 h-7 text-white" />,
    },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % pillFeatures.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center pt-24 pb-16 md:pt-32 md:pb-24">
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <div
                    className="absolute inset-0 w-full h-full scale-105"
                    style={{
                        backgroundImage: "url('/hero-bg.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/30 via-black/70 to-bg-main" />
            </div>

            <Container className="relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto w-full"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="flex justify-center mb-6"
                    >
                        <img
                            src="/photo_2026-02-28_07-57-54.png"
                            alt="The Grinders Hub Logo"
                            className="h-24 md:h-32 w-auto object-contain"
                        />
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 sm:mb-6 leading-[1.05]">
                        THE GRINDERS <span className="text-primary">HUB</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                        Learn skills that pay. Join a community that builds. <br className="hidden md:block" />
                        <span className="text-white">Empowering ambitious individuals to gain in demand digital skills.</span>
                    </p>

                    <div className="flex flex-col items-center gap-10">

                        {/* 3-Pill Feature Row — above the video */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
                        >
                            {pillFeatures.map((feat, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <div key={i} className="flex items-center gap-3">
                                        {/* Feature Pill */}
                                        <div
                                            className="flex items-center gap-4 px-5 py-3 rounded-full border"
                                            style={{
                                                background: "rgba(10, 15, 30, 0.85)",
                                                boxShadow: isActive
                                                    ? "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(200,100,28,0.3)"
                                                    : "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.4)",
                                                borderColor: isActive ? "rgba(200,100,28,0.5)" : "rgba(255,255,255,0.10)",
                                                transition: "box-shadow 0.4s ease, border-color 0.4s ease",
                                            }}
                                        >
                                            {/* Icon Circle */}
                                            <div
                                                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                                                style={{
                                                    background: isActive
                                                        ? "linear-gradient(135deg, #C8641C 0%, #E07030 100%)"
                                                        : "rgba(204, 85, 0, 0.18)",
                                                    border: isActive
                                                        ? "1px solid rgba(200,100,28,0.7)"
                                                        : "1px solid rgba(204, 85, 0, 0.4)",
                                                    boxShadow: isActive
                                                        ? "0 0 18px rgba(200,100,28,0.65), 0 0 36px rgba(200,100,28,0.25)"
                                                        : "0 0 12px rgba(204,85,0,0.3)",
                                                    transition: "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
                                                }}
                                            >
                                                {feat.icon}
                                            </div>
                                            {/* Text */}
                                            <div className="text-left">
                                                <p
                                                    className="text-[10px] uppercase tracking-[0.18em] font-bold leading-none mb-1"
                                                    style={{
                                                        color: isActive ? "#C8641C" : "rgba(255,255,255,0.4)",
                                                        transition: "color 0.4s ease",
                                                    }}
                                                >
                                                    {feat.label}
                                                </p>
                                                <p
                                                    className="font-bold text-[17px] leading-tight"
                                                    style={{
                                                        color: isActive ? "#E07030" : "#ffffff",
                                                        transition: "color 0.4s ease",
                                                    }}
                                                >
                                                    {feat.title}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Arrow connector */}
                                        {i < pillFeatures.length - 1 && (
                                            <ArrowRight className="w-5 h-5 text-white/20 shrink-0 hidden sm:block" />
                                        )}
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Introduction Video Display */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="w-full max-w-3xl aspect-video bg-bg-card rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 group relative"
                        >
                            <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white font-serif italic text-lg text-left ml-2">Introduction to The Grinders Hub</p>
                            </div>
                            {/* <iframe
                                className="w-full h-full relative z-0"
                                src="https://www.youtube.com/embed/LUp6sliicGw?si=xblLssIFdlzjP2ML"
                                title="Introduction to The Grinders Hub"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            /> */}
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/video_2026-03-09_20-05-33.mp4" type="video/mp4" />
                            </video>

                            {/* Standardized React Toggle Button */}
                            <button
                                onClick={toggleVideo}
                                className="absolute bottom-6 right-6 z-20 bg-black/40 hover:bg-black/60 text-white px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10 transition-all flex items-center gap-2 group/btn"
                            >
                                <span className="text-sm font-medium tracking-wide">
                                    {isPlaying ? 'PAUSE VIDEO' : 'PLAY VIDEO'}
                                </span>
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover/btn:bg-primary/40 transition-colors">
                                    {isPlaying ? (
                                        <div className="w-2 h-3 border-x-2 border-white" />
                                    ) : (
                                        <div className="ml-1 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white" />
                                    )}
                                </div>
                            </button>
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-2xl" />
                        </motion.div>

                        {/* Glowing CTA Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => window.location.href = '/join'}
                            className="relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-14 py-4 sm:py-5 rounded-full text-white text-lg sm:text-xl font-bold tracking-wide max-w-sm mx-auto sm:max-w-none"
                            style={{
                                background: "linear-gradient(135deg, #CC5500 0%, #E06820 50%, #CC5500 100%)",
                                boxShadow: "0 0 40px rgba(204, 85, 0, 0.55), 0 0 80px rgba(204, 85, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                                border: "1px solid rgba(255,255,255,0.15)",
                            }}
                        >
                            Join The Grinders Hub
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>

                    </div>

                </motion.div>
            </Container>


        </section>
    );
}
