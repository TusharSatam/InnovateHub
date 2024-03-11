import React from "react";

const Input = ({ placeholder, customClass, onChange, value }) => {
  return (
    <input
      value={value && value}
      placeholder={placeholder ?? placeholder}
      className={`focus:outline-none w-full placeholder:text-sm font-semibold text-medium ${customClass} `}
      onChange={onChange && onChange}
    />
  );
};

export default Input;
