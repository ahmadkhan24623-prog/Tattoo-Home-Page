import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FaqItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "WHAT IS THE PROCESS?",
    answer: (
      <p>
        Our process begins with an initial consultation to discuss your ideas, placement, and sizing. 
        Once the design concept is finalized, we schedule your tattoo session. We ensure a completely sterile 
        environment, using premium equipment to bring your custom vision to life comfortably.
      </p>
    )
  },
  {
    id: 2,
    question: "HOW YOU DETERMINE PRICE?",
    answer: (
      <div className="space-y-4">
        <p>
          <span className="font-bold text-[#bf987c]">1. Size:</span> Tattoo prices are often based on the size of the tattoo. Larger tattoos generally cost more than smaller ones. Some salons may charge per square inch or have set prices for different size categories.
        </p>
        <p>
          <span className="font-bold text-[#bf987c]">2. Complexity:</span> The complexity of the design plays a significant role in pricing. More intricate and detailed designs typically require more time and skill, leading to a higher cost.
        </p>
        <p>
          <span className="font-bold text-[#bf987c]">3. Color:</span> Tattoos with color typically cost more than black and gray tattoos. Vibrant colors can require more work and skill to achieve the desired result.
        </p>
      </div>
    )
  },
  {
    id: 3,
    question: "CAN YOU DRAW ANY TATOOS?",
    answer: (
      <p>
        Yes, our resident artists specialize in a diverse range of styles including realism, fine-line, custom scripts, 
        traditional, and blackwork. We focus heavily on creating custom illustrative concepts tailored exclusively around 
        your individual story and aesthetic preference.
      </p>
    )
  },
  {
    id: 4,
    question: "WHAT IS YOUR LOCATION?",
    answer: (
      <p>
        We are located in the heart of California's premium arts district. Our studio provides a luxury, 
        high-end atmosphere designed to keep clients completely at ease during their sessions. Drop by or book an 
        appointment online to receive our exact studio suite coordinates.
      </p>
    )
  }
];

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header-el',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      const cards = sectionRef.current?.querySelectorAll('.faq-card-anim');
      if (!cards || cards.length === 0) return;

      gsap.fromTo(cards,
        { 
          y: 70, 
          opacity: 0,
          scale: 0.98 
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 30%',
            scrub: 1.2, 
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div ref={sectionRef} className="w-full relative z-10 select-none overflow-hidden py-24 bg-[#0d0a08]">
      
      {/* Background Color */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-150 mix-blend-luminosity"
        style={{ backgroundImage: "url('/Images/BackgroundImage.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a08]/90 via-[#0d0a08]/30 to-[#0d0a08]/90 pointer-events-none z-0" />

      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="faq-header-el text-[10px] sm:text-[11px] font-bold text-[#bf987c] tracking-[0.4em] uppercase mb-3 block">
            Common Inquiries
          </span>
          <h2 className="faq-header-el text-[36px] sm:text-[50px] font-serif tracking-[0.15em] text-[#f2e7de] uppercase font-normal leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="faq-header-el w-16 h-[1px] bg-[#bf987c]/40 mt-4" />
        </div>

        {/* ================= ACCORDION BOXES ================= */}
        <div className="w-full flex flex-col gap-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div 
                key={item.id} 
                className={`faq-card-anim w-full bg-[#14110f] border rounded-[24px] overflow-hidden transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                  ${isOpen ? 'border-[#bf987c]/40 shadow-[0_15px_40px_rgba(0,0,0,0.5)]' : 'border-[#2b231d]/50 hover:border-[#bf987c]/25'}`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 sm:px-10 py-6 sm:py-7 flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className={`text-[14px] sm:text-[16px] font-sans font-bold tracking-[0.12em] transition-colors duration-300
                    ${isOpen ? 'text-[#bf987c]' : 'text-[#f2e7de] group-hover:text-[#bf987c]'}`}
                  >
                    {item.question}
                  </span>

                  {/* (+ / -) */}
                  <div className="relative w-6 h-6 flex items-center justify-center text-[#f2e7de] group-hover:text-[#bf987c] transition-colors duration-300">
                    <span className="absolute w-4 h-[2px] bg-current rounded-sm" />
                    <span className={`absolute w-[2px] h-4 bg-current rounded-sm transition-all duration-300 ease-out
                      ${isOpen ? 'scale-y-0 rotate-90 opacity-0' : 'scale-y-100 opacity-100'}`} 
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out
                    ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-10 pb-8 text-[13px] sm:text-[14px] text-[#b3a79e] font-sans font-normal leading-relaxed tracking-wide max-w-[850px]">
                      <div className="w-full h-[1px] bg-[#2b231d]/40 mb-6" />
                      {item.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FaqSection;