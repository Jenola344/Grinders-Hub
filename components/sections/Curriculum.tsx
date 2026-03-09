"use client";

import Container from "@/components/ui/Container";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const tracks = [
    {
        title: "A.I Automated Agency",
        description:
            "We teach anybody, even with limited technical knowledge, the skills required to build AI systems. Sell the system to people with online companies or start an online company run by your own AI.",
        video: "/video_2026-03-09_20-05-33.mp4",
        poster: "",
    },
    {
        title: "Web3 Mastery",
        description:
            "Master the decentralized future. Learn blockchain fundamentals, smart contract interaction, and how to navigate the evolving crypto landscape to build and preserve wealth.",
        video: "/video_2026-03-09_20-05-33.mp4",
        poster: "",
    },
    {
        title: "Web2 Development",
        description:
            "Build the backbone of the modern web. Master the essential skills of full-stack development, from stunning frontends to scalable backend architecture used by the world's biggest platforms.",
        video: "/video_2026-03-09_20-05-33.mp4",
        poster: "",
    },
];

interface VideoCardProps {
    video: string;
    poster: string;
}

function VideoCard({ video, poster }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const toggleVideo = (e: React.MouseEvent) => {
        // Prevent event bubbling if clicking on progress bar area later if needed
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div
            className="relative cursor-pointer aspect-video overflow-hidden group bg-black"
            onClick={toggleVideo}
        >
            <video
                ref={videoRef}
                src={video}
                poster={poster}
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Play Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 md:group-hover:bg-black/20 transition-colors z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl transform transition-transform md:group-hover:scale-110">
                        <Play className="w-6 h-6 md:w-8 md:h-8 text-primary ml-1 fill-primary" />
                    </div>
                </div>
            )}

            {/* Video Controls / Info Overlay (visible when paused and on mobile, hides on play for desktop until hover) */}
            <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 z-20 ${isPlaying ? 'opacity-0 md:group-hover:opacity-100' : 'opacity-100'}`}>
                {/* Progress Bar */}
                <div className="w-full h-1 md:h-1.5 bg-white/20 rounded-full mb-2 md:mb-3 overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-100 ease-linear"
                        style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                    />
                </div>

                <div className="flex justify-between items-center text-[9px] md:text-[10px] font-bold tracking-widest text-white/80 uppercase">
                    <div className="flex items-center gap-1.5 md:gap-2">
                        {isPlaying ? <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" /> : null}
                        {isPlaying ? 'PLAYING' : 'PAUSED'}
                    </div>
                    <div>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Curriculum() {
    return (
        <section id="curriculum" className="section-padding bg-bg-main relative">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl mb-4 font-serif text-white"
                    >
                        Tracks designed for the <span className="text-primary italic">real world.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl max-w-2xl mx-auto text-text-secondary"
                    >
                        Choose your path and start earning. Our curriculum is built for results, not just certificates.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 rounded-2xl overflow-hidden w-full">
                    {tracks.map((track, i) => (
                        <div key={track.title} className="flex flex-col bg-bg-card group/track">
                            {/* Text block */}
                            <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                                    <span className="text-primary/50 text-sm font-mono tracking-widest">0{i + 1}</span>
                                    {track.title}
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed text-text-secondary mb-6 md:mb-8 flex-grow">
                                    {track.description}
                                </p>
                                <div className="flex items-center text-xs md:text-sm font-bold tracking-widest text-primary gap-2 cursor-pointer transition-all md:group-hover/track:gap-3 opacity-90 hover:opacity-100">
                                    LEARN MORE <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                            </div>

                            {/* Video block */}
                            <VideoCard video={track.video} poster={track.poster} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

