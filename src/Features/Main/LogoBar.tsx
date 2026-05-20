import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LogoBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(barRef.current,
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: barRef.current, 
          start: 'top 90%',        
          toggleActions: 'play none none none' 
        }
      }
    );
  }, []);

  const brands = [
    {
      name: 'Layers',
      svg: (
        <svg className="w-5 h-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Sisyphus',
      svg: (
        <svg className="w-5 h-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v18M3 12h18M12 3l4 4M12 21l-4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Circooles',
      svg: (
        <svg className="w-5 h-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="12" r="5"/>
          <circle cx="15" cy="12" r="5"/>
        </svg>
      )
    },
    {
      name: 'Catalog',
      svg: (
        <svg className="w-5 h-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Quotient',
      svg: (
        <svg className="w-5 h-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M16.5 16.5L22 22" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full px-16 max-w-full mx-auto mt-2 mb-16 relative z-10">
      <div 
        ref={barRef}
        className="w-full bg-[#161311]/90 border border-[#2b2420] rounded-2xl py-6 px-16 flex items-center justify-between backdrop-blur-md shadow-2xl"
      >
        {brands.map((brand) => (
          <div 
            key={brand.name} 
            className="flex items-center gap-3.5 group cursor-pointer relative py-2 transition-all duration-300 ease-out transform hover:scale-110"
          >
            <div className="text-gray-400 group-hover:text-[#bf987c] group-hover:scale-105 transition-all duration-300 ease-out">
              {brand.svg}
            </div>
            <span className="text-[15px] font-semibold tracking-wide text-gray-400 group-hover:text-white transition-colors duration-300">
              {brand.name}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#bf987c] transition-all duration-300 ease-out group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;