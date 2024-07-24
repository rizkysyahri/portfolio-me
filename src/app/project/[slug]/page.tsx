"use client";

import * as React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { project } from "@/providers/data/projectData";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Page = ({ params }: { params: { slug: string } }) => {
  const selectedProject = project.find((p) => p.slug === params.slug);

  const [dimension, setDimension] = React.useState({ width: 0, height: 0 });
  const gallery = React.useRef(null);
  const h1ProjectRef = React.useRef(null);
  const isInView = useInView(h1ProjectRef, { once: true });
  const pathname = usePathname();
  const { toast } = useToast();

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * -0.01]);
  const y2 = useTransform(scrollYProgress, [0, 4], [0, height * 0.1]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * -0.01]);

  const resize = React.useCallback(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  React.useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  const handleVisitClick = (url: any) => {
    if (!url) {
      toast({
        title: "I'm so sorry",
        description: "This portfolio has not yet been published!",
      });
    }
  };

  if (!selectedProject) {
    return <div>not found</div>;
  }

  return (
    <div>
      <section
        className={cn(
          ``,
          {
            "bg-[#024e34] text-[#bd9b5f]": pathname.includes(
              "/project/circle-app"
            ),
          },
          {
            "bg-[#f7f7f7] text-black": pathname.includes(
              "/project/swallet-app"
            ),
          }
        )}
      >
        <MaxWidthWrapper className="flex flex-col">
          <div className="mt-40 md:mt-48 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: "50%" }}
              animate={{
                opacity: 1,
                y: "0%",
                transition: { duration: 1, delay: 1, ease: [0.83, 0, 0.17, 1] },
              }}
              className="text-5xl md:text-7xl font-koulen"
            >
              {selectedProject.title}
            </motion.h1>
          </div>
          <div className="flex flex-wrap items-center mt-40 mb-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1, delay: 1.3, ease: [0.83, 0, 0.17, 1] },
              }}
              className="flex items-center gap-2"
            >
              <span>PROJECT</span>
              <span className="border border-[#bd9b5f] w-5 rotate-180" />
              <span className="">{selectedProject.title}</span>
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section
        ref={gallery}
        className={cn(
          `gallery `,
          {
            "bg-[#142a1f]": pathname.includes("/project/circle-app"),
          },
          {
            "bg-[#231f20]": pathname.includes("/project/swallet-app"),
          }
        )}
      >
        <Column
          imgs={
            selectedProject.imageColumn?.slice(0, 3).map((img) => img.image) ||
            []
          }
          y={y}
        />
        <Column
          imgs={
            selectedProject.imageColumn?.slice(3, 6).map((img) => img.image) ||
            []
          }
          y={y2}
        />
        <Column
          imgs={
            selectedProject.imageColumn?.slice(6, 9).map((img) => img.image) ||
            []
          }
          y={y3}
        />
      </section>

      <section className="flex flex-col md:flex-row">
        <div
          className={cn(
            `w-full relative`,
            {
              "bg-[#142a1f] p-20": pathname.includes("/project/circle-app"),
            },
            {
              "": pathname.includes("/project/swallet-app"),
            }
          )}
        >
          <div className="flex items-center justify-center">
            <Image
              src={selectedProject.imageProjectMock}
              alt="image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/ilustration.png"
            alt="ilustration"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section ref={h1ProjectRef}>
        <MaxWidthWrapper className="mt-48">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <motion.h1
              style={{
                transform: isInView ? "none" : "translateY(20%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="col-span-3 text-4xl"
            >
              PROJECTS
            </motion.h1>
            <motion.p
              style={{
                transform: isInView ? "none" : "translateY(20%)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
              }}
              className="col-span-5 text-gray mt-5 md:mt-0"
            >
              {selectedProject.description}
            </motion.p>
          </div>

          <div className="flex items-center justify-center mt-48">
            <div className="bg-white p-3 w-full md:w-[70%]">
              {selectedProject.imageSection?.map((projectImage) => (
                <Image
                  key={projectImage.id}
                  src={projectImage.image}
                  alt="image section"
                  width={5000}
                  height={5000}
                  className="w-full h-full"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-20">
            <Link
              href={selectedProject.urlGithub}
              target="_blank"
              className="bg-white py-2 px-7 text-black flex items-center gap-2"
            >
              Source code
              <MoveUpRight className="w-5 h-5 " />
            </Link>
            <Link
              href={selectedProject.url || "#"}
              onClick={(e) => {
                if (!selectedProject.url) {
                  e.preventDefault();
                  handleVisitClick(selectedProject.url);
                }
              }}
              target="_blank"
              className="bg-white py-2 px-7 text-black"
            >
              Visit
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default Page;

const Column = ({ imgs, y }: { imgs: string[]; y: any }) => {
  const [initialRender, setInitialRender] = React.useState(true);

  React.useEffect(() => {
    if (!initialRender) return;
    setInitialRender(false);
  }, [initialRender]);

  return (
    <motion.div
      className="flex flex-col w-full h-full gap-[1svw]"
      style={{ y }}
    >
      {imgs.map((src: string, i: number) => (
        <AspectRatio
          key={i}
          ratio={16 / 9}
          className="relative overflow-hidden"
        >
          <Image src={src} alt={`image-${i}`} fill className="object-cover" />
        </AspectRatio>
      ))}
    </motion.div>
  );
};
