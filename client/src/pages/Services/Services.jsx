import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaSearch,
  FaPenNib,
  FaVideo,
  FaCalculator,
  FaBalanceScale,
  FaImage,
  FaUserTie,
  FaBuilding,
  FaCogs,
  FaUsers,
  FaLinkedin,
  FaShoppingBag,
  FaPaintBrush,
  FaBriefcase,
  FaShareAlt,
} from "react-icons/fa";

import servicesBanner from "../../assets/images/aboutbanner.jpg";
import statsBg from "../../assets/images/stats-bg.jpg";

const pricingServices = [
  {
    title: "Website Development",
    desc: "Professional, responsive sites tailored to your needs. Modern design, performance, and SEO-ready.",
    price: "₹9999",
    icon: FaLaptopCode,
  },
  {
    title: "App Development",
    desc: "Custom mobile application development for iOS and Android platforms.",
    price: "₹15999",
    icon: FaMobileAlt,
  },
  {
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing strategies including social media, PPC, and content marketing.",
    price: "₹6599",
    icon: FaBullhorn,
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Improve your website's visibility on search engines like Google to attract organic traffic.",
    price: "₹13555",
    icon: FaSearch,
  },
  {
    title: "Logo Designing",
    desc: "Create a unique and memorable brand identity with our professional logo design services.",
    price: "₹1999",
    icon: FaPenNib,
  },
  {
    title: "Advertisement Video",
    desc: "Engaging and professional video production for your advertising campaigns.",
    price: "₹3899",
    icon: FaVideo,
  },
  {
    title: "Accounting",
    desc: "Reliable accounting and bookkeeping services to keep your finances in order.",
    price: "₹6999",
    icon: FaCalculator,
  },
  {
    title: "Legal Registration",
    desc: "Ensure your business meets all legal requirements with our registration services.",
    price: "₹2999",
    icon: FaBalanceScale,
  },
  {
    title: "Poster Designing",
    desc: "Eye-catching poster designs for events, promotions, or announcements.",
    price: "₹499",
    icon: FaImage,
  },
  {
    title: "Business Consulting",
    desc: "Expert advice and strategies to help your business grow and overcome challenges.",
    price: "₹4999",
    icon: FaUserTie,
  },
  {
    title: "Business Incorporation",
    desc: "Streamlined process for registering your company (Pvt Ltd, LLP, OPC, etc.).",
    price: "₹4892",
    icon: FaBuilding,
  },
  {
    title: "ERP Solutions",
    desc: "Custom ERP solutions to integrate and manage core business processes.",
    price: "CONTACT SALES",
    icon: FaCogs,
  },
  {
    title: "CRM Solutions",
    desc: "Tailored CRM systems to manage customer interactions and improve relationships.",
    price: "CONTACT SALES",
    icon: FaUsers,
  },
  {
    title: "LinkedIn Optimization",
    desc: "Enhance your profile or company page for better visibility and networking.",
    price: "₹2899",
    icon: FaLinkedin,
  },
  {
    title: "E-Commerce Product Listing",
    desc: "Accurate product listing services for Amazon, Flipkart, Meesho, JioMart, GeM, etc.",
    price: "₹9999",
    icon: FaShoppingBag,
  },
];

const simpleServices = [
  {
    title: "Web Development",
    desc: "We provide you for best and innovative web application needs among your business requirements.",
    icon: FaLaptopCode,
  },
  {
    title: "Mobile App Development",
    desc: "We offer best mobile app integration and management services from ideation to delivery.",
    icon: FaMobileAlt,
  },
  {
    title: "Search Engine Optimization",
    desc: "We optimize your website to improve search engine rankings and organic traffic.",
    icon: FaSearch,
  },
  {
    title: "Graphical Designing",
    desc: "We design graphical elements, brochures, banners and more for your growth.",
    icon: FaPaintBrush,
  },
  {
    title: "Digital Marketing",
    desc: "Our digital marketing strategies help create sustainable sales growth.",
    icon: FaBullhorn,
  },
  {
    title: "Business Consulting",
    desc: "Expert consulting services to address challenges and foster business success.",
    icon: FaBriefcase,
  },
  {
    title: "LinkedIn Optimization",
    desc: "Optimize your LinkedIn profile to boost visibility and professional connections.",
    icon: FaLinkedin,
  },
  {
    title: "Social Media Marketing",
    desc: "Engage your audience and build brand loyalty through social media campaigns.",
    icon: FaShareAlt,
  },
  {
    title: "Personal Branding",
    desc: "Stand out in your industry with a personal brand that reflects your expertise.",
    icon: FaUserTie,
  },
  {
    title: "Poster Designing",
    desc: "Capture attention and communicate effectively with high-quality posters.",
    icon: FaImage,
  },
];

const Services = () => {
  const pricingCardRefs = useRef([]);
  const simpleCardRefs = useRef([]);
  const statsSectionRef = useRef(null);
  const statsBgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    pricingCardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    simpleCardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Accurate Parallax for Stats Section
  useEffect(() => {
    if (!statsSectionRef.current || !statsBgRef.current) return;

    const handleScroll = () => {
      const sectionTop = statsSectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      const offset = (scrollY - sectionTop) * 0.3;

      statsBgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Services | Web & App Development | Auro Tech Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive services including web development, app development, digital marketing, SEO, UI/UX design, and more. Cost-effective solutions for your business."
        />
        <meta
          name="keywords"
          content="Web Development Services, App Development, Digital Marketing, SEO Services, UI/UX Design, Software Solutions"
        />
        <meta name="author" content="Auro Tech Solutions" />
        <link rel="canonical" href="https://aurotechsolutions.com/services" />
      </Helmet>

      {/* ================= SERVICES BANNER ================= */}
      <section className="relative w-full h-105 mt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesBanner})` }}
        />
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
          <div>
            <h1 className="text-white text-5xl font-bold mb-4">Services</h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="w-10 h-0.5 bg-white/40" />
            </div>

            <div className="text-sm">
              <Link to="/" className="text-pink-600 font-medium">
                Home
              </Link>
              <span className="text-white mx-2">/</span>
              <span className="text-white">Services</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      </section>

      {/* ================= PRICING SERVICES SECTION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Premium <span className="text-pink-600">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {pricingServices.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (pricingCardRefs.current[index] = el)}
                  className="group relative bg-white border border-gray-200 rounded-lg p-10 flex flex-col
                             opacity-0 translate-y-12
                             transition-all duration-700 ease-out
                             hover:-translate-y-4 hover:shadow-2xl
                             overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100
                               bg-gradient-to-br from-pink-600 to-purple-600
                               transition-opacity duration-500 ease-out"
                  />

                  <div className="relative z-10 flex-grow transition-all duration-500 ease-out">
                    <Icon className="text-orange-500 text-5xl mb-6 group-hover:text-white group-hover:scale-110 transition-all duration-500 ease-out" />
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-500 ease-out">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-8 leading-relaxed transition-colors duration-500 ease-out flex-grow">
                      {item.desc}
                    </p>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <button
                      className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold
                                 hover:bg-white hover:text-orange-500 
                                 group-hover:bg-white group-hover:text-orange-500
                                 transition-all duration-500 ease-out transform group-hover:scale-105"
                    >
                      {item.price.startsWith("₹")
                        ? `BUY ${item.price}`
                        : item.price}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MORE SERVICES GRID SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 group">
            More{" "}
            <span className="text-pink-600 group-hover:text-purple-600 transition-colors duration-500 ease-out">
              Services
            </span>{" "}
            We{" "}
            <span className="text-pink-600 group-hover:text-purple-600 transition-colors duration-500 ease-out">
              Offer
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {simpleServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (simpleCardRefs.current[index] = el)}
                  className="group relative bg-white border border-gray-200 rounded-2xl px-6 pt-16 pb-10 text-center
                             opacity-0 translate-y-12
                             transition-all duration-500 ease-out
                             hover:-translate-y-3 hover:shadow-xl"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:border-pink-600 transition-all duration-300">
                      <Icon className="text-2xl text-gray-500 group-hover:text-pink-600 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES STATS SECTION WITH FIXED PARALLAX ================= */}
      <section
        ref={statsSectionRef}
        className="relative w-full h-[320px] overflow-hidden"
      >
        {/* Parallax Background */}
        <div
          ref={statsBgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${statsBg})`,
          }}
        />

        {/* Fallback Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-purple-700/75" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white w-full">
            <div>
              <h3 className="text-6xl font-bold mb-2">95%</h3>
              <p className="text-lg tracking-wide">Web Development</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold mb-2">80%</h3>
              <p className="text-lg tracking-wide">App Development</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold mb-2">75%</h3>
              <p className="text-lg tracking-wide">Digital Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(48px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Services;
