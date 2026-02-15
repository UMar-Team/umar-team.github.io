import { Link } from "react-router-dom";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { translations } from "../translations";
import { useLang } from "../hooks/useLang";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const scrollDir = useScrollDirection();
  const { lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { path: "/about", label: translations[lang].about },
    { path: "/sponsors", label: translations[lang].sponsors },
    { path: "/recruitment", label: translations[lang].recruitment },
    { path: "/contact", label: translations[lang].contact },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  useEffect(() => {
    if (scrollDir === "down") {
      setMobileOpen(false);
    }
  }, [scrollDir]);

  return (
    <nav
      className={`
        fixed top-4 left-2 right-2 md:m-10 z-50 
        text-white md:mt-4
        transition-transform duration-300
        md:static md:backdrop-blur-0
        ${scrollDir === "down" ? "max-md:-translate-y-32" : "max-md:translate-y-0"}
      `}
    >
      <div className="h-16 md:h-18 px-5 md:px-10 flex items-center justify-between relative rounded-full bg-primary shadow-xl">
        <Link to="/" className="flex items-center gap-2 px-2">
          <img src="/logo2.png" alt="UMar Logo" className="h-15 md:h-17" />
          <span className="hidden font-bold text-lg">UMar</span>
        </Link>

        <ul className="hidden md:flex gap-6 md:gap-2 justify-center absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="hover:text-secondary transition-colors py-5 px-5 duration-300 font-medium whitespace-nowrap"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="hidden md:flex items-center gap-1 text-white px-2 py-1 rounded-full hover:text-secondary transition-colors"
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          aria-label="Change language"
        >
          <span>{lang === "pt" ? "🇬🇧" : "🇵🇹"}</span>
          <span>{lang === "pt" ? "EN" : "PT"}</span>
        </button>

        <button
          ref={buttonRef}
          className="md:hidden px-4 -mr-4 py-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <ul
        ref={dropdownRef}
        className={`
          md:hidden absolute left-0 right-0 mt-2
          bg-primary text-white px-6 py-4
          rounded-3xl shadow-xl
          flex flex-col gap-2
          transform transition-all duration-200 origin-top
          ${mobileOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"}
        `}
      >
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block w-full hover:text-secondary text-center transition-colors duration-300 font-medium py-2 px-4"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <button
          className="flex items-center gap-1 text-white px-3 py-1 rounded-full mt-2 w-fit max-md:mx-auto"
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
        >
          <span>{lang === "pt" ? "🇬🇧" : "🇵🇹"}</span>
          <span>{lang === "pt" ? "EN" : "PT"}</span>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
