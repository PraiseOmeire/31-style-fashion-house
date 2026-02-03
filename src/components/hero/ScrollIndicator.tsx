import {FaChevronDown} from "react-icons/fa";

const ScrollIndicator = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer animate-bounce"
      onClick={handleScrollDown}
      role="button"
      aria-label="Scroll down to see more"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleScrollDown()}
    >
      <span
        className="text-white text-xs uppercase tracking-widest"
        style={{fontFamily: "'Roboto Condensed', sans-serif"}}
      >
        Scroll Down
      </span>
      <FaChevronDown className="text-white text-2xl" />
    </div>
  );
};

export default ScrollIndicator;
