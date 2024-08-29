import { useState } from "react";
import starEmpty from "../Ratings/images/empty.svg";
import starFill from "../Ratings/images/fill.svg";

const InboxItem = ({ title, content, time }) => {
  const [rate, setRate] = useState(false);
  return (
    <>
      <div className="flex flex-row  border-b h-[88px] px-[22px] hover:bg-[#eeeeee]">
        <div className="flex">
          <div className="w-[10px] h-[10px] rounded-full bg-[#EE5A30] mt-[15px]" />
        </div>
        <div
          className="flex pt-3 ml-1 flex-row"
          style={{
            flex: 9,
          }}
        >
          <div className="">
            <div className="overflow-y-hidden h-6 text-[14px] text-[#4A4B4D]">
              {title}
            </div>
            <div className=" overflow-y-hidden line-clamp-1 text-[12px] text-[#B6B7B7]">
              {content}
            </div>
          </div>
        </div>
        <div
          className="flex flex-col w-[60px] items-end justify-between"
          style={
            {
              // flex: 2,
            }
          }
        >
          <div className="text-[9px] text-[#B6B7B7] line-clamp-1">{time}</div>
          <div className="mb-[19px]">
            <img
              src={rate ? starFill : starEmpty}
              alt="star"
              onClick={() => {
                setRate(!rate);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default InboxItem;
