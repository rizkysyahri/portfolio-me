import { cn } from "@/libs/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen px-2.5 md:px-10 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
