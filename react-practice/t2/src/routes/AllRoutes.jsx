import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page1, Page2 } from "../pages";

export const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/page1",
      element: <Page1 />,
    },
    {
      path: "/page2",
      element: <Page2 />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
