import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Releases from "./pages/Releases";
import Contact from "./pages/Contact";
import Artists from "./pages/Artists";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import { AppContainer } from "./styles";
import { SiteMessage, SiteMessageContainer } from './components/SiteMessage';

function App() {
  return (
    <>
      <SiteMessageContainer>
        <SiteMessage>Notice: We will be closed from July 5th to July 14th. Any order placed during this time will ship after the 14th.</SiteMessage>
      </SiteMessageContainer>
      <ResponsiveAppBar />
 
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Releases />} />
            <Route path={"/releases"} element={<Releases />} />
            <Route path={"/shop"} element={<Shop />} />
            <Route path={"/artists"} element={<Artists />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
