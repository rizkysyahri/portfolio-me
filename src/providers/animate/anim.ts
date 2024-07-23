// src/providers/animate/anim.ts
export const wave = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1], // or use custom cubic-bezier for smoother effect
      },
    }),
  };
  
  export const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  