import ProductCard from "./ProductCard";
import ScrollIndicator from "./ScrollIndicator";

const HeroModeva = () => {
  const mockProducts = [
    {
      imageSrc:
        "https://res.cloudinary.com/dzfcy2b1x/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1755638431/bridals.png",
      productName: "Elegant Bridal Gown",
      price: "IDR 300.000",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dzfcy2b1x/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1755638356/casual-wears.png",
      productName: "Casual Summer Wear",
      price: "IDR 300.000",
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#fefcff]">
      {/* Background Image Container */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] h-full">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop"
          alt="Fashion model in elegant beige blazer"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 z-[1]" />
      </div>

      {/* Text Content */}
      <div className="absolute top-16 left-4 md:top-24 md:left-12 lg:top-32 lg:left-16 z-10 max-w-xl">
        <p
          className="text-xs md:text-sm text-white/90 tracking-[0.2em] uppercase mb-4 md:mb-6"
          style={{fontFamily: "'Roboto Condensed', sans-serif"}}
        >
          Made in Indonesia, Dedicated to Indonesia
        </p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          style={{fontFamily: "'Mozilla Headline', sans-serif"}}
        >
          Discover the Art of Dressing Up
        </h1>
      </div>

      {/* Product Cards - Desktop (Overlay) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 space-y-6 w-80 xl:w-96 hidden lg:flex lg:flex-col">
        {mockProducts.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Product Cards - Mobile (Below Hero) */}
      <div className="lg:hidden absolute inset-x-0 bottom-0 transform translate-y-full px-4 py-8 bg-[#fefcff] space-y-4">
        {mockProducts.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroModeva;
