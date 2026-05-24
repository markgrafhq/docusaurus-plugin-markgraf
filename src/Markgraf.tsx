import React from "react";
import { MarkgrafPlayer } from "@markgrafhq/markgraf-react";

export interface MarkgrafProps {
  src: string;
  renderer?: "canvas" | "svg";
  className?: string;
}

export default function Markgraf({ src, renderer = "canvas", className }: MarkgrafProps) {
  if (typeof window === "undefined") {
    return <div className={className} data-markgraf-placeholder />;
  }
  return <MarkgrafPlayer src={src} renderer={renderer} className={className} />;
}
