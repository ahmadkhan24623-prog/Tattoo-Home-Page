import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Features/Navbar/navBar';
import AppRoutes from './AppRoutes';
// import ProcessSection from './Features/Main/ProcessSection'; 
import TestimonialsSection from './Features/Main/TestimonialsSection'; 
import FaqSection from './Features/Main/FaqSection'; 
import Footer from './Features/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-[#0d0a08] text-gray-200 overflow-x-hidden font-sans relative flex flex-col">
        
        {/* Background Color */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none z-0 opacity-15"
          style={{ backgroundImage: `url('/Images/BackgroundImage.png')` }}
        />

        {/*  Content Layer */}
        <div className="relative z-10 w-full flex flex-col flex-grow">
          <NavBar />
          
          <main className="w-full flex-grow flex flex-col items-center justify-center">
            {/* Main view layouts & routing */}
            <AppRoutes />

            {/*  Slider Section */}
            <TestimonialsSection />

            {/* FAQ Section */}
            <FaqSection />

            <Footer />
          </main>
        </div>

      </div>
    </Router>
  );
}

export default App;