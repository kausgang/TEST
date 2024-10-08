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
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Header;
