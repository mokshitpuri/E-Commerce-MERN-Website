import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Puri Traders Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.fixc1-5.fna.fbcdn.net/v/t39.30808-6/302588641_435858268645370_6986057360673543892_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D2lNITLQbNoQ7kNvgH2GCjl&_nc_ht=scontent.fixc1-5.fna&oh=00_AYCcVHwYFLg2r7NkTZQBKBK3nh9Jo9S4quSkr9bmfgrz1g&oe=6657F385" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
