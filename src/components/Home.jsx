import back from "../assets/wallhaven-yxpwmx_1920x1080.png";
import NoBgBack from '../assets/anna-removebg-preview.png';
import Navbar from "./Navbar";
import Box from "./Box";

const Home = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${back})` }} 
    >
      <div className="w-[90%] h-[90%] bg-white/70 rounded-3xl backdrop-blur-md p-6 relative">
        <Navbar />
        
        {/* Heading Container */}
        <div className="w-full z-10 text-start absolute top-[20%] ml-4 md:ml-10  font-custom font-semibold">
          <h1 className="text-4xl md:text-6xl font-bold text-black outline-text ">IMMERSE IN</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-black sm:bottom-5 outline-text  ">ANIME & MANGA</h1>
        </div>

        {/* Image in the Background */}
        <div className="w-full h-[60%] md:h-[88%] flex items-center justify-center absolute bottom-20 z-[-5]">
        <img src={NoBgBack} alt="Centered Image" className="max-w-full h-full object-cover" />
        </div>

        {/* Boxes Container */}
      <Box/>

      </div>
    </div>
  );
};

export default Home;
