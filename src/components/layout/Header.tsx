import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { sbnProfile } from '../../data/sbn_data';

export function Header() {
  const isScrolled = useScrollHeader(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled
          ? 'h-16 shadow-[0_4px_20px_rgba(0,106,47,0.05)] border-b border-border-green/30'
          : 'h-20 border-b border-border-green/10'
      }`}
    >
      <Container className="h-full flex items-center justify-between">
        {/* Logo & Brand Title */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="CIS Tech Solutions Logo"
            className={`w-auto object-contain shrink-0 transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? 'h-10 md:h-11' : 'h-12 md:h-14'
            }`}
          />
          <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-primary-green group-hover:text-deep-green transition-colors">
            CISTECH SOLUTIONS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `font-heading text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-green'
                    : 'text-body-text hover:text-primary-green'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:+91${sbnProfile.phones[0]}`} className="text-body-text hover:text-primary-green transition-colors flex items-center gap-1 text-sm font-semibold">
            <Phone size={14} className="text-primary-green" />
            <span>+91 {sbnProfile.phones[0]}</span>
          </a>
          <Link to="/contact">
            <Button variant="primary">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden p-2 text-dark-text hover:text-primary-green transition-colors duration-200 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 right-0 bg-white border-b border-border-green/30 shadow-lg px-4 py-6 flex flex-col gap-4 z-40 transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-heading text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-light-green text-primary-green'
                      : 'text-body-text hover:bg-soft-bg hover:text-primary-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <hr className="border-border-green/20" />
          <div className="flex flex-col gap-3">
            <a href={`tel:+91${sbnProfile.phones[0]}`} className="px-3 py-2 text-body-text flex items-center gap-2 text-sm font-semibold">
              <Phone size={14} className="text-primary-green" />
              <span>Call +91 {sbnProfile.phones[0]}</span>
            </a>
            <Link to="/contact" className="w-full">
              <Button variant="primary" className="w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
