import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import { Menu, X, Phone, Mail } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Bar (Persistent on all screens & on scroll) */}
      <div className="bg-[#005838] text-white border-b border-white/15 text-[11px] sm:text-xs py-1.5 sm:py-2 transition-all duration-300">
        <Container className="flex items-center justify-between gap-2">
          {/* Left: Phone */}
          <a
            href={`tel:+91${sbnProfile.phones[0]}`}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-white/95 hover:text-white transition-colors group shrink-0"
          >
            <span className="w-5 h-5 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary-green transition-all shadow-xs">
              <Phone size={10} />
            </span>
            <span className="font-sans font-medium tracking-wide text-[11px] sm:text-xs">
              +91 {sbnProfile.phones[0]}
            </span>
          </a>

          {/* Right: Email */}
          <a
            href={`mailto:${sbnProfile.emails[0]}`}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-white/95 hover:text-white transition-colors group shrink-0 truncate"
          >
            <span className="w-5 h-5 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary-green transition-all shadow-xs shrink-0">
              <Mail size={10} />
            </span>
            <span className="font-sans font-medium tracking-wide text-[11px] sm:text-xs truncate">
              {sbnProfile.emails[0]}
            </span>
          </a>
        </Container>
      </div>

      {/* Main Nav Bar */}
      <div className={`bg-white transition-all duration-300 ${isScrolled
        ? 'h-16 shadow-[0_4px_20px_rgba(0,106,47,0.08)] border-b border-border-green/30'
        : 'h-18 sm:h-20 border-b border-border-green/15'
        }`}>
        <Container className="h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="CIS Tech Solutions Logo"
              className="h-10 sm:h-12 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-primary-green uppercase leading-none">
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
                  `font-heading text-sm font-semibold tracking-wide transition-colors duration-200 ${isActive
                    ? 'text-primary-green font-bold'
                    : 'text-body-text hover:text-primary-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center">
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
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 right-0 bg-white border-b border-border-green/30 shadow-xl px-4 py-6 flex flex-col gap-4 z-40 transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-heading text-base font-semibold transition-colors ${isActive
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
