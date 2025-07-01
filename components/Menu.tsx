import Image from "next/image";
import React from "react";
import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <div className="flex m-5 justify-center items-center">
      <div className="flex justify-between w-[90%] flex-wrap">
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </div>
    </div>
  );
};

export default Menu;
