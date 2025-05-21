import React from "react";
import Rectangle7 from "../assets/image/Rectangle7.png"

const AboutUs = () => {
  return (
    <div className="py-12 px-4"  style={{
                  backgroundImage: `url(${Rectangle7})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}>
      <div className="max-w-5xl mx-auto text-center bg-white py-8 ">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
        
        {/* Welcome Text */}
        <div className="space-y-1 mb-6">
          <p className="text-xl font-medium text-gray-800">Welcome to Our Website</p>
          <p className="text-lg font-normal text-gray-600">Luxury Travel Provide</p>
        </div>
        
        {/* Description Paragraph */}
        <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-2xl mx-auto">
          Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practiced by our operators worldwide.
        </p>
        
        {/* Book Now Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-md text-lg transition-colors duration-300">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default AboutUs;