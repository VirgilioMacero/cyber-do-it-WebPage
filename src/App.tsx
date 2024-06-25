import Home from "./views/Home";
import "./App.css";
import "./fonts/Heavitas.ttf";
import "./fonts/futur.ttf";
import { CookiesProvider } from "react-cookie";
import SessionTimeoutHandler from "./components/SessionTimeoutHandler";
import { Route, Routes } from "react-router-dom";
import Products from "./views/Products";

function App() {
  return (
    <>
      <CookiesProvider>
        <SessionTimeoutHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products/>}/>
        </Routes>
      </CookiesProvider>
    </>
  );
}

export default App;
