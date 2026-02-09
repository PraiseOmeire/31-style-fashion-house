import {Link} from "react-router-dom";

const Academy = () => {
  const academyImages = [
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-1.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-2.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-3.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-4.jpg",
  ];

  const learningTopics = [
    "Sewing & garment construction",
    "Pattern drafting & fitting",
    "Fabric selection & finishing",
    "Design fundamentals",
  ];

  return (
    <section id="academy" className="py-20 md:py-32 px-4 md:px-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text Content */}
          <div className="text-white order-2 md:order-1">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            >
              Training the Next Generation of Designers.
            </h2>
            <div className="w-20 h-1 bg-[#bc8cd5] rounded-full mb-8" />

            {/* Body Text - 3 separate paragraphs */}
            <div className="space-y-5 mb-10">
              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{fontFamily: "'Roboto Condensed', sans-serif"}}
              >
                At 31 Styles Academy, we train aspiring designers in the art and
                discipline of fashion.
              </p>
              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{fontFamily: "'Roboto Condensed', sans-serif"}}
              >
                Our programs cover everything from foundational sewing
                techniques to advanced garment construction and design thinking.
              </p>
              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{fontFamily: "'Roboto Condensed', sans-serif"}}
              >
                You'll learn hands-on, guided by industry professionals, in a
                space built for growth, practice, and confidence.
              </p>
            </div>

            {/* Learning List */}
            <div className="mb-10">
              <h4
                className="text-xs tracking-widest text-gray-400 uppercase mb-4"
                style={{fontFamily: "'Roboto Condensed', sans-serif"}}
              >
                What You'll Learn
              </h4>
              <ul className="space-y-2">
                {learningTopics.map((topic, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-base"
                    style={{fontFamily: "'Roboto Condensed', sans-serif"}}
                  >
                    • {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Link */}
            <Link
              to="/academy"
              className="inline-flex items-center gap-2 text-[#bc8cd5] hover:text-white transition-colors duration-300 text-lg font-medium group border-b border-transparent hover:border-[#bc8cd5] pb-1"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              View the Academy Program →
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Right - Image Grid (Staggered) */}
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Left column */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={academyImages[0]}
                    alt="Academy training session"
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={academyImages[2]}
                    alt="Fashion design workshop"
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              {/* Right column - offset */}
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={academyImages[1]}
                    alt="Sewing techniques class"
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={academyImages[3]}
                    alt="Students at work"
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
            {/* Image Caption */}
            <p
              className="text-sm text-gray-500 mt-4 text-center italic"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              Hands-on training at 31 Styles Academy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
