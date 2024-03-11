import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Input from "../../components/Input/Input";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMoboNav } from "../../redux/slice/ToggleNav";
import { deleteProducts, filterProducts } from "../../redux/slice/Products";
import ProductTable from "./components/ProductTable";
import FilterOptions from "./components/FilterOptions";
import { FaTrash, FaArchive } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "../../components/Button/Button";
const Products = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(filterProducts(e.target.value));
  };

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (brandName) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(brandName)) {
        return prevSelected.filter((brand) => brand !== brandName);
      } else {
        return [...prevSelected, brandName];
      }
    });
  };

  const handleDeleteClick = () => {
    dispatch(deleteProducts(selectedProducts));
    setSelectedProducts([]);
  };

  const handleArchiveClick = () => {
    setSelectedProducts([]);
  };
  return (
    <div className="w-full h-full border-2 rounded-lg overflow-hidden relative">
      <header className="flex justify-between items-center border-b p-2 px-4 gap-2 flex-wrap lg:flex-nowrap flex-col lg:flex-row">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-medium text-xl">Products</h1>
          <GiHamburgerMenu
            className="h-[24px] w-[24px] lg:hidden"
            onClick={() => dispatch(toggleMoboNav())}
          />
        </div>
        <div className="flex gap-2 items-center ">
          <div className="inputWrapper flex items-center border h-[32px] w-[180px] lg:w-[200px] p-2 rounded-lg gap-2">
            <span>
              <FiSearch className="h-[18px] w-[18px]" />
            </span>
            <Input placeholder={"Search for..."} onChange={handleInputChange} />
          </div>
          <IoIosChatboxes className="border rounded-lg p-[6px] h-[32px] w-[32px]" />
          <IoSettingsOutline className="border rounded-lg p-[6px] h-[32px] w-[32px]" />
        </div>
      </header>

      <FilterOptions />
      <ProductTable handleCheckboxChange={handleCheckboxChange} />
      {selectedProducts?.length > 0 && (
        <div className="selected-actions  p-2 flex justify-center items-center absolute z-40 bottom-0 w-full font-normal">
          <div className="flex items-center border rounded-lg mb-1 p-2 gap-2">
            <div className="">
              <span className="p-1 px-2 rounded-lg bg-black text-white">
                {selectedProducts.length}
              </span>{" "}
              selected{" "}
            </div>
            <div className="flex gap-2 items-center">
              <Button
                icon={<FaArchive />}
                text={"Archive"}
                customClass={
                  "text-black border flex px-3 py-1 rounded-lg items-center gap-1 cursor-not-allowed bg-white"
                }
              />
              <Button
                icon={<FaTrash />}
                text={"Delete"}
                customClass={
                  "text-red-600 border flex px-3 py-1 rounded-lg items-center gap-1 bg-white"
                }
                onClick={handleDeleteClick}
              />
              <Button
                dropicon={<IoMdArrowDropdown />}
                text={"More"}
                customClass={
                  "text-black border flex px-3 py-1 rounded-lg items-center gap-1 cursor-not-allowed bg-white"
                }
              />

              <span
                className="cursor-pointer "
                onClick={() => setSelectedProducts([])}
              >
                <IoMdClose />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
