import Image from "next/image";
import { motion } from "framer-motion";

export default function Info() {
    return (
        <>
            {/* Tier */}
            <motion.div
                className="absolute z-10"
                initial={{
                    right: "-500px",
                    top: "50%",
                    y: "-50%",
                    opacity: 0,
                    rotate: 0,
                }}
                animate={{
                    right: "-250px",
                    opacity: 1,
                    rotate: 360,
                }}
                transition={{
                    right: { duration: 1, delay: 7, ease: "easeOut" },
                    rotate: {
                        duration: 4,
                        delay: 1,
                        ease: "linear",
                        repeat: Infinity
                    }
                }}
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
            <motion.p className="absolute bottom-6 left-18 w-[75%] font-aloevera-light text-[34.64px] text-start text-white z-10"
                initial={{
                    opacity: 0,
                    y: "100%",
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 7
                }}
            >From engine components to brake pads, filters, and body panels — AutoParts Egypt connects you with a wide range of genuine and aftermarket car parts for all major brands: Toyota, Hyundai, Kia, Nissan, BMW, Mercedes, and more.
            </motion.p>

            {/* Button */}
            <motion.button className="absolute bottom-10 right-24 cursor-pointer shadow-sm shadow-orange-btn p-1 px-4 font-aloevera-light text-[24.99px] text-start bg-orange-btn text-white rounded-[36px] z-10"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0,
                    delay: 7,
                }}
            >
                Shop Now
            </motion.button>
        </>
    )
}
