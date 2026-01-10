import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
// Footer Component Import
import Footer from "../../components/layout/Footer";

// Animation Hook
const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Stop observing once animated
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px", ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
};

// ================= ABOUT PAGE IMAGES =================

import aboutImg from "../../assets/images/aboutbanner.jpg";
import aboutslider1 from "../../assets/images/about-slider1.jpg";
import aboutslider2 from "../../assets/images/about-slider2.jpg";
import aboutslider3 from "../../assets/images/about-slider3.jpg";
import aboutslider4 from "../../assets/images/about-slider4.jpg";
import aboutslider6 from "../../assets/images/about-slider6.jpg";

// === ICONS FOR WHY CHOOSE CARDS ===
import iconConsistency from "../../assets/images/icons/consistency.png";
import iconefficient from "../../assets/images/icons/efficient.png";
import iconsave from "../../assets/images/icons/safe.png";
import icononTime from "../../assets/images/icons/onTime.png";
import iconreliable from "../../assets/images/icons/reliable.png";
import iconInnovative from "../../assets/images/icons/innovative.png";
import iconBooster from "../../assets/images/icons/booster.png";
import iconTrust from "../../assets/images/icons/trustable.png";

// =====================video banner =====================
import vBanner from "../../assets/images/icons/vbanner.jpg";

// ================= WHAT WE DONE / VISION / MISSION IMAGES =================
import whatDoneImg from "../../assets/images/icons/whatWeDone.jpg";
import visionImg from "../../assets/images/icons/our-vision.jpg";
import missionImg from "../../assets/images/icons/our-mission.jpg";

// ================= STATS SECTION BACKGROUND =================
import statsBg from "../../assets/images/stats-bg.jpg";

// ================= STATS ICONS =================
import { FaSmile, FaCoffee, FaThumbsUp, FaBuilding } from "react-icons/fa";

/* ================= IMAGE SLIDER ================= */
const images = [
  aboutslider1,
  aboutslider2,
  aboutslider3,
  aboutslider4,
  aboutslider6,
];

/* ================= TIMELINE ================= */
const timeline = [
  {
    label: "2019",
    title: "2019 – Spark",
    desc: "Our First Step of Process on Developing Technology Company has been Created with Spark at 2019.",
  },
  {
    label: "2020",
    title: "2020 – Think",
    desc: "Our Second Step of Process is Build the Organization as well as Team and we Gathered more informations.",
  },
  {
    label: "2021",
    title: "2021 – Action",
    desc: "In 2021 we are Started Our Live Environment field work to Grow up the Organization.",
  },
  {
    label: "2022",
    title: "2022 – Goal",
    desc: "The Main Part of Our Goal is Provide a Futurestic Efficient Technology to all.",
  },
  {
    label: "2025",
    title: "2025 – Achive",
    desc: "In the year of 2025 we would Develop our more Branches in Globally & Achive our Most of Target.",
  },
  {
    label: "UPCOMING",
    title: "Future Generation",
    desc: "Our Organization will be Provide on your Future also.",
  },
];

/* ================= STATS DATA ================= */
const statsData = [
  {
    value: 100,
    suffix: "+",
    label: "Happy Client",
    icon: FaSmile,
  },
  {
    value: 250,
    suffix: "+",
    label: "Cups of Coffee",
    icon: FaCoffee,
  },
  {
    value: 100,
    suffix: "+",
    label: "Projects Done",
    icon: FaThumbsUp,
  },
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
    icon: FaBuilding,
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [whySlide, setWhySlide] = useState(0);
  const [isWhyPaused, setIsWhyPaused] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  // Stats state
  const statsSectionRef = useRef(null);
  const statsBgRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const [statsCounts, setStatsCounts] = useState(statsData.map(() => 0));

  // Video CTA parallax
  const videoSectionRef = useRef(null);
  const videoBgRef = useRef(null);

  // Animation refs
  const timelineRef = useRef(null);
  const highlightsRef = useRef(null);
  const whyChooseRef = useRef(null);
  const whatWeDoneRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  // Image animation refs
  const timelineImageRef = useRef(null);
  const whatWeDoneImageRef = useRef(null);
  const visionImageRef = useRef(null);
  const missionImageRef = useRef(null);

  // Animation states
  const timelineVisible = useIntersectionObserver(timelineRef);
  const highlightsVisible = useIntersectionObserver(highlightsRef);
  const whyChooseVisible = useIntersectionObserver(whyChooseRef);
  const whatWeDoneVisible = useIntersectionObserver(whatWeDoneRef);
  const visionVisible = useIntersectionObserver(visionRef);
  const missionVisible = useIntersectionObserver(missionRef);

  // Image animation states
  const timelineImageVisible = useIntersectionObserver(timelineImageRef);
  const whatWeDoneImageVisible = useIntersectionObserver(whatWeDoneImageRef);
  const visionImageVisible = useIntersectionObserver(visionImageRef);
  const missionImageVisible = useIntersectionObserver(missionImageRef);

  /* AUTO IMAGE SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* WHY CHOOSE CARDS DATA */
  const whyChooseCards = [
    { title: "Consistency Develop", icon: iconConsistency },
    { title: "Efficient Technology", icon: iconefficient },
    { title: "Reliable Support", icon: iconreliable },
    { title: "Safe & Secure", icon: iconsave },
    { title: "On Time Delivery", icon: icononTime },
    { title: "Innovative", icon: iconInnovative },
    { title: "Booster", icon: iconBooster },
    { title: "Trustable", icon: iconTrust },
    { title: "On Time Delivery", icon: icononTime },
    { title: "Innovative", icon: iconInnovative },
  ];

  const PER_SLIDE = 4;
  const totalSlides = Math.ceil(whyChooseCards.length / PER_SLIDE);

  /* AUTO SLIDE FOR WHY CHOOSE - WITH PAUSE ON HOVER */
  useEffect(() => {
    if (isWhyPaused) return;

    const interval = setInterval(() => {
      setWhySlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides, isWhyPaused]);

  /* STATS COUNTER ANIMATION */
  useEffect(() => {
    if (!statsStarted) return;

    const timers = statsData.map((item, i) =>
      setInterval(() => {
        setStatsCounts((prev) => {
          const updated = [...prev];
          if (updated[i] < item.value) {
            updated[i] += Math.ceil((item.value - updated[i]) / 15);
          } else {
            updated[i] = item.value;
          }
          return updated;
        });
      }, 50)
    );

    return () => timers.forEach(clearInterval);
  }, [statsStarted]);

  /* START STATS ON SCROLL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* PARALLAX EFFECT FOR STATS BG */
  useEffect(() => {
    const onScroll = () => {
      if (!statsBgRef.current) return;
      const offset = window.scrollY - statsSectionRef.current.offsetTop;
      statsBgRef.current.style.transform = `translateY(${offset * 0.3}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* PARALLAX EFFECT FOR VIDEO CTA BG */
  useEffect(() => {
    const onScroll = () => {
      if (!videoBgRef.current || !videoSectionRef.current) return;
      const offset = window.scrollY - videoSectionRef.current.offsetTop;
      videoBgRef.current.style.transform = `translateY(${offset * 0.4}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progressWidth = `${(activeIndex / (timeline.length - 1)) * 100}%`;

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>About Us | Auro Tech Solutions</title>
        <meta
          name="description"
          content="Learn about Auro Tech Solutions - Your trusted technology partner founded in 2020. We specialize in web development, app development, and innovative software solutions."
        />
        <meta
          name="keywords"
          content="About Auro Tech Solutions, Technology Partner, Software Company, Web Development Company, App Development"
        />
        <meta name="author" content="Auro Tech Solutions" />
        <link rel="canonical" href="https://aurotechsolutions.com/about" />
      </Helmet>

      {/* ================= ABOUT BANNER ================= */}
      <section className="relative w-full h-105 mt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImg})` }}
        />
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
          <div>
            <h1 className="text-white text-5xl font-bold mb-4">About Us</h1>

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
              <span className="text-white">About Us</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <section
        ref={timelineRef}
        className={`max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          timelineVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* IMAGE AREA */}
        <div className="relative flex justify-center">
          <div
            ref={timelineImageRef}
            className={`relative rounded-3xl bg-purple-900 p-4 transition-all duration-1000 ${
              timelineImageVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "-translate-x-12 opacity-0 scale-95"
            }`}
          >
            <img
              src={images[imageIndex]}
              alt="About visual"
              className="w-full max-w-md rounded-2xl shadow-xl transition-opacity duration-700"
            />
            <div className="absolute inset-6 border border-white/30 rounded-xl pointer-events-none" />
          </div>
        </div>

        {/* CONTENT AREA */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Auro Tech Solutions – Your Technology Partner
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl">
            At Auro Tech Solutions, We Develop Innovative and Reliable Products
            & Services. All of Our technologies gives Efficient Solutions for
            Your Requirements. Auro Tech Solutions Was Started by Two Young
            Entrepreneur on September 1-st, 2020. The Goal of Auro Tech
            Solutions is “LEARN - EXECUTE - TEACH”.
          </p>

          <div className="relative mb-10">
            <div className="absolute top-2 left-0 w-full h-1 bg-gray-200 rounded" />
            <div
              className="absolute top-2 left-0 h-1 bg-linear-to-r from-pink-600 to-purple-600 rounded transition-all duration-500"
              style={{ width: progressWidth }}
            />

            <div className="flex justify-between relative z-10">
              {timeline.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center focus:outline-none"
                >
                  <span
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      idx <= activeIndex
                        ? "bg-pink-600 scale-110"
                        : "bg-gray-300"
                    }`}
                  />
                  <span className="text-xs mt-2 text-gray-500">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative h-40 overflow-hidden">
            <div
              key={activeIndex}
              className="absolute inset-0
                         bg-linear-to-r from-pink-600 to-purple-600
                         text-white rounded-2xl p-6 shadow-lg
                         transition-all duration-500 ease-in-out"
            >
              <h3 className="text-lg font-bold mb-2">
                {timeline[activeIndex].title}
              </h3>
              <p className="text-sm leading-relaxed">
                {timeline[activeIndex].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS STRIP ================= */}
      <section
        ref={highlightsRef}
        className={`relative mt-16 transition-all duration-1000 delay-200 ${
          highlightsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="absolute inset-0 h-[220px] bg-linear-to-r from-pink-600 to-purple-600" />
        <div className="relative -translate-y-16 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4 text-pink-600">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">We are Professional</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We are Develop & Promote Advanced Technologies for your Business
              to Grow us.
            </p>
          </div>
          <div className="hidden md:block absolute left-1/3 top-10 bottom-10 w-px bg-gray-200" />
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4 text-pink-600">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M7 11V5a2 2 0 114 0v6" />
                <path d="M11 11V4a2 2 0 114 0v7" />
                <path d="M15 11V6a2 2 0 114 0v8c0 4-3 7-7 7H9a4 4 0 01-4-4v-3" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">We are Efficient</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our Business Philosophy is Assure the Quality of Product & Build
              Trust from you.
            </p>
          </div>
          <div className="hidden md:block absolute left-2/3 top-10 bottom-10 w-px bg-gray-200" />
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4 text-pink-600">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M7 7h2M7 11h2M7 15h2M11 7h2M11 11h2M11 15h2" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">We are Smartest</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We are Committed to Provide you Smartest Solutions at Low Cost &
              Efficient.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section
        ref={whyChooseRef}
        className={`py-24 bg-blue-100 transition-all duration-1000 delay-300 ${
          whyChooseVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-3">
            Why Choose <span className="text-pink-600">Us ?</span>
          </h2>
          <div className="flex justify-center items-center gap-2 my-4">
            <span className="w-8 h-px bg-gray-300" />
            <span className="w-2 h-2 bg-pink-600 rounded-full" />
            <span className="w-2 h-2 bg-pink-600 rounded-full" />
            <span className="w-2 h-2 bg-pink-600 rounded-full" />
            <span className="w-8 h-px bg-gray-300" />
          </div>
          <p className="text-gray-600 mb-16">
            We Giving Better Solution on your Business Scope
          </p>

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsWhyPaused(true)}
            onMouseLeave={() => setIsWhyPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${whySlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => {
                const slideStart = slideIdx * PER_SLIDE;
                const slideCards = whyChooseCards.slice(
                  slideStart,
                  slideStart + PER_SLIDE
                );

                return (
                  <div key={slideIdx} className="w-full shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                      {slideCards.map((card, cardIdx) => (
                        <div
                          key={cardIdx}
                          className="h-[260px] border rounded-lg p-8 text-left bg-white hover:bg-linear-to-br hover:from-pink-600 hover:to-purple-600 hover:text-white hover:shadow-xl transition-all duration-300"
                        >
                          <img
                            src={card.icon}
                            alt={card.title}
                            className="w-14 h-14 mb-4 object-contain"
                          />
                          <h3 className="font-bold text-lg mb-3">
                            {card.title}
                          </h3>
                          <p className="text-sm opacity-90 leading-relaxed">
                            Professional, scalable and reliable solutions to
                            grow your business with confidence.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setWhySlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === whySlide
                    ? "bg-linear-to-r from-pink-600 to-purple-600 scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO CTA SECTION WITH PARALLAX ================= */}
      <section
        ref={videoSectionRef}
        className="relative w-full h-[420px] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <div
          ref={videoBgRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${vBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/80" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white text-4xl font-bold mb-4">
            Share Your Needs to Take Action
          </h2>
          <p className="text-white text-2xl font-semibold mb-10">
            Watch the Video
          </p>

          {/* PLAY BUTTON WITH RIPPLE */}
          <div className="relative inline-flex items-center justify-center">
            <span className="absolute w-24 h-24 rounded-full bg-purple-500/30 animate-ping" />
            <span className="absolute w-32 h-32 rounded-full bg-violet-500/20 animate-ping animation-delay-300" />
            <span className="absolute w-40 h-40 rounded-full bg-purple-600/10 animate-ping animation-delay-700" />

            <button
              onClick={() => setVideoOpen(true)}
              className="relative z-10 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            >
              <span className="text-pink-600 text-3xl ml-1">▶</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-5xl mx-4">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-pink-400 transition"
            >
              ✕
            </button>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/iN2ZotdoPNs?si=7ZORa0QJnH3Ucotx&autoplay=1"
                title="Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= WHAT WE DONE / VISION / MISSION ================= */}
      <section className="max-w-7xl mx-auto px-8 py-24 space-y-32">
        {/* WHAT WE DONE */}
        <div
          ref={whatWeDoneRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-400 ${
            whatWeDoneVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div
            ref={whatWeDoneImageRef}
            className={`relative rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1 transition-all duration-1000 ${
              whatWeDoneImageVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "-translate-x-16 opacity-0 scale-95"
            }`}
          >
            <img
              src={whatDoneImg}
              alt="What We Done"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-6 rounded-2xl border border-white/40 pointer-events-none" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-4">
              What <span className="text-pink-600">We Done ?</span>
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-1 bg-pink-600 rounded-full" />
              <span className="w-1 h-1 bg-pink-600 rounded-full" />
              <span className="w-1 h-1 bg-pink-600 rounded-full" />
              <span className="w-16 h-px bg-gray-300 ml-2" />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our main aim is to develop in a constant manner and become a
              leading performer in this competitive global marketplace.
              Fortunately, we have been able to gather a crew of professionals
              that can shape and mold their collective experiences, all of them
              possess outstanding talent that can help to accelerate your
              organization. We offer a phased approach towards your business
              drivers and help IT organizations to align their goals towards the
              overall vision of the business.
            </p>
          </div>
        </div>

        {/* OUR VISION */}
        <div
          ref={visionRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-500 ${
            visionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-pink-600">Vision</span>
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-1 bg-pink-600 rounded-full" />
              <span className="w-1 h-1 bg-pink-600 rounded-full" />
              <span className="w-1 h-1 bg-pink-600 rounded-full" />
              <span className="w-16 h-px bg-gray-300 ml-2" />
            </div>
            <p className="text-gray-600 leading-relaxed">
              No matter which industry you belong to, every business must become
              a digital. We're one of the prominent technology companies that
              help your organizations to transform into digital enterprises. It
              differentiates you from competitors in the market and provides
              better engagement with customers, partners, and employees. We
              clearly understand that all customer landscapes are not of same
              kind. That’s why our sourcing methodology encompasses a clear
              solution especially crafted to address the clients' issues.
            </p>
          </div>
          <div
            ref={visionImageRef}
            className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-1000 ${
              visionImageVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-16 opacity-0 scale-95"
            }`}
          >
            <img
              src={visionImg}
              alt="Vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-6 rounded-2xl border border-white/40 pointer-events-none" />
          </div>
        </div>

        {/* OUR MISSION */}
        <div
          ref={missionRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-600 ${
            missionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div
            ref={missionImageRef}
            className={`relative rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1 transition-all duration-1000 ${
              missionImageVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "-translate-x-16 opacity-0 scale-95"
            }`}
          >
            <img
              src={missionImg}
              alt="Mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-6 rounded-2xl border border-white/40 pointer-events-none" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-pink-600">Mission</span>
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-1 bg-pink-600 rounded-full" />
              <span className="w-1 h-1 bg-pink-600 rounded-full" />
              <span className="w-1 h-1 bg-pink-600 rounded-full" />
              <span className="w-16 h-px bg-gray-300 ml-2" />
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to enhance the business growth of our customers
              with creative design, development and to deliver market-defining
              high-quality solutions that create value and reliable competitive
              advantage to customers around the globe.
            </p>
            <ul className="space-y-4">
              {[
                "Innovative Design & Development",
                "Cost-Efficient & Quick Setup",
                "Fast Working Process",
                "Best Support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-500 text-white text-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section
        ref={statsSectionRef}
        className="relative w-full min-h-[380px] overflow-hidden py-20"
      >
        <div
          ref={statsBgRef}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${statsBg})`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center px-6">
            {statsData.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-white">
                  <Icon className="text-pink-600 text-5xl mx-auto mb-4" />
                  <div className="text-5xl font-bold">
                    {statsCounts[i]}
                    {item.suffix}
                  </div>
                  <p className="mt-4 text-lg">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
