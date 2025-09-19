import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FallingText from './components/FallingText';
import SEOHead from './components/SEOHead';
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
      <SEOHead
        title="Caffeine Cove - Where Warmth Meets Taste | Premium Café in Surat"
        description="Caffeine Cove - Modern minimalist café offering premium coffee, fresh food, and warm atmosphere. Where warmth meets taste in every cup. Visit us in Surat."
        keywords="caffeine cove, coffee shop, café, espresso, latte, food menu, cozy atmosphere, premium coffee, surat cafe"
        canonicalUrl="https://caffeinecove.in/"
        ogTitle="Caffeine Cove - Where Warmth Meets Taste"
        ogDescription="Modern minimalist café offering premium coffee, fresh food, and warm atmosphere. Experience the perfect blend of comfort and quality."
        currentPage="home"
      />
      <Header currentPage="home" setCurrentPage={setCurrentPage} />
      <Hero />
      <About />
      <Menu setCurrentPage={setCurrentPage} />
      
      {/* Interactive Falling Text Section */}
      <section className="py-16 sm:py-20 bg-soft-beige">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-bold text-coffee mb-3 sm:mb-4 md:mb-6">
                What Our Customers Love Most
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-natural-wood mx-auto mb-4 sm:mb-6 md:mb-8"></div>
              <p className="text-sm sm:text-base md:text-lg text-coffee/70 font-poppins max-w-2xl mx-auto px-4 mb-8">
                Discover our most popular drinks and dishes - click to see them come to life!
              </p>
            </div>
            
            <div className="bg-marble-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
              <div className="h-64 sm:h-80 md:h-96">
                <FallingText
                  text={`Espresso, Americano, Latte, Mocha, Cold Brew, Pink Paradise, Smokey Butter, Caramel Frappe, Mont Blanc, Pizza, Pasta, Cheese Cake, Wrap, Sandwich`}
                  highlightWords={["Espresso", "Latte", "Cold", "Brew", "Smokey", "Butter", "Mont", "Blanc", "Pasta ", "Cheese", "Cake"]}
                  trigger="hover"
                  backgroundColor="transparent"
                  wireframes={false}
                  gravity={0.56}
                  fontSize="clamp(1rem, 2.5vw, 2rem)"
                  mouseConstraintStiffness={0.9}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
