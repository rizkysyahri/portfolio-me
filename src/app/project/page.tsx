"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { project } from "@/providers/data/projectData";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const Page = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col md:grid md:grid-cols-12 md:pb-[10rem] mt-20">
          <div className="flex md:col-span-5 md:justify-between">
            <div className="md:pb-[10rem]">
              <h1 className="text-8xl">Project</h1>
            </div>
            <div className="md:hidden">
              <div className="w-full bg-gray-line border-gray-400 border-1 rounded-md opacity-[1] h-0.5 my-7"></div>
            </div>
            <div className="hidden md:block">
              <div className="h-full w-0.5 bg-gray-line border-gray-400 border-1 rounded-md opacity-[1]"></div>
            </div>
          </div>

          <div className="col-span-7 md:ml-2 text-4xl md:text-6xl mt-10 md:mt-0">
            <h1 className="">
              {" "}
              These are some of the projects I&apos;ve worked on. Please see below.
            </h1>
            <ArrowDown className="w-40 h-40 justify-end items-end float-right flex animate-bounce" />
          </div>
        </div>

        {project.map((data) => (
          <div
            className="flex flex-col md:grid md:grid-cols-12 my-5"
            key={data.id}
          >
            <div className="flex justify-between col-span-5 pb-6 md:pb-0">
              <div>
                <h2>{data.title}</h2>
                <div className="text-gray">Bootcamp Platform</div>
              </div>

              <div className="text-right ml-auto flex relative">
                {data.sort}
                <ArrowRight className="w-5 h-5 mx-1" />
                <div className="hidden md:block h-full w-0.5 bg-gray-line border-gray-400 border-1 rounded-md opacity-[1]"></div>
              </div>
            </div>

            <div className="relative col-span-7 md:ml-2 zoom-img-container">
              <Link href={`/project/${data.slug}`} scroll={false}>
                <div className="bg-[#f4f3f1] rounded-md">
                  <div className="relative w-full h-auto p-[10%]">
                    <Image
                      src={data.imageProject2}
                      alt="image"
                      className="rounded-md zoom-img "
                      width={1000}
                      height={1000}
                    />
                  </div>

                  <div className="flex pt-0 p-5 text-black">
                    <p className="relative m-0">{data.title}</p>
                    <p className="opacity-50 ml-auto m-0">Build By me</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
