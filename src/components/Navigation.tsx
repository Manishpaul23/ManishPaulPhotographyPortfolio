import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  // For now, hardcode isAdmin to true
  const isAdmin = true;

  const navItems = [
    { label: 'HOME', href: '#home', type: 'scroll' },
    { label: 'ABOUT', href: '#about', type: 'scroll' },
    { label: 'PORTFOLIO', href: '/portfolio', type: 'route' },
    { label: 'SERVICES', href: '#services', type: 'scroll' },
    { label: 'CONTACT', href: '#contact', type: 'scroll' },
    ...(isAdmin ? [{ label: 'ADMIN', href: '/admin', type: 'route' }] : []),
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Manish Paul Photography"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.type === 'scroll' && isHomePage ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium tracking-wider text-foreground-secondary hover:text-foreground transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.type === 'route' ? item.href : '/'}
                  className="text-sm font-medium tracking-wider text-foreground-secondary hover:text-foreground transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="py-4">
              {navItems.map((item) =>
                item.type === 'scroll' && isHomePage ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-3 text-sm font-medium tracking-wider text-foreground-secondary hover:text-foreground hover:bg-muted transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.type === 'route' ? item.href : '/'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-6 py-3 text-sm font-medium tracking-wider text-foreground-secondary hover:text-foreground hover:bg-muted transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
