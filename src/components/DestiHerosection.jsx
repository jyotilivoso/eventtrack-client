import { useNavigate, useParams } from "react-router-dom"
import Home2dest from "../assets/image/Home2dest.png"



const DestHeroSection = () => {
    const navigate=useNavigate();
    const params=useParams();
    console.log(params)
    const handleBook=()=>{
        navigate('/dest')
    }
  return (
    <section className="relative pt-[140px] md:pt-[120px] h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-80 z-0"
        style={{
          backgroundImage: `url(${Home2dest})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 h-full flex justify-start  ">
       
          
                   {/* Text content */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left    ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wider" style={{fontFamily:'Sofadi one'}}>EXPLORE ODISHA</h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-lg ">
              Journey through history, spirituality, art, and natural beauty
            </p>
            
          </div>
        </div>
   
    </section>
  )
}

// Image collage component


export default DestHeroSection
