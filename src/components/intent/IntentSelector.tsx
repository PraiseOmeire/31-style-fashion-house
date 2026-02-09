import {useState} from "react";
import type {UserIntent} from "../../types/intent";
import {INTENT_CONFIG} from "../../types/intent";
import {scrollToSection} from "../../hooks/useIntent";

interface IntentSelectorProps {
  onSelect: (intent: UserIntent) => void;
  onDismiss: () => void;
}

const intents: UserIntent[] = ["shop", "academy", "bespoke"];
const delayClasses = [
  "animate-fade-rise-delay-1",
  "animate-fade-rise-delay-2",
  "animate-fade-rise-delay-3",
];

const IntentSelector = ({onSelect, onDismiss}: IntentSelectorProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleSelect = (intent: UserIntent) => {
    setIsClosing(true);
    setTimeout(() => {
      onSelect(intent);
      scrollToSection(INTENT_CONFIG[intent].scrollTarget);
    }, 300);
  };

  const handleDismiss = () => {
    setIsClosing(true);
    setTimeout(() => {
      onDismiss();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1a1a1a]/80 backdrop-blur-sm" />

      {/* Card */}
      <div className="relative animate-fade-rise bg-[#fefcff] rounded-lg shadow-2xl p-8 md:p-10 max-w-2xl w-full">
        {/* Heading */}
        <h2
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2"
          style={{fontFamily: "'Mozilla Headline', sans-serif"}}
        >
          What brings you here?
        </h2>
        <p
          className="text-sm text-gray-500 text-center mb-8"
          style={{fontFamily: "'Roboto Condensed', sans-serif"}}
        >
          Choose your focus. You can change this anytime.
        </p>

        {/* Options */}
        <div className="flex flex-col md:flex-row gap-4">
          {intents.map((intent, index) => {
            const config = INTENT_CONFIG[intent];
            const isDisabled = intent === "shop";
            return (
              <button
                key={intent}
                onClick={() => !isDisabled && handleSelect(intent)}
                className={`${delayClasses[index]} flex-1 border border-gray-200 rounded-lg p-6 text-left transition-all duration-200 ${
                  isDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:border-[#bc8cd5] hover:shadow-lg hover:scale-[1.02]"
                }`}
              >
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{fontFamily: "'Mozilla Headline', sans-serif"}}
                >
                  {config.label}
                </h3>
                <p
                  className="text-sm text-gray-600"
                  style={{fontFamily: "'Roboto Condensed', sans-serif"}}
                >
                  {isDisabled ? "Coming Soon" : config.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dismiss */}
        <div className="text-center mt-8">
          <button
            onClick={handleDismiss}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            Just browsing
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntentSelector;
