import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
