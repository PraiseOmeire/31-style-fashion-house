import type {StepProps} from "../../../types/bespoke";

const Step3 = ({value, onChange}: StepProps) => {
  const options = ["2–4 weeks", "1–2 months", "Flexible"];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          style={{fontFamily: "'Mozilla Headline', sans-serif"}}
        >
          What's your timeline?
        </h3>
        <p
          className="text-gray-600"
          style={{fontFamily: "'Roboto Condensed', sans-serif"}}
        >
          When would you like your piece ready?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-4 max-w-md mx-auto">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`py-4 px-6 border-2 rounded-lg transition-all duration-200 ${
              value === option
                ? "border-[#bc8cd5] bg-[#bc8cd5] text-white"
                : "border-gray-200 text-gray-700 hover:border-[#bc8cd5] hover:shadow-md"
            }`}
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step3;
