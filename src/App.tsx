import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col md:h-screen md:overflow-hidden max-md:min-h-screen text-tertiary bg-quaternary ">
      <Navbar />
      <main className="flex-1 flex flex-col max-md:mt-20">
        <Outlet />
      </main>
      <div className="md:hidden"><Footer /></div>
    </div>
  );
}

export default App;
