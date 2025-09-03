"use client";

import { useEffect, useRef, useState } from "react";

export default function FancyCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isTouch = () => ("ontouchstart" in window) || navigator.maxTouchPoints > 0;
    const reduce = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch() || reduce()) { setEnabled(false); return; }

    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        dotRef.current.style.opacity = "1";
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = "1";
      }
    };

    const onDown = () => {
      if (ringRef.current) ringRef.current.style.transform += " scale(0.9)";
    };
    const onUp = () => {
      if (ringRef.current) ringRef.current.style.transform = ringRef.current.style.transform.replace(" scale(0.9)", "");
    };

    const onEnter = (e) => {
      const { clientX, clientY } = e;
      targetRef.current = { x: clientX, y: clientY };
      ringPosRef.current = { x: clientX, y: clientY };
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const animate = () => {
      const ease = 0.18;
      const { x: tx, y: ty } = targetRef.current;
      const { x: rx, y: ry } = ringPosRef.current;
      const nx = rx + (tx - rx) * ease;
      const ny = ry + (ty - ry) * ease;
      ringPosRef.current = { x: nx, y: ny };
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${nx}px, ${ny}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseleave', onLeave);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="fancy-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="fancy-cursor-dot" aria-hidden="true" />
    </>
  );
}


