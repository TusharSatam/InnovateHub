import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import { BsSortNumericUp } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";
import { LuImport } from "react-icons/lu";
import { MdOutlineAddBox } from "react-icons/md";
import { DashboardData } from "../../utils";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMoboNav } from "../../redux/slice/ToggleNav";
const Products = () => {
  const navInfo=useSelector(state=>state.ToggleNavbarSlice) 
const dispatch=useDispatch()
  return (
    <div className="w-full h-full border-2 rounded-lg overflow-hidden">
      <header className="flex justify-between items-center border-b p-2 px-4 gap-2 flex-wrap lg:flex-nowrap">
        <h1 className="font-medium text-xl">Products</h1>
          <GiHamburgerMenu className="h-[24px] w-[24px] md:hidden" onClick={()=>dispatch(toggleMoboNav())}/>
        <div className="flex gap-2 items-center ">
          <div className="inputWrapper flex items-center border h-[32px] w-[180px] lg:w-[200px] p-2 rounded-lg gap-2">
            <span>
              <FiSearch className="h-[18px] w-[18px]" />
            </span>
            <Input placeholder={"Search for..."} />
          </div>
          <IoIosChatboxes className="border rounded-lg p-[6px] h-[32px] w-[32px]" />
          <IoSettingsOutline className="border rounded-lg p-[6px] h-[32px] w-[32px]" />
        </div>
      </header>
      <div className="filters p-2 px-4 border-b flex flex-col gap-2 lg:flex-row justify-between md:text-sm whitespace-nowrap">
        <div className="leftSideBtns flex gap-2 flex-wrap lg:flex-nowrap">
          <Select
            icon={<RxDashboard />}
            options={["All brands", "Google", "Paypal"]}
            customClass={"min-w-[120px]"}
          />
          <Select options={["Desk"]} />
          <Select options={["Tags"]} />
          <Button text={"Sort"} icon={<BsSortNumericUp />} />
          <Button text={"Filter"} icon={<BiFilter />} />
        </div>
        <div className="rightSide flex gap-2">
          <Button
            text={"Meeting"}
            icon={<MdOutlineAddBox />}
            customClass={"font-semibold"}
          />
          <Button
            text={"Import/Export"}
            icon={<LuImport />}
            customClass={"font-semibold"}
          />
        </div>
      </div>
      <div className="table-container overflow-scroll w-full h-full  text-sm font-medium">
        <table className="w-full border-collapse border whitespace-nowrap">
          <thead>
            <tr className=" text-left ">
              <th className="border p-2 font-normal min-w-[180px] max-w-[180px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="border rounded-lg h-[16px] w-[16px] "
                    />
                    Brand
                  </div>
                  <FaPlus className="text-gray-400" />
                </div>
              </th>
              <th className="border p-2 font-normal min-w-[180px] max-w-[180px]">
                Description
              </th>
              <th className="border p-2 font-normal min-w-[130px] max-w-[130px]">
                Members
              </th>
              <th className="border p-2 font-normal  min-w-[130px] max-w-[130px]">
                Categories
              </th>
              <th className="border p-2 font-normal  min-w-[130px] max-w-[130px]">
                Tags
              </th>
              <th className="border p-2 font-normal">Next Meeting</th>
              <th className="border p-2 font-normal">
                <FaPlus className="text-gray-400" />
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {DashboardData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-2 ">
                  <div className="flex h-full  justify-between items-center">
                    <div className="flex  gap-2 h-full items-center font-semibold">
                      <input
                        type="checkbox"
                        className="border rounded-lg h-[16px] w-[16px]"
                      />
                      <img
                        src={item.brand}
                        className="h-[24px] w-[24px] rounded-lg"
                        alt="brand"
                      />
                      {item.brandName}
                    </div>
                    <div className="flex gap-1 h-full items-center font-normal">
                      {item?.noOfChats > 0 && (
                        <>
                          <HiOutlineChatAlt2 />
                          {item?.noOfChats}
                        </>
                      )}
                    </div>
                  </div>
                </td>
                <td className="border p-2 truncate min-w-[180px] max-w-[180px] font-semibold">
                  {item.description}
                </td>
                <td className="border p-2 min-w-[130px] max-w-[130px]">
                  <div className="flex overflow-x-scroll">
                    {item.members?.map((e, i) => (
                      <img
                        key={`userImage_${i + 1}`}
                        src={e}
                        alt={`user_${i + 1}`}
                        style={{ left: i > 0 ? `-${5 * i}px` : "" }}
                        className={`cursor-pointer border-2 z-10  h-[24px] w-[24px] rounded-full border-white bg-gray-300 ${
                          i > 0 ? `relative` : ""
                        }`}
                      />
                    ))}
                  </div>
                </td>
                <td className="border p-2 min-w-[130px] max-w-[130px]">
                  <div className="flex gap-1 overflow-x-scroll">
                    {item.categories &&
                      item.categories?.map((category, i) => (
                        <div
                          key={`category_${i + 1}`}
                          style={{
                            backgroundColor: category.color,
                            border: `1px solid ${category?.border}`,
                            color: `${category?.border}`,
                          }}
                          className={`p-1 px-2 rounded-lg  `}
                        >
                          {category?.name}
                        </div>
                      ))}
                  </div>
                </td>
                <td className="border p-2  min-w-[130px] max-w-[130px] overflow-hidden overflow-x-scroll ">
                  <div className="flex gap-1 overflow-x-scroll">
                    {item?.tags?.map((tag, i) => (
                      <span
                        key={`tag_${i + 1}`}
                        className="bg-gray-100 p-1 rounded-lg cursor-pointer border-gray-300 border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-2 border">
                  <span
                    className={`border p-1 rounded-lg ${
                      item?.nextMeeting === "Tomorrow"
                        ? "bg-blue-300 text-blue-600 border-blue-400"
                        : item?.nextMeeting === "No contact"
                        ? "bg-red-300 text-red-600 border-red-400"
                        : item?.nextMeeting === "Next month"
                        ? "bg-gray-300 text-gray-600 border-gray-400"
                        : "bg-green-300 text-green-600 border-green-400"
                    }`}
                  >
                    {" "}
                    {item.nextMeeting}
                  </span>
                </td>
                <td className="p-2 border"></td>
              </tr>
            ))}
            <tr className="hover:bg-gray-100">
              <td className="border p-2 text-right">
                {DashboardData?.length}{" "}
                <span className="text-gray-400">count</span>
              </td>
              <td className="border p-2 text-right">
                <div className="flex justify-end items-center gap-1 text-gray-400 w-full">
                  <FaPlus /> Add calculation
                </div>
              </td>
              <td className="border p-2 text-right">
                <div className="flex justify-end items-center gap-1 text-gray-400 w-full">
                  <FaPlus /> Add calculation
                </div>
              </td>
              <td className="border p-2 text-right">
                <div className="flex justify-end items-center gap-1 text-gray-400 w-full">
                  <FaPlus /> Add calculation
                </div>
              </td>
              <td className="border p-2 text-right">
                <div className="flex justify-end items-center gap-1 text-gray-400 w-full">
                  <FaPlus /> Add calculation
                </div>
              </td>
              <td className="border p-2 text-right">
                <div className="flex justify-end items-center gap-1 text-gray-400 w-full">
                  <FaPlus /> Add calculation
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
