import React from "react";
import "./Sidebar.css";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      <h2>{title}</h2>
    </div>
  );
}

export default SidebarRow;
