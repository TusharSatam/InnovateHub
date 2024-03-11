import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
const ProductTable = ({ handleCheckboxChange }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const filteredProducts = useSelector(
    (state) => state.ProductsSlice.filteredProducts
  );

  useEffect(() => {
    // Initialize checkedItems when filteredProducts change
    const initialCheckedItems = {};
    filteredProducts.forEach((product) => {
      initialCheckedItems[product.brandName] = false;
    });
    setCheckedItems(initialCheckedItems);
  }, [filteredProducts]);

  const handleCheckboxToggle = (brandName) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [brandName]: !prevCheckedItems[brandName],
    }));
    handleCheckboxChange(brandName);
  };

  return (
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
          {filteredProducts?.map((item, index) => (
            <tr key={index}  className={`hover:bg-gray-100 ${
              checkedItems[item.brandName] ? "bg-gray-100" : ""
            }`}>
              <td className="border p-2 ">
                <div className="flex h-full  justify-between items-center">
                  <div className="flex  gap-2 h-full items-center font-semibold">
                    <input
                      type="checkbox"
                      checked={checkedItems[item.brandName]}
                      onChange={() => handleCheckboxToggle(item.brandName)}
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
              {filteredProducts?.length}{" "}
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
  );
};

export default ProductTable;
