"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useState, useEffect } from "react";
import { LazyGif } from "./LazyGif";

interface LandingProps {
    onVideoReady: () => void;
}

export default function Landing({ onVideoReady }: LandingProps) {
    const [loadedCount, setLoadedCount] = useState(0);

    const handleVideoReady = useCallback(() => {
        console.log('GIF loaded, count:', loadedCount + 1);
        setLoadedCount(prev => {
            const newCount = prev + 1;
            if (newCount === 6) {
                console.log('All GIFs loaded, triggering background');
                // Small delay to ensure all animations are ready
                setTimeout(() => {
                    onVideoReady();
                }, 100);
            }
            return newCount;
        });
    }, [onVideoReady, loadedCount]);



    return (
        <div className="flex flex-col justify-center items-center w-full">
            {/* GIFs Container */}
            <motion.div
                className="flex justify-start items-center gap-10 max-w-screen ml-90 z-10"
                initial={{ x: 0 }}
                animate={{ x: -200 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 4,
                }}
            >
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-[400px] h-[500px] shrink-0">
                        <LazyGif
                            src={`/gifs/video.gif`}
                            alt={`Animation ${i + 1}`}
                            className="w-full h-full object-cover"
                            index={i}
                            onReady={handleVideoReady}
                        />
                    </div>
                ))}
            </motion.div>

            <motion.div
                className="absolute bottom-4 right-12 z-10"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <p className="text-[41px] font-aloevera-light">
                    Find the Right Part, <br /><span className="font-bold">Every Time</span>
                </p>
            </motion.div>

            <motion.div
                className="absolute bottom-4 left-12 z-10"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={500}
                    height={200}
                    priority
                />
            </motion.div>
        </div>
    )
}