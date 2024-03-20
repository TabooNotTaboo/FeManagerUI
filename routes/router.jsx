import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SidebarWithSearch from "../components/SidebarWithSearch"
import Analytics from "../pages/Analytics";
import Reporting from "../pages/Reporting";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarWithSearch />,
    children: [
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "reporting",
        element: <Reporting />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
