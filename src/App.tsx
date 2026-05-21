import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Features/Navbar/navBar';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-[#0d0a08] text-gray-200 overflow-x-hidden font-sans relative flex flex-col">
        
        {/* Background Texture Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none z-0 opacity-15"
          style={{ backgroundImage: `url('/Images/BackgroundImage.png')` }}
        />

        {/* Core Content Layer */}
        <div className="relative z-10 w-full flex flex-col flex-grow">
          <NavBar />
          <main className="w-full flex-grow flex items-center justify-center">
            <AppRoutes />
          </main>
        </div>

      </div>
    </Router>
  );
}

export default App;
