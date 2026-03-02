import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

function App() {
  const location = useLocation();
  useScrollAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col max-md:min-h-screen text-tertiary bg-quaternary ">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <div ><Footer /></div>
    </div>
  );
}

export default App;
