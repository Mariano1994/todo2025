import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import MainLayout from "../pages/main-layout";
import Reports from "../pages/reports";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
]);
