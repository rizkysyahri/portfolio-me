"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  fadeInOverlay,
  textAnimation,
  titleAnimation,
} from "@/helpers/AnimateForText";
import { Icons } from "@/components/Icons";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { pageTransitionScreen } from "@/helpers/AnimationImagesProjects";
import Navbar from "./header/Navbar";
import Footer from "./Footer";

interface AboutPagesProps {
  timeline: any;
}

const AboutPages: React.FC<AboutPagesProps> = ({ timeline }) => {
  const titleRef = React.useRef(null);
  const textRef = React.useRef(null);
  const pageTransition = React.useRef(null);
  const pageOverlay = React.useRef(null);
  const router = useRouter();

  React.useEffect(() => {
    titleAnimation(titleRef.current);
    textAnimation(textRef.current);
  });

  React.useEffect(() => {
    timeline &&
      timeline.add(
        pageTransitionScreen(pageTransition.current, pageOverlay.current)
      );
  });

  return (
    <div ref={pageOverlay} data-scroll-container>
      <div ref={pageTransition}>
        <Navbar />

        <div className="relative top-0 left-0 w-full mih-h-full">
          <div className="relative flex items-center justify-center w-full h-full-screen">
            <div className="hidden absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 z-10 text-3xl sm:text-2xl leading-[1.1 cursor-pointer">
              <h2 data-scroll className="text-white">
                Rizky Syahri Ramadhan
              </h2>
            </div>
            <div
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 portrait:h-[112.5vw] portrait:w-[75vw] landscape:h-[75vh] landscape:w-[50vh] "
              data-wrapper-center
            >
              <Image
                src="https://res.cloudinary.com/rizkysyahri/image/upload/v1698762744/chai_arvpqk.jpg"
                alt="..."
                className="object-cover w-full h-full -rotate-[5deg]"
                fill
                data-scroll
              />
            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-8 pb-[3rem] text-xs sm:text-base text-white z-10">
              <div className="block overflow-hidden">
                <p className="ulafemxcbouEhfejn" ref={titleRef}>
                  Rizky Syahri Ramadhan
                </p>
              </div>
              <div className="block overflow-hidden">
                <p className="ulafemxcbouEhfejn" ref={textRef}>
                  @me
                </p>
              </div>
            </div>
          </div>
          <div className="px-8 mt-[8rem] sm:mt-[12rem] sm:grid grid-cols-12 gap-x-[2rem] pb-[6rem] text-white">
            <span
              data-scroll
              className="block col-span-3 lg:col-span-5 relative"
            >
              About me
              <Icons.line className="w-[20%] sm:w-[50%] lg:w-[20%] h-3 absolute stroke-current" />
            </span>
            <p
              data-scroll
              className="col-span-8 lg:col-span-6 text-md md:text-2xl leading-normal mt-2 sm:mt-0 text-gray"
            >
              I'm an{" "}
              <span className="text-2xl text-white relative">
                Web Developer
                <Icons.line className="w-full h-3 absolute bottom-[-7px] left-0 stroke-current text-gray" />
              </span>{" "}
              and I'am graduate of vocational high school. Always trying to be
              honest and kind to others. Have a very optimistic goal which is to
              grow at what i can do and always looking for something new to
              learn and improve.{" "}
            </p>

            <span className="block col-span-3 lg:col-span-5 mt-[6rem] relative whitespace-nowrap">
              Social
              <Icons.line className="w-[20%] sm:w-[50%] lg:w-[20%] h-3 absolute stroke-current bottom-[-4px] left-0 md:bottom-[-2px]" />
            </span>
            <ul className="col-span-8 lg:col-span-5 text-md md:text-2xl leading-normal mt-2 sm:mt-[6rem] text-gray">
              <Link href="mailto:ramadhancai@gmail.com">
                <li className="leading-none relative group">
                  Email
                  <div className="absolute text-white inline-block ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                    .
                  </div>
                </li>
              </Link>

              <Link href="https://www.instagram.com/syahrrrh/">
                <li className="leading-none relative group ">
                  Instagram{" "}
                  <div className="absolute text-white inline-block ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded">
                    .
                  </div>
                </li>
              </Link>
            </ul>
          </div>

          <div className="due due-light">
            <div className="wrap-ml bg-white">
              <div className="Ugfhkaeuka" onClick={() => timeline.play()}>
                <h2 className="title-1">Project</h2>
                <div className="w-[140px] bottom-5 left-6 opacity-[.58] absolute title-2 title-small">
                  Latest Updates
                </div>
              </div>
              <div className="Ugfhkaeuka">
                <h2 className="title-1">Contact</h2>
                <div className="w-[224px] bottom-5 left-6 opacity-[.58] absolute title-2 title-large">
                  Latest Updates and Contact
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutPages;
