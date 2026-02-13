import {useState} from "react";
import BespokeFlow from "../bespoke-flow/BespokeFlow";
import { ScrollAnimated } from '../ScrollAnimated';

const Categories = () => {
  const [showBespokeFlow, setShowBespokeFlow] = useState(false);

  const categories = [
    {
      label: "BRIDALS",
      headline: "Designed for Your Defining Moment.",
      body: "Our bridal pieces are crafted to celebrate individuality, elegance, and timeless beauty. Each design balances refined structure with delicate detail — created to feel as unforgettable as the moment itself.\n\nFrom intimate ceremonies to grand celebrations, every piece is made with intention, precision, and care.",
      image:
        "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/bridals.png",
    },
    {
      label: "READY TO WEAR",
      headline: "Effortless Style, Every Day.",
      body: "Our ready-to-wear collection blends comfort with confident design. Thoughtfully made for movement, versatility, and expression — pieces that transition seamlessly from day to night.\n\nDesigned for women who value ease without compromising style.",
      image:
        "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1770129030/category-bespoke.jpg",
    },
    {
      label: "BESPOKE & CUSTOM",
      headline: "Made to Fit You — Perfectly.",
      body: "Bespoke pieces are created in close collaboration with you. From concept to final fitting, every detail is considered — fabric, silhouette, and finish — resulting in a garment that is uniquely yours.\n\nBecause true style begins with intention and individuality.",
      image:
        "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1770129030/category-rdw.jpg",
    },
  ];

  return (
    <section id="categories" className="pt-4 md:pt-8 pb-20 md:pb-32 px-4 md:px-16 bg-[#fefcff]">
      <div className="max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <ScrollAnimated
            key={index}
            animation="scale"
            delay={index * 100}
          >
            <div
              id={category.label === "BESPOKE & CUSTOM" ? "bespoke" : undefined}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24 md:mb-32 last:mb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-[320px] md:h-[400px] object-cover"
              />
            </div>

            {/* Text Content */}
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 1 ? "md:text-right md:ml-auto" : ""
              }`}
            >
              <div
                className={`max-w-[460px] ${
                  index % 2 === 1 ? "md:ml-auto" : ""
                }`}
              >
                {/* Label */}
                <span
                  className="text-xs tracking-widest font-light text-gray-500 uppercase block"
                  style={{fontFamily: "'Roboto Condensed', sans-serif"}}
                >
                  {category.label}
                </span>

                {/* Headline */}
                <h3
                  className="mt-4 text-3xl md:text-4xl font-bold italic text-gray-900 leading-tight"
                  style={{fontFamily: "'Playfair Display', serif"}}
                >
                  {category.headline}
                </h3>

                {/* Body */}
                <div className="mt-6 space-y-4">
                  {category.body.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-600 leading-relaxed"
                      style={{fontFamily: "'Roboto Condensed', sans-serif"}}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* CTA Button for Bespoke */}
                {category.label === "BESPOKE & CUSTOM" && (
                  <button
                    onClick={() => setShowBespokeFlow(true)}
                    className="mt-6 px-6 py-3 bg-[#bc8cd5] text-white rounded-lg hover:bg-[#897191] transition-colors duration-200"
                    style={{fontFamily: "'Roboto Condensed', sans-serif"}}
                  >
                    Start Custom Design
                  </button>
                )}
              </div>
            </div>
            </div>
          </ScrollAnimated>
        ))}
      </div>

      {/* Bespoke Flow Modal */}
      <BespokeFlow
        isOpen={showBespokeFlow}
        onClose={() => setShowBespokeFlow(false)}
      />
    </section>
  );
};

export default Categories;
