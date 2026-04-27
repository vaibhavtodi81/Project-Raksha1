import React from 'react';
import { Link } from 'react-router-dom';

const RainbowButton = React.forwardRef(({ children, to, onClick, className = "", ...props }, ref) => {
  const buttonContent = (
    <button 
      ref={!to ? ref : null}
      className={`rainbow-border relative flex items-center justify-center gap-2.5 px-10 py-4 bg-[#050505] rounded-xl border-none text-[#EFECE9] cursor-pointer font-bold tracking-[0.1em] uppercase italic transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] z-10 ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-20 flex items-center gap-3">
        {children}
      </span>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .rainbow-border::before,
        .rainbow-border::after {
          content: '';
          position: absolute;
          left: -1px;
          top: -1px;
          border-radius: 13px;
          /* Dark Palette Static Gradient */
          background: linear-gradient(45deg, #610c27, #050505, #ac9c8d, #610c27);
          background-size: 100% 100%;
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          z-index: -1;
        }
        .rainbow-border::after {
          filter: blur(20px);
          opacity: 0.4;
        }
        .rainbow-border {
          background-color: #050505 !important;
        }
      `}} />
    </button>
  );

  if (to) {
    return (
      <Link to={to} ref={ref} className="inline-block no-underline">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
});

RainbowButton.displayName = 'RainbowButton';

export default RainbowButton;
