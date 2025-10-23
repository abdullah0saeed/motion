import Image from "next/image";
import { motion, scale } from "framer-motion";
import { useEffect, useState } from "react";


const logoVariants = {
    hidden: {
        // y: 200,
        top: "auto",
        bottom: "-200px",
        left: "48px",
        opacity: 0,
    },
    initial: {
        // y: 0,
        top: "auto",
        opacity: 1,
        bottom: "16px",
        left: "48px",
        transition: { duration: 3, delay: 3 }
    },
    scrolled: {
        top: 0,
        left: "50%",
        bottom: "auto",
        x: "-50%",
        y: "0%",
        opacity: 1,
        scale: 0.3,
        transition: { duration: 0.8, ease: "easeInOut" as const }
    },
    final: {
        bottom: "auto",
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" as const }
    }
};

const tierVariants = {
    hidden: {
        right: "-500px",
        top: "50%",
        y: "-50%",
        opacity: 0,
        rotate: 0,
    },
    scrolled: {
        right: "6%",
        top: "30%",
        left: "auto",
        bottom: "auto",
        opacity: 1,
        rotate: 0,
        scale: 0.2,
        transition: {
            duration: 0, ease: "easeInOut" as const,
            scale: { duration: 0, delay: 0, ease: "easeInOut" as const },
        }
    },
    final: {
        right: "-250px",
        top: "50%",
        y: "-50%",
        opacity: 1,
        rotate: 360,
        scale: 1,
        transition: {
            scale: { duration: 0, delay: 0, ease: "easeInOut" as const },
            right: { duration: 1, delay: 0, ease: "easeOut" as const },
            rotate: {
                duration: 4,
                delay: 1,
                ease: "linear" as const,
                repeat: Infinity
            },
            opacity: { duration: 1, delay: 0, ease: "easeOut" as const }
        }
    }
};

const btnVariants = {
    initial: {
        opacity: 0,
    },
    final: {
        bottom: "40px",
        right: "96px",
        left: "auto",
        top: "auto",
        opacity: 1,
        transition: {
            duration: 0, ease: "easeInOut" as const,
        }
    },
    scrolled: {
        top: "27%",
        right: "7%",
        left: "auto",
        bottom: "auto",
        opacity: 1,
        transition: {
            duration: 0, ease: "easeInOut" as const,
        }
    }
};

const textVariants = {
    initial: {
        y: "100%",
        opacity: 0,
    },
    scrolled: {
        opacity: 1,
        y: "-160%",
        x: "15%",
        scale: 0.7,
        transition: {
            duration: 1, ease: "easeInOut" as const,
        }
    },
    final: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2, ease: "easeInOut" as const,
        }
    }
};

export default function Info({ finalAnimation, isScrolled }: { finalAnimation: boolean, isScrolled: boolean }) {

    return (
        <>
            {/* Logo */}
            <motion.div
                className="absolute z-10"
                initial="hidden"
                variants={logoVariants}
                animate={(finalAnimation && !isScrolled) ? "final" : isScrolled ? "scrolled" : "initial"}
            >
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={500}
                    height={200}
                    priority
                />
            </motion.div>


            {/* Tier */}
            <motion.div
                className="absolute z-10"
                initial="hidden"
                variants={tierVariants}
                animate={(finalAnimation && !isScrolled) ? "final" : isScrolled ? "scrolled" : "hidden"}
            >
                <Image
                    src="/images/tier.png"
                    alt="logo"
                    width={500}
                    height={200}
                    priority
                />
            </motion.div>

            {/* Text */}
            <motion.p className="absolute bottom-6 left-20 w-[60%] font-aloevera-light text-[34.64px] text-start text-white/60 z-10"
                initial="initial"
                variants={textVariants}
                animate={(finalAnimation && !isScrolled) ? "final" : isScrolled ? "scrolled" : "initial"}
            >From engine components to brake pads, filters, and body panels — AutoParts Egypt connects you with a wide range of genuine and aftermarket car parts for all major brands: Toyota, Hyundai, Kia, Nissan, BMW, Mercedes, and more.
            </motion.p>

            {/* Button */}
            <motion.button className={`absolute cursor-pointer shadow-sm ${!isScrolled ? 'shadow-orange-btn' : 'shadow-deep-move'} p-1 px-6 font-aloevera-light text-[22px] text-start ${!isScrolled ? 'bg-orange-btn' : 'bg-deep-move'} text-white rounded-[36px] z-10`}
                initial="initial"
                variants={btnVariants}
                animate={(finalAnimation && !isScrolled) ? "final" : isScrolled ? "scrolled" : "initial"}
            >
                Shop Now
            </motion.button>
        </>
    )
}
