import gsap from "gsap";

gsap.defaults({
  duration: 0.9,
  ease: "expo.inOut",
});

export const setInitialState = (centerImageRef: any) => {
  gsap.set(centerImageRef, { scale: 1.5 });
};

export const scaleCenterImage = (
  centerImageWrapperRef: any,
  centerImageRef: any,
  screenWidth: number
) => {
  const tl = gsap.timeline();

  tl.to(centerImageWrapperRef, {
    width: screenWidth > 768 ? "75vw" : "50vh",
    height: screenWidth > 768 ? "112.5vw" : "75vh",
    rotate: "5deg",
  }).to(
    centerImageRef,
    {
      scale: 1,
    },
    0
  );

  return tl;
};
