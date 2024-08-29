import React from "react";
import previous from "./images/previous.svg";
import sandwitch from "./images/sandwitch.svg";
import star from "./images/star.svg";
import position from "./images/location-pin.svg";
import PriceList from "../../components/More/PriceList";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const priceList = [
    { food: "Beef Burger", price: 16 },
    { food: "Classic Burger", price: 14 },
    { food: "Cheese Chicken Burger", price: 17 },
    { food: "Chicken Legs Basket", price: 15 },
    { food: "French Fries Large", price: 6 },
  ];
  let total = 0;
  {
    priceList.map((item) => {
      return (total += item.price);
    });
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen mb-32">
        <div className="py-8 px-6">
          <div className="flex justify-start items-center gap-5">
            <div>
              <img
                src={previous}
                onClick={() => navigate("/more")}
                alt="noImg"
              />
            </div>
            <p className="text-2xl text-[#4A4B4D]">My Order</p>
          </div>
          <div className="flex justify-start gap-4 items-center flex-wrap text-xs text-[#B6B7B7] font-normal py-7">
            <div>
              <img className="w-[80px] h-[80px]" src={sandwitch} alt="noImg" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold text-[#4A4B4D]">King Burgers</p>
              <div className="flex items-center gap-1">
                <img src={star} alt="noImg" />
                <p>4.9</p>
                <p>(124 ratings)</p>
              </div>
              <div className="flex">
                <p>Burger</p>
                <div className="text-[#FC6011] ml-2 mr-3">·</div>
                <p>Western Food</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={position} alt="noImg" />
                <p>No 03, 4th Lane, Newyork</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F6F6] px-5">
          {priceList.map((item, index) => {
            return (
              <PriceList key={index} food={item.food} price={item.price} />
            );
          })}
        </div>
        <div className="px-5">
          <div className="flex justify-between items-center py-3">
            <p className="text-sm font-bold text-[#4A4B4D]">
              Delivery Instrusctions
            </p>
            <p className="text-[#FC6011] text-sm font-semibold">+ Add Notes</p>
          </div>
          <hr></hr>
          <div className="flex justify-between items-center py-3">
            <p className="text-sm font-bold text-[#4A4B4D]">Sub Total</p>
            <p className="text-[#FC6011] text-sm font-bold">${total}</p>
          </div>
          <div className="flex justify-between items-center pb-3">
            <p className="text-sm font-bold text-[#4A4B4D]">Sub Total</p>
            <p className="text-[#FC6011] text-sm font-bold">$2</p>
          </div>
          <hr></hr>
          <div className="flex justify-between items-center py-3">
            <p className="text-sm font-bold text-[#4A4B4D]">Total</p>
            <p className="text-[#FC6011] text-2xl font-bold">$70</p>
          </div>
          <button
            className="w-full h-14 bg-[#FC6011] text-white rounded-full my-4"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
export default MyOrder;
