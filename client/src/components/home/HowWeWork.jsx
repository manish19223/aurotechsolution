// src/components/home/HowWeWork.jsx

import processImage from "../../assets/images/work-process.png";
// 👆 yaha apni image ka exact path lagana

const HowWeWork = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* ====== HEADING ====== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            How we <span className="text-pink-600">{`{Work}`}</span>
          </h2>

          {/* divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-10 h-px bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
            <span className="w-10 h-px bg-gray-300"></span>
          </div>

          <p className="mt-4 text-gray-600 text-lg">
            Our Working Process based on 6 Levels of unit
          </p>
        </div>

        {/* ====== CONTENT ====== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT : IMAGE */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <img
                src={processImage}
                alt="Our Work Process"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT : DARK CONTENT BOX */}
          <div className="bg-[#1f1f1f] text-white rounded-2xl p-10">
            <p className="text-gray-200 leading-relaxed mb-6">
              We are a full-scale IT provider who will start with your idea to
              completely create or integrate it into the existing system and
              maintain it.
            </p>

            <h3 className="text-xl font-semibold text-yellow-400 mb-6">
              Our Process Key Features
            </h3>

            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-sm">
                  ✓
                </span>
                <span>Innovative design & development</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-sm">
                  ✓
                </span>
                <span>Cost-Efficient & Quick Setup</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-sm">
                  ✓
                </span>
                <span>Fast Working Process</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-sm">
                  ✓
                </span>
                <span>Best Support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-sm">
                  ✓
                </span>
                <span>Long-Lasting Services</span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed">
              We will do the design, development, deployment, hosting and
              completely support you in the entire lifecycle of the product or
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
