import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Collector",
    image: "/Images/Star1.png",
    text: "Getting my piece done here was an incredible experience. The attention to detail and studio environment are unmatched. Truly a premium club."
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Regular Client",
    image: "/Images/Star2.png",
    text: "The artists take their time to understand your vision perfectly. The line work is exceptionally crisp and healed beautifully. Highly recommended!"
  },
  {
    id: 3,
    name: "Carolina Stones",
    role: "Verified Art Collector",
    image: "/Images/Star3.png",
    text: "I recently had the pleasure of getting a tattoo at Fighting Star, and I couldn't be happier with the entire experience. From start to finish, everything about this tattoo shop exceeded my expectations."
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Custom Design",
    image: "/Images/Star4.png",
    text: "Absolutely stunning environment and professionalism. They make you feel completely at ease while delivering true masterpiece custom artwork."
  },
  {
    id: 5,
    name: "Daniel Craig",
    role: "Collector",
    image: "/Images/Star5.png",
    text: "Top tier atmosphere with legendary hospitality. This isn't just a tattoo shop; it's an absolute luxury experience from the moment you walk in."
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef<boolean>(false);

  // ================= SCROLL REVEAL ANIMATIONS =================
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title group animation
      gsap.fromTo('.reveal-title', 
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo('.reveal-avatar',
        { opacity: 0, scale: 0.4, y: 20 },
        {
          opacity: (index) => index === activeIndex ? 1 : 0.35, // Maintains default layout styling on load
          scale: (index) => index === activeIndex ? 1.05 : 0.95,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo('.reveal-card',
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex]);

  // =================  CHANGE ANIMATION =================
  const animateSlideChange = (nextIndex: number) => {
    if (isAnimating.current || nextIndex === activeIndex) return;
    isAnimating.current = true;

    const content = textContainerRef.current;
    if (!content) {
      setActiveIndex(nextIndex);
      isAnimating.current = false;
      return;
    }

    gsap.to(content, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setActiveIndex(nextIndex);
        gsap.set(content, { y: -10 });
        gsap.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
          onComplete: () => {
            isAnimating.current = false;
          }
        });
      }
    });
  };

  return (
    <div 
      ref={sectionRef} 
      className="w-full relative z-10 select-none overflow-hidden py-24 bg-[#0d0a08]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#bf987c]/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col items-center relative z-10">
        
        {/* ================= SECTION TITLE ================= */}
        <div className="reveal-title flex flex-col items-center gap-2 mb-14 text-center opacity-0">
          <span className="text-[11px] font-bold text-[#bf987c] tracking-[0.3em] uppercase">TESTIMONIALS</span>
          <h2 className="text-[36px] sm:text-[46px] font-serif tracking-wide text-[#f2e7de] font-normal leading-tight">
            What Clients <span className="italic font-light text-[#bf987c]">say?!</span>
          </h2>
        </div>

        {/* ================= AVATARS TRACK ================= */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-12 w-full max-w-[800px] h-[120px]">
          {testimonialsData.map((client, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={client.id}
                onClick={() => animateSlideChange(index)}
                className={`reveal-avatar relative transition-all duration-700 ease-out focus:outline-none shrink-0 group opacity-0
                  ${isActive 
                    ? 'w-[85px] h-[85px] sm:w-[110px] sm:h-[110px] scale-105 z-20' 
                    : 'w-[52px] h-[52px] sm:w-[68px] sm:h-[68px] scale-95 z-10'
                  }`}
                style={{
                  opacity: isActive ? 1 : 0.35
                }}
              >
                <div 
                  className={`w-full h-full rounded-full overflow-hidden border p-[4px] transition-all duration-700 ease-in-out
                    ${isActive ? 'border-[#bf987c] bg-[#14110f] shadow-[0_0_30px_rgba(191,152,124,0.15)]' : 'border-transparent'}`}
                  style={{
                    borderRadius: isActive ? "40% 60% 70% 30% / 45% 50% 50% 55%" : "50%"
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1613]">
                    <img
                      src={client.image}
                      alt={client.name}
                      className={`w-full h-full object-cover transition-all duration-700 ease-out
                        ${isActive ? 'grayscale-0 brightness-100 scale-105' : 'grayscale brightness-[0.65] group-hover:brightness-90'}`}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* =================BOX CONTAINER ================= */}
        <div className="reveal-card w-full max-w-[850px] relative opacity-0">
          
          <div className="w-full bg-[#14110f] border border-[#2b231d]/70 rounded-[32px] p-8 sm:p-14 md:px-20 min-h-[240px] sm:min-h-[220px] flex flex-col justify-center items-center text-center relative shadow-[0_30px_60px_rgba(0,0,0,0.6)] group hover:border-[#bf987c]/20 transition-all duration-500">
            
            <span className="absolute top-6 left-10 text-[80px] text-[#bf987c]/[0.04] font-serif pointer-events-none select-none">“</span>
            
            <div ref={textContainerRef} className="w-full flex flex-col items-center">
              <h3 className="text-[24px] sm:text-[28px] font-serif tracking-wide text-[#f2e7de] mb-1">
                {testimonialsData[activeIndex].name}
              </h3>
              
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#bf987c] mb-6 font-semibold">
                {testimonialsData[activeIndex].role}
              </span>
              
              <p className="text-[14px] sm:text-[16px] text-[#b3a79e] font-sans leading-relaxed max-w-[620px] italic font-light">
                "{testimonialsData[activeIndex].text}"
              </p>
            </div>
          </div>

          {/* ================= NAVIGATION BUTTON CONTROLS ================= */}
          <div className="absolute inset-y-0 -left-6 sm:-left-8 flex items-center pointer-events-none">
            <button
              onClick={() => animateSlideChange(activeIndex === 0 ? testimonialsData.length - 1 : activeIndex - 1)}
              className="w-12 h-12 rounded-full bg-[#1c1714] border border-[#3b3129] hover:border-[#bf987c]/60 text-[#f2e7de] hover:text-[#bf987c] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-2xl pointer-events-auto group/btn"
              title="Previous Testimonial"
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute inset-y-0 -right-6 sm:-right-8 flex items-center pointer-events-none">
            <button
              onClick={() => animateSlideChange(activeIndex === testimonialsData.length - 1 ? 0 : activeIndex + 1)}
              className="w-12 h-12 rounded-full bg-[#1c1714] border border-[#3b3129] hover:border-[#bf987c]/60 text-[#f2e7de] hover:text-[#bf987c] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-2xl pointer-events-auto group/btn"
              title="Next Testimonial"
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;