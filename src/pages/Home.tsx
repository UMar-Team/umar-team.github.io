import { Link } from "react-router-dom";
import VideoBackground from "../components/VideoBackground";
import { useLang } from "../hooks/useLang";
import { translations } from "../translations";

const Home = () => {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground />

      <div className="text-center text-white z-10">
        <h1 className="text-7xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          UMar
        </h1>
        <p className="text-lg font-bold md:text-3xl drop-shadow-lg">
          University of Minho Aquatic Racing Team
        </p>

        <Link
          to="/about"
          className="inline-block mt-10 px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-secondary"
        >
          {t.homeButton}
        </Link>
      </div>
    </section>
  );
};

export default Home;