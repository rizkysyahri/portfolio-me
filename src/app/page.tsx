"use client";

import * as React from "react";
import HomePage from "@/components/HomePage";
import Preloader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useRouter } from "next/navigation";


export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [timeline, setTimeline] = React.useState<gsap.core.Timeline | null>(
    null
  );
  const router = useRouter()

  React.useEffect(() => {
    (() => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => router.push("/about"),
      });

      setTimeline(tl);
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <HomePage timeline={timeline} />
    </main>
  );
}
