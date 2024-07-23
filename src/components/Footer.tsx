import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper className="flex flex-wrap items-center justify-between pt-20 pb-8">
        <p className="block">Portfolio</p>
        <p className=" leading-normal md:block hidden">Build by Rizky Syahri Ramadhan</p>
        <p className="block">@2024</p>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
