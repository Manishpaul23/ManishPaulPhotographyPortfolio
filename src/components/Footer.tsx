import { Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-tertiary border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={logo}
              alt="Manish Paul Photography"
              className="h-16 w-auto"
            />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-foreground-secondary text-sm">
              © {currentYear} Manish Paul Photography. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-1 mt-2">
              <span className="text-foreground-muted text-xs">Made with</span>
              <Heart className="text-red-500" size={12} />
              <span className="text-foreground-muted text-xs">in Bangalore</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center md:justify-end space-x-6">
            {[
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;