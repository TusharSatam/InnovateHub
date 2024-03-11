import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsSortNumericUp } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";
import { LuImport } from "react-icons/lu";
import { MdOutlineAddBox } from "react-icons/md";
import Button from "../../../components/Button/Button";
import Select from "../../../components/Select/Select";

const FilterOptions = () => {
  return (
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
  );
};

export default FilterOptions;
