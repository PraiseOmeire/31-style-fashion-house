export interface BespokeAnswers {
  occasion: string;
  style: string;
  timeline: string;
  budget: string;
  name: string;
  contact: string;
  contactType: "email" | "phone";
}

export interface StepProps {
  value: string;
  onChange: (value: string) => void;
}
