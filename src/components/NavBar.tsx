"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// Define navigation links
const tabs = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "" },
];

const navVariants = {
    hidden: {
        y: -100,
        opacity: 0,
        left: '50%',
        x: '-50%',
    },
    top: {
        y: 0,
        opacity: 1,
        left: '50%',
        x: '-50%',
    },
    scrolled: {
        y: 0,
        opacity: 1,
        left: '1rem',
        x: '0%',
    },
};


export default function NavBar({ isScrolled }: { isScrolled: boolean }) {
    const pathname = usePathname();

    return (
        <div className="flex justify-center">
            <motion.nav
                className="fixed top-4 z-50 flex w-fit gap-1 rounded-full bg-black-overlay/53 p-2"
                initial="hidden"
                variants={navVariants}
                animate={isScrolled ? "scrolled" : "top"}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                {tabs.map((tab) => {
                    const isActive = pathname === tab.href;

                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={cn(
                                "rounded-full p-1 px-4 text-white transition-colors hover:bg-active-tab/24 font-inter text-[15.85px] font-semibold",
                                isActive ? "bg-active-tab/24" : ""
                            )}
                        >
                            {tab.name}
                        </Link>
                    );
                })}
            </motion.nav>
        </div>
    );
}