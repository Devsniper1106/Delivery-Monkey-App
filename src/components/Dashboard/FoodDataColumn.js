import React from "react";
import { useNavigate } from "react-router-dom";
const FoodDataColumn = ({ title, picture }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <img
        className="w-[88px] h-[88px] cursor-pointer xss:w-32 xss:h-32 transition-all"
        src={picture}
        onClick={() => {
          navigate("/food/items");
        }}
      />
      <p className="pt-1 pb-3">{title}</p>
    </div>
  );
};
export default FoodDataColumn;
