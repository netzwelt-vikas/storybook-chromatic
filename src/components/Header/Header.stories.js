import React from "react";
import { Icon } from "@chakra-ui/core";
import { Outline } from "../Button/Button.stories";
import "./Header.css";

export default {
  title: "Foundation/Header",
};

export const Header = () => (
  <div className="header-outer">
    <div className="header-logo">
      <Icon name="LockIcon" size="30px" color="red.200" /> FaceBook
    </div>
    <div className="header-btn">
      <Outline />
    </div>
  </div>
);
