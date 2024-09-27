import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, PublicPage, ProtectedPage } from "../pages";

export const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/public",
      element: <PublicPage />,
    },
    {
      path: "/protected",
      element: <ProtectedPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
