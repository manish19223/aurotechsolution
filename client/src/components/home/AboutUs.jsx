import { Bell, Building2, ThumbsUp } from "lucide-react";
import aboutImg from "../../assets/images/about_us_3.jpg";

const AboutUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold">
            About <span className="text-pink-600">Us</span>
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
            <span className="w-8 h-px bg-gray-300"></span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImg}
                alt="About Auro Tech"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Border overlay */}
            <div className="absolute inset-6 border rounded-2xl border-white/40 pointer-events-none"></div>
          </div>

          {/* CONTENT CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-heading font-bold mb-4">
              Auro Tech Solutions – Your Technology Partner
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              At Auro Tech Solutions, We Develop Innovative and Reliable
              Products & Services. All of Our technologies give Efficient
              Solutions for Your Requirements.
              <br />
              <br />
              Auro Tech Solutions was Started by Young Entrepreneur Mr. M.Sankar
              on September 1st, 2020. The Goal of Auro Tech Solutions
              Technologies is “LEARN - EXECUTE - TEACH”.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-full">
              View More
            </button>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {/* Item 1 */}
          <div className="flex gap-4">
            <Bell className="text-pink-600 w-10 h-10" />
            <div>
              <h4 className="font-heading font-semibold text-lg">
                We are Professional
              </h4>
              <p className="text-gray-600 mt-2">
                We Develop & Promote Advanced Information Technologies (AIT) for
                your Need.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4">
            <Building2 className="text-pink-600 w-10 h-10" />
            <div>
              <h4 className="font-heading font-semibold text-lg">
                We are Efficient
              </h4>
              <p className="text-gray-600 mt-2">
                Our Business Philosophy is Assure the Quality of Product & Build
                Trust from you.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4">
            <ThumbsUp className="text-pink-600 w-10 h-10" />
            <div>
              <h4 className="font-heading font-semibold text-lg">
                We are Smartest
              </h4>
              <p className="text-gray-600 mt-2">
                We are Committed to Provide you Best Quality Solutions at Low
                Cost & Efficient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
