import { useState, useEffect } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  // Handle loader completion
  const handleLoaderComplete = () => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  };

  // Page change effect (without loader for transitions)
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [currentPage, isLoading]);

  // Provide navigation context to child components
  const navigationProps = {
    currentPage,
    setCurrentPage: setCurrentPage as (page: Page) => void
  };

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'menu':
        return <MenuPage setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <GalleryPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return (
          <>
            <Header {...navigationProps} />
            <Hero />
            <About />
            <Menu setCurrentPage={setCurrentPage} />
            <Gallery />
            <Contact />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        );
    }
  };

  // Show loading screen only once
  if (isLoading) {
    return <ReloadLoader onComplete={handleLoaderComplete} duration={10000} />;
  }

  return (
    <div className="min-h-screen bg-marble-white font-poppins">
      {renderPage()}
    </div>
  );
}

export default App;
