"use client";

import { useEffect, useState } from "react";

function TextSection() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-gray-900 w-full  h-screen overflow-hidden">
      <div className="relative ">
        <div
          className="w-36 h-36 z-20 blur-[100px] absolute bg-white/40 rounded-full border"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)", // Center the div on the cursor
          }}
        ></div>
        <div className="w-full h-screen overflow-hidden bg-[url('/images/checker.svg')] bg-repeat relative z-30"></div>
      </div>
    </div>
  );
}

export default TextSection;
