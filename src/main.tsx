import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { makeRouter } from "./app/router";
import { LangProvider } from "./hooks/useLang";

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirect && redirect !== location.pathname) {
  history.replaceState(null, "", redirect);
}

const router = makeRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </LangProvider>
  </StrictMode>
);