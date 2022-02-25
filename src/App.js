import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Releases from "./pages/Releases";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Releases />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
