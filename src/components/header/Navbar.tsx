import Link from "next/link";
import React from "react";
import { LocalDateTime } from "../LocalTime";
import { Icons } from "../Icons";

let navItems = [
  // {
  //   title: "Project",
  //   href: "/project",
  // },
  {
    title: "Mail",
    href: "mailto:ramadhancai@gmail.com",
  },
];

export default function Navbar() {
  const [localTime, setIsLocalTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsLocalTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed flex z-10 top-0 text-white p-4 justify-between w-full font-normal box-border items-center">
      <Link href="/">
        <div className="flex pointer text-2xl md:text-xl">
          <p className="animation">©</p>
          <div className="flex relative overflow-hidden whitespace-nowrap ml-[5px] lhfaeh">
            <p className="relative ulhuFEhh">Hi I'm</p>
            <p className="pl-[0.3em]">Syahri</p>
          </div>
        </div>
      </Link>

      <div className="block items-center justify-center overflow-hidden mr-16">
        <p className="text-xl text-white">
          Local Time : <LocalDateTime date={localTime} />
        </p>
      </div>

      <ul className="relative flex items-center space-x-10 text-2xl md:text-xl">
        {navItems.map((data, index) => {
          return (
            <li className="leading-none relative group" key={index}>
              <Link href={data.href} scroll={false} className="text-2xl md:text-xl flex">
                {data.title}
                <span className=" opacity-0 text-[1.35em] transition-opacity duration-300 group-hover:opacity-100">
                  .
                </span>
                <Icons.arrowDown className="w-7 h-7"/>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
