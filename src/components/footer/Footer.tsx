import {Link} from "react-router-dom";
import {FaInstagram, FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#7a6585] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1-2: Logo & Tagline */}
          <div className="md:col-span-2">
            <img
              src="/31-Logo.png"
              alt="31 Styles Fashion House"
              className="h-12 mb-4 brightness-0 invert"
            />
            <p
              className="text-white/80 leading-relaxed mb-4"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              Redefining style through exquisite craftsmanship and innovative
              design. Made in Nigeria, dedicated to elegance.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#bc8cd5] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#bc8cd5] transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#bc8cd5] transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#bc8cd5] transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            >
              Quick Links
            </h3>
            <ul
              className="space-y-2"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  The Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            >
              Our Services
            </h3>
            <ul
              className="space-y-2"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              <li>
                <Link
                  to="/bridals"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Bridals
                </Link>
              </li>
              <li>
                <Link
                  to="/ready-to-wear"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Ready-to-Wear
                </Link>
              </li>
              <li>
                <Link
                  to="/custom"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Bespoke/Custom
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Fashion Training
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-6">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            <p>
              &copy; {currentYear} 31 Styles Fashion House. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
