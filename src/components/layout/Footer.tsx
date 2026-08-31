import { Link } from 'react-router-dom';
import { sbnProfile } from '../../data/sbn_data';
import { Container } from './Container';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#080d0a] text-white pt-16 pb-8 border-t-2 border-primary-green/40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-4 group self-start">
              <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="CISTECH Solutions Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-wider text-white uppercase leading-none">
                  CISTECH
                </span>
                <span className="font-heading font-bold text-xs tracking-widest text-fresh-green uppercase mt-1.5">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mt-2">
              {sbnProfile.descriptor}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-fresh-green mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Products', href: '/products' },
                { label: 'Contact', href: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-fresh-green mb-5">
              Core Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Hardware Rentals',
                'OS Flashing & Upgrades',
                'Network Diagnostics',
                'Server Room Cabling',
                'Sourcing & Supply',
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-fresh-green mb-5">
              Contact Details
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-gray-200">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-fresh-green shrink-0 mt-1" />
                <p className="leading-relaxed text-xs sm:text-sm text-gray-300">{sbnProfile.address}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-fresh-green shrink-0" />
                <div className="flex flex-wrap gap-x-2 text-xs sm:text-sm">
                  {sbnProfile.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:+91${phone}`} className="text-gray-200 hover:text-white transition-colors">
                      +91 {phone}{idx < sbnProfile.phones.length - 1 ? ',' : ''}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <Mail size={15} className="text-fresh-green shrink-0" />
                <a href={`mailto:${sbnProfile.emails[0]}`} className="text-gray-200 hover:text-white transition-colors">
                  {sbnProfile.emails[0]}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-400 pt-1">
                <Clock size={15} className="text-fresh-green shrink-0 mt-0.5" />
                <div>
                  <p>{sbnProfile.hours.days}</p>
                  <p>{sbnProfile.hours.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} CISTECH Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;

