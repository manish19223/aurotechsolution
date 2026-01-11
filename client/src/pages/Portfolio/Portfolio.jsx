import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiSearch } from "react-icons/fi";

import servicesBanner from "../../assets/images/aboutbanner.jpg";
import forestlines from "../../assets/images/Forestlines.jpg";
import festive from "../../assets/images/Festiveshop.jpg";
import naagarigam from "../../assets/images/Naagarigam.jpg";
import sundar from "../../assets/images/SundarPrints.jpg";
import ocr from "../../assets/images/OCRwebsite.jpg";
import webstream from "../../assets/images/WebStream.jpg";
import ipconfig from "../../assets/images/IPconfig.jpg";
import billing from "../../assets/images/BillWeb.jpg";
import webstream2 from "../../assets/images/WebStreamLanding.jpg";
import imageTool from "../../assets/images/ImageEditing.jpg";
import vanikan from "../../assets/images/VanikanApp.jpg";
import ocrApp from "../../assets/images/OCRapp.jpg";

const categories = [
  "All",
  "Web Projects",
  "App Projects",
  "Our Products",
  "Other Works",
];

const projects = [
  {
    title: "Forestlines Web Project",
    category: "Web Projects",
    img: forestlines,
  },
  { title: "Festive Web Project", category: "Web Projects", img: festive },
  {
    title: "Naagarigam Web Project",
    category: "Web Projects",
    img: naagarigam,
  },
  { title: "Sundar Prints Web Project", category: "Web Projects", img: sundar },
  { title: "OCR Website", category: "Our Products", img: ocr },
  { title: "Webstream Website", category: "Web Projects", img: webstream },
  { title: "IP Config Website", category: "Other Works", img: ipconfig },
  { title: "Billing Web Project", category: "Web Projects", img: billing },
  { title: "Webstream Web Project", category: "Web Projects", img: webstream2 },
  { title: "Image Editing Web Tool", category: "Our Products", img: imageTool },
  { title: "Vanikan App", category: "App Projects", img: vanikan },
  { title: "OCR App", category: "App Projects", img: ocrApp },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Portfolio | Our Projects | Auro Tech Solutions</title>
        <meta
          name="description"
          content="Explore our portfolio of successful web development, app development, and software projects. See how we've helped businesses grow with our innovative solutions."
        />
        <meta
          name="keywords"
          content="Portfolio, Web Development Projects, App Development Projects, Software Solutions, Case Studies"
        />
        <meta name="author" content="Auro Tech Solutions" />
        <link rel="canonical" href="https://aurotechsolutions.com/portfolio" />
      </Helmet>

      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[420px] mt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesBanner})` }}
        />
        <div className="absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
          <div>
            <h1 className="text-white text-5xl font-bold mb-4">Our Showcase</h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="w-12 h-0.5 bg-white/40" />
            </div>

            <div className="text-sm">
              <Link to="/" className="text-pink-500 font-semibold">
                Home
              </Link>
              <span className="text-white mx-2">/</span>
              <span className="text-white">Portfolio</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300
                  ${
                    active === cat
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ================= GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filtered.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* IMAGE CONTAINER */}
                <div className="w-full h-[320px] flex items-center justify-center bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/90 to-purple-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div
                    className="text-center transform translate-y-12 opacity-0 
                               group-hover:translate-y-0 group-hover:opacity-100 
                               transition-all duration-500 ease-out"
                  >
                    <FiSearch className="text-white text-5xl mb-6 mx-auto" />
                    <h3 className="text-white text-2xl font-bold px-4">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-base mt-3">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
