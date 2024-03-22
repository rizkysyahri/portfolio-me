"use client";

import * as React from "react";
import NavProject from "@/components/header/NavProject";
import ProjectPage from "@/components/ProjectPage";

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <>
      <div
        className="relative top-0 left-0 h-auto"
        data-scroll-container
        data-barba-namespace="project"
      >
        <NavProject />
        <div className="mt-32 px-4">
          <ProjectPage />
        </div>
      </div>
    </>
  );
};

export default Page;
