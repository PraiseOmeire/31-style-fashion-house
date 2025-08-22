const Academy = () => {
  // Array of Cloudinary image URLs
  const academyImages = [
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-1.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-2.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-3.jpg",
    "https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-4.jpg",
  ];

  // Duplicate the array so the loop looks seamless
  const loopImages = [...academyImages, ...academyImages];

  return (
    <div className="py-16 md:px-16">
      <h1
        className="text-5xl font-bold mb-8 uppercase"
        style={{fontFamily: "'Mozilla Headline', sans-serif"}}
      >
        The Academy
      </h1>

      {/* Outer container */}
      <div className="relative w-full overflow-hidden">
        {/* Scrolling container */}
        <div className="flex animate-scroll space-x-4">
          {loopImages.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={image}
                alt={`Academy ${index + 1}`}
                className="h-64 w-72 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academy;
