
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'হোম', path: '/' },
    { name: 'বিভাগসমূহ', path: '/divisions' },
    { name: 'বাংলাদেশ সম্পর্কে', path: '/about' },
    { name: 'যোগাযোগ', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-emerald-700 leading-tight">রাব্বি হোসেন</h1>
            <span className="text-xs md:text-sm text-slate-500 poppins font-light tracking-wide uppercase">Tourist Place of Bangladesh</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors hover:text-emerald-600 ${
                  location.pathname === link.path ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 animate-fade-in-down">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-emerald-600 ${
                  location.pathname === link.path ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">মীর রাব্বি হোসেন</h2>
            <p className="text-emerald-300 opacity-80">বাংলার প্রাকৃতিক সৌন্দর্যের সন্ধান</p>
          </div>
          <div className="flex justify-center space-x-6 mb-8 poppins text-sm uppercase tracking-widest">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
          <p className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} Rabbi Hossain. Built with Google AI Studio. GitHub Pages ready.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
