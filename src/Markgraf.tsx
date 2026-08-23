import React, { useEffect, useRef, useState } from "react";
import { MarkgrafPlayer } from "@markgrafhq/markgraf-react";

export interface MarkgrafProps {
  src: string;
  renderer?: "canvas" | "svg";
  className?: string;
}

export default function Markgraf({ src, renderer = "canvas", className }: MarkgrafProps) {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const container = containerRef.current;
    if (!container) return;

    const resize = () => {
      const width = Math.floor(container.getBoundingClientRect().width);
      const next = {
        width,
        height: Math.max(180, Math.round((width * 9) / 16)),
      };
      setSize((current) =>
        current?.width === next.width && current.height === next.height
          ? current
          : next,
      );
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      data-markgraf-placeholder={mounted ? undefined : ""}
      style={{ width: "100%", minHeight: 180, aspectRatio: "16 / 9" }}
    >
      {mounted && size ? (
        <MarkgrafPlayer
          src={src}
          renderer={renderer}
          width={size.width}
          height={size.height}
        />
      ) : null}
    </div>
  );
}
