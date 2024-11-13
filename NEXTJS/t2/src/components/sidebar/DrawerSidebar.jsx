import React from "react";
import SidebarHeader from "./SidebarHeader";
import NavPanel from "./NavPanel";
import MemberProfile from "./MemberProfile";

const DrawerSidebar = () => {
  return (
    <div className="flex flex-col">
      <SidebarHeader />
      <NavPanel />
      <MemberProfile />
    </div>
  );
};

export default DrawerSidebar;
