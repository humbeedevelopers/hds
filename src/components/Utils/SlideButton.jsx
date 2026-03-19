import React from 'react';

const SlideButton = ({bgColor}) => {
  return (
    <div 
      role="button"
      tabIndex={0}
      className="bg-white/90 backdrop-blur-sm rounded-full w-fit p-1 flex items-center pr-8 gap-4 cursor-pointer transition-all shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_0_2px_6px_rgba(0,0,0,0.1)] hover:opacity-90"
    >
      <div className={`${bgColor} h-11 w-11 rounded-full flex items-center justify-center text-white shadow-inner`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </div>

      <span className="text-sm font-montserrat font-medium">
        Slide to know more
      </span>
    </div>
  );
};

export default SlideButton;