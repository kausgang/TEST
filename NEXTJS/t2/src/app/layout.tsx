// import localFont from "next/font/local";
import "./globals.css";
// import "rsuite/dist/rsuite-no-reset.min.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
// import Header from "@/components/Header";
// import Drawer from "@/components/Drawer";
import DrawerSidebar from "@/components/sidebar/DrawerSidebar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // return (
  //   <html lang="en">
  //     <UserProvider>
  //       <body
  //       // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  //       >
  //         <Header />

  //         {children}
  //       </body>
  //     </UserProvider>
  //   </html>
  // );

  // let arr: number[] = [];
  // for (let index = 0; index < 4; index++) {
  //   arr.push(index);
  // }

  return (
    <html lang="en">
      <UserProvider>
        <body>
          {/* main content */}
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col items-center justify-center">
              {children}
            </div>

            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              {/* <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                <a>Sidebar Item 1</a>
                </li>
                <li>
                <a>Sidebar Item 2</a>
                </li>
                </ul> */}
              <DrawerSidebar />
            </div>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
