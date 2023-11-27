import Image from "next/image";
import * as React from "react";
import { Icons } from "./Icons";
import {
  moveUpTitle,
  scaleCenterImage,
  setInitialState,
} from "@/helpers/AnimationImagesProjects";

interface HomePageProps {
  timeline: any;
}

const HomePage: React.FC<HomePageProps> = ({ timeline }) => {
  const centerImageWrapperRef = React.useRef(null);
  const centerImageRef = React.useRef(null);
  const centerImageTitleRef = React.useRef(null);

  React.useEffect(() => {
    // console.log("centerImageWrapperRef:", centerImageWrapperRef);
    // console.log("centerImageRef:", centerImageRef);

    timeline &&
      timeline
        .add(setInitialState(centerImageRef.current))

        .add(
          scaleCenterImage(
            centerImageWrapperRef.current,
            centerImageRef.current,
          )
        )
        .add(moveUpTitle(centerImageTitleRef.current));
  }, [timeline]);

  return (
    // <div className="relative justify-center items-center w-full h-screen flex">
    //   <div>

    //   <div
    //     className="block absolute top-1/2 left-1/2  text-white text-center -translate-x-1/2 -translate-y-1/2 z-10 text-3xl sm:text-7xl leading-[1.1 cursor-pointer"
    //     onClick={() => timeline.play()}
    //   >
    //     <h2 className="text-white ">E-commerce</h2>
    //   </div>
    //   <div
    //     className="relative flex h-screen overflow-hidden"
    //     ref={centerImageWrapperRef}
    //     data-wrapper-center
    //   >
    //     <Image
    //       src="https://res.cloudinary.com/rizkysyahri/image/upload/v1698762744/chai_arvpqk.jpg"
    //       alt=""
    //       fill={true}
    //       data-image-center
    //       ref={centerImageRef}
    //       className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover"
    //     />
    //     {/* <div className="absolute top-[35%] left-[65%] text-white text-[24.8px] font-normal">
    //     <Icons.arrow className="scale-[2] mb-[100px]" />
    //     <p className="m-0 mb-[10px]">Web Developer</p>
    //     <p className="m-0 mb-[10px]">Frontend Developer</p>
    //   </div> */}
    //   </div>
    //   </div>

    // </div>

    <section className="fixed top-0 left-0 w-full min-h-full z-2">
      <div className="flex items-center justify-center">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 portrait:h-[112.5vw] portrait:w-[75vw] landscape:h-[75vh] landscape:w-[50vh]"></div>

        <div
          className="block absolute top-1/2 left-1/2  text-white text-center -translate-x-1/2 -translate-y-1/2 z-10 text-3xl sm:text-2xl leading-[1.1] overflow-hidden cursor-pointer"
          onClick={() => timeline.play()}
        >
          <h2 className="text-white font-light text-3xl" ref={centerImageTitleRef}>
            Rizky Syahri Ramadhan
          </h2>
        </div>
        <div
          className="relative w-full overflow-hidden h-screen"
          ref={centerImageWrapperRef}
          data-wrapper-center
        >
          <Image
            src="https://res.cloudinary.com/rizkysyahri/image/upload/v1698762744/chai_arvpqk.jpg"
            alt="..."
            className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-image-center
            ref={centerImageRef}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
