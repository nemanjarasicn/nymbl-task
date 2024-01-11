import React from "react";
import { useAppSelector } from "../hooks";
import { selectSidebarItem } from "../core/core.selectors";

const Navbar = () => {
  const navbarTitle = useAppSelector(selectSidebarItem);
  return (
    <div className=" z-50 fixed left-0 top-0 right-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-[20px] inline-flex">
      <div className=" flex gap-6 items-center">
        <div className=" border-r pr-6 border-[#e4e4e4]">
          <img src={require("../datas/imgs/logo.png")} alt="" />
        </div>
        <div className=" text-xl font-semibold leading-8 text-[#19191C]">
          {navbarTitle.toUpperCase()}
        </div>
      </div>
      <div className="justify-start items-start gap-8 flex">
        <div className="justify-start items-center gap-8 flex">
          <img
            className="w-11 h-11 rounded-full"
            src={"https://via.placeholder.com/44x44"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
