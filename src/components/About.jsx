import GhostAnna from '../assets/ghost_anna-removebg-preview.png';

const About = () => {
  return (
    <div className="relative w-full mt-[150px] sm:mt-[200px] flex items-center justify-start">
      {/* Left Triangle */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-blue-500 p-9"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      >
      </div>

      {/* Right Triangle */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-yellow-500"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-6 max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto ml-[10%] sm:ml-[20%] md:ml-[35%] mt-10 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold outline-text">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-[50px] sm:mt-[60px] md:mt-[80px] mb-[50px] sm:mb-[70px] md:mb-[100px] outline-text "
        style={{fontFamily:'Quicksand'}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
          Cras venenatis euismod malesuada. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, 
          ut aliquam massa nisl quis neque. Suspendisse in orci enim.
        </p>
      </div>

      {/* Image */}
      <img 
        src={GhostAnna} 
        alt="Ghost Anna" 
        className="absolute right-0 bottom-0 w-[200px] sm:w-[300px] md:w-[500px] lg:w-[700px] xl:w-[800px] z-50"
      />
    </div>
  );
};

export default About;
