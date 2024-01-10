import * as React from "react";
import Link from "next/link";
import {
  moveBackgroundProject,
  scaleCenterImage,
  setBackgroundState,
} from "@/helpers/AnimationImagesProjects";

interface ProjectSectionForAnimationProps {
  timeline: any;
}

const ProjectSectionForAnimation: React.FC<ProjectSectionForAnimationProps> = ({
  timeline,
}) => {
  const centerSectionRef = React.useRef(null);
  const centerSectionWrapperRef = React.useRef(null);
  const centerSectionTitleRef = React.useRef(null);

  React.useEffect(() => {
    timeline &&
      timeline
        .add(setBackgroundState(centerSectionRef.current))
        .add(
          moveBackgroundProject(
            centerSectionWrapperRef.current,
            centerSectionRef.current,
          )
        );
  }, [timeline]);

  return (
    <div className="due due-light">
      <div className="wrap-ml bg-white" ref={centerSectionWrapperRef}>
        <div
          className="Ugfhkaeuka"
          ref={centerSectionRef}
          onClick={() => timeline.play()}
        >
          <h2 className="title-1">Project</h2>
          <div className="w-[140px] bottom-5 left-6 opacity-[.58] absolute title-2 title-small">
            Latest Updates
          </div>
        </div>
        <div className="Ugfhkaeuka">
          <h2 className="title-1">Contact</h2>
          <div className="w-[224px] bottom-5 left-6 opacity-[.58] absolute title-2 title-large">
            Latest Updates and Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionForAnimation;
