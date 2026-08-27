import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { sbnProfile } from '../../data/sbn_data';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-[#0B1710] text-white pt-16 pb-8 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-flex items-center gap-3 self-start group">
              <div className="bg-white px-3.5 py-2 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="CIS Tech Solutions Logo"
                  className="h-10 md:h-12 w-auto object-contain shrink-0"
                />
              </div>
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-fresh-green group-hover:text-white transition-colors">
                CISTECH SOLUTIONS
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mt-2">
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
                    className="text-white/75 hover:text-fresh-green text-sm transition-colors duration-200"
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
                    className="text-white/75 hover:text-fresh-green text-sm transition-colors duration-200"
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
            <div className="flex flex-col gap-3.5">
              {/* Address */}
              <div className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                <MapPin className="w-4 h-4 text-fresh-green shrink-0 mt-0.5" />
                <span>{sbnProfile.address}</span>
              </div>

              {/* Phone */}
              {sbnProfile.phones.map((phone, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/75 text-sm">
                  <Phone className="w-4 h-4 text-fresh-green shrink-0" />
                  <a href={`tel:+91${phone}`} className="hover:text-fresh-green transition-colors">
                    +91 {phone}
                  </a>
                </div>
              ))}

              {/* Email */}
              <div className="flex items-center gap-3 text-white/75 text-sm">
                <Mail className="w-4 h-4 text-fresh-green shrink-0" />
                <a href={`mailto:${sbnProfile.emails[0]}`} className="hover:text-fresh-green transition-colors">
                  {sbnProfile.emails[0]}
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                <Clock className="w-4 h-4 text-fresh-green shrink-0 mt-0.5" />
                <div>
                  <p>{sbnProfile.hours.days}</p>
                  <p className="mt-0.5">{sbnProfile.hours.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} CIS Tech Solutions. All rights reserved.</p>
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
