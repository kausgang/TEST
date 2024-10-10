import React from "react";

const NavPanel = () => {
  return (
    <div>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li>
          <a href="/api/auth/login">Login</a>
        </li>
        <li>
          <a href="/api/auth/logout">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default NavPanel;
