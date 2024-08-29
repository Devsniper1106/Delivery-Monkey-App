import React from "react";
import rating from "./images/star.png";
import { useNavigate } from "react-router-dom";
const RecentItems = ({ title, picture, country }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-flow-col justify-start py-3 items-start gap-5 ">
      <div className=" w-[75px] h-[75px] xss:w-28 xss:h-28">
        <img
          className="w-[75px] h-[75px] ml-auto mr-auto cursor-pointer mt-2 xss:w-28 xss:h-28 transition-all"
          onClick={() => {
            navigate("/food/items");
          }}
          src={picture}
        />
      </div>
      <div className=" items-start">
        <p className="font-bold text-[#4A4D4B]  text-lg line-clamp-1">
          {title}
        </p>
        <div className="grid grid-flow-col justify-start lin items-center gap-2 text-xs text-[#4a4d4b] xss:my-4">
          <p>Café</p>
          <div className="text-[#FC6011] ml-1 mr-1">·</div>
          <p>{country}</p>
        </div>
        <div className="grid grid-flow-col justify-start items-center gap-2 text-xs text-[#4a4d4b]">
          <img src={rating} alt="noImg" />
          <p className="text-[#FC6011]">4.9</p>
          <p>(124 ratings)</p>
        </div>
      </div>
    </div>
  );
};
export default RecentItems;
