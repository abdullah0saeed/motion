"use client";

import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [allVideosLoaded, setAllVideosLoaded] = useState(false);
  const [videosReady, setVideosReady] = useState(0);
  const totalVideos = 6;

  const handleVideoReady = () => {
    setVideosReady(prev => prev + 1);
  };

  useEffect(() => {
    if (videosReady === totalVideos) {
      console.log('All videos ready via callback');
      setAllVideosLoaded(true);
    }
  }, [videosReady]);

  // Fallback: if GIFs don't trigger onLoad properly, show background after 4 seconds
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!allVideosLoaded) {
        console.log('Fallback timer triggered - showing background');
        setAllVideosLoaded(true);
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
          {/* Orange Background */}
          <motion.div
            className="absolute inset-0 bg-orange z-0"
            initial={{ scaleY: 0, originY: 1 }}
            animate={allVideosLoaded ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <Landing onVideoReady={handleVideoReady} />
        </main>
      </div>
    </div>
  );
}