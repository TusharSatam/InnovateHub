import React from "react";

const Button = ({ icon, dropicon, text, customClass }) => {
  return (
    <button
      className={`border p-1 rounded-lg flex gap-1 items-center  px-2 bg-gray-100 ${
        customClass ? customClass : "font-normal"
      }`}
    >
      {icon && icon}
      {text ? text : ""}
      {dropicon && dropicon}
    </button>
  );
};

export default Button;
