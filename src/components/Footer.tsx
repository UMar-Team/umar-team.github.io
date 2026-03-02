import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { translations } from "../translations";
import { useLang } from "../hooks/useLang";

const Footer = () => {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="bg-tertiary text-quaternary">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">UMar</h3>
            <p className="text-white/70 leading-relaxed">
              University of Minho Aquatic Racing Team
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-quaternary">
              {t.home === "Início" ? "Navegação" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="hover:text-secondary transition-colors">
                  {t.sponsors}
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="hover:text-secondary transition-colors">
                  {t.recruitment}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-quaternary">
              {t.contact}
            </h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>{t.contactEmail}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span>University of Minho, Braga</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} UMar – University of Minho Aquatic Racing Team.
        </div>

      </div>
    </footer>
  );
};

export default Footer;