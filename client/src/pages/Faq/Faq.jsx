import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Plus, Minus } from "lucide-react";
import faqBanner from "../../assets/images/aboutbanner.jpg";
import statsBg from "../../assets/images/stats-bg.jpg";

const faqs = [
  {
    q: "01. What About the Project Cost ?",
    a: "Don't Worry About Project Cost, We Provide a Cost Efficient Technology Based on Your Requirements.",
  },
  {
    q: "02. Are We Develop Back-End Development ?",
    a: "We Make Back End Platform Application only and Also We Maintain Your existing Application Back End Platform.",
  },
  {
    q: "03. Are We Help your Business Promotion?",
    a: "Yes, Absolutely We Promote Your Business, We make the Digitally Growth for Your Business, It's an Low cost & Helpful for Better Performance On Your Business Growth.",
  },
  {
    q: "04. Are We Develop Front-End Platform ?",
    a: "Yes, Absolutely We Develop Frontend Website Based On Your Business Requirements, It's an Low cost & Helpful for Better Performance On Your Business Growth.",
  },
  {
    q: "05. Are We Give a Support & Service ?",
    a: "Don't Worry About Support, We Absolutely Giving Best Service Always by Project Ongoing & Completed.",
  },
  {
    q: "06. Are We Maintain or Upgrade Our Existing Technology ?",
    a: "Yes, Your Guess is Correct, We Maintain & Re-build / Re-configure Your Existing Application.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const videoBgRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!videoBgRef.current) return;
      videoBgRef.current.style.transform = `translateY(${
        window.scrollY * 0.25
      }px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>FAQ | Frequently Asked Questions | Auro Tech Solutions</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about our web development, app development, pricing, support, and services at Auro Tech Solutions."
        />
        <meta
          name="keywords"
          content="FAQ, Frequently Asked Questions, Web Development FAQ, App Development FAQ, Support Questions"
        />
        <meta name="author" content="Auro Tech Solutions" />
        <link rel="canonical" href="https://aurotechsolutions.com/faq" />
      </Helmet>

      {/* ================= FAQ BANNER ================= */}
      <section className="relative w-full h-105 mt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${faqBanner})` }}
        />
        <div className="absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
          <div>
            <h1 className="text-white text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>

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
              <span className="text-white">FAQ</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      </section>

      {/* ================= FAQ CONTENT ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-gray-900 font-medium text-base md:text-lg pr-4">
                    {item.q}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-pink-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-pink-600" />
                    )}
                  </div>
                </button>

                {/* ANSWER - Smooth height transition using grid trick */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CONTACT LINE */}
          <div className="mt-16 text-center">
            <p className="text-gray-700 text-base md:text-lg">
              If you do not find the answer to your question listed within our
              FAQ's, you can contact us directly at
            </p>
            <a
              href="mailto:aurotechsolutionspvtltd@gmail.com"
              className="mt-4 inline-block text-pink-600 hover:text-pink-700 font-semibold text-lg break-all transition-colors"
            >
              aurotechsolutionspvtltd@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ================= VIDEO SECTION (Parallax + Play Button) - Footer se just upar ================= */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden">
        {/* PARALLAX BG */}
        <div
          ref={videoBgRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${statsBg})`,
          }}
        />
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-purple-700/80" />
        {/* CONTENT */}
        <div
          data-aos="fade-up"
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <p className="text-white/90 text-lg mb-3">
            Share Your Needs to Take Action
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
            Watch the Video
          </h2>
          <button className="group relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300">
            <span className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-20"></span>
            <span className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-2xl">
              ▶
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default FAQ;
