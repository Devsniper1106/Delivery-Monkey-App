import { useNavigate } from "react-router-dom";
import nextING from "./images/nextIMG.svg";

const Moreitem = ({ icon, title, next, alarm }) => {
  const navigator = useNavigate();
  const handleNext = () => {
    navigator(next);
  };
  return (
    <>
      <div
        className="h-[75px] bg-[#eeeeee] mb-[19px] rounded-md items-center justify-between flex mr-[16px]"
        onClick={handleNext}
      >
        <div className="flex flex-row items-center gap-[13px]">
          <div className="w-[53px] h-[53px] items-center justify-center flex bg-[#D8D8D8] rounded-full ml-[13px]">
            <img src={icon} alt="no icon" />
          </div>
          <div className="text-[#4A4B4D] text-[14px] line-clamp-1">{title}</div>
        </div>
        <div className="flex flex-row items-center ">
          {alarm > 0 ? (
            <div className="w-[21px] h-[21px] rounded-full bg-[red] text-center text-white text-[12px]">
              {alarm}
            </div>
          ) : (
            <></>
          )}
          <div className="w-[33px] h-[33px] items-center justify-center flex bg-[#eeeeee] rounded-full translate-x-1/2">
            <img src={nextING} alt="no image" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Moreitem;
