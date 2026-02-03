import {Link} from "react-router-dom";

const Welcome = () => {
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
    <section className="relative py-20 md:py-32 px-4 md:px-16 bg-[#fefcff] overflow-hidden">
      {/* Floating Decorative Elements */}
      <div
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#bc8cd5]/30 to-transparent blur-xl animate-float hidden md:block"
      />
      <div
        className="absolute top-1/4 right-16 w-32 h-32 rounded-full bg-gradient-to-br from-[#897191]/25 to-transparent blur-xl animate-float-reverse hidden md:block"
        style={{animationDelay: "2s"}}
      />
      <div
        className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-[#bc8cd5]/20 to-transparent blur-lg animate-float-slow hidden md:block"
        style={{animationDelay: "4s"}}
      />
      <div
        className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-[#897191]/30 to-transparent blur-lg animate-float hidden md:block"
        style={{animationDelay: "1s"}}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading with accent line */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{fontFamily: "'Mozilla Headline', sans-serif"}}
          >
            Welcome to 31 Styles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#bc8cd5] to-[#897191] mx-auto rounded-full mb-8" />
          {/* Intro Text - Centered */}
          <p
            className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            At 31 Styles Fashion House, we believe that every piece of clothing
            tells a story. From exquisite bridal collections to contemporary
            ready-to-wear pieces, every creation is meticulously crafted with
            attention to detail and a passion for design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-xl h-80 md:h-96 shadow-lg"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3
                  className="text-white text-2xl md:text-3xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2"
                  style={{fontFamily: "'Mozilla Headline', sans-serif"}}
                >
                  {category.title}
                </h3>
                <p
                  className="text-white/80 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  style={{fontFamily: "'Roboto Condensed', sans-serif"}}
                >
                  {category.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#bc8cd5] to-[#897191] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
