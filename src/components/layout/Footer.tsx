import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const footerLinks = [
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/vision', label: 'Vision' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/partner', label: 'Partner' },
  { href: '/build-with-us', label: 'Build With Us' },
  { href: '/updates', label: 'Updates' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand - ANKERRA Wordmark */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block hover:opacity-70 transition-opacity"
            >
              <span className="text-foreground font-medium text-sm tracking-[0.1em]">
                ANKERRA
              </span>
            </Link>
            <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
              We build with care, clarity, and conviction.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-sm mb-4">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ankerra Ventures. All rights reserved.
            </p>
            {/* Hidden Admin Access - Triple click the dot */}
            <button
              onClick={() => {
                const newCount = clickCount + 1;
                setClickCount(newCount);
                if (newCount >= 3) {
                  navigate('/admin');
                  setClickCount(0);
                }
              }}
              className="w-2 h-2 rounded-full bg-border hover:bg-primary/20 transition-colors opacity-30 hover:opacity-100"
              aria-label="Admin"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
