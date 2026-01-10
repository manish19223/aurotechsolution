// src/components/home/ServicesSlider.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Laptop,
  Smartphone,
  Megaphone,
  Palette,
  BadgeCheck,
  BarChart3,
  Image,
  Search,
  BriefcaseBusiness,
} from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    desc: "We provide you for best innovative IT application needs among your business requirements, be it for better end-user experience.",
    Icon: Laptop,
  },
  {
    title: "Mobile App Development",
    desc: "We offer a best mobile app integration and management services. App development process from ideation and concept to delivery.",
    Icon: Smartphone,
  },
  {
    title: "Social Media Marketing",
    desc: "Engage with your audience and build brand loyalty through targeted social media campaigns.",
    Icon: Megaphone,
  },
  {
    title: "Graphical Designing",
    desc: "We Develope for your Graphic design is an integral part of any business and your company's image as it is for your marketing.",
    Icon: Palette,
  },
  {
    title: "Personal Branding",
    desc: "Stand out in your industry with a personal brand that reflects your values and expertise.",
    Icon: BadgeCheck,
  },
  {
    title: "Digital Marketing",
    desc: "We make your business as super strong, Our Digital Marketing techniques will helps to create a truly your sustainable sales growth.",
    Icon: BarChart3,
  },
  {
    title: "Poster Designing",
    desc: "Capture attention and communicate effectively with eye-catching, high-quality posters.",
    Icon: Image,
  },
  {
    title: "Search Engine Optimization",
    desc: "We optimize your website to improve search engine rankings, attract organic traffic, and enhance online discoverability.",
    Icon: Search,
  },
  {
    title: "Business Consulting",
    desc: "Our expert consulting services provide strategic insights to address challenges and foster business success.",
    Icon: BriefcaseBusiness,
  },
];

const PER_PAGE = 4;

export default function ServicesSlider() {
  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < SERVICES.length; i += PER_PAGE) {
      chunks.push(SERVICES.slice(i, i + PER_PAGE));
    }
    return chunks;
  }, []);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setActive((p) => (p + 1) % pages.length);
    }, 3500);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, pages.length]);

  const goTo = (idx) => setActive(idx);

  return (
    <section className="bg-pink-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Our <span className="text-rose-600">Services</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="w-10 h-px bg-gray-300" />
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span className="w-10 h-px bg-gray-300" />
          </div>
          <p className="mt-6 text-lg font-semibold text-gray-700">
            Our Special Magical things will be Make Your Project Effectively
          </p>
        </div>

        {/* SLIDER WRAPPER */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fixed horizontal line and end dots */}
          <div className="absolute inset-x-0 top-22 h-px bg-gray-200 z-0" />
          <span className="absolute left-0 top-22 w-2 h-2 bg-gray-600 rounded-full -translate-y-1/2 z-0" />
          <span className="absolute right-0 top-22 w-2 h-2 bg-gray-600 rounded-full -translate-y-1/2 z-0" />

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div key={pageIndex} className="w-full shrink-0">
                  <div className="flex flex-col md:flex-row gap-8 px-8 items-stretch">
                    {Array.from({ length: PER_PAGE }).map((_, i) => {
                      const item = page[i];
                      if (!item) {
                        return (
                          <div
                            key={i}
                            className="flex flex-col items-center opacity-0 pointer-events-none md:flex-1"
                          >
                            <div className="w-20 h-20" />
                            <div className="w-2 h-2" />
                            <div className="h-10 w-px" />
                            <div className="flex flex-col min-h-80 rounded-2xl border p-8 w-full" />
                          </div>
                        );
                      }
                      const { Icon, title, desc } = item;
                      return (
                        <div
                          key={i}
                          className="flex flex-col items-center group md:flex-1"
                        >
                          {/* Icon */}
                          <div className="w-20 h-20 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-rose-600 group-hover:border-rose-600 transition-colors duration-300">
                            <Icon className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
                          </div>

                          {/* Square dot (small circle) */}
                          <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-rose-600 transition-colors duration-300 z-10 mt-2" />

                          {/* Lower vertical line */}
                          <div className="h-10 w-px bg-gray-200 group-hover:bg-rose-600 transition-colors duration-300" />

                          {/* Card */}
                          <div className="flex flex-col flex-1 justify-between items-center rounded-2xl border border-gray-200 bg-white shadow-md group-hover:shadow-2xl w-full transition-all duration-500 p-8 text-center group-hover:bg-linear-to-b group-hover:from-fuchsia-600 group-hover:via-rose-600 group-hover:to-rose-700">
                            <div>
                              <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-white transition-colors duration-300">
                                {title}
                              </h3>
                              <p className="mt-6 text-base leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                {desc}
                              </p>
                            </div>
                            <button className="mt-auto inline-block px-12 py-4 rounded-full bg-gray-900 text-white font-medium shadow-lg group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                              Get Quote
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOT INDICATORS */}
          <div className="mt-16 flex items-center justify-center gap-3">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="p-1"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 h-2 bg-purple-600"
                      : "w-2 h-2 bg-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
