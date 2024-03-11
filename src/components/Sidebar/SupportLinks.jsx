import React from 'react'
import { LuHelpCircle } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa6";
import Button from '../Button/Button';

const SupportLinks = () => {
  return (
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
  )
}

export default SupportLinks