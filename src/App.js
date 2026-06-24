import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Releases from "./pages/Releases";
import Contact from "./pages/Contact";
import Artists from "./pages/Artists";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import { SiteMessageContainer, SiteMessage } from "./components/SiteMessage";
import { AppContainer } from "./styles";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteMessageContainer>
        <SiteMessage>
          We will be closed from June 24th through July 6th. Any orders placed
          during this time will ship after July 6th. Thank you for your patience!
        </SiteMessage>
      </SiteMessageContainer>
      <ResponsiveAppBar />
      <AppContainer>
        <BrowserRouter>
          <main id="main-content">
            <Routes>
              <Route path={"/"} element={<Releases />} />
              <Route path={"/releases"} element={<Releases />} />
              <Route path={"/shop"} element={<Shop />} />
              <Route path={"/artists"} element={<Artists />} />
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
