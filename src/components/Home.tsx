import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import HeroModeva from "./hero/HeroModeva";
import Welcome from "./welcome/Welcome";
import Categories from "./categories/Categories";
import Academy from "./academy/Academy";
import CreativeDirector from "./creative-director/CreativeDirector";
import Testimonials from "./testimonials/Testimonials";
// import Shop from "./shop/Shop";
import ContactCTA from "./contact-cta/ContactCTA";
import Footer from "./footer/Footer";
import IntentSelector from "./intent/IntentSelector";
import IntentSwitcher from "./intent/IntentSwitcher";
import {useIntent, scrollToSection} from "../hooks/useIntent";

const DISMISS_KEY = "31styles_selector_dismissed";

const Home = () => {
  const [useModeva, setUseModeva] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {intent, setIntent, clearIntent, config, isFirstVisit} = useIntent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [selectorDismissed, setSelectorDismissed] = useState(
    () => sessionStorage.getItem(DISMISS_KEY) === "true",
  );

  const showSelector = isFirstVisit && !selectorDismissed;

  const handleIntentSelect = (newIntent: Parameters<typeof setIntent>[0]) => {
    setIntent(newIntent);
    setSelectorDismissed(false);
  };

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "true");
    setSelectorDismissed(true);
  };

  const handleClearIntent = () => {
    clearIntent();
    setSelectorDismissed(false);
  };

  return (
    <>
      {/* Toggle button for testing (remove in production) */}
      <button
        onClick={() => setUseModeva(!useModeva)}
        className="fixed top-20 right-4 z-50 bg-[#bc8cd5] hover:bg-[#897191] text-white px-4 py-2 rounded shadow-lg transition-colors duration-300"
        style={{fontFamily: "'Roboto Condensed', sans-serif"}}
      >
        {useModeva ? "Switch to Video Hero" : "Switch to MODEVA Hero"}
      </button>

      {useModeva ? (
        <HeroModeva />
      ) : (
        <div className="relative h-screen w-full bg-[#fff]">
          <div className={`relative h-full overflow-hidden transition-all duration-300 ${
            isScrolled ? "md:mx-16" : "md:mx-0"
          }`}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 object-cover w-full h-full"
            >
              <source
                src="https://res.cloudinary.com/dzfcy2b1x/video/upload/f_mp4,q_auto/v1755619578/31_styles_header.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center px-4">
                <h1
                  className="animate-fade-rise-gradient text-5xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wide"
                  style={{fontFamily: "'Space Grotesk', sans-serif"}}
                >
                  STYLE, REDEFINED.
                </h1>
                <p
                  className="animate-fade-rise-delay-1 mt-6 text-lg md:text-xl text-gray-200 font-medium uppercase tracking-wider max-w-xl mx-auto"
                  style={{fontFamily: "'Inter', sans-serif"}}
                >
                  Crafted silhouettes for the bold.
                  <br />
                  Designed for those who move differently.
                </p>

                {/* Intent-aware CTA */}
                {intent && config ? (
                  <button
                    onClick={() => scrollToSection(config.scrollTarget)}
                    className="animate-fade-rise-delay-2 inline-block mt-8 text-white text-lg tracking-wide border-b border-white pb-1 hover:border-[#bc8cd5] hover:text-[#bc8cd5] transition-all duration-300 cursor-pointer bg-transparent"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  >
                    {config.ctaText}
                  </button>
                ) : (
                  <Link
                    to="/collection"
                    className="animate-fade-rise-delay-2 inline-block mt-8 text-white text-lg tracking-wide border-b border-white pb-1 hover:border-[#bc8cd5] hover:text-[#bc8cd5] transition-all duration-300"
                    style={{fontFamily: "'Inter', sans-serif"}}
                  >
                    Explore the Collection
                  </Link>
                )}
              </div>
            </div>

            {/* Intent Switcher pill */}
            {(intent || selectorDismissed) && (
              <IntentSwitcher intent={intent} onClear={handleClearIntent} />
            )}
          </div>
        </div>
      )}

      <Welcome />
      <Categories />
      <Academy />
      <CreativeDirector />
      <Testimonials />
      {/* <Shop /> */}
      <ContactCTA />
      <Footer />

      {/* Intent Selector overlay */}
      {showSelector && (
        <IntentSelector
          onSelect={handleIntentSelect}
          onDismiss={handleDismiss}
        />
      )}
    </>
  );
};

export default Home;
