import React, { useState } from 'react';

const NewsletterCard: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full max-w-[1000px] bg-[#fdfaf4] rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-white/50 relative overflow-hidden">
      
      {/* Background Color */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#bf987c]/5 to-transparent pointer-events-none" />

      {/* Left: Asset */}
      <div className="w-[200px] md:w-[280px] flex-shrink-0">
        <img 
          src="/Images/FooterImage.png" 
          alt="Newsletter Illustration" 
          className="w-full drop-shadow-[0_20px_30px_rgba(191,152,124,0.2)]"
        />
      </div>

      {/* Right: Content */}
      <div className="flex-grow w-full max-w-[500px] text-center md:text-left">
        <h2 className="text-[34px] md:text-[48px] font-serif text-[#0d0a08] leading-[1.1] mb-8 uppercase tracking-tight">
          Stay updated with <br />
          <span className="text-[#bf987c]">Fighting Star</span>
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            className="w-full h-14 px-6 bg-[#f2e7de]/40 border border-[#bf987c]/30 rounded-xl text-[#0d0a08] placeholder-[#0d0a08]/50 focus:outline-none focus:border-[#bf987c] transition-all"
          />
          <button 
            type="submit"
            className="px-10 h-14 bg-[#0d0a08] hover:bg-[#131212] text-[#fdfaf4] font-bold text-[13px] tracking-[0.2em] uppercase rounded-xl transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterCard;