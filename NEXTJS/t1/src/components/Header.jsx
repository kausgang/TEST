import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link className="btn btn-ghost text-xl" href="/">
        daisyUI
      </Link>
      <Link className="btn btn-ghost text-xl" href="exam">
        Exam
      </Link>
      <div>''</div>
    </div>
  );
};

export default Header;
