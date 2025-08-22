import React from "react";
import {Link} from "react-router-dom";

const Categories = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row justify-center gap-8 p-4">
        {/* Bridals */}
        <div className="relative md:w-1/2 overflow-hidden rounded-lg group">
          <Link to={""}>
            <img
              src="https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/bridals.png"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
              alt="Bridals"
            />
          </Link>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h2 className="text-white text-4xl font-bold uppercase">Bridals</h2>
          </div>
        </div>

        {/* Casual Wears */}
        <div className="relative md:w-1/2 overflow-hidden rounded-lg group">
          <Link to={""}>
            <img
              src="https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638356/casual-wears.png"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
              alt="Casual Wears"
            />
          </Link>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
            <h2 className="text-white text-3xl font-bold uppercase">
              And then Some
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
