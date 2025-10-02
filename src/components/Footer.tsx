import { Heart, Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-textSecondary relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 via-secondary-dark/10 to-tertiary-dark/20 pointer-events-none"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand section */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-3xl font-bold text-tertiary mb-2 hover:text-secondary transition-colors duration-300">
                I.O.C. Intel On Command
              </h3>
              <p className="text-textSecondary mb-4 leading-relaxed">
                Pioneering innovative solutions at the intersection of medical science and information technology
                since 2021. Serving clients globally with excellence.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Heart className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-textSecondary">Saving lives through technology</span>
              </div>
              {/* Social icons */}
              <div className="flex gap-4 mt-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-tertiary font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Services', 'Products', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="flex items-center gap-2 text-textSecondary hover:text-tertiary transition-colors duration-300 group"
                    >
                      <span className="w-0 h-0.5 bg-secondary group-hover:w-3 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-tertiary font-semibold mb-4">Our Services</h4>
              <ul className="space-y-3">
                {['Medical Records', 'Document Storage', 'Digital IDs', 'Passport Services'].map((service) => (
                  <li key={service} className="text-textSecondary text-sm hover:text-secondary transition-colors duration-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-primary-dark/40">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-textSecondary text-sm">
                © {new Date().getFullYear()} I.O.C. Intel On Command LLC. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-textSecondary">
                <Shield className="w-4 h-4 animate-pulse" />
                <span>Secure & HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
