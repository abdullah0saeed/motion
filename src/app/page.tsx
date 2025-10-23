"use client";

import CardsContainer from "@/components/CardsContainer";
import Info from "@/components/Info";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [allVideosLoaded, setAllVideosLoaded] = useState(false);
  const [videosReady, setVideosReady] = useState(0);
  const [finalAnimation, setFinalAnimation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const totalVideos = 6;

  const handleVideoReady = () => {
    setVideosReady(prev => prev + 1);
  };

  useEffect(() => {
    if (videosReady === totalVideos) {
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
        setAllVideosLoaded(true);
        setTimeout(() => {
          setFinalAnimation(true);
        }, 2000);
      }
    }, 4000);

    return () => clearTimeout(fallbackTimer);
  }, [allVideosLoaded]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    // CleanUp
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`flex flex-col bg-black ${finalAnimation ? "min-h-[calc(100vh+10px)]" : "min-h-screen"}`}>
      <header>
        <NavBar isScrolled={isScrolled} />
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

          <Info finalAnimation={finalAnimation} isScrolled={isScrolled} />

          <CardsContainer isScrolled={isScrolled} />
        </main>
      </div >
    </div >
  );
}