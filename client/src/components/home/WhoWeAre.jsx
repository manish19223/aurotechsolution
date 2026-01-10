import { useState } from "react";
import whoImg from "../../assets/images/who_we_are.jpg";

const data = [
  {
    id: 1,
    title: "Why With Us ?",
    content:
      "Regularly considering realities and innovations in project management methodologies, we have developed a robust process that ensures quality work on time. We Understand & Digitalized Your Idea.",
  },
  {
    id: 2,
    title: "What we Make ?",
    content:
      "We start a project with an Ideation Workshop that encompasses a thinking process to gather, organize, and refine the client requirements. Ideas are the Best Inventions by Humans.",
  },
  {
    id: 3,
    title: "How We Work ?",
    content:
      "Our Design Sprint involves the Double Diamond approach of Design Thinking. We Find, Explain, Design, Code, and Deliver the right solution followed by wireframes and prototypes.",
  },
];

const WhoWeAre = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="bg-blue-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            WHO WE <span className="text-pink-600">ARE ?</span>
          </h2>

          <div className="mt-4 flex justify-center items-center gap-2">
            <span className="w-8 h-px bg-gray-300" />
            <span className="w-2 h-2 bg-pink-600 rounded-full" />
            <span className="w-2 h-2 bg-pink-600 rounded-full" />
            <span className="w-2 h-2 bg-pink-600 rounded-full" />
            <span className="w-8 h-px bg-gray-300" />
          </div>

          <p className="mt-6 text-gray-700 font-medium">
            We Work With Emerging Talent and Established Ideas
          </p>
        </div>

        {/* MAIN */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* IMAGE */}
          <div className="relative self-start">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={whoImg}
                alt="Who We Are"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-6 border border-white/40 rounded-2xl pointer-events-none" />
          </div>

          {/* ACCORDION */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {data.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id}>
                  {/* HEADER */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex justify-between items-center px-6 py-6 text-left text-xl font-semibold"
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")} &nbsp; {item.title}
                    </span>
                    <span className="text-2xl font-light">+</span>
                  </button>

                  {/* TOP LINE (ONLY WHEN OPEN) */}
                  {isOpen && <div className="h-px bg-gray-200 w-full" />}

                  {/* CONTENT */}
                  {isOpen && (
                    <div className="px-6 py-5 text-gray-600">
                      {item.content}
                    </div>
                  )}

                  {/* BOTTOM LINE */}
                  {index !== data.length - 1 && (
                    <div className="h-px bg-gray-200 w-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
