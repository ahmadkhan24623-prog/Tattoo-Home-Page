import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo(rightSideRef.current, 
      { x: 50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 }
    );
  }, []);

  return (
    <div 
      className="w-full min-h-[85vh] flex items-center justify-between px-16 max-w-[1400px] mx-auto relative z-10 text-white pb-12 bg-cover bg-center bg-no-repeat rounded-[40px] overflow-hidden shadow-2xl"
      style={{ backgroundImage: `url('/Images/BackgroundImage.png')` }}
    >
      
      {/* LEFT COLUMN: Premium Typography Layout */}
      <div ref={textRef} className="w-[45%] flex flex-col items-start justify-center gap-8 relative z-10">
        <h1 className="text-[64px] font-bold tracking-tight leading-[1.1] text-white">
          Body paintings<br />
          that <span className="text-[#bf987c] font-medium italic">Defies</span><br />
          Your Soul
        </h1>

        {/* Call to Action Button */}
        <button className="flex items-center gap-3 bg-[#bf987c] text-[#0d0a08] text-[13px] font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-lg hover:bg-[#c9a78e] active:scale-95 transition-all duration-300">
          <span>✦</span> BOOK A VISIT <span>✦</span>
        </button>

        {/* Working Hours Info Box */}
        <div className="flex items-center gap-4 mt-4 text-[13px] text-gray-300">
          <div className="w-10 h-10 border border-[#bf987c]/30 rounded-xl flex items-center justify-center bg-[#bf987c]/10 text-[#bf987c] text-lg">
            🕒
          </div>
          <div className="flex flex-col gap-0.5">
            <div><span className="text-white font-semibold mr-2">Mon-Fri</span> 11:00-21:00</div>
            <div><span className="text-white font-semibold mr-2">Sat-Sun</span> 14:00-20:00</div>
          </div>
        </div>
      </div>

      <div ref={rightSideRef} className="w-[52%] relative flex justify-end items-center h-[550px] z-10">
        
        <div className="w-[85%] h-full bg-[#161311] border border-[#2b2420] rounded-l-[140px] overflow-hidden relative shadow-2xl flex items-center justify-end">
          
          <div className="absolute inset-0 bg-[#bf987c]/5 mix-blend-color z-10 pointer-events-none" />

          <img 
            src="/Images/HeroImage.png" 
            alt="Hero Graphic Artwork" 
            className="w-full h-full object-cover object-center scale-[1.02] brightness-95"
          />
        </div>

        <div className="absolute bottom-10 left-4 bg-[#f2e7de] p-5 rounded-2xl shadow-2xl border-l-[8px] border-[#bf987c] flex flex-col gap-3 min-w-[190px] z-20">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#8a7f78]">Time</div>
            <div className="text-[20px] font-bold text-[#0d0a08]">2 Weeks</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#8a7f78]">Price</div>
            <div className="text-[24px] font-black text-[#bf987c]">$ 2400.00</div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HeroSection;