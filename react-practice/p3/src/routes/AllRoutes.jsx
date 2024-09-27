import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage, TestPage } from "../pages";

export const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "test",
          element: <TestPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
