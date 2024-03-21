"use client";

import * as React from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Header from "@/components/header/Navbar";
import AboutPages from "@/components/AboutPages";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  const [timeline, setTimeline] = React.useState<gsap.core.Timeline | null>(
    null
  );
  const router = useRouter();

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => router.push("/project"),
      });
      setTimeline(tl);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <AboutPages timeline={timeline} />
    </>
  );
};

export default AboutPage;
