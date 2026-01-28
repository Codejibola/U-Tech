import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";

// Public Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Tutorials from "./pages/Tutorials";
import About from "./pages/About";
import Contact from "./pages/Contact";

// // User Dashboard Pages
import DashboardLayout from "./pages/dashboard/DashboardLayout";
// import DashboardOverview from "./pages/dashboard/Overview";
// import DashboardTutorials from "./pages/dashboard/Tutorials";
// import DashboardProjects from "./pages/dashboard/Projects";
// import DashboardPayments from "./pages/dashboard/Payments";
// import DashboardMessages from "./pages/dashboard/Messages";

// // Admin Dashboard Pages
// import AdminLayout from "./pages/admin/AdminLayout";
// import AdminOverview from "./pages/admin/Overview";
// import AdminUsers from "./pages/admin/Users";
// import AdminProjects from "./pages/admin/Projects";
// import AdminPayments from "./pages/admin/Payments";
// import AdminTutorials from "./pages/admin/Tutorials";

function App() {
  return (
    <BrowserRouter>
      {/* Public top navigation */}
      <Topbar />

      {/* Offset content because header is fixed */}
      <div className="pt-16">
        <Routes>
          {/* ========= PUBLIC ROUTES ========= */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         
           {/* ========= USER DASHBOARD =========  */}
           <Route path="/dashboard" element={<DashboardLayout />}>
            {/* <Route index element={<DashboardOverview />} />
            <Route path="tutorials" element={<DashboardTutorials />} />
            <Route path="projects" element={<DashboardProjects />} />
            <Route path="payments" element={<DashboardPayments />} />
            <Route path="messages" element={<DashboardMessages />} /> */}
          </Route>

           {/* ========= ADMIN DASHBOARD ========= */}
           {/* <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminOverview />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="tutorials" element={<AdminTutorials />} /> 
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
