import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import konarktample from "../assets/image/konarktample.png";
import puriii from "../assets/image/puriii.png";
import dhauli from "../assets/image/dhauli.png";
import chilika from "../assets/image/konarktample.png"; // Replace with actual chilika image

// Sub-images (replace with real paths)
import puri1 from "../assets/image/puri1.jpeg";
import puri2 from "../assets/image/puri2.jpeg";
import puri3 from "../assets/image/puri3.jpeg";
import puri4 from "../assets/image/puri4.jpeg";


const TrendingDestinations = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const destinations = [
    { name: "Konark", image: konarktample, subImages: [puri1, puri2, puri3, puri4] },
    { name: "Puri", image: puriii, subImages: [puri1, puri2] },
    { name: "Dhauli", image: dhauli, subImages: [puri3] },
    { name: "Chilika", image: chilika, subImages: [puri4] },
  ];

  const handleBook = (dest) => {
    navigate('/bookform', { state: { destination: dest } });
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Keep on Planning</h2>
          <h3 className="text-2xl md:text-2xl font-semibold text-gray-700">Trending Destinations</h3>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 bg-white">
                <h3 className="text-xl font-medium text-gray-800">{destination.name}</h3>
                <button
                  onClick={() => handleBook(destination.name)}
                  className="text-white bg-blue-600 hover:bg-gray-100 py-1 px-6 rounded-lg text-lg md:text-sm transition duration-300 transform hover:scale-105 hover:text-blue-600 mt-4"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Full-width sub-images below the grid */}
        {activeIndex !== null && destinations[activeIndex].subImages && (
          <div className="w-full mt-6 flex gap-2 overflow-x-auto justify-center">
            {destinations[activeIndex].subImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${destinations[activeIndex].name}-${i}`}
                className="h-24 w-36 object-cover rounded-md border"
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default TrendingDestinations;
