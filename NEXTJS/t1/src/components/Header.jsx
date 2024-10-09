"use client";
import Link from "next/link";
import React from "react";
import ProfileDropdown from "./ProfileDropdown";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link className="btn btn-ghost text-xl" href="/">
        daisyUI
      </Link>
      {user && (
        <Link className="btn btn-ghost text-xl" href="exam">
          Exam
        </Link>
      )}

      <div className="flex space-x-2">
        <a href="/api/auth/signup">signup</a>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Header;
