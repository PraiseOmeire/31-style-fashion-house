import {FaQuoteLeft, FaStar} from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image?: string;
  text: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({testimonial}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500">
      {/* Quote Icon */}
      <div className="text-[#bc8cd5] mb-6">
        <FaQuoteLeft className="text-4xl opacity-50" />
      </div>

      {/* Testimonial Text */}
      <p
        className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-700"
        style={{fontFamily: "'Roboto Condensed', sans-serif"}}
      >
        "{testimonial.text}"
      </p>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-xl ${
              i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-4">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#bc8cd5] flex items-center justify-center text-white text-2xl font-bold">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <p
            className="font-bold text-lg"
            style={{fontFamily: "'Mozilla Headline', sans-serif"}}
          >
            {testimonial.name}
          </p>
          <p
            className="text-gray-600"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
