const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      {/* Top Navigation */}
      <div className="flex flex-wrap justify-start gap-8 mb-8 text-sm text-gray-300">
        <a href="#" className="hover:text-white">Events</a>
        <a href="#" className="hover:text-white">Gen AI</a>
        <a href="#" className="hover:text-white">Careers</a>
        <a href="#" className="hover:text-white">Case study</a>
        <a href="#" className="hover:text-white">SME Talks</a>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
        {/* Left Text */}
        <div className="md:w-1/2">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
            For any collaborative <br />
            projects or enquiries feel free <br />
            to connect with us.
          </p>
          <p className="text-2xl font-semibold text-white">vayuz.com</p>
        </div>

        {/* Form */}
              <div className="flex justify-end">

        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6">Connect<br />With Us</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-gray-500 py-2 text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-500 py-2 text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-500 py-2 text-white placeholder-gray-400 focus:outline-none"
            />
                  <div className="flex justify-end">

            <button
              type="submit"
              className="bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold mt-4"
            >
              SUBMIT
            </button>
            </div>
          </form>
      </div>
      </div>
        </div>

      {/* Bottom Links */}
      <div className="flex flex-wrap justify-start gap-8 text-sm text-gray-400 border-t border-gray-700 pt-6">
        <a href="#" className="hover:text-white">About</a>
        <a href="#" className="hover:text-white">Insights</a>
        <a href="#" className="hover:text-white">Community</a>
        <a href="#" className="hover:text-white">Privacy & Policies</a>
      </div>
    </footer>
  );
};

export default Footer;
