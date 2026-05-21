import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const NavBar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  
  // State to track if mobile menu curtain is dropped open
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Top-down entrance sequence
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    );

    gsap.fromTo(
      logoRef.current,
      { rotation: -45, scale: 0.5, opacity: 0 },
      { rotation: 0, scale: 1, opacity: 1, duration: 1.5, delay: 0.3, ease: 'back.out(1.7)' }
    );
  }, []);

  // Handle mobile menu slide animation when state toggles
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.4, ease: 'power3.inOut' });
    }
  }, [isOpen]);

  const handleMouseEnter = (el: HTMLAnchorElement | null) => {
    if (!el) return;
    gsap.to(el, { color: '#e5a97e', scale: 1.05, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (el: HTMLAnchorElement | null) => {
    if (!el) return;
    gsap.to(el, { color: '#cccc', scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  const handleLogoHover = () => {
    gsap.to(logoRef.current, { rotation: 90, duration: 0.6, ease: 'power2.out' });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, { rotation: 0, duration: 0.6, ease: 'power2.out' });
  };

  const leftLinks = [
    { name: 'HOME PAGE', path: '/' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'ABOUT US', path: '/about' },
  ];

  const rightLinks = [
    { name: 'INQUIRIES', path: '/inquiries' },
    { name: 'PRICINGS', path: '/pricing' },
    { name: 'CHALLENGES', path: '/challenges' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <div 
      className="w-full md:min-h-[180px] min-h-[110px] bg-cover bg-top bg-no-repeat flex flex-col justify-start items-center pt-6 md:pt-8 px-4 select-none relative z-50"
      style={{ backgroundImage: `url('/Images/BackgroundImage.png')` }}
    >
      {/* Navigation Capsule Bar Container */}
      <div 
        ref={navRef}
        className="w-full max-w-[1100px] h-[60px] md:h-[70px] bg-[#1a1512]/80 backdrop-blur-md rounded-full border border-[#2d251e] flex items-center justify-between px-6 md:px-12 shadow-2xl relative z-50"
      >
        {/* DESKTOP ONLY: Left Side Links */}
        <div className="hidden md:flex items-center gap-10 w-[40%] justify-end">
          {leftLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              ref={(el) => { if (el) linksRef.current[idx] = el; }}
              onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className="text-[11px] font-medium tracking-[0.2em] text-[#cccc] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CENTER RESPONSIVE LOGO AREA */}
        <div className="flex md:justify-center justify-start items-center w-auto md:w-[15%]">
          <Link to="/">
            <img 
              ref={logoRef}
              src="/Images/NavbarLogo.png"
              alt="Navbar Logo" 
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
              className="h-8 w-8 md:h-9 md:w-9 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* DESKTOP ONLY: Right Side Links */}
        <div className="hidden md:flex items-center gap-10 w-[40%] justify-start">
          {rightLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              ref={(el) => { if (el) linksRef.current[idx + 3] = el; }}
              onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className="text-[11px] font-medium tracking-[0.2em] text-[#cccc] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE ONLY: Hamburger Trigger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-[#cccc] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 text-[#e5a97e]' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#cccc] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#cccc] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 text-[#e5a97e]' : ''}`} />
        </button>
      </div>

      {/* MOBILE MENU ACCORDION: Drops down when active */}
      <div 
        ref={menuRef}
        className="md:hidden w-full max-w-[calc(100%-2rem)] bg-[#1a1512]/95 border border-[#2d251e] rounded-2xl mt-2 overflow-hidden px-6 opacity-0 h-0 flex flex-col items-center justify-center shadow-2xl backdrop-blur-lg relative z-40"
      >
        <div className="flex flex-col items-center gap-6 py-6 w-full">
          {allLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-[12px] font-semibold tracking-[0.25em] text-[#cccc] hover:text-[#e5a97e] active:scale-95 transition-all duration-200 py-1 text-center w-full block"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;