"use client";

import { motion } from "framer-motion";

export default function SideBar() {
    return (
        <div className="fixed flex flex-col max-w-md w-fit h-screen items-start justify-center pl-6.25 font-aloevera-light top-0 left-0 z-10" >
            <motion.a className="text-[22.5px] text-center cursor-pointer" initial={{ x: -120 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>About Us</motion.a>
            <motion.a className="text-[22.5px] text-center cursor-pointer" initial={{ x: -120 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 1 }}>Location</motion.a>
            <motion.a className="text-[22.5px] text-center cursor-pointer" initial={{ x: -120 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 1.2 }}>Contact Us</motion.a>
        </div>
    )
}

