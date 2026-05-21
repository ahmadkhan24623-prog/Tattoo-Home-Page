import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './Features/Main/HeroSection';
import LogoBar from './Features/Main/LogoBar'; 
import ProcessSection from './Features/Main/ProcessSection'; 

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <HeroSection />
      <LogoBar /> 
      <ProcessSection /> 
    </div>
  );
};

const Portfolio = () => <div className="text-center text-white mt-20 tracking-widest font-light text-sm">PORTFOLIO SECTION</div>;
const About = () => <div className="text-center text-white mt-20 tracking-widest font-light text-sm">ABOUT US SECTION</div>;
const Inquiries = () => <div className="text-center text-white mt-20 tracking-widest font-light text-sm">INQUIRIES FORM SECTION</div>;
const Pricing = () => <div className="text-center text-white mt-20 tracking-widest font-light text-sm">PRICING PACKAGES SECTION</div>;
const Challenges = () => <div className="text-center text-white mt-20 tracking-widest font-light text-sm">CHALLENGES SECTION</div>;

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/inquiries" element={<Inquiries />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/challenges" element={<Challenges />} />
    </Routes>
  );
};

export default AppRoutes;