import React from "react";

const Input = ({ placeholder,customClass }) => {
  return (
    <input
      placeholder={placeholder ?? placeholder}
      className={`focus:outline-none w-full placeholder:text-sm font-semibold text-medium ${customClass} `}
    />
  );
};

export default Input;
