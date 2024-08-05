"use client";
import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

function ImageMarquree({
  children,
  className,
  direction,
}: {
  direction?: "left" | "right" | "up" | "down" | undefined;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Marquee className={className} direction={direction} autoFill pauseOnHover>
      {children}
    </Marquee>
  );
}

export default ImageMarquree;
