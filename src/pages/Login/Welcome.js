import IMG1 from "./images/Find.png";
import IMG2 from "./images/Delivery.png";
import IMG3 from "./images/Live.png";
import slide1 from "./images/Slider indicators-1.png";
import slide2 from "./images/Slider indicators-2.png";
import slide3 from "./images/Slider indicators-3.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    img: IMG1,
    slide: slide1,
    title: "Find Food You Love",
    content:
      "Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep",
  },
  {
    img: IMG2,
    slide: slide2,
    title: "Fast Delivery",
    content: "Fast food delivery to your home, office wherever you are",
  },
  {
    img: IMG3,
    slide: slide3,
    title: "Live Tracking",
    content:
      "Real time tracking of your food on the app once you placed the order",
  },
];

const Welcome = () => {
  const [select, setSelect] = useState(0);
  const navigator = useNavigate();
  return (
    <>
      <div className="flex flex-col px-[34px] items-center h-[812px]">
        <div className="mt-[112px] flex flex-col items-center">
          <img className="h-[300px]" src={data[select].img} alt="noImg" />
          <img src={data[select].slide} className="mt-[32px]" alt="noImg" />
        </div>
        <div className="mt-[32px] text-[28px] text-[#4A4B4D]">
          {data[select].title}
        </div>
        <div className="mt-[32px] text-[13px] text-[#7C7D7E] text-center mx-[18px]">
          {data[select].content}
        </div>
        <div
          className="mt-[40px] w-full h-[56px] rounded-full bg-[#FC6011] text-center text-white items-center flex justify-center"
          onClick={() => {
            select === 2 ? navigator("/login") : setSelect(select + 1);
          }}
        >
          Next
        </div>
      </div>
    </>
  );
};
export default Welcome;
