import Sectionimage from "../assets/image/Sectionimage.png"


const ClientReviews = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8" style={{
                  backgroundImage: `url(${Sectionimage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }} >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Our Client Review</h2>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">The best booking system</h3>
            <p className="text-gray-600 mb-6">
              I've been using the hotel booking system for several years now, and it's becoming up-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.
            </p>
            <div className="flex items-center">
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <span className="ml-2 font-medium">Smartt Livoso</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">The best booking system</h3>
            <p className="text-gray-600 mb-6">
              I've been using the hotel booking system for several years now, and it's becoming up-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.
            </p>
            <div className="flex items-center">
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <span className="ml-2 font-medium">Jagat livoso</span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">The best booking system</h3>
            <p className="text-gray-600 mb-6">
              I've been using the hotel booking system for seven years now, and it's becoming up-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.
            </p>
            <div className="flex items-center">
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <span className="ml-2 font-medium">smurty livoso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;