import ContactCTA from "../contact-cta/ContactCTA";

const Shop = () => {
  // Placeholder images — replace with actual Cloudinary URLs
  const catalogueImages = [
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/bridals.png",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1770129030/category-bespoke.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1770129030/category-rdw.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-1.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-2.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-3.jpg",
  ];

  return (
    <>
      {/* Part A — Catalogue Preview */}
      <section id="shop" className="py-20 md:py-28 px-4 md:px-16 bg-[#fefcff]">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            >
              The Collection
            </h2>
            <p
              className="text-xs uppercase tracking-widest text-gray-400"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              Coming Soon
            </p>
          </div>

          {/* Blurred Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {catalogueImages.map((img, i) => (
              <div
                key={i}
                className="relative rounded-lg overflow-hidden h-52 md:h-64"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover blur-sm grayscale-[30%] scale-105"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            ))}
          </div>

          {/* Transition text */}
          <p
            className="text-center mt-12 text-lg text-gray-600 max-w-lg mx-auto"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            In the meantime, let's personalise your style..
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default Shop;
