import React from "react";
import Marquee from "react-marquee-line";


const ScrollingTicker: React.FC = () => {
  const items: string[] = [
    "🔥 Trending Now",
    "🚀 Crypto is booming!",
    "💰 Bitcoin hits new high!",
    "📈 Ethereum is rising!",
    "📰 Latest Market Updates",
  ];

  return (
    <div className="w-full py-3 overflow-hidden">
      <Marquee>
        {items.map((item, index) => (
          <span key={index} className="text-white text-xl font-semibold mx-5">
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingTicker;
