// ScrollingBand.js
import React from 'react';

const Band = ({ content }) => {
  return (
    <div className="overflow-hidden bg-black text-white -translate-y-9">
      <div className="flex animate-scrolling-band font-gloria-hallelujah text-[24px] leading-[47.58px]">
        {content.map((item, index) => (
          <div key={index} className="news-item p-4 whitespace-nowrap text-left">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Band;
