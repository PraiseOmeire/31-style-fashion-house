import {useState, useEffect} from "react";
import type {BespokeAnswers} from "../../../types/bespoke";

interface Step5Props {
  answers: BespokeAnswers;
  onChange: (field: keyof BespokeAnswers, value: string) => void;
}

const Step5 = ({answers, onChange}: Step5Props) => {
  const [touched, setTouched] = useState(false);

  // Validation functions
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return /^(\+234|0)[789][01]\d{8}$/.test(phone);
  };

  // Check if contact field is valid
  const isContactValid = () => {
    if (!answers.contact.trim()) return true; // Don't show error for empty field
    if (answers.contactType === "email") {
      return isValidEmail(answers.contact);
    } else {
      return isValidPhone(answers.contact);
    }
  };

  // Clear contact field when switching contact type
  useEffect(() => {
    if (touched) {
      onChange("contact", "");
    }
  }, [answers.contactType]);

  const handleContactTypeChange = (type: "email" | "phone") => {
    onChange("contactType", type);
    setTouched(true);
  };

  const handleContactChange = (value: string) => {
    onChange("contact", value);
    setTouched(true);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          style={{fontFamily: "'Mozilla Headline', sans-serif"}}
        >
          Let's connect
        </h3>
        <p
          className="text-gray-600"
          style={{fontFamily: "'Roboto Condensed', sans-serif"}}
        >
          We'll reach out to discuss your custom design
        </p>
      </div>

      <div className="space-y-4 pt-4 max-w-md mx-auto">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={answers.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#bc8cd5] focus:outline-none transition-colors duration-200"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-3"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            Contact Method
          </label>

          {/* Contact Type Selector */}
          <div className="flex gap-3 mb-4">
            <button
              type="button"
              onClick={() => handleContactTypeChange("email")}
              className={`flex-1 py-3 px-4 border-2 rounded-lg transition-all duration-200 ${
                answers.contactType === "email"
                  ? "bg-[#bc8cd5] text-white border-[#bc8cd5]"
                  : "border-gray-200 text-gray-700 hover:border-[#bc8cd5]"
              }`}
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => handleContactTypeChange("phone")}
              className={`flex-1 py-3 px-4 border-2 rounded-lg transition-all duration-200 ${
                answers.contactType === "phone"
                  ? "bg-[#bc8cd5] text-white border-[#bc8cd5]"
                  : "border-gray-200 text-gray-700 hover:border-[#bc8cd5]"
              }`}
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              Phone
            </button>
          </div>

          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700 mb-2"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            {answers.contactType === "email" ? "Email Address" : "Phone Number"}
          </label>
          <input
            id="contact"
            type="text"
            value={answers.contact}
            onChange={(e) => handleContactChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#bc8cd5] focus:outline-none transition-colors duration-200"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            placeholder={
              answers.contactType === "email"
                ? "your.email@example.com"
                : "+234 XXX XXX XXXX"
            }
          />

          {/* Validation Error Message */}
          {touched && answers.contact.trim() && !isContactValid() && (
            <p
              className="mt-1 text-sm text-red-600"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              {answers.contactType === "email"
                ? "Please enter a valid email address"
                : "Please enter a valid Nigerian phone number (e.g., +2348012345678 or 08012345678)"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step5;
