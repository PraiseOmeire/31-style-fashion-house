import {FaArrowRight} from "react-icons/fa";
import {Link} from "react-router-dom";

const Academy = () => {
  const academyImages = [
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-1.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-2.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-3.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-4.jpg",
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="text-white order-2 md:order-1">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            >
              The Academy
            </h2>
            <div className="w-20 h-1 bg-[#bc8cd5] rounded-full mb-8" />
            <p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              At 31 Styles Academy, we're passionate about nurturing the next
              generation of fashion talents. Our comprehensive training programs
              cover everything from basic sewing techniques to advanced garment
              construction and design principles.
            </p>
            <p
              className="text-lg text-gray-300 leading-relaxed mb-8"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              Join us and transform your passion for fashion into professional
              skills. Learn from industry experts and become part of our growing
              community of designers.
            </p>
            {/* CTA Link */}
            <Link
              to="/academy"
              className="inline-flex items-center gap-3 text-[#bc8cd5] hover:text-white transition-colors duration-300 text-lg font-semibold group"
              style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            >
              Learn More
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>

          {/* Right - Image Grid (Staggered) */}
          <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
            {/* Left column */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={academyImages[0]}
                  alt="Academy training session"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={academyImages[2]}
                  alt="Fashion design workshop"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            {/* Right column - offset */}
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={academyImages[1]}
                  alt="Sewing techniques class"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={academyImages[3]}
                  alt="Students at work"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
