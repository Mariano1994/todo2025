import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import MainLayout from "../pages/main-layout";

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
        path: "/login",
        element: <div>Login Page</div>,
      },
    ],
  },
]);
