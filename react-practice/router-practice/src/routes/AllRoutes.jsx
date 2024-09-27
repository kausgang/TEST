// import { Routes, Route } from "react-router-dom";
import { ExamPage, DashboardPage } from "../pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ExamPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
