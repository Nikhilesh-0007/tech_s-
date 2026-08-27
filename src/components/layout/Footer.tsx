import { Link } from 'react-router-dom';
import { sbnProfile } from '../../data/sbn_data';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-deep-green text-white pt-16 pb-8 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 self-start group">
              <img
                src="/logo.png"
                alt="CIS Tech Solutions Logo"
                className="h-10 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-102"
              />
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
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              {sbnProfile.address}
            </p>
            {sbnProfile.phones.map((phone, idx) => (
              <p key={idx} className="text-white/75 text-sm mb-1.5">
                <span className="text-white/45">Phone:</span>{' '}
                <a href={`tel:+91${phone}`} className="hover:text-fresh-green transition-colors">
                  +91 {phone}
                </a>
              </p>
            ))}
            <p className="text-white/75 text-sm">
              <span className="text-white/45">Email:</span>{' '}
              <a href={`mailto:${sbnProfile.emails[0]}`} className="hover:text-fresh-green transition-colors">
                {sbnProfile.emails[0]}
              </a>
            </p>
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
