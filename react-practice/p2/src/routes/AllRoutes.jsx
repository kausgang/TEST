import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, Page1, Page2 } from "../pages";

import { Layout } from "./Layout";

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
          path: "page1",
          element: <Page1 />,
        },
        {
          path: "page2",
          element: <Page2 />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
