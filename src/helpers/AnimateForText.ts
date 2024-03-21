import gsap from "gsap";

gsap.defaults({
  duration: 4,
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

export const titleNameAnimation = (titleNameRef: any) => {
  return gsap.to(titleNameRef, {
    y: 0,
    duration: 1.5,
    delay: 0.5
  });
};

export const textNavAnimation = (textNavRef: any) => {
  return gsap.to(textNavRef, {
    y: 0,
    duration: 1.5,
    delay: 0.9
  });
};

export const textNavTimeAnimation = (textNavTimeRef: any) => {
  return gsap.to(textNavTimeRef, {
    y: 0,
    duration: 1.5,
    delay: 0.7
  })
}

export const textAnimationProject = (textAnim: any) => {
  return gsap.to(textAnim, {
    y: 0,
    duration: 0.1,
    opacity: 1
  });
};

export const textAnimationProjectDifinition = (textAnimProject: any) => {
  return gsap.to(textAnimProject, {
    y: 0,
    duration: 0.1,
    opacity: 1,
    delay: 0.3
  });
};

