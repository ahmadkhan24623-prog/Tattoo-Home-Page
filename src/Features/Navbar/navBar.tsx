import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const NavBar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
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

  return (
    <div 
      className="w-full min-h-[180px] bg-cover bg-top bg-no-repeat flex justify-center items-start pt-8 px-4 select-none"
      style={{ backgroundImage: `url('/Images/BackgroundImage.png')` }}
    >
      <div 
        ref={navRef}
        className="w-full max-w-[1100px] h-[70px] bg-[#1a1512]/80 backdrop-blur-md rounded-full border border-[#2d251e] flex items-center justify-between px-12 shadow-2xl"
      >
        {/* Left Side Links */}
        <div className="flex items-center gap-10 w-[40%] justify-end">
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

        {/* Center Logo */}
        <div className="flex justify-center items-center w-[15%]">
          <Link to="/">
            <img 
              ref={logoRef}
             src="/Images/NavbarLogo.png"
              alt="Navbar Logo" 
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
              className="h-9 w-9 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-10 w-[40%] justify-start">
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
      </div>
    </div>
  );
};

export default NavBar;