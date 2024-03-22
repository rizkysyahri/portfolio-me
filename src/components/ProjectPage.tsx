import * as React from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import {
  textAnimationProject,
  textAnimationProjectDifinition,
} from "@/helpers/AnimateForText";
import Footer from "./Footer";

interface ProjectPageProps {}

const ProjectPage: React.FC<ProjectPageProps> = ({}) => {
  const textAnim = React.useRef(null);
  const textAnimProject = React.useRef(null);

  React.useEffect(() => {
    textAnimationProject(textAnim.current);
    textAnimationProjectDifinition(textAnimProject.current);
  });
  return (
    <>
      <div className="flex flex-col text-white md:grid md:grid-cols-12 md:pb-[10rem]">
        <div className="md:flex md:col-span-5 md:justify-between">
          <div className="md:pb-[10rem]">
            <h1 className="text-8xl textAn" ref={textAnim}>
              Project
            </h1>
            <div className="md:hidden">
              <div className="w-full bg-gray-line border-gray-400 border-1 rounded-md opacity-[1] h-0.5 my-7"></div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-full w-0.5 bg-gray-line border-gray-400 border-1 rounded-md opacity-[1]"></div>
          </div>
        </div>

        <div className="col-span-7 md:ml-2 text-4xl md:text-6xl">
          <h1 ref={textAnimProject} className="textAn2">
            These are some of the projects I've worked on. Please see below.
          </h1>
          <Icons.arrowDown className="w-40 h-40 justify-end items-end float-right flex animate-bounce" />
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-12 textAn2" ref={textAnimProject}>
        <div className="flex justify-between col-span-5 text-white pb-6 md:pb-0 ">
          <div>
            <h2>Paslon App</h2>
            <div className="text-gray">Bootcamp Platform</div>
          </div>
          <div className="text-right ml-auto flex relative">
            01
            <Icons.arrowRight className="w-5 h-5 mx-1 " />
            <div className="hidden md:block h-full w-0.5 bg-gray-line border-gray-400 border-1 rounded-md opacity-[1]"></div>
          </div>
        </div>

        <Link
          href=""
          className="col-span-7 relative pb-20 md:ml-2 zoom-img-container"
        >
          <div className=" bg-[#f4f3f1] rounded-md ">
            <div className="relative w-full h-auto p-[10%] ">
              <img
                src="https://www.datocms-assets.com/54179/1708917772-download-4.jpg?auto=format&w=1440"
                alt=""
                className="rounded-md zoom-img"
              />
            </div>

            <div className="flex pt-0 p-5">
              <p className="relative m-0">Peslon App</p>
              <p className="opacity-50 ml-auto m-0">Website By Dumbways.Id</p>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
