

import konarktample from "../assets/image/konarktample.png"
import { useNavigate } from "react-router-dom";


const TrendingDestinations = () => {
  const destinations = [
    { name: "Konark", image: konarktample },
    { name: "Puri", image: konarktample },
    { name: "Konark", image: konarktample },
    { name: "Dhauli", image: konarktample }
  ];

  const navigate=useNavigate();
  const handleBook = (dest) => {
    navigate('/bookform', { state: { destination: dest } });
  }
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Keep on Planning</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">Trending Destinations</h3>
        </div>
        
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Destination Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Destination Name */}
              <div className="p-4 bg-white">
                <h3 className="text-xl font-medium text-gray-800">{destination.name}</h3>
                <button onClick={()=>handleBook(destination.name)} className=" text-white bg-blue-600  hover:bg-gray-100  py-1 px-6 rounded-lg text-lg md:text-sm transition duration-300 transform hover:scale-105 hover:text-blue-600 mt-4">
                    BOOK NOW
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;