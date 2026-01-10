import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

import footerLogo from "../../assets/images/logo.jpg";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* ABOUT */}
        <div>
          <img src={footerLogo} alt="Auro Tech" className="h-14 mb-6" />
          <p className="text-gray-600 mb-4">
            Auro Tech Solutions – Your Technology Partner. Our Technology Grow
            your Future
          </p>
          <p className="text-gray-600 mb-6">
            We provide a best service for you & Fulfill your Requirements with
            our Efficient Technology.
          </p>
          <Link
            to="/about"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            View More
          </Link>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Navigation</h3>
          <ul className="space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="group flex items-center gap-2 text-gray-700 hover:text-pink-600 transition"
                >
                  <span className="text-green-500 text-lg group-hover:translate-x-3 transition">
                    ››
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Useful Links</h3>
          <ul className="space-y-4">
            {[
              { name: "Help Center", path: "/help-center" },
              { name: "Careers", path: "/careers" },
              { name: "FAQ's", path: "/faq" },
              { name: "Cancellation Policy ", path: "/cancellation-policy" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="group flex items-center gap-2 text-gray-700 hover:text-pink-600 transition"
                >
                  <span className="text-green-500 text-lg group-hover:translate-x-3 transition">
                    ››
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Contact Info</h3>

          <div className="flex gap-3 mb-4">
            <MdLocationOn className="text-red-600 text-6xl mt-1" />
            <p className="text-gray-700">
              No 182A, South Street Pachur Post, Orathanadu Thaluk, Thanjavur
              District, Tamilnadu, India, PIN – 614902
            </p>
          </div>

          <div className="flex gap-3 mb-4 items-center">
            <BsTelephoneFill className="text-red-600 text-lg" />
            <p className="text-gray-700">+91 8015371070</p>
          </div>

          <div className="flex gap-3 mb-6 items-center">
            <MdEmail className="text-red-600 text-xl" />
            <a
              href="mailto:aurotechsolutionspvtltd@gmail.com"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              aurotechsolutionspvtltd@gmail.com
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-red-600 text-lg">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:scale-110 transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* ================= CTA STRIP ================= */}
      <div className="bg-linear-to-r from-pink-600 to-purple-600 text-white text-center py-6 text-lg font-semibold">
        Auro Tech Solutions – Let&apos;s Grow with Us !
      </div>

      {/* ================= BOTTOM STRIP ================= */}
      <div className="md:relative fixed bottom-0 left-0 right-0 bg-linear-to-r from-pink-700 to-purple-700 text-white text-sm z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          <div className="text-center md:text-left">
            Copyright © 2024 Auro Tech Solutions
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-end">
            <Link
              to="/privacy-policy"
              className="hover:text-pink-300 transition"
            >
              Privacy Policy
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/terms" className="hover:text-pink-300 transition">
              Terms & Conditions
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/faq" className="hover:text-pink-300 transition">
              FAQ&apos;s
            </Link>
          </div>
        </div>
      </div>

      {/* ================= SCROLL TO TOP ================= */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-6 right-6 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
