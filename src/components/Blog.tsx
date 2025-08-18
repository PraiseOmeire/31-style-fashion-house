const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">
            Summer Fashion Trends 2025
          </h2>
          <p className="text-gray-600 mb-4">
            Discover the hottest summer fashion trends that will keep you
            stylish and comfortable.
          </p>
          <button className="text-[#897191] font-medium hover:underline">
            Read More
          </button>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">
            Sustainable Fashion Choices
          </h2>
          <p className="text-gray-600 mb-4">
            Learn how to make eco-friendly fashion decisions without
            compromising on style.
          </p>
          <button className="text-[#897191] font-medium hover:underline">
            Read More
          </button>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">
            Accessorizing Your Wardrobe
          </h2>
          <p className="text-gray-600 mb-4">
            Tips and tricks to elevate your outfits with the perfect
            accessories.
          </p>
          <button className="text-[#897191] font-medium hover:underline">
            Read More
          </button>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">
            Style Icons Through the Decades
          </h2>
          <p className="text-gray-600 mb-4">
            A look at fashion icons who shaped style trends across different
            eras.
          </p>
          <button className="text-[#897191] font-medium hover:underline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
