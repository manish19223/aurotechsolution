const Hero = () => {
  return (
    <section className="pt-28 min-h-screen flex items-center bg-linear-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-dark">
            Upgrade Your Business <br />
            <span className="text-primary">With Our Technology</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We are your digital partner for web development, mobile apps,
            branding, and business growth.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              View More
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden md:block">
          <div className="w-full h-96 bg-linear-to-tr from-primary to-violet rounded-2xl shadow-xl flex items-center justify-center text-white text-2xl font-heading">
            Hero Visual
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
