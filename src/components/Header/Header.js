import React from "react";
import { header } from "../../profile";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <h1>{`I'm ${header.name}`}</h1>
        <p className="line-1 anim-typewriter">and this is my portfolio... </p>
      </div>
    </div>
  );
};

export default Header;
