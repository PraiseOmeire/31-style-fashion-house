import {Link} from "react-router-dom";

const WhatWeDo = () => {
  const categories = [
    {
      title: "Bridals",
      image:
        "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/bridals.png",
      description: "Exquisite bridal gowns crafted for your special day",
      link: "/bridals",
    },
    {
      title: "Ready-to-Wear",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
      description: "Fashion-forward pieces for every occasion",
      link: "/ready-to-wear",
    },
    {
      title: "Bespoke/Custom",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      description: "Tailored exclusively to your unique vision",
      link: "/custom",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-16 bg-[#fefcff]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-lg h-96 shadow-lg"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
              />

              {/* Overlay - always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <h3
                  className="text-white text-3xl font-bold mb-2"
                  style={{fontFamily: "'Mozilla Headline', sans-serif"}}
                >
                  {category.title}
                </h3>
                <p
                  className="text-white/90 text-sm"
                  style={{fontFamily: "'Roboto Condensed', sans-serif"}}
                >
                  {category.description}
                </p>
              </div>

              {/* Title always visible on desktop */}
              <div className="absolute inset-0 flex items-center justify-center opacity-100 md:group-hover:opacity-0 transition-opacity duration-500">
                <h3
                  className="text-white text-3xl font-bold text-center px-4 drop-shadow-lg hidden md:block"
                  style={{fontFamily: "'Mozilla Headline', sans-serif"}}
                >
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
