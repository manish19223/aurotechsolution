import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import servicesBanner from "../../assets/images/aboutbanner.jpg";

export default function Terms() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===================== BANNER ===================== */}
      <section className="relative w-full h-105 mt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesBanner})` }}
        />
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
          <div>
            <h1 className="text-white text-5xl font-bold mb-4">
              {" "}
              Terms & Conditions{" "}
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
              <span className="text-white">Terms & Conditions</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      </section>

      {/* ===================== CONTENT ===================== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-2">
            Terms and Conditions
          </h2>

          <div className="flex justify-center items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            <span className="w-20 h-[1px] bg-gray-300 ml-2"></span>
          </div>

          {/* Link + Date */}
          <a href="#" className="text-blue-600 font-medium block mb-3">
            Link to Terms and Conditions
          </a>

          <p className="text-sm text-gray-500 mb-8">
            Last updated on May 29, 2024
          </p>

          {/* Intro */}
          <p className="text-gray-600 leading-7 mb-6">
            For the purpose of these Terms and Conditions, the terms
            <strong> "we", "us", "our"</strong> shall refer to Auro Tech
            Solutions, with its registered/operational office located at 182A,
            South Street, Pachiyur, Thanjavur, Tamil Nadu 614902. The terms{" "}
            <strong>"you", "your", "user", "visitor"</strong> refer to any
            individual or entity visiting our website and/or agreeing to
            purchase from us.
          </p>

          <p className="text-gray-600 mb-8">
            By using the website and/or making a purchase, you agree to the
            following Terms and Conditions:
          </p>

          {/* Terms Blocks */}
          <div className="space-y-6 text-gray-600 leading-7">
            <p>
              <strong>Website Updates:</strong> The content of the website pages
              is subject to change without prior notice.
            </p>

            <p>
              <strong>Accuracy and Warranties:</strong> Neither we nor third
              parties provide any warranty or guarantee regarding the accuracy,
              timeliness, completeness, or suitability of the website's
              information and materials for any purpose.
            </p>

            <p>
              You acknowledge that the information may contain inaccuracies or
              errors, and we expressly exclude liability to the fullest extent
              permitted by law.
            </p>

            <p>
              <strong>User Responsibility:</strong> Your use of any materials or
              information on the website is at your own risk. It is your
              responsibility to ensure products, services, or information meet
              your specific requirements.
            </p>

            <p>
              <strong>Ownership and Restrictions:</strong> The website’s design,
              layout, look, and graphics are owned or licensed by us and are
              protected under copyright laws. Reproduction is prohibited unless
              stated otherwise.
            </p>

            <p>
              Trademarks reproduced on the website that are not owned or
              licensed by the operator are acknowledged.
            </p>

            <p>
              <strong>Unauthorized Use:</strong> Unauthorized use of the
              provided information may lead to claims for damages and/or be
              considered a criminal offense.
            </p>

            <p>
              <strong>External Links:</strong> The website may contain links to
              third-party websites for additional information. These links are
              provided for convenience, and we do not endorse their content.
            </p>

            <p>
              Links to our website from other sources require prior written
              consent from Auro Tech Solutions.
            </p>

            <p>
              <strong>Legal Disputes:</strong> Any disputes arising from website
              use, purchases, or engagement with us are governed by the laws of
              India.
            </p>

            <p>
              <strong>Transaction Authorization:</strong> We shall not be held
              liable for losses or damages arising from the decline of
              authorization for any transaction due to the cardholder exceeding
              the agreed limit with our acquiring bank.
            </p>
          </div>
        </div>
      </section>

      
      {/* Footer Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* ===================== SCROLL TO TOP ===================== */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-red-600 text-white text-xl shadow-lg hover:scale-110 transition"
        >
          ↑
        </button>
      )}
    </>
  );
}
