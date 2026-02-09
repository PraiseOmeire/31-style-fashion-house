interface CompletionProps {
  onClose: () => void;
}

const Completion = ({onClose}: CompletionProps) => {
  return (
    <div className="text-center space-y-6 py-8">
      <div className="w-16 h-16 bg-[#bc8cd5] rounded-full flex items-center justify-center mx-auto">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <div>
        <h3
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          style={{fontFamily: "'Mozilla Headline', sans-serif"}}
        >
          We've received your inquiry
        </h3>
        <p
          className="text-gray-600 max-w-md mx-auto leading-relaxed"
          style={{fontFamily: "'Roboto Condensed', sans-serif"}}
        >
          Thank you for choosing 31 Styles Fashion House. We'll reach out within
          24 hours to begin crafting your custom design.
        </p>
      </div>

      <button
        onClick={onClose}
        className="mt-6 px-8 py-3 bg-[#bc8cd5] text-white rounded-lg hover:bg-[#897191] transition-colors duration-200"
        style={{fontFamily: "'Roboto Condensed', sans-serif"}}
      >
        Close
      </button>
    </div>
  );
};

export default Completion;
