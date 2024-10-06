import { cn } from "../lib/utils";
import Image from "next/image";
import React from "react";

function Icon({
  src,
  alt,
  bgShadow = "icon-shadow-white",
  height = 150,
  width = 150,
}: {
  src: string;
  alt: string;
  bgShadow?: string;
  height?: number;
  width?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      layout="responsive"
      className={cn("object-contain select-none ", bgShadow)}
    />
  );
}

export default Icon;
