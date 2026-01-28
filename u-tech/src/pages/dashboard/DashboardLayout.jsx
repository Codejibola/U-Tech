import { NavLink, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-gray-200 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f1525] border-r border-white/10 hidden md:flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <span className="text-lg font-semibold tracking-wide">
            U-Tech Dashboard
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <NavItem to="/dashboard/overview" label="Overview" />
          <NavItem to="/dashboard/tutorials" label="Tutorials" />
          <NavItem to="/dashboard/projects" label="Projects" />
          <NavItem to="/dashboard/payments" label="Payments" />
          <NavItem to="/dashboard/messages" label="Messages" />
        </nav>

        {/* Footer / Account */}
        <div className="px-6 py-4 border-t border-white/10 text-sm text-gray-400">
          Logged in as<br />
          <span className="text-gray-200">user@utech.dev</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-[#0f1525] border-b border-white/10 flex items-center justify-between px-6">
          <div>
            <h1 className="text-sm text-gray-400">Account</h1>
            <p className="text-sm font-medium text-gray-200">
              Active U-Tech Member
            </p>
          </div>

          <button className="text-sm text-gray-400 hover:text-gray-200 transition">
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/* Reusable Sidebar Item */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded-md text-sm transition ${
          isActive
            ? "bg-white/10 text-white"
            : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default DashboardLayout;
