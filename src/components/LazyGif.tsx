"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export function LazyGif(props: any) {
    const { index, onReady, ...otherProps } = props;
    const [hasLoaded, setHasLoaded] = useState(false);

    const handleLoad = () => {
        if (!hasLoaded) {
            setHasLoaded(true);
            onReady?.();
        }
    };

    // First GIF
    if (index === 0) {
        return (
            <motion.img
                {...otherProps}
                initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                animate={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                onLoad={handleLoad}
                loading="lazy"
            />
        );
    }

    // Other GIFs
    return (
        <motion.img
            {...otherProps}
            initial={{
                opacity: 0,
                x: -400,
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
            onLoad={handleLoad}
            loading="lazy"
        />
    );
}