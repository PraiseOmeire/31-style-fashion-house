interface ProductCardProps {
  imageSrc: string;
  productName: string;
  price: string;
}

const ProductCard = ({imageSrc, productName, price}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex h-36 md:h-40 lg:h-44">
      {/* Product Image */}
      <div className="w-1/3 flex-shrink-0">
        <img
          src={imageSrc}
          alt={productName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between p-4 w-2/3">
        <div>
          <h3
            className="text-sm md:text-base font-semibold text-gray-800"
            style={{fontFamily: "'Mozilla Headline', sans-serif"}}
          >
            {productName}
          </h3>
          <p
            className="text-xs md:text-sm text-gray-600 mt-1"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            {price}
          </p>
        </div>

        {/* Shop Now Button */}
        <button
          className="bg-[#bc8cd5] hover:bg-[#897191] text-white text-xs md:text-sm font-bold py-2 px-4 rounded transition-colors duration-300 mt-2 self-start"
          style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          aria-label={`Shop now for ${productName}`}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
