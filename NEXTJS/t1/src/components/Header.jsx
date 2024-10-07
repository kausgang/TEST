import Link from "next/link";
import React from "react";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link className="btn btn-ghost text-xl" href="/">
        daisyUI
      </Link>
      <Link className="btn btn-ghost text-xl" href="exam">
        Exam
      </Link>
      <div className="flex space-x-2">
        <a href="/api/auth/login">
          <button className="btn btn-primary">Login</button>
        </a>
        <a href="/api/auth/logout">
          <button className="btn btn-primary">Logout</button>
        </a>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Header;
