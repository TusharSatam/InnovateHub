import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoFileDirectory } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import { MdAddCircleOutline } from "react-icons/md";
const Folders = () => {
  const folders = [
    {
      name: "Products",
      files: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
    },
    { name: "Sales", files: ["Performance", "Team", "Analytics"] },
    { name: "Design", files: ["Performance", "Team", "Analytics"] },
    { name: "Office", files: [] },
    { name: "Legal", files: [] },
  ];
  const [folderStates, setFolderStates] = useState({});

  const toggleFiles = (folderName) => {
    setFolderStates((prevStates) => ({
      ...prevStates,
      [folderName]: !prevStates[folderName],
    }));
  };
  return (
    <div className="folders p-2  h-[45vh] overflow-y-scroll">
      <div className="header flex items-center justify-between">
        Folders <FaPlus />
      </div>
      <div className="folder font-semibold z-10 ">
        {folders?.map((folder, index) => (
          <div
            key={`folder${index}`}
            className={`flex flex-col h-full gap-2 relative  cursor-pointer p-1  `}
          >
            <div
              className={`${
                folderStates[folder.name] ? "bg-gray-100" : ""
              } flex items-center  w-full gap-2 hover:bg-gray-100 p-1 rounded-lg`}
              onClick={() => toggleFiles(folder.name)}
            >
              <GoFileDirectory />
              {folder.name}
              {folder?.files?.length > 0 &&
                (folderStates[folder.name] ? (
                  <IoMdArrowDropup className="ml-auto" />
                ) : (
                  <GoTriangleDown className="ml-auto" />
                ))}
            </div>
            {folderStates[folder.name] && (
              <div className="files h-full relative top-[-10px] left-[8px] text-sm border-l-[2px] rounded-b-lg border-gray-200 text-left z-[-1]">
                {folder?.files.map((file, index) => (
                  <div
                    key={index}
                    className="file border-gray-200 border-l-[2px] p-1 relative left-[-2px] rounded-b-lg"
                  >
                    <Link className="relative top-3 left-2">{file}</Link>
                  </div>
                ))}
                <div
                  key={index}
                  className="file border-gray-200 border-l-[2px] p-1 relative left-[-2px] rounded-b-lg"
                >
                  <Link className="relative top-3 left-2 text-gray-400 flex items-center gap-2">
                    <MdAddCircleOutline /> Add new sub
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folders;
