"use client";

import Image from "next/image";
import { LazyVideo } from "./LazyVideo";
import { motion } from "framer-motion";

interface LandingProps {
    onVideoReady: () => void;
}

export default function Landing({ onVideoReady }: LandingProps) {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            {/* Videos Container */}
            <motion.div
                className="flex justify-start items-center gap-5 max-w-screen ml-40 z-10"
                initial={{ x: 0 }}
                animate={{ x: -200 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 4 }}
            >
                {[...Array(6)].map((_, i) => (
                    <LazyVideo
                        key={i}
                        src={`/videos/video.webm`}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-[408px] h-[500px]"
                        index={i}
                        onReady={onVideoReady}
                    />
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
                <Image src="/logo.png" alt="logo" width={500} height={200} />
            </motion.div>
        </div>
    )
}