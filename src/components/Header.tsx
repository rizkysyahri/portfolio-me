import Link from "next/link";
import React from "react";

let navItems = [
  {
    title: "Project",
    href: "/project",
  },
  {
    title: "Mail",
    href: "mailto:ramadhancai@gmail.com",
  },
];

export default function Header() {
  return (
    <div className="fixed flex z-10 top-0 text-white p-8 justify-between w-full font-normal box-border items-center">
      <Link href="/">
        <div className="flex pointer">
          <p className="animation">©</p>
          <div className="flex relative overflow-hidden whitespace-nowrap ml-[5px] lhfaeh">
            <p className="relative ulhuFEhh">Hi I'm</p>
            <p className="pl-[0.3em] ">Syahri</p>
            <p className="pl-[0.3em] absolute left-[120px]">Ramadhan</p>
          </div>
        </div>
      </Link>

      <ul className="relative flex items-center space-x-10 text-sm">
        {navItems.map((data, index) => {
          return (
            <li className="leading-none relative group" key={index}>
              <Link href={data.href} scroll={false}>
                {data.title}
                <span className=" opacity-0 text-[1.35em] transition-opacity duration-300 group-hover:opacity-100">
                  .
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
