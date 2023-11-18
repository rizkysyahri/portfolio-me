"use client";

import Link from "next/link";
import * as React from "react";
import Image from "next/image";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (

    <div className="relative top-0 left-0 w-full min-h-full" data-scroll-container>
      <div className="grid top-0 left-0 h-screen w-full">
        <div className="flex items-center justify-center relative">
          <div className="hidden absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 z-10 text-3xl sm:text-2xl leading-[1.1 cursor-pointer">
            <h2 className="text-white ">Rizky Syahri Ramadhan</h2>
          </div>
          <div
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 portrait:h-[112.5vw] portrait:w-[75vw] landscape:h-[75vh] landscape:w-[50vh] "
            data-wrapper-center
            data-scroll

          >
            <Image
              src="https://res.cloudinary.com/rizkysyahri/image/upload/v1698762744/chai_arvpqk.jpg"
              alt="..."
              className="object-cover w-full h-full -rotate-[5deg]"
              fill
              priority
             
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-8 pb-[3rem] text-xs sm:text-base text-white z-10">
            <p className="">Rizky Syahri Ramadhan</p>
            <p className="">@me</p>
          </div>
        </div>
        
        <div
          data-scroll
          className="px-8 mt-[8rem] absolute top-full sm:mt-[12rem] sm:grid grid-cols-12 gap-x-[2rem] pb-[6rem] text-white"
        >

          <span className="block col-span-3 lg:col-span-5">About me</span>
          <p className="col-span-8 lg:col-span-6 text-md md:text-2xl leading-normal mt-2 sm:mt-0">
            I'm an Web Developer and I'am graduate of vocational high school.
            Always trying to be honest and kind to others. Have a very
            optimistic goal which is to grow at what i can do and always looking
            for something new to learn and improve.{" "}
          </p>

          <span className="block col-span-3 lg:col-span-5 mt-[6rem] text-gray">
            Social
          </span>
          <ul className="col-span-8 lg:col-span-5 text-md md:text-2xl leading-normal mt-2 sm:mt-[6rem] text-gray">
            <Link href="mailto:ramadhancai@gmail.com">
              <li className="leading-none relative group">
                Email
                <div className="absolute inline-block ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                  .
                </div>
              </li>
            </Link>

            <Link href="https://www.instagram.com/syahrrrh/">
              <li className="leading-none relative group">
                Instagram{" "}
                <div className="absolute inline-block ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded">
                  .
                </div>
              </li>
            </Link>
          </ul>

          <footer className="px-8 pb-8 flex justify-between mt-[6rem] sm:mt-[12rem]">
            <div className="absolute bottom-0 left-0 w-full px-8 pb-8 flex items-center justify-center">
              <p className="text-white text-sm font-light hidden md:block">
                Build by Rizky Syahri Ramadhan{" "}
              </p>
            </div>
            <p className="text-white text-sm font-light justify-end flex absolute bottom-0 right-0 w-full px-8 pb-8">
              Portfolio
            </p>
            <p className="text-white text-sm font-light justify-start flex absolute bottom-0 right-0 w-full px-8 pb-8">
              @2023
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
