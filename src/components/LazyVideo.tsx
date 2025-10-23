"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function LazyVideo(props: any) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { index, onReady, ...otherProps } = props;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    videoRef.current?.play().catch(error => {
                        console.error("Video play failed:", error);
                    });
                } else {
                    videoRef.current?.pause();
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);

            // Check if video is already loaded
            if (videoRef.current.readyState >= 3) {
                onReady?.();
            } else {
                videoRef.current.addEventListener('loadeddata', () => {
                    onReady?.();
                });
            }
        }

        // Cleanup 
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
                videoRef.current.removeEventListener('loadeddata', onReady);
            }
        };
    }, [onReady]);

    // First video
    if (index === 0) {
        return (
            <motion.video
                ref={videoRef}
                {...otherProps}
                initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                animate={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
                transition={{ duration: 2, ease: 'easeInOut' }}
            />
        );
    }

    // Other videos 
    return (
        <motion.video
            ref={videoRef}
            {...otherProps}
            initial={{
                opacity: 0,
                x: -408,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.8,
                delay: 2 + (index - 1) * 0.2,
                ease: 'easeOut'
            }}
        />
    );
}