import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type LangContextType = {
  lang: "pt" | "en";
  setLang: (lang: "pt" | "en") => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<"pt" | "en">("en");

  useEffect(() => {
    const userLang = navigator.language;
    setLang(userLang.startsWith("pt") ? "pt" : "en");
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
};
