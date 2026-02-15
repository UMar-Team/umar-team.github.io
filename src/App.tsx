import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col md:h-screen md:overflow-hidden text-tertiary bg-quaternary ">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <div className="md:hidden"><Footer /></div>
    </div>
  );
}

export default App;
