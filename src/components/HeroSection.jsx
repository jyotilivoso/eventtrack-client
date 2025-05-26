import { useNavigate, useParams } from "react-router-dom"



const HeroSection = ({heroImage}) => {
    const navigate=useNavigate();
    const params=useParams();
    console.log(params)
    const handleBook=()=>{
        navigate('/dest')
    }
  return (
    <section className="relative pt-[140px] md:pt-[220px] h-screen min-h-[720px] w-full overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-80 z-0 md:mt-24"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 h-full flex justify-end  ">
       
          
                   {/* Text content */}
          <div className="w-full md:w-1/2 text-white text-center md:text-right    ">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wider" style={{fontFamily:'Sofadi one'}}>EXPLORE ODISHA</h1>
            <p className="text-lg sm:text-2xl mb-8 max-w-lg ml-auto">
              Journey through history, spirituality, art, and natural beauty
            </p>
            <button onClick={handleBook} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 text-sm md:text-lg">
              BOOK NOW
            </button>
          </div>
        </div>
   
    </section>
  )
}

// Image collage component


export default HeroSection
