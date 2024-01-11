import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectSidebarItem } from "../core/core.selectors";
import { setOpenModal, setSidebarItem } from "../core/core.reducer";

// data
import { Data } from "../datas/constants";

// models
import { IconInt } from "../core/core.models";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispach = useAppDispatch();
  const selectedSidebarItem = useAppSelector(selectSidebarItem);

  const handleChangeSidebarItem = (sidebarItem: IconInt) => {
    if (sidebarItem.name !== "logout") {
      dispach(setSidebarItem(sidebarItem.name));
      navigate(`${sidebarItem.navigate}`);
    } else {
      dispach(setOpenModal(true));
    }
  };

  return (
    <div className="block">
      <div className="fixed md:hidden z-40 left-0 top-0 right-0 bottom-0 bg-slate-700 backdrop-blur-3xl opacity-60"></div>
      <div className="h-full z-50 fixed drop-shadow-2xl md:drop-shadow flex">
        <div className="flex-col overflow-hidden md:overflow-auto justify-start items-start gap-4 flex bg-zinc-900 px-4 py-6 min-h-full">
          {Data.map((icon, index) => {
            return (
              <div
                key={index}
                className={`p-3.5 cursor-pointer relative ${
                  selectedSidebarItem === icon.name
                    ? " text-white bg-gradient-to-bl from-amber-500 to-pink-500"
                    : "text-neutral-400"
                } rounded-lg hover:text-white duration-300 justify-start items-center gap-2 group flex flex-col`}
                onClick={() => handleChangeSidebarItem(icon)}
              >
                <i className={`${icon.icon} text-xl w-6 h-6 text-center`}></i>
                <span className="z-50 absolute top-12 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 rounded bg-gray-800 p-2 text-xs text-white transition-transform ">
                  {icon.tooltip}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
