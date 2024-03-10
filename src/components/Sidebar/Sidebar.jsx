import React, { useState } from "react";
import { INNOVATE_HUB, user1 } from "../../assets";
import { FaDropbox } from "react-icons/fa6";
import { CiPen } from "react-icons/ci";
import { AiOutlineSound } from "react-icons/ai";
import { IoCode } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { LuHelpCircle } from "react-icons/lu";
import Button from "../Button/Button";
import { FaUserPlus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GoFileDirectory } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
const Sidebar = () => {
  const [isFilesOpen, setisFilesOpen] = useState(false);
  return (
    <aside className="hidden lg:flex flex-col w-[300px] h-full border-2 rounded-lg">
      <header className="p-2 flex flex-row w-full h-fit justify-between items-center">
        <div className="flex gap-2 items-center">
          <FaDropbox className="h-[32px] w-[32px] rounded-lg bg-black text-white p-1" />
          <div className="flex flex-col gap-0">
            <h3 className="m-0 p-0 text-[12px] font-normal text-gray-400">
              INC
            </h3>
            <h3 className="m-0 p-0 text-[14px] font-semibold">InnovateHub</h3>
          </div>
        </div>
        <img
          src={user1}
          alt="user"
          className="h-[24px] w-[24px] rounded-full"
        />
      </header>
      <div className="teams border rounded-lg m-2 overflow-hidden">
        <div className="team group flex justify-between hover:bg-gray-100 hover:rounded-lg cursor-pointer items-center p-1 m-1">
          <div className="flex items-center font-semibold  gap-1 ">
            <CiPen className="h-[18px] w-[18px]" /> Design team
          </div>
          <div className="bg-gray-100 text-center p-[4px] text-[12px] flex items-center rounded-lg h-fit group-hover:bg-white">
            <RxCross2 className="h-[12px] w-[12px]" />
            +1
          </div>
        </div>
        <div className="team group flex justify-between hover:bg-gray-100 hover:rounded-lg cursor-pointer items-center p-1 m-1">
          <div className="flex items-center font-semibold  gap-1 ">
            <AiOutlineSound className="h-[18px] w-[18px]" /> Design team
          </div>
          <div className="bg-gray-100 text-center p-[4px] text-[12px] flex items-center rounded-lg h-fit group-hover:bg-white">
            <RxCross2 className="h-[12px] w-[12px]" />
            +2
          </div>
        </div>
        <div className="team group flex justify-between hover:bg-gray-100 hover:rounded-lg cursor-pointer items-center p-1 m-1">
          <div className="flex items-center font-semibold  gap-1 ">
            <IoCode className="h-[18px] w-[18px]" /> Design team
          </div>
          <div className="bg-gray-100 text-center p-[4px] text-[12px] flex items-center rounded-lg h-fit group-hover:bg-white">
            <RxCross2 className="h-[12px] w-[12px]" />
            +3
          </div>
        </div>
        <Button
          icon={<FaRegPlusSquare />}
          text={"Create a team"}
          customClass={
            "w-full !bg-white  !rounded-none !border-t  !p-2 text-gray-400"
          }
        />
      </div>
      {/* folders */}

      <div className="folders p-2">
        <div className="header flex items-center justify-between">
          Folders <FaPlus />
        </div>
        <div className="folder bg-gray-100 p-1 rounded-lg font-semibold z-10">
          <div
            className="flex items-center gap-2 relative  cursor-pointer"
            onClick={() => setisFilesOpen(!isFilesOpen)}
          >
            <GoFileDirectory />
            Products
            {isFilesOpen?<IoMdArrowDropup className="ml-auto" />:
            
            <GoTriangleDown className="ml-auto" />
            }
            {isFilesOpen && (
              <div className="files absolute top-6 text-sm border-l-[2px] rounded-b-lg border-gray-200 text-left z-[-1]">
                <div className="file border-gray-200 border-l-[2px] p-1 relative left-[-2px] rounded-b-lg">
                  <Link className="relative top-3 left-2">Roadmap</Link>
                </div>
                <div className="file border-gray-200 border-l-[2px]  p-1 relative left-[-2px] rounded-b-lg">
                  <Link className="relative top-3 left-2">Feedback</Link>
                </div>
                <div className="file border-gray-200 border-l-[2px]  p-1 relative left-[-2px] rounded-b-lg">
                  <Link className="relative top-3 left-2">Performance</Link>
                </div>
                <div className="file border-gray-200 border-l-[2px]  p-1 relative left-[-2px] rounded-b-lg">
                  <Link className="relative top-3 left-2">Team</Link>
                </div>
                <div className="file border-gray-200 border-l-[2px]  p-1 relative left-[-2px] rounded-b-lg">
                  <Link className="relative top-3 left-2">Analytics</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* bottomLinks */}
      <div className="bottomLinks p-2 mt-auto">
        <div className="flex gap-1 items-center cursor-pointer p-2">
          <FaUserPlus /> Invite teammates
        </div>
        <div className="flex gap-1 items-center  justify-between">
          {" "}
          <div className="flex gap-1 items-center cursor-pointer p-2">
            <LuHelpCircle />
            Help and first steps{" "}
          </div>
          <span className="bg-gray-100 p-1 rounded-lg border text-[12px]">
            0/6
          </span>
        </div>
        <div className="flex gap-1 items-center cursor-pointer p-2 !whitespace-nowrap !text-sm justify-between bg-gray-100 rounded-lg">
          <span className="p-1 bg-white rounded-lg">7</span> days left on trial{" "}
          <Button
            text={"Add biling"}
            customClass={"!bg-black !text-white !whitespace-nowrap "}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
