import React, { useEffect, useState } from "react";
import { MarkgrafPlayer } from "@markgrafhq/markgraf-react";

export interface MarkgrafProps {
  src: string;
  renderer?: "canvas" | "svg";
  className?: string;
}

export default function Markgraf({ src, renderer = "canvas", className }: MarkgrafProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={className}
      data-markgraf-placeholder={mounted ? undefined : ""}
    >
      {mounted ? <MarkgrafPlayer src={src} renderer={renderer} /> : null}
    </div>
  );
}
