"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function ScrollRotatingGlobe() {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.4;
    }

    const handleScroll = () => {
      const rotationAmount = window.scrollY * 0.002;
      if (globeRef.current) {
        globeRef.current.pointOfView({ lat: 0, lng: rotationAmount * 100 }, 0.3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
      />
    </div>
  );
}
