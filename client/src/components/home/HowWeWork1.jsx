import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: 1,
    title: "ANALYSIS",
    desc: "Our First Step of Process in Work Flow is Gathering Information from Client Side & Requirement Analysis. Then Started Our Work.",
  },
  {
    id: 2,
    title: "DESIGN",
    desc: "Our Second Step of Process is Optimize the Process with a Right Combination of Technologies to Design Prototype Designs.",
  },
  {
    id: 3,
    title: "DEVELOPMENT",
    desc: "Project Construction & Development Process for End User Operate & Require Changes. We Choose Technologies & Review Options with the Client.",
  },
  {
    id: 4,
    title: "TESTING",
    desc: "The Main Part of Work Flow is Testing and Validate Our Process to Adopt with Client & End User; it's an Ideal State for Development Test.",
  },
  {
    id: 5,
    title: "DELIVERY",
    desc: "In the Deployment / Delivery Stage we Evaluate & Monitor the Program and Provide a Detailed Report for End User Suggestions.",
  },
  {
    id: 6,
    title: "SUPPORT & SERVICE",
    desc: "The Final Step of Process is to give Support & Services for Clients with End User Experience.",
  },
];

export default function HowWeWork1() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  /* ===========================
     AUTOPLAY (SAFE)
  ============================ */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* ===========================
     SCROLL BASED STEP CHANGE
  ============================ */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.4 && rect.bottom > 0) {
        const progress =
          Math.min(
            Math.max((window.innerHeight * 0.4 - rect.top) / rect.height, 0),
            1
          ) * steps.length;

        setActive(Math.min(steps.length - 1, Math.floor(progress)));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = steps[active] ?? steps[0];

  return (
    <section ref={sectionRef} className="py-24 bg-green-50">
      {/* ===========================
          TITLE
      ============================ */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Working Process
          </span>
        </h2>
        <p className="mt-4 text-gray-500">Based on 6 Levels of Unit</p>
      </div>

      {/* ===========================
          TIMELINE (DESKTOP)
      ============================ */}
      <div className="hidden md:block max-w-6xl mx-auto mb-16 px-6">
        <div className="relative h-1 bg-gray-200 rounded-full">
          <div
            className="absolute h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500"
            style={{ width: `${((active + 1) / steps.length) * 100}%` }}
          />

          <div className="absolute inset-0 flex justify-between items-center">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActive(i)}
                className="relative group"
              >
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300
                    ${
                      i <= active
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 scale-110 shadow-lg"
                        : "bg-white border border-gray-300"
                    }`}
                />
                <span
                  className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-semibold transition
                    ${i === active ? "text-gray-900" : "text-gray-400"}`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===========================
          MOBILE VERTICAL TIMELINE
      ============================ */}
      <div className="md:hidden max-w-xl mx-auto px-6 mb-10">
        <div className="border-l-2 border-gray-200 pl-6 space-y-8">
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => setActive(i)}
              className="flex items-start gap-4 text-left"
            >
              <div
                className={`w-4 h-4 mt-1 rounded-full ${
                  i === active
                    ? "bg-gradient-to-r from-pink-500 to-purple-600"
                    : "bg-gray-300"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  i === active ? "text-black" : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ===========================
          GLASS CARD
      ============================ */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl p-10 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl transition-all duration-500">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-2xl -z-10" />

          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {current.title}
          </h3>

          <p className="mt-6 text-center text-gray-700 leading-relaxed">
            {current.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
