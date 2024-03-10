import React, { useEffect, useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Select = ({ text, icon, options, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const selectRef = useRef(null);

  useEffect(() => {
    if (options?.length > 0) {
      setSelectedValue(options[0]);
    }
  }, [options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <div
      ref={selectRef}
      className={`border p-1 flex gap-1 items-center rounded-lg font-medium relative cursor-pointer ${
        customClass ? customClass : "w-fit"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {icon && icon}
      {selectedValue} <IoMdArrowDropdown className="ml-auto" />
      {isOpen && (
        <div className="absolute bg-white border rounded-lg top-9 w-full left-0 overflow-hidden">
          {options?.map((option, index) => (
            <div
              key={index}
              value={option}
              className={`p-1 focus:bg-slate-500 ${
                option === selectedValue ? "bg-gray-400 text-white" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
