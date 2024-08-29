import RatingStar from "../../pages/Offers/images/rateStar.svg";
const OffersComponent = ({ description, img }) => {
  return (
    <div className="w-full xss:mt-[22px] mt-[11px]">
      <img src={img} className="w-full" alt="noImg" />
      <div className="ml-[26px] flex flex-row xss:flex-col items-center xss:items-start">
        <div className="xss:text-base text-[#4A4B4D] font-bold xss:mt-[7px] mt-[2px] text-[11px] mr-3">
          {description}
        </div>
        <div className="flex flex-row items-center mb-[2px] xss:mb-[5px]">
          <div className="text-[#FC6011] text-[11px] flex flex-row mr-[5px]">
            <img src={RatingStar} className="mr-1" alt="noImg" />
            4.9
          </div>
          <div className="hidden xss:block xss:flex flex-row items-center">
            <div className="text-[#B6B7B7] text-xs ">(124 ratings) Café</div>
            <div className="text-[#FC6011] text-base mb-[6px]">.</div>
            <div className="text-[#B6B7B7] text-xs">Western Food</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersComponent;
