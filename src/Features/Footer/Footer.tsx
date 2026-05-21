import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import NewsletterCard from './NewsletterCard';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0d0a08] pt-32 pb-12 flex flex-col items-center">
      
      <div className="w-full max-w-[1050px] px-6 mb-24 transition-transform duration-500 hover:-translate-y-2">
        <NewsletterCard />
      </div>

      <div className="w-full max-w-[1000px] px-8 flex flex-col md:flex-row items-center justify-between gap-12 border-b border-[#bf987c]/10 pb-16">
        
        {/* Brand Icon */}
        <div className="text-[#bf987c] transition-transform duration-700 hover:rotate-180 cursor-pointer">
           <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"/></svg>
        </div>

        {/* Links Grid */}
        <div className="flex gap-16 text-center md:text-left">
          <div className="flex flex-col gap-4 text-[13px] font-medium tracking-[0.2em] uppercase text-[#888]">
            {['Home Page', 'Portfolio', 'About Us'].map(l => (
              <a key={l} href="#" className="relative group hover:text-[#bf987c] transition-colors">
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#bf987c] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 text-[13px] font-medium tracking-[0.2em] uppercase text-[#888]">
            {['Inquiries', 'Pricings', 'Challenges'].map(l => (
              <a key={l} href="#" className="relative group hover:text-[#bf987c] transition-colors">
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#bf987c] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Socials -*/}
        <div className="flex gap-8 text-[28px] text-[#f2e7de]/60">
  {[FaYoutube, FaTwitter, FaInstagram].map((Icon, i) => (
    <Icon 
      key={i} 
      className="hover:text-[#bf987c] cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" 
    />
  ))}
</div>
      </div>

      {/* Copyright */}
      <div className="w-full max-w-[1000px] px-8 pt-8 flex justify-between text-[11px] font-medium tracking-[0.2em] uppercase text-[#444]">
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#bf987c] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#bf987c] transition-colors">Privacy</a>
        </div>
        <div>© 2026 Fighting Star</div>
      </div>
    </footer>
  );
};

export default Footer;