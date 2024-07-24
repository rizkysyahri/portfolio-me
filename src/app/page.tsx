"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    var e = ["color: purple", "font-size: 14px", "line-height: 10px", "padding: 10px 0"].join(";");
    console.log("%c✦ 💜💜💜💜💜💜 Developed by Rizky Syahri Ramadhan 💜💜💜💜💜💜 ✦", e);
  }, []);
  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <section className="flex items-center justify-center pt-20">
        <MaxWidthWrapper>
          <div className="relative overflow-hidden w-full h-full flex justify-center items-center z-10">
            <motion.div
              initial={{ y: "0%", scale: 1 }}
              animate={{
                y: "100%",
                scale: [1, 1],
                transition: { duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] },
              }}
              className="absolute w-full h-full max-w-screen-lg max-h-screen portrait:h-[112.5vw] portrait:w-[75vw] landscape:h-[75vh] landscape:w-[50vh] bg-black z-10"
            ></motion.div>
            <div className="relative w-full h-full portrait:h-[112.5vw] portrait:w-[75vw] landscape:h-[75vh] landscape:w-[50vh]">
              <Image
                src="https://res.cloudinary.com/rizkysyahri/image/upload/v1698762744/chai_arvpqk.jpg"
                alt="Image Reveal"
                className="object-cover w-full h-full "
                fill
              />
            </div>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-base z-[100] mt-32">
            <div className="block overflow-hidden">
              <p>Rizky Syahri Ramadhan</p>
            </div>
            <div>
              <p>@me</p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <div className="mt-[8rem] sm:mt-[12rem] sm:grid grid-cols-12 gap-x-[2rem] pb-[6rem]">
            <span className="block col-span-3 lg:col-span-5 relative">
              About me
            </span>
            <p className="col-span-8 lg:col-span-6 text-md md:text-2xl leading-normal mt-2 sm:mt-0 text-gray">
              I&apos;m an Independent Front End Developer and I&apos;am graduate
              of vocational high school. Always trying to be honest and kind to
              others. Have a very optimistic goal which is to grow at what i can
              do and always looking for something new to learn and improve.
            </p>

            <span className="block col-span-3 lg:col-span-5 mt-[6rem] relative">
              Social
            </span>
            <ul className="col-span-8 lg:col-span-5 text-md md:text-2xl leading-normal mt-2 sm:mt-[6rem] text-gray">
              <Link href="mailto:ramadhancai@gmail.com">
                <li className="leading-none relative group">
                  Email{" "}
                  <span className="absolute inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                    .
                  </span>
                </li>
              </Link>
              <Link href="https://www.instagram.com/syahrrrh/">
                <li className="leading-none relative group">
                  Instagram{" "}
                  <span className="absolute inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                    .
                  </span>
                </li>
              </Link>
              <Link href="https://www.linkedin.com/in/rizkysyahri/">
                <li className="leading-none relative group">
                  Linkedln{" "}
                  <span className="absolute inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                    .
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <div className="flex flex-col md:flex-row relative h-[700px] w-full bg-white">
          <Link
            href="/project"
            scroll={false}
            className="flex relative items-center justify-center w-full h-full border-b-[1.34px] md:border-r-[1.34px] leading-none border-solid border-[#ccc]"
          >
            <h2 className="text-8xl opacity-[0.58] text-gray">Project</h2>
          </Link>
          <Link
            href="#"
            scroll={false}
            className="flex relative items-center justify-center w-full h-full border-t-[1.34px] md:border-l-[1.34px] leading-none border-solid border-[#ccc]"
          >
            <h2 className="text-8xl opacity-[0.58] text-gray">Contact</h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
