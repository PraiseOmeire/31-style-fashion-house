import {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#fefcff] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold items-center mt-14">
              <img src="/31-Logo.png" height={20} width={140} />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-[#8943af] hover:bg-[#8f5cab] px-3 py-2 rounded-md text-sm font-medium"
                style={{fontFamily: "'Mozilla Headline', sans-serif"}}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-[#8943af] hover:bg-[#8c5ba7] px-3 py-2 rounded-md text-sm font-medium"
                style={{fontFamily: "'Mozilla Headline', sans-serif"}}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-[#8943af] hover:bg-[#9f55c8] px-3 py-2 rounded-md text-sm font-medium"
                style={{fontFamily: "'Mozilla Headline', sans-serif"}}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-[#8943af] hover:bg-[#7a6585] px-3 py-2 rounded-md text-sm font-medium"
                style={{fontFamily: "'Mozilla Headline', sans-serif"}}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#7a6585] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white hover:bg-[#7a6585] block px-3 py-2 rounded-md text-base font-medium"
            style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-[#7a6585] block px-3 py-2 rounded-md text-base font-medium"
            style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/blog"
            className="text-white hover:bg-[#7a6585] block px-3 py-2 rounded-md text-base font-medium"
            style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-white hover:bg-[#7a6585] block px-3 py-2 rounded-md text-base font-medium"
            style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
