import {useState, useEffect} from "react";
import type {BespokeAnswers} from "../../types/bespoke";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Completion from "./Completion";

interface BespokeFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

const BespokeFlow = ({isOpen, onClose}: BespokeFlowProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [answers, setAnswers] = useState<BespokeAnswers>({
    occasion: "",
    style: "",
    timeline: "",
    budget: "",
    name: "",
    contact: "",
    contactType: "email",
  });

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const handleClose = () => {
    setCurrentStep(1);
    setIsComplete(false);
    setAnswers({
      occasion: "",
      style: "",
      timeline: "",
      budget: "",
      name: "",
      contact: "",
      contactType: "email",
    });
    onClose();
  };

  const handleNext = async () => {
    if (currentStep === 5) {
      // Validate Step 5
      if (!answers.name.trim() || !answers.contact.trim()) {
        alert("Please fill in both name and contact details");
        return;
      }

      // Validate format
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.contact);
      const isValidPhone = /^(\+234|0)[789][01]\d{8}$/.test(answers.contact);

      if (answers.contactType === "email" && !isValidEmail) {
        alert("Please enter a valid email address");
        return;
      }

      if (answers.contactType === "phone" && !isValidPhone) {
        alert(
          "Please enter a valid Nigerian phone number (e.g., +2348012345678 or 08012345678)",
        );
        return;
      }

      // Submit to API
      setIsSubmitting(true);
      try {
        console.log("[Frontend] Submitting bespoke inquiry:", answers);

        const response = await fetch("/api/bespoke-submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(answers),
        });

        console.log("[Frontend] Response status:", response.status);
        console.log("[Frontend] Response ok:", response.ok);

        // Step 2: Don't assume response is JSON
        let errorMessage = "Submission failed";

        if (!response.ok) {
          // Try to parse as JSON first
          const contentType = response.headers.get("content-type");
          console.log("[Frontend] Response content-type:", contentType);

          if (contentType && contentType.includes("application/json")) {
            try {
              const errorData = await response.json();
              console.log("[Frontend] Error data:", errorData);
              errorMessage = errorData.message || errorData.error || errorMessage;
            } catch (jsonError) {
              console.error("[Frontend] Failed to parse error JSON:", jsonError);
              // Fall back to text
              const errorText = await response.text();
              console.error("[Frontend] Error response text:", errorText);
              errorMessage = `Server error (${response.status}): ${errorText.substring(0, 100)}`;
            }
          } else {
            // Not JSON, get as text
            const errorText = await response.text();
            console.error("[Frontend] Non-JSON error response:", errorText);
            errorMessage = `Server error (${response.status}): ${errorText.substring(0, 100)}`;
          }

          throw new Error(errorMessage);
        }

        // Success - parse response
        const result = await response.json();
        console.log("[Frontend] Success:", result);

        setIsComplete(true);
      } catch (error) {
        console.error("[Frontend] Submission error:", error);
        alert(
          `Failed to submit your inquiry: ${error instanceof Error ? error.message : "Unknown error"}\n\nPlease try again or contact us directly at omeirederah@gmail.com`,
        );
      } finally {
        setIsSubmitting(false);
      }
      return;
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const updateAnswer = (field: keyof BespokeAnswers, value: string) => {
    setAnswers((prev) => ({...prev, [field]: value}));
  };

  const canProceed = () => {
    if (currentStep === 1) return !!answers.occasion;
    if (currentStep === 2) return !!answers.style;
    if (currentStep === 3) return !!answers.timeline;
    if (currentStep === 4) return !!answers.budget;
    if (currentStep === 5) {
      if (!answers.name.trim() || !answers.contact.trim()) return false;

      // Validate format based on contactType
      if (answers.contactType === "email") {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.contact);
      } else {
        return /^(\+234|0)[789][01]\d{8}$/.test(answers.contact);
      }
    }
    return false;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1a1a1a]/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-[#fefcff] rounded-lg shadow-2xl max-w-2xl w-full p-8 md:p-10 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {isComplete ? (
          <Completion onClose={handleClose} />
        ) : (
          <>
            {/* Progress indicator */}
            <div className="text-center mb-8">
              <p
                className="text-sm text-gray-500 uppercase tracking-wider"
                style={{fontFamily: "'Roboto Condensed', sans-serif"}}
              >
                Step {currentStep} of 5
              </p>
            </div>

            {/* Step content */}
            <div className="mb-8">
              {currentStep === 1 && (
                <Step1
                  value={answers.occasion}
                  onChange={(v) => updateAnswer("occasion", v)}
                />
              )}
              {currentStep === 2 && (
                <Step2
                  value={answers.style}
                  onChange={(v) => updateAnswer("style", v)}
                />
              )}
              {currentStep === 3 && (
                <Step3
                  value={answers.timeline}
                  onChange={(v) => updateAnswer("timeline", v)}
                />
              )}
              {currentStep === 4 && (
                <Step4
                  value={answers.budget}
                  onChange={(v) => updateAnswer("budget", v)}
                />
              )}
              {currentStep === 5 && (
                <Step5
                  answers={answers}
                  onChange={(field, value) => updateAnswer(field, value)}
                />
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-2 text-gray-600 transition-opacity duration-200 ${
                  currentStep === 1
                    ? "opacity-0 pointer-events-none"
                    : "hover:text-gray-900"
                }`}
                style={{fontFamily: "'Roboto Condensed', sans-serif"}}
              >
                Back
              </button>

              <button
                onClick={handleNext}
                disabled={!canProceed() || isSubmitting}
                className={`px-8 py-3 rounded-lg transition-all duration-200 ${
                  canProceed() && !isSubmitting
                    ? "bg-[#bc8cd5] text-white hover:bg-[#897191]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                style={{fontFamily: "'Roboto Condensed', sans-serif"}}
              >
                {isSubmitting
                  ? "Submitting..."
                  : currentStep === 5
                  ? "Submit"
                  : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BespokeFlow;
