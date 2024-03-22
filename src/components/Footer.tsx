import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
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
  );
};

export default Footer;
