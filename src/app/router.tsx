import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Sponsors from "../pages/Sponsors";
import Contacts from "../pages/Contacts";
import AboutUs from "../pages/AboutUs";
import Recruitment from "../pages/Recruitment";

export const router = createBrowserRouter([
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
