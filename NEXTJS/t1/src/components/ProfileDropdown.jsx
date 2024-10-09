"use client";
// import { Dropdown, Avatar } from "rsuite";

// (Optional) Import component styles. If you are using Less, import the `index.less` file.
// import "rsuite/Dropdown/styles/index.css";

import { useUser } from "@auth0/nextjs-auth0/client";

const ProfileDropdown = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user)
    return (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              //   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              src={user.picture}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            {/* <a className="justify-between" href="/api/auth/me"> */}
            <a className="justify-between hover:scale-110" href="/profile ">
              Profile
              {/* <span className="badge">New</span> */}
            </a>
          </li>

          <li>
            <a href="/api/auth/logout">Logout</a>
          </li>
        </ul>
      </div>
    );

  return <a href="/api/auth/login">Login</a>;
};

export default ProfileDropdown;
