import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { LangProvider } from "./hooks/useLang";
import "./index.css";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Recruitment = lazy(() => import("./pages/Recruitment"));
const Contacts = lazy(() => import("./pages/Contacts"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="sponsors" element={<Sponsors />} />
              <Route path="recruitment" element={<Recruitment />} />
              <Route path="contact" element={<Contacts />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </LangProvider>
  </StrictMode>
);