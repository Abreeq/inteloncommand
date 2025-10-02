import { useState, useEffect } from 'react';
import { Menu, X, Shield, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-around h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img src="https://inteloncommand.com/public/assets/images/logo.png" alt="Logo" className="w-12 h-12" />
            <div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary'
              }`}>
                I.O.C.
              </span>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary'
              }`}>
                Intel On Command
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-tertiary ${
                  isScrolled ? 'text-primary' : 'text-primary'
                }`}
              >
                {link.name}
              </a>
            ))} 
            <a
              href="#contact"
              className="px-6 py-2.5 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-tertiary transition-all duration-300"
            >
            <ShoppingCart className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-xl">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-700 font-medium hover:text-blue-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-3 bg-blue-600 text-white text-center rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
