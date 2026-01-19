import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Tutorials from "./pages/Tutorials";
import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Topbar />

      {/* Offset content because header is fixed */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
