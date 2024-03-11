import React from 'react'
import { CiPen } from "react-icons/ci";
import { AiOutlineSound } from "react-icons/ai";
import { IoCode } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Button from '../Button/Button';
const Teams = () => {
  return (
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
  )
}

export default Teams