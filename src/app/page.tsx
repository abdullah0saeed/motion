"use client";

import Info from "@/components/Info";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [allVideosLoaded, setAllVideosLoaded] = useState(false);
  const [videosReady, setVideosReady] = useState(0);
  const [finalAnimation, setFinalAnimation] = useState(false);
  const totalVideos = 6;

  const handleVideoReady = () => {
    setVideosReady(prev => prev + 1);
  };

  useEffect(() => {
    if (videosReady === totalVideos) {
      console.log('All videos ready via callback');
      setAllVideosLoaded(true);
      // Wait for everything to complete, then trigger final animation
      setTimeout(() => {
        setFinalAnimation(true);
      }, 2000);
    }
  }, [videosReady]);

  // Fallback: if GIFs don't trigger onLoad properly, show background after 4 seconds
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!allVideosLoaded) {
        console.log('Fallback timer triggered - showing background');
        setAllVideosLoaded(true);
        setTimeout(() => {
          setFinalAnimation(true);
        }, 2000);
      }
    }, 4000);

    return () => clearTimeout(fallbackTimer);
  }, [allVideosLoaded]);


  return (
    <div className="flex flex-col h-screen bg-black">
      <header>
        <NavBar />
      </header>
      <div className="flex flex-col h-screen">
        <aside className="z-20">
          <SideBar />
        </aside>

        <main className="flex justify-center items-center h-full w-full relative overflow-hidden">
          <motion.div
            className={finalAnimation ? "pb-12" : ""}
            animate={finalAnimation ? {
              y: -window.innerHeight + 100,
              filter: "blur(8px)",
              opacity: 0.7,
              transition: { duration: 1.5, ease: "easeInOut" }
            } : {}}
          >
            {/* Orange Background */}
            <motion.div
              className="absolute inset-0 bg-orange z-0"
              initial={{ scaleY: 0, originY: 1 }}
              animate={allVideosLoaded ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <Landing onVideoReady={handleVideoReady} />

            <motion.div
              className="absolute bottom-4 right-12 z-10"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-[41px] font-aloevera-light text-white">
                Find the Right Part, <br /><span className="font-bold">Every Time</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="absolute bottom-4 left-12 z-10"
            initial={{ y: 200, opacity: 0 }}
            animate={finalAnimation ? {
              // Move to center
              bottom: "auto",
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
              opacity: 1,
              transition: { duration: 1.5, ease: "easeInOut" }
            } : {
              // Original position
              y: 0,
              opacity: 1,
              transition: { duration: 3, delay: 3 }
            }}
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={200}
              priority
            />
          </motion.div>

          <Info />


        </main>
      </div>
    </div>
  );
}