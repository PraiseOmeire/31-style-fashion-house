import {useState, useEffect} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";
import { ScrollAnimated } from '../ScrollAnimated';

const PLACEHOLDER_TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    text: "31 Styles created the wedding dress of my dreams. The attention to detail was extraordinary, and I felt like a queen on my special day. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Adaeze Okonkwo",
    role: "Customer",
    text: "Exceptional craftsmanship and service. Every piece I've purchased from 31 Styles feels special and unique. The quality is unmatched.",
    rating: 5,
  },
  {
    id: 3,
    name: "Funke Adeyemi",
    role: "Fashion Enthusiast",
    text: "A true gem in the Nigerian fashion scene. The bespoke service exceeded all my expectations. They truly understand how to bring your vision to life.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = PLACEHOLDER_TESTIMONIALS;

  // Auto-rotate
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000); // 5 seconds per testimonial

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-16 bg-[#fefcff]">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimated animation="fade-up">
          <h2
            className="text-4xl md:text-6xl font-bold text-center mb-12"
            style={{fontFamily: "'Mozilla Headline', sans-serif"}}
          >
            What Our Clients Say
          </h2>
        </ScrollAnimated>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{transform: `translateX(-${current * 100}%)`}}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-[#bc8cd5] hover:bg-[#897191] text-white p-3 rounded-full transition-colors duration-300 hidden md:block"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-[#bc8cd5] hover:bg-[#897191] text-white p-3 rounded-full transition-colors duration-300 hidden md:block"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-[#bc8cd5] w-8"
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
