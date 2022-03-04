import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Releases from "./pages/Releases";
import Contact from "./pages/Contact";
import Artists from "./pages/Artists";
import Footer from "./components/Footer";
import { AppContainer } from "./styles";

function App() {
  const urlPrefix = window.location.href.includes("github")
    ? "/deanwell-global-frontend"
    : "";
  return (
    <>
      <ResponsiveAppBar />
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path={`${urlPrefix}/`} element={<Releases />} />
            <Route path={`${urlPrefix}/releases`} element={<Releases />} />
            <Route path={`${urlPrefix}/artists`} element={<Artists />} />
            <Route path={`${urlPrefix}/contact`} element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
