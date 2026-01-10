// src/components/home/HomeCTA.jsx
import { useEffect } from "react";
import AOS from "aos";

const HomeCTA = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section
      className="relative h-[420px] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ✅ PARALLAX
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-700/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-white max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Share Your Needs to Take Action
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold">
            Feel Free to Talk With Us
          </h3>
        </div>

        {/* Buttons */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex gap-4"
        >
          <a
            href="tel:+918015371070"
            className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition"
          >
            📞 Call Now
          </a>

          <a
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition"
          >
            ✈️ Chat With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
