import { useNavigate } from "react-router-dom";

// Images
import OfficeImg from "../../assets/images/banner2.jpg";
import FunFridayImg from "../../assets/images/fun-friday.jpg";
import FirstClientImg from "../../assets/images/first-client.jpg";
import TeamInaugationImg from "../../assets/images/fun-friday.jpg";

const EVENTS = [
  {
    id: 1,
    title: "Office Inauguration",
    date: "01",
    month: "Sept",
    year: "2020",
    location:
      "No 182A, South Street Pachur Post, Orathanadu Thaluk, Thanjavur District",
    desc: "Our main office inauguration marked the first milestone of our journey.",
    image: OfficeImg,
  },
  {
    id: 2,
    title: "Fun Friday",
    date: "05",
    month: "Sept",
    year: "2020",
    location:
      "No 182A, South Street Pachur Post, Orathanadu Thaluk, Thanjavur District",
    desc: "Team bonding and cultural activities that strengthen our work environment.",
    image: FunFridayImg,
  },
  {
    id: 3,
    title: "First Client",
    date: "14",
    month: "Jan",
    year: "2021",
    location:
      "No 182A, South Street Pachur Post, Orathanadu Thaluk, Thanjavur District",
    desc: "Meeting and onboarding our very first business client successfully.",
    image: FirstClientImg,
  },
   {
    id: 4,
    title: "Team Inaugation",
    date: "05",
    month: "Sept",
    year: "2020",
    location:
      "No 182A, South Street Pachur Post, Orathanadu Thaluk, Thanjavur District",
    desc: "Our First Step of Project was Started.",
    image: TeamInaugationImg,
  },
];

export default function OurEvents() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-pink-100 overflow-hidden">
      {/* ===== LIGHT BACKGROUND GLOW (DESKTOP ONLY) ===== */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div
          className="absolute -top-24 left-[12%] h-[280px] w-[280px] rounded-full
          bg-[radial-gradient(circle,rgba(42,42,255,0.14),transparent_70%)]
          blur-2xl"
        />
        <div
          className="absolute -bottom-24 right-[12%] h-[280px] w-[280px] rounded-full
          bg-[radial-gradient(circle,rgba(138,43,226,0.14),transparent_70%)]
          blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5">
        {/* ===== HEADING ===== */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold
            bg-linear-to-r from-[#2A2AFF] via-[#6A1B9A] to-[#8A2BE2]
            bg-clip-text text-transparent"
          >
            Our Events
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="w-10 h-px bg-black/20" />
            <span className="w-2 h-2 rounded-full bg-[#6A1B9A]" />
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2]" />
            <span className="w-10 h-px bg-black/20" />
          </div>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Celebrating milestones, teamwork and memorable moments at Auro Tech
            Solutions.
          </p>
        </div>

        {/* ===== EVENTS ===== */}
        <div className="space-y-14">
          {EVENTS.map((ev, index) => (
            <article
              key={ev.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 items-center`}
            >
              {/* IMAGE */}
              <div className="w-full lg:w-2/5">
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    loading="lazy"
                    className="w-full h-64 object-cover
                    transition-transform duration-500
                    will-change-transform
                    lg:hover:scale-105"
                  />

                  {/* DATE BADGE */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md">
                    <div className="text-center leading-tight">
                      <span className="text-xl font-bold text-[#2A2AFF] block">
                        {ev.date}
                      </span>
                      <span className="text-xs font-semibold text-gray-600 uppercase">
                        {ev.month}
                      </span>
                      <span className="text-xs text-gray-500">{ev.year}</span>
                    </div>
                  </div>

                  {/* EVENT BADGE */}
                  <div className="absolute top-5 right-5">
                    <span
                      className="bg-linear-to-r from-[#2A2AFF] to-[#8A2BE2]
                    text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm"
                    >
                      EVENT
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {ev.title}
                  </h3>
                  <div
                    className="w-16 h-1 bg-linear-to-r from-[#2A2AFF] to-[#8A2BE2]
                  rounded-full mx-auto lg:mx-0 mt-2"
                  />
                </div>

                <p className="text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {ev.desc}
                </p>

                {/* LOCATION */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500">
                  <svg
                    className="w-5 h-5 text-[#2A2AFF]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {ev.location.split(",")[0]}
                  </span>
                </div>

                {/* BUTTON */}
                <div className="pt-2">
                  <button
                    onClick={() => navigate("/events")}
                    className="inline-flex items-center gap-2 px-6 py-3
                    bg-linear-to-r from-[#2A2AFF] to-[#8A2BE2]
                    text-white font-semibold rounded-full
                    transition-all duration-300
                    hover:shadow-md lg:hover:scale-105"
                  >
                    Discover More
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
