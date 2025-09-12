import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ReloadLoader from './components/ReloadLoader';

type Page = 'home' | 'about' | 'menu' | 'gallery' | 'contact';

// Home page component
function HomePage() {
  const navigate = useNavigate();
  
  const setCurrentPage = (page: Page) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  return (
    <>
      <Header currentPage="home" setCurrentPage={setCurrentPage} />
      <Hero />
      <About />
      <Menu setCurrentPage={setCurrentPage} />
      <Gallery />
      <Contact />
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

// App Routes component
function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const setCurrentPage = (page: Page) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage setCurrentPage={setCurrentPage} />} />
      <Route path="/menu" element={<MenuPage setCurrentPage={setCurrentPage} />} />
      <Route path="/gallery" element={<GalleryPage setCurrentPage={setCurrentPage} />} />
      <Route path="/contact" element={<ContactPage setCurrentPage={setCurrentPage} />} />
    </Routes>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Handle loader completion
  const handleLoaderComplete = () => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  };

  // Show loading screen only once
  if (isLoading) {
    return <ReloadLoader onComplete={handleLoaderComplete} duration={10000} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-marble-white font-poppins">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
