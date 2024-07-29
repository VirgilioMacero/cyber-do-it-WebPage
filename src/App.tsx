import Home from "./views/Home";
import "./App.css";
import "./fonts/Heavitas.ttf";
import "./fonts/futur.ttf";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import CookieConsent from "./components/Shared/CookieConsent";
import SessionTimeoutHandler from "./components/Shared/SessionTimeoutHandler";
import { Route, Routes } from "react-router-dom";
import Products from "./views/Products";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import NotFound from "./components/Shared/NotFound";

function App() {
  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <div className="flex flex-col min-h-screen">
      <CookiesProvider>
        <SessionTimeoutHandler />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {!cookies.cookieConsent && <CookieConsent />}
        <Footer />
      </CookiesProvider>
    </div>
  );
}

export default App;
