import React from "react";
import { useParams } from "react-router-dom";

const NotAvailable = () => {
  const { page } = useParams();

  return (
    <div className="h-full w-full text-center text-gray-400 font-semibold text-xl items-center flex justify-center">
      {page ? `The page ${page&&page} is not available` : "Not Available"}
    </div>
  );
};

export default NotAvailable;
