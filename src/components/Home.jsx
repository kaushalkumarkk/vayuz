import codeImage from '../assets/home-screen.png';
import Footer from './Footer';
import ServicesSection from './Service';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 px-4 md:px-4 py-10">
        <div className="border-b border-gray-600 mb-6 pb-4 text-center md:text-left">
          <p className="text-sm md:text-base">Securing Your Flutter App: Best Practices and Techniques</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unlock the Potential <br /> of Flutter
            </h1>
            <p className="text-lg text-gray-300">
              Your Premier Partner for Cross-Platform App Excellence!
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
              UPGRADE YOUR TECH
            </button>
          </div>

          <div className="md:w-1/2 relative">
            <img src={codeImage} alt="Flutter Code" className="rounded-lg w-full" />
          </div>
        </div>
        {/* ----------- FLUTTER DAWN SECTION ----------- */}
        <section className="w-full px-4 md:px-2 py-10 md:py-30 bg-black text-white flex flex-col md:flex-row items-center gap-8">

          {/* Center Heading */}
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-3xl font-bold leading-tight">Flutter's Dawn</h2>
            <p className="text-gray-300 mt-1">History of flutter</p>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-300">
              Uncover the fascinating story of Flutter in ‘Flutter’s Dawn: History of Flutter.’ From humble origins to global acclaim, delve into its captivating narrative. Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey! <a href="#" className="text-cyan-400 hover:underline">Click to begin!</a>
            </p>
          </div>

          {/* CTA Button */}
          <div className="md:w-auto mt-4 md:mt-0">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full flex items-center gap-2">
              BEGIN
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        <ServicesSection/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
