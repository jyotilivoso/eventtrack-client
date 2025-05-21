import React from "react";
import sunsetimg from "../assets/image/sunsetimg.png"

const DiscountBanner = () => {
    return (
        <div className=" py-12 px-6  flex mx-2 max-w-[100%] ">
            <div className=" mx-auto ">
                {/* Discount Text - Multi-line with exact spacing */}
                <div className="flex justify-center flex-col items-center min-w-xl mb-8 h-80">
                    <p className="text-4xl md:text-3xl font-bold leading-tight mb-2">Grab up to <span className="text-green-500">35% off</span> </p>
                    <p className="text-4xl md:text-3xl font-bold leading-tight">on your favorite</p>
                    <p className="text-4xl md:text-3xl font-bold leading-tight">Destination</p>
                    <button className=" text-white bg-blue-600  hover:bg-gray-100 font-bold py-1 px-8 rounded-md text-lg md:text-xl transition duration-300 transform hover:scale-105 hover:text-blue-600 mt-4">
                    BOOK NOW
                </button>
                </div>

                {/* Book Now Button */}
                
            </div>

            <div className=" min-w-xl   " style={{
                          backgroundImage: `url(${sunsetimg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundBlendMode: "overlay",
                        }}>
                

            </div>

            <div>

            </div>
        </div>
    );
};

export default DiscountBanner;