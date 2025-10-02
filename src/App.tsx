import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductGallery from './components/ProductGallery';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <ProductGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
