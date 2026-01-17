import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/work", label: "Work" },
  { path: "/tutorials", label: "Tutorials" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center ">
          <img src={logo} alt="U-Tech Logo" className="h-12 w-13 font-bold" />
          <span className="font-semibold text-teal-500">U-Tech</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-teal-500"
                  : "text-slate-700 hover:text-slate-900 transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button & Hamburger */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/contact"
            className="hidden md:inline-block rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600 transition"
          >
            Start a Web Project
          </NavLink>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-700 hover:text-slate-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="px-6 py-4 space-y-3">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-teal-500 font-medium"
                    : "block text-slate-700 hover:text-slate-900 transition"
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600 transition text-center"
            >
              Start a Web Project
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Topbar;
