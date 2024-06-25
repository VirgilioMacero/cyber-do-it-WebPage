import Home from "./views/Home";
import "./App.css";
import "./fonts/Heavitas.ttf";
import "./fonts/futur.ttf";
import { CookiesProvider } from "react-cookie";
import SessionTimeoutHandler from "./components/Shared/SessionTimeoutHandler";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <CookiesProvider>
        <SessionTimeoutHandler />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CookiesProvider>
    </>
  );
}

export default App;
