import React from "react";
import parallax_2 from "../../assets/images/parallax_2.jpg";
import client1 from "../../assets/images/client-1.jpg";
import client2 from "../../assets/images/client-2.jpg";
import client3 from "../../assets/images/client-3.jpg";
import client4 from "../../assets/images/client-4.jpg";
import client5 from "../../assets/images/client-5.jpg";
/**
 * OurClients – Premium Parallax + Sliding Logos Section
 * TailwindCSS required
 */

const clients = [
  { id: 1, src: client1, alt: "SAP Promoters" },
  { id: 2, src: client2, alt: "Valapakkam Tech" },
  { id: 3, src: client3, alt: "Spark Digital" },
  { id: 4, src: client4, alt: "Anbazhagan Fashion" },
  { id: 5, src: client5, alt: "RAA Consultancy" },
];

const OurClients = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* ================= PARALLAX HEADER ================= */}
      <div
        className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${parallax_2})`,
        }}
      >
        <div className="text-center">
          <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-wide">
            Our Clients
          </h2>

          {/* Divider */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="w-16 h-[1px] bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span className="w-16 h-[1px] bg-white/40"></span>
          </div>
        </div>
      </div>

      {/* ================= CLIENT LOGO SLIDER ================= */}
      {/* ================= CLIENT LOGO STRIP ================= */}
      <div className="relative bg-white py-8 border-t border-b border-gray-200 overflow-hidden">
        {/* Logos Slider Container */}
        <div className="flex animate-clientSlide">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-8"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-8"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}

          {/* Third set for extra smooth looping */}
          {clients.map((client, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-8"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= CUSTOM ANIMATION ================= */}
      <style jsx>{`
        .animate-clientSlide {
          animation: clientSlide 30s linear infinite;
        }

        @keyframes clientSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
};

export default OurClients;
