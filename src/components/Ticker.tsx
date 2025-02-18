import React from "react";
import { motion } from "framer-motion";

const images = [
  "/aav.svg",
  "/avala.svg",
  "/bit.svg",
  "/bnb.svg",
  "/doge.svg",
  "/E7u.svg",
  "/ehte.svg",
  "/multi.svg",
  "/polka.svg",
  "/sei.svg",
  "/sole.svg",
  "/sui.svg",
];

const ImageTicker: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-[#111] py-4">
      <motion.div
        // Ensures the images stay in one continuous row
        style={{ display: "inline-flex", whiteSpace: "nowrap" }}
        className="gap-14"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Duplicate the images array to create a seamless loop */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`ticker-icon-${index}`}
            className="inline-block w-5"

          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageTicker;
