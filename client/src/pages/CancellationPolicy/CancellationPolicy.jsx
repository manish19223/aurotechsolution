import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import servicesBanner from "../../assets/images/aboutbanner.jpg";

export default function CancellationPolicy() {
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
              Cancellation Policy
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
              <span className="text-white">Cancellation</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      </section>

      {/* ===================== CONTENT ===================== */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-3">7-Day Cancellation Policy</h2>

          <div className="flex justify-center items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
            <span className="w-20 h-[1px] bg-gray-300 ml-2" />
          </div>

          <div className="text-left text-gray-600 leading-8 space-y-6">
            <p>
              <strong>Full Refund:</strong>
            </p>

            <p>
              Cancellations made within <strong>7 days</strong> before the
              scheduled date will receive a <strong>full refund</strong> amount
              within <strong>8 to 10 working days</strong> in the main account.
            </p>

            <p>
              Cancellations made less than <strong>72 hours</strong> before the
              scheduled date will <strong>not</strong> be eligible for any
              refund.
            </p>

            <p className="font-medium text-gray-800">
              No refund will be provided.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER DIVIDER ===================== */}
      <div className="w-full h-px bg-gray-200" />

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
