"use client";

import Link from "next/link";
import * as React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { LocalDateTime } from "../LocalDateTime";
import { ArrowDown } from "lucide-react";
import { cn } from "@/libs/utils";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const [localTime, setIsLocalTime] = React.useState(new Date());
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsLocalTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className={cn(
        `sticky z-[100] h-14 inset-x-0 top-0 w-full transition-opacity duration-300`,
        showNavbar ? "opacity-100" : "opacity-0",
        {
          "bg-[#024e34] text-[#bd9b5f]": pathname.includes(
            "/project/circle-app"
          ),
        },
        {
          "bg-[#f7f7f7] text-black": pathname.includes("/project/swallet-app"),
        }
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 flex-wrap items-center justify-between">
          <Link href="/" className="flex overflow-hidden z-40 " scroll={false}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{
                y: "0%",
                transition: { duration: 1, delay: 1, ease: [0.83, 0, 0.17, 1] },
              }}
              className="flex text-2xl md:text-xl"
            >
              ©<span>Hi I&apos;m Syahri</span>
            </motion.div>
          </Link>

          <div className="md:block overflow-hidden hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{
                y: "0%",
                transition: {
                  duration: 1,
                  delay: 1.1,
                  ease: [0.83, 0, 0.17, 1],
                },
              }}
              className="block text-xl"
            >
              Local Time: <LocalDateTime date={localTime} />
            </motion.span>
          </div>

          <Link
            href="mailto:ramadhancai@gmail.com"
            className="block overflow-hidden leading-none relative group"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{
                y: "0%",
                transition: {
                  duration: 1,
                  delay: 1.2,
                  ease: [0.83, 0, 0.17, 1],
                },
              }}
              className="text-2xl md:text-xl flex"
            >
              Mail
              <span className=" opacity-0 text-[1.35em] transition-opacity duration-300 group-hover:opacity-100">
                .
              </span>
              <ArrowDown className="w-7 h-7" />
            </motion.div>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
