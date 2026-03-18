import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Sponsors = lazy(() => import("../pages/Sponsors"));
const Contacts = lazy(() => import("../pages/Contacts"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Recruitment = lazy(() => import("../pages/Recruitment"));

export function makeRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutUs /> },
        { path: "sponsors", element: <Sponsors /> },
        { path: "recruitment", element: <Recruitment /> },
        { path: "contact", element: <Contacts /> },
      ],
    },
  ]);
}