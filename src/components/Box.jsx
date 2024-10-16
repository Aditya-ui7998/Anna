const Box = () => {
    return (
      <div className="absolute bottom-10 w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-10 space-y-4 md:space-y-0 md:space-x-4">
            
        {/* Box 1 */}
        <div className="flex flex-col justify-between p-4 md:p-6 w-full md:w-1/3 bg-white/80 rounded-3xl shadow-lg">
          <h2 className="text-xl font-semibold"
      
          >Explore, Read, and</h2>
          <h1 className="text-3xl md:text-4xl font-bold"
          
          >ENJOY</h1>
          <button className="hover:scale-105 mt-4 w-full py-2 bg-yellow-400 text-white rounded-full flex items-center justify-center gap-2">
            Let's Explore <span className="ml-2">→</span>
          </button>
        </div>
  
        {/* Box 2 */}
        <div className="flex flex-col justify-between p-4 md:p-6 w-full md:w-1/4 bg-white/80 rounded-3xl shadow-lg">
          <h2 className="text-lg font-semibold"
           
          >Complete</h2>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold">120</h1>
            <p>Episodes</p>
          </div>
        </div>
  
        {/* Box 3 */}
        <div className="flex flex-col justify-between p-4 md:p-6 w-full md:w-1/3 bg-white/80 rounded-3xl shadow-lg">
          <h2 className="text-xl font-semibold"
        
          >Stream Anime and</h2>
          <h1 className="text-3xl md:text-4xl font-bold">ENJOY</h1>
          <button className="hover:scale-105 mt-4 w-full py-2 bg-yellow-400 text-white rounded-full flex items-center justify-center gap-2">
            Watch <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Box;
  