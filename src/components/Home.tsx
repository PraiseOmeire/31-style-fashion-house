import {useState, useEffect} from "react";

import About from "./About";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true when user scrolls past 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative h-screen w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 object-cover w-full h-full transition-all duration-300 ${
            isScrolled ? "md:px-16" : "md:px-0"
          }`}
        >
          <source
            src="https://res.cloudinary.com/dzfcy2b1x/video/upload/f_mp4,q_auto/v1755619578/31_styles_header.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1
              className="text-5xl md:text-9xl font-bold text-gray-300 uppercase tracking-wide animate-gradient"
              style={{fontFamily: "'Mozilla Headline',  sans-serif"}}
            >
              Redefining Style
            </h1>
            <p className="mt-4 text-md md:text-2xl text-gray-200 animate-gradient">
              Every stitch tells a story. Designed for the bold, worn by the
              fearless.
            </p>
          </div>
        </div>
      </div>

      <About />
      {/* <Categories /> */}
      {/* <Academy /> */}
    </>
  );
};

export default Home;
