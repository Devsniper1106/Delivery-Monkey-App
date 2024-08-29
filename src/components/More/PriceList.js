import React from "react";
const PriceList = ({ food, price }) => {
  return (
    <>
      <div className="flex justify-between py-3 text-[#4A4B4D]">
        <p className="text-sm">{food} x 1</p>
        <p className="font-bold">${price}</p>
      </div>
      <hr></hr>
    </>
  );
};
export default PriceList;
