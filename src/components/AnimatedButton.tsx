import React from "react";

const AnimatedButton: React.FC = () => {
  return (
    <button className="flex cursor-pointer w-40 h-11 items-center justify-center gap-1 rounded-4xl bg-[#a1e00d] p-3 overflow-hidden relative">
      <p className="font-medium">Launch App</p>
      <div
        className="relative bg-black rounded-4xl  overflow-hidden"
        style={{ width: "1rem", height: "1rem" }}
      >
        {/* Image 1: Initially visible */}
        <img src="/cross.svg" alt="icon" className="image1" />
        {/* Image 2: Initially positioned below with a diagonal offset */}
        <img src="/cross.svg" alt="icon" className="image2" />
      </div>

      <style >{`
        /* Both images are absolutely positioned within the container */
        .image1,
        .image2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        /* Image 1 is initially at the center and fully opaque */
        .image1 {
          transform: translate(0, 0);
          opacity: 1;
        }
        /* Image 2 starts off from the bottom with a diagonal offset (left) and is hidden */
        .image2 {
          transform: translate(-10px, 100%);
          opacity: 0;
        }
        /* On hover, Image 1 moves diagonally upward and fades out */
        button:hover .image1 {
          transform: translate(10px, -10px);
          opacity: 0;
        }
        /* On hover, Image 2 slides in diagonally from below into the center and becomes visible */
        button:hover .image2 {
          transform: translate(0, 0);
          opacity: 1;
        }
      `}</style>
    </button>
  );
};

export default AnimatedButton;
