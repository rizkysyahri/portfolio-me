import * as React from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [index, setIndex] = React.useState(0);
  const [dimension, setDimension] = React.useState({ width: 0, height: 0 });
  const words = [
    "Hai",
    "Sir",
    "Mr",
    "Mrs",
    "Call Me Syahri",
  ];

  // variant for motion //
  const slideUp = {
    exit: {
      // y: "-100vh",
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { duration: 0.2, delay: 0.2 },
    },
  };
  // variant for motion //

  React.useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  React.useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="flex h-screen w-screen items-center justify-center bg-[#141516] fixed z-[99]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            initial="initial"
            variants={opacity}
            animate="enter"
            exit={{
              opacity: 0,
              // transition: {
              //   duration: 0.8,
              //   ease: [0.76, 0, 0.24, 1],
              //   delay: 0.2,
              // },
            }}
            className="text-white text-[42px] flex items-center absolute z-[1]"
          >
            <span className="block w-[10px] h-[10px] bg-white rounded-[50%] mr-[10px]"></span>
            {words[index]}
          </motion.p>
          <svg className="svg">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="#141516"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
