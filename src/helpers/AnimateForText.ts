import gsap from "gsap";

gsap.defaults({
  duration: 2,
  ease: "expo.out",
});

export const titleAnimation = (titleRef: any) => {
  return gsap.to(titleRef, {
    y: 0,
    duration: 1.5,
  });
};

export const textAnimation = (textRef: any) => {
  return gsap.to(textRef, {
    y: 0,
    duration: 1.5,
  });
};

export const fadeInOverlay = (overlayRef: any) => {
  return gsap.to(overlayRef, {
    opacity: 1,
  });
};
