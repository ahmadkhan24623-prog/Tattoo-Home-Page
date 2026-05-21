import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll('.process-card');
      if (!cards || cards.length === 0) return;

      gsap.fromTo(
        cards,
        { 
          y: 100,            
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 92%',       
            end: 'top 50%',        
            scrub: 1.5,             
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full relative z-10 select-none overflow-hidden py-12 sm:py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Images/BackgroundImage.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a08]/90 via-[#0d0a08]/40 to-[#0d0a08]/90 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0d0a08_85%)] pointer-events-none z-0" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-auto md:auto-rows-[300px] lg:auto-rows-[320px]">
          
          {/* ================= CARD 1: TAILORED PROCESS (LEFT TALL) ================= */}
          <div className="process-card md:row-span-2 min-h-[460px] md:min-h-0 bg-[#14110f] border border-[#2b231d] rounded-[40px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#bf987c]/40">
            <div className="absolute inset-0 bg-gradient-to-b from-[#bf987c]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex flex-col gap-4 relative z-10">
              <h3 className="text-[28px] sm:text-[38px] font-serif leading-[1.15] tracking-wide text-[#f2e7de] font-normal">
                Tailored Process <br />
                will make you <br />
                <span className="italic font-light text-[#bf987c]">scream</span>, but then <br />
                happy!
              </h3>
            </div>
            {/* Height scales gracefully dynamically via aspect-video on mobile, returns to fixed size on desktop */}
            <div className="w-full aspect-video md:aspect-auto md:h-[50%] mt-6 overflow-hidden rounded-[24px] relative z-10 border border-[#2b231d] bg-[#1a1613]">
              <img 
                src="/Images/CardIamge1.png" 
                alt="Tailored Process Artist" 
                className="w-full h-full object-cover object-top filter grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
              />
            </div>
          </div>

          {/* ================= CARD 2: GORILLA WITH HAT (CENTER TOP) ================= */}
          <div className="process-card min-h-[180px] md:min-h-0 bg-[#f5ebe2] border border-[#2b231d] rounded-[40px] p-6 sm:p-8 flex items-center justify-between overflow-hidden relative group shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(191,152,124,0.15)]">
            <div className="w-[50%] sm:w-[55%] h-full flex items-center justify-center bg-[#0d0a08]/[0.02] rounded-3xl p-2">
              <img 
                src="/Images/CardImage2.png" 
                alt="Gorilla Sketch Artwork" 
                className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
              />
            </div>
            <div className="w-[45%] sm:w-[40%] flex flex-col justify-end items-end h-full pb-2">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#8a7e75] tracking-widest uppercase mb-1">Premium Flash</span>
              <span className="text-[20px] sm:text-[24px] font-black text-[#1c1815] tracking-tight font-sans">$ 2800.00</span>
            </div>
          </div>

          {/* ================= CARD 3: IMAGE LIVE ACTION (RIGHT TOP) ================= */}
          {/* Changed height on mobile to keep a crisp rectangular aspect ratio rather than collapsing */}
          <div className="process-card min-h-[220px] md:min-h-0 bg-[#14110f] border border-[#2b231d] rounded-[40px] overflow-hidden relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#bf987c]/30">
            <img 
              src="/Images/CardImage3.png" 
              alt="Tattoo Session Live Action" 
              className="w-full h-full object-cover brightness-75 scale-[1.01] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a08] via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-6 left-8">
              <span className="text-[10px] tracking-[0.3em] font-bold text-[#bf987c] uppercase">Studio Atmosphere</span>
            </div>
          </div>

          {/* ================= CARD 4: SNAKE SKULL (CENTER BOTTOM) ================= */}
          <div className="process-card min-h-[180px] md:min-h-0 bg-[#f5ebe2] border border-[#2b231d] rounded-[40px] p-6 sm:p-8 flex items-center justify-between overflow-hidden relative group shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(191,152,124,0.15)]">
            <div className="w-[55%] h-full flex items-center justify-center bg-[#0d0a08]/[0.02] rounded-3xl p-2">
              <img 
                src="/Images/CardImage4.png" 
                alt="Snake Skull Sketch Artwork" 
                className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
              />
            </div>
            <div className="w-[40%] flex flex-col justify-end items-end h-full pb-2">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#8a7e75] tracking-widest uppercase mb-1">Custom Masterpiece</span>
              <span className="text-[20px] sm:text-[24px] font-black text-[#1c1815] tracking-tight font-sans">$ 1500.00</span>
            </div>
          </div>

          {/* ================= CARD 5: HIGHEST RATED CLUB (RIGHT BOTTOM) ================= */}
          <div className="process-card min-h-[260px] md:min-h-0 bg-[#14110f] border border-[#2b231d] rounded-[40px] p-6 sm:p-10 pb-8 sm:pb-10 flex flex-col justify-start group shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#bf987c]/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#bf987c]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex flex-col gap-3 relative z-10">
              <h3 className="text-[24px] sm:text-[32px] font-serif leading-[1.2] tracking-wide text-[#f2e7de] font-normal">
                Highest rated <br />
                Tatto Club in the <br />
                <span className="italic font-light text-[#bf987c]">California.</span>
              </h3>
              <p className="text-[12px] sm:text-[13px] text-gray-400 font-sans leading-relaxed max-w-[260px] mt-1">
                Don't hesitate. No one has ever regretted their tattoos! Contact us now, and we'll help you bring your vision to life.
              </p>
            </div>

            <div className="mt-8 md:mt-auto mb-2 sm:mb-6 relative z-10 flex justify-start items-center">
              <button className="inline-flex items-center justify-center bg-[#bf987c] text-[#0d0a08] text-[10px] sm:text-[11px] font-bold tracking-[0.15em] px-5 py-3.5 sm:px-7 sm:py-4 rounded-xl uppercase transition-all duration-300 hover:bg-[#c9a78e] hover:tracking-[0.18em] active:scale-95 shadow-lg whitespace-nowrap">
                CONTACT US NOW <span className="ml-2 text-[8px] sm:text-[10px]">✦</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProcessSection;