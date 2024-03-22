"use client";

import {
  textNavAnimation,
  textNavTimeAnimation,
  titleNameAnimation,
} from "@/helpers/AnimateForText";
import Link from "next/link";
import * as React from "react";
import { LocalDateTime } from "../LocalTime";
import { Icons } from "../Icons";

let navItems = [
  {
    title: "Mail",
    href: "mailto:ramadhancai@gmail.com",
  },
];

interface NavProjectProps {}

const NavProject: React.FC<NavProjectProps> = ({}) => {
  const titleNameRef = React.useRef(null);
  const textNavRef = React.useRef(null);
  const textNavTimeRef = React.useRef(null);
  const [localTime, setIsLocalTime] = React.useState(new Date());
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);

  React.useEffect(() => {
    titleNameAnimation(titleNameRef.current);
    textNavAnimation(textNavRef.current);
    textNavTimeAnimation(textNavTimeRef.current);

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
    <div
      className={`fixed flex z-10 top-0 text-white p-4 justify-between w-full font-normal box-border items-center transition-opacity duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link href="/" className="block overflow-hidden">
        <div
          className="flex pointer ulafemxcbouEhfejn text-2xl md:text-xl"
          ref={titleNameRef}
        >
          <p className="animation">©</p>
          <div className="flex relative overflow-hidden whitespace-nowrap ml-[5px] lhfaeh">
            <p className="relative ulhuFEhh">Hi I'm</p>
            <p className="pl-[0.3em]">Syahri</p>
          </div>
        </div>
      </Link>

      <div className="md:block overflow-hidden hidden mr-16">
        <p ref={textNavTimeRef} className="ulafemxcbouEhfejn text-xl">
          Local Time : <LocalDateTime date={localTime} />
        </p>
      </div>

      <ul className="relative items-center space-x-10 text-sm block overflow-hidden">
        {navItems.map((data, index) => {
          return (
            <li
              className="leading-none relative group ulafemxcbouEhfejn"
              key={index}
              ref={textNavRef}
            >
              <Link
                href={data.href}
                scroll={false}
                className="text-2xl md:text-xl flex"
              >
                {data.title}
                <span className=" opacity-0 text-[1.35em] transition-opacity duration-300 group-hover:opacity-100">
                  .
                </span>
                <Icons.arrowDown className="w-7 h-7" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavProject;
