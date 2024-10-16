import BackgroundImage from '../assets/1374511-removebg-preview.png'; // replace with your image path

const Roadmap = () => {
  return (
    <div 
      className="relative w-full h-auto min-h-screen flex flex-col items-center justify-start bg-cover bg-no-repeat bg-center py-10 overflow-hidden bg-blue-500"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-12 font-custom ml-7 text-center">
        Our Roadmap
      </h1>

      <div className="relative w-full h-auto max-w-screen-lg font-custom">
        {/* SVG Curvy Line */}
        <svg
          className="absolute w-full h-full hidden lg:block" // Hide SVG on small screens for simplicity
          viewBox="0 0 800 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 400 100 Q 600 300, 400 500 Q 200 700, 400 900"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>

        {/* Roadmap Cards */}
        <div className="flex flex-col lg:relative">
          {/* Card 1 */}
          <div className="relative lg:absolute lg:top-[30px] lg:left-[250px] flex justify-center mb-10 lg:mb-0">
            <div className="w-[250px] h-[150px] bg-blue-500 rounded-xl p-4 text-white flex flex-col items-center justify-center shadow-md">
              <div className="absolute -top-4 bg-white border-2 border-blue-500 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold shadow-lg">Anna Yanami</h2>
              <p className="text-xs sm:text-sm mt-2">The new anime waifu for you</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative lg:absolute lg:top-[320px] lg:right-[230px] flex justify-center mb-10 lg:mb-0">
            <div className="w-[250px] h-[150px] bg-yellow-500 rounded-xl p-4 text-white flex flex-col items-center justify-center shadow-md">
              <div className="absolute -top-4 bg-white border-2 border-yellow-500 text-yellow-500 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold shadow-lg">Anna Yanami</h2>
              <p className="text-xs sm:text-sm mt-2">The new anime waifu for you</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative lg:absolute lg:top-[530px] lg:left-[220px] flex justify-center mb-10 lg:mb-0">
            <div className="w-[250px] h-[150px] bg-blue-700 rounded-xl p-4 text-white flex flex-col items-center justify-center shadow-md">
              <div className="absolute -top-4 bg-white border-2 border-blue-700 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-xl sm:text-2xl font-bold shadow-lg">Anna Yanami</h2>
              <p className="text-xs sm:text-sm mt-2">The new anime waifu for you</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative lg:absolute lg:top-[620px] lg:right-[230px] flex justify-center mb-10 lg:mb-4">
            <div className="w-[250px] h-[150px] bg-yellow-500 rounded-xl p-4 text-white flex flex-col items-center justify-center shadow-md">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white border-2 border-yellow-500 text-yellow-500 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                4
              </div>
              <h2 className="text-xl sm:text-2xl font-bold shadow-lg">Anna Yanami</h2>
              <p className="text-xs sm:text-sm mt-2">The new anime waifu for you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
