import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/work", label: "Work" },
  { path: "/tutorials", label: "Tutorials" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Topbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
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

        {/* CTA */}
        <NavLink
          to="/contact"
          className="rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600 transition"
        >
          Start a Web Project
        </NavLink>
      </div>
    </header>
  );
};

export default Topbar;
