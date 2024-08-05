import React from "react";

function BgLines() {
  return (
    <div className="w-full h-full absolute min-h-screen flex justify-around -z-[1] top-0">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <div
            className="h-full w-[1px] bg-blue-300/20"
            key={"line-" + i}
          ></div>
        );
      })}
    </div>
  );
}

export default BgLines;
