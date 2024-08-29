import pizza from "./images/pizza.svg";
import contrastPlain from "./images/contrastPlain.svg";
import backBtn from "./images/whiteBack.svg";
import whiteCart from "./images/whiteCarting.svg";
import heart from "./images/heart.svg";
import Selector from "../../components/Menu/ItemSelector";
import Ratings from "../../components/Ratings";

import carting from "./images/onButtonCarting.svg";
import { useState } from "react";
import orangeCart from "./images/orangeCart.svg";
import { useNavigate } from "react-router-dom";
const FoodItem = () => {
  const [portion, setPortion] = useState(2);
  const handleDecrease = () => {
    if (portion > 0) setPortion(portion - 1);
  };
  const handleIncrease = () => {
    setPortion(portion + 1);
  };
  const navigator = useNavigate();
  const handleNavigate = () => {
    navigator("/food");
  };
  return (
    <>
      <div className="w-full flex flex-row justify-center relative">
        <img src={pizza} className="w-full" alt="noImg" />
        <img
          src={contrastPlain}
          className="w-full absolute z-[10]"
          alt="noImg"
        />
        <div className="w-screen px-5 flex flex-row justify-between items-center mt-10 absolute z-[20]">
          <img
            alt="noImg"
            src={backBtn}
            className="cursor-pointer"
            onClick={() => {
              handleNavigate();
            }}
          />
          <img src={whiteCart} alt="noImg" />
        </div>
      </div>
      <div className="bg-white rounded-t-[42px] w-full h-[800px] -translate-y-14 px-5">
        <img
          alt="noImg"
          src={heart}
          className="float-right -translate-y-1/2 hover:animate-ping"
        />
        <div className="text-[22px] text-[#4A4B4D] mt-7 ml-[1px]">
          Tandoori Chicken Pizza
        </div>
        <div className="flex flex-row w-full mt-[6px]">
          <div className="basis-1/2">
            {/* <img src={rating} /> */}
            <Ratings />
            <p className="mt-1 text-[#EE5A30]">4 Star Ratings</p>
          </div>
          <div className="basis-1/2 mt-[9px] flex flex-col items-end">
            <p className="text-[31px] font-extrabold text-[#4A4B4D]">Rs.750</p>
            <p className="text-[12px] text-[#4A4B4D]">/per Portion</p>
          </div>
        </div>
        <div className="text-[14px] text-[#4A4B4D] font-bold">Description</div>
        <div className="text-[12px] text-[#7C7D7E] mt-[10px] tracking-wider pb-5 border-b-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo
          non mollis id cursus. Eu euismod faucibus in leo malesuada
        </div>
        <p className="text-[14px] text-[#4A4B4D] font-bold mt-[14.5px]">
          Customize your Order.
        </p>
        <div className="mt-5">
          <Selector />
          <Selector />
        </div>

        <div className="flex flex-row justify-between items-center  mt-[10px] ">
          <p className="text-[14px] text-[#4A4B4D] font-bold flex flex-row items-center">
            Number of Portions
          </p>
          <div className="flex flex-row items-center">
            <div
              className="w-[52px] h-[30px] rounded-full bg-[#FC6011] text-white text-base flex flex-row justify-center items-center cursor-pointer"
              onClick={() => {
                handleDecrease();
              }}
            >
              -
            </div>
            <input
              className="border-[1px] border-[#FC6011] rounded-full w-[47px] h-[30px] flex flex-row justify-center items-center text-[#FC6011] text-base mx-[5px] focus:outline-none text-center"
              type="number"
              value={portion}
              onChange={(e) => {
                setPortion(e.target.value);
              }}
            />
            <div
              className="w-[52px] h-[30px] rounded-full bg-[#FC6011] text-white text-base flex flex-row justify-center items-center cursor-pointer"
              onClick={() => {
                handleIncrease();
              }}
            >
              +
            </div>
          </div>
        </div>

        <div className="w-[full] ml-8 mr-5 rounded-r-[10px] rounded-l-[40px] shadow-lg flex flex-row justify-between items-center mt-[52px] bg-white">
          <div className="z-[-10] w-[97px] h-[171px] bg-[#FC6011] fixed  rounded-r-[42px] -translate-x-[52px]"></div>
          <div className="flex flex-[2.6]"></div>
          <div className="flex flex-[6.8]">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="text-[#4A4B4D] text-xs pt-[18px]">
                Total Price
              </div>
              <div className="text-[#4A4B4D] text-[21px] mt-[3px] font-bold">
                LKR {750 * portion}
              </div>
              <div className="w-full h-[30px] mt-2 rounded-full bg-[#FC6011] flex flex-row text-white text-xs justify-center items-center mb-5">
                <img src={carting} alt="noImg" />
                <p className="ml-[18px]">Add to Cart</p>
              </div>
            </div>
            <div className="flex flex-[2.6] justify-center items-center">
              <div className="w-12 h-12 rounded-full shadow-lg  justify-center items-center flex flex-row translate-x-1/2 bg-white hover:animate-ping">
                <img src={orangeCart} alt="noImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FoodItem;
