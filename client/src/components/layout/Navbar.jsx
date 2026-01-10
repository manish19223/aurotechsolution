import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg"; // <-- apna logo path yahan set karo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/faq", label: "F.A.Q" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-9 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO IMAGE */}
        <NavLink to="/" className="flex items-center" onClick={closeMenu}>
          <img
            src={logo}
            alt="Auro Tech Solutions"
            className="h-10 w-auto object-contain"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 font-heading font-medium text-[#222222]">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 cursor-pointer"
                  : "hover:text-pink-600 transition cursor-pointer"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#222222] transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#222222] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#222222] transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[88px] bg-white z-40">
          <nav className="flex flex-col items-center justify-center min-h-screen bg-white">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-6 px-8 text-xl font-heading font-medium text-[#222222] hover:text-pink-600 transition cursor-pointer ${
                    isActive ? "text-pink-600" : ""
                  } ${
                    index !== navItems.length - 1
                      ? "border-b border-gray-200 w-full text-center"
                      : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
