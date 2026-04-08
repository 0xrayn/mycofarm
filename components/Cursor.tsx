"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (curRef.current) { curRef.current.style.left = mx + "px"; curRef.current.style.top = my + "px"; }
    };
    const animRing = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = rx + "px"; ringRef.current.style.top = ry + "px"; }
      requestAnimationFrame(animRing);
    };
    document.addEventListener("mousemove", onMove);
    animRing();
    const els = document.querySelectorAll("a,button,[role=button]");
    els.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        curRef.current && (curRef.current.style.transform = "translate(-50%,-50%) scale(2)");
        ringRef.current && (ringRef.current.style.transform = "translate(-50%,-50%) scale(1.5)");
      });
      el.addEventListener("mouseleave", () => {
        curRef.current && (curRef.current.style.transform = "translate(-50%,-50%) scale(1)");
        ringRef.current && (ringRef.current.style.transform = "translate(-50%,-50%) scale(1)");
      });
    });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={curRef} className="fixed w-3 h-3 rounded-full bg-success pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-300 mix-blend-difference hidden md:block" />
      <div ref={ringRef} className="fixed w-9 h-9 rounded-full border border-success/60 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-[80ms] hidden md:block" />
    </>
  );
}
