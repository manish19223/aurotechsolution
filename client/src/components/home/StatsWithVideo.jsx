import { useEffect, useRef, useState } from "react";
import { FaSmile, FaCoffee, FaThumbsUp, FaBuilding } from "react-icons/fa";
import VideoFile from "../../assets/images/video.mp4";

/* =======================
   STATS DATA
======================= */
const stats = [
  { icon: <FaSmile />, value: 500, label: "Happy Clients" },
  { icon: <FaCoffee />, value: 750, label: "Cups of Coffee" },
  { icon: <FaThumbsUp />, value: 430, label: "Projects Done" },
  { icon: <FaBuilding />, value: 4, label: "Years Experience" },
];

/* =======================
   COUNTER COMPONENT
======================= */
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let current = 0;
          const step = Math.ceil(value / 60);

          const interval = setInterval(() => {
            current += step;
            if (current >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-gray-900">
      {count}+
    </span>
  );
};

/* =======================
   MAIN SECTION
======================= */
const StatsWithVideo = () => {
  return (
    <section className="relative py-28 bg-blue-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT STATS ================= */}
        <div className="grid grid-cols-2 gap-x-14 gap-y-16 z-10">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-[#2A2AFF] text-4xl mb-2">{s.icon}</div>

              {/* Decorative dots */}
              <div className="flex gap-1 mb-3">
                <span className="w-1.5 h-1.5 bg-[#2A2AFF] rounded-full" />
                <span className="w-1.5 h-1.5 bg-[#6A1B9A] rounded-full" />
                <span className="w-1.5 h-1.5 bg-[#8A2BE2] rounded-full" />
              </div>

              <Counter value={s.value} />
              <p className="mt-1 text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ================= RIGHT VIDEO ================= */}
        <div className="relative h-[520px] hidden md:block">
          <div
            className="
              absolute
              right-[-140px]
              top-1/2
              -translate-y-1/2
              w-[750px]
              h-[550px]
              overflow-hidden
              bg-gray-200
              shadow-[ -30px_0_80px_rgba(42,42,255,0.35) ]
              rounded-l-[300px]
              rounded-r-[40px]
            "
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              {/* ⚠️ Put video inside /public/videos */}
              <source src={VideoFile} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsWithVideo;
