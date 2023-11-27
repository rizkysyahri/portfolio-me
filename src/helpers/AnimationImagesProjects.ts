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
) => {
  const tl = gsap.timeline();
  const portraitQuery = window.matchMedia("(orientation: portrait)");

  const handleOrientationChange = () => {
    if (portraitQuery.matches) {
      tl.to(centerImageWrapperRef, {
        width: "75vw",
        height: "112.5vw",
        rotate: "-5deg",
      }).to(centerImageRef, {
        scale: 1,
      }, 0);
    } else {
      tl.to(centerImageWrapperRef, {
        width: "50vh",
        height: "75vh",
        rotate: "-5deg",
      }).to(centerImageRef, {
        scale: 1,
      }, 0);
    }
  };

  handleOrientationChange(); 

  portraitQuery.addListener(handleOrientationChange); 

  return tl;
};

export const moveUpTitle = (centerImageTitleRef: any) => {
  return gsap.to(centerImageTitleRef, {
    yPercent: 100,
    duration: 1
  });
};
