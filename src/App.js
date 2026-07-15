import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Releases from "./pages/Releases";
import Contact from "./pages/Contact";
import Artists from "./pages/Artists";
import Shop from "./pages/Shop";
import Submissions from "./pages/Submissions";
import Footer from "./components/Footer";
import { AppContainer } from "./styles";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ResponsiveAppBar />
      <AppContainer>
        <BrowserRouter>
          <main id="main-content">
            <Routes>
              <Route path={"/"} element={<Releases />} />
              <Route path={"/releases"} element={<Releases />} />
              <Route path={"/shop"} element={<Shop />} />
              <Route path={"/artists"} element={<Artists />} />
              <Route path={"/submissions"} element={<Submissions />} />
              <Route path={"/contact"} element={<Contact />} />
            </Routes>
          </main>
        </BrowserRouter>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
