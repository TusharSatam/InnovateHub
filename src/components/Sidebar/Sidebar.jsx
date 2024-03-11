import React from "react";
import { user1 } from "../../assets";
import { FaDropbox } from "react-icons/fa6";
import Teams from "./Teams";
import Folders from "./Folders";
import SupportLinks from "./SupportLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleMoboNav } from "../../redux/slice/ToggleNav";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navInfo = useSelector((state) => state.ToggleNavbarSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <aside
      className={`${
        navInfo?.toggleMoboNav
          ? "flex absolute left-0 top-0 z-20 bg-white"
          : "hidden"
      } lg:flex flex-col w-full md:w-[300px] h-full border-2 md:rounded-lg`}
    >
      <header className="p-2 flex flex-row w-full h-fit justify-between items-center">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FaDropbox className="h-[32px] w-[32px] rounded-lg bg-black text-white p-1" />
          <div className="flex flex-col">
            <h3 className="m-0 p-0 text-[12px] font-normal text-gray-400">
              INC
            </h3>
            <h3 className="m-0 p-0 text-[14px] font-semibold">InnovateHub</h3>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={user1}
            alt="user"
            className="h-[24px] w-[24px] rounded-full"
          />
          {navInfo?.toggleMoboNav && (
            <IoMdClose
              className="h-[24px] w-[24px]"
              onClick={() => dispatch(toggleMoboNav())}
            />
          )}
        </div>
      </header>
      <Teams />
      <Folders />
      <SupportLinks />
    </aside>
  );
};

export default Sidebar;
