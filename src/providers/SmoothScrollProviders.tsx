"use client";

// import LocomotiveScroll from "locomotive-scroll";
import * as React from "react";

export const SmoothScrollContext = React.createContext({
  scroll: null as LocomotiveScroll | null,
});

interface SmoothScrollProvidersProps {
  children: React.ReactNode;
  options?: any;
}

export const SmoothScrollProviders = ({
  children,
  options,
}: SmoothScrollProvidersProps) => {
  const [scroll, setScroll] = React.useState<LocomotiveScroll | null>(null);

  React.useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;

          setScroll(
            new LocomotiveScroll({
              el: document.querySelector("[data-scroll-container]"),
              ...options,
              scrollFromAnywhere: true,
              smoothTouch: true,
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            })
          );
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [options, scroll]);

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
