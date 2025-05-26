import React from "react";
import sunsetimg from "../assets/image/sunsetimg.png";

const DiscountBanner = () => {
  return (
    <div className="py-12 px-1 mx-2 max-w-full">
      <div className="flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden">
        
        {/* Left Section with conditional background image on small screens only */}
        <div className="w-full md:w-1/2 relative h-96 md:h-auto flex items-center justify-center text-center px-4 py-8">
          
          {/* Mobile background image */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: `url(${sunsetimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          ></div>

          {/* Content block */}
          <div className="relative z-10 bg-white/70 md:bg-transparent p-4 rounded-lg">
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">
              Grab up to <span className="text-green-500">35% off</span>
            </p>
            <p className="text-2xl md:text-3xl font-bold leading-tight">on your favorite</p>
            <p className="text-2xl md:text-3xl font-bold leading-tight">Destination</p>
            <button className="mt-4 text-white bg-blue-600 hover:bg-gray-100 font-bold py-2 px-8 rounded-md text-sm md:text-xl transition duration-300 transform hover:scale-105 hover:text-blue-600">
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Desktop image on right */}
        <div
          className="hidden md:block md:w-1/2 h-96"
          style={{
            backgroundImage: `url(${sunsetimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DiscountBanner;
