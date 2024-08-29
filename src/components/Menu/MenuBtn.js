import { useNavigate } from "react-router-dom";
import OrangeForward from "../../pages/Menu/images/orangeforward.svg";

const MenuBtn = ({ description, count, img }) => {
  const navigator = useNavigate();
  const handleGoDesserts = () => {
    navigator("/food");
  };
  return (
    <div>
      <div
        className="w-full  h-[87px] flex flex-row justify-between items-center mt-6"
        onClick={() => {
          handleGoDesserts();
        }}
      >
        <div className=" w-full h-[87px] rounded-l-[30px] rounded-r-[10px] shadow-md ml-[38px] mr-[15px] flex flex-row items-center justify-between bg-white">
          <img src={img} className="items-center -translate-x-1/2" />
          <div className="absolute z-10 ml-14">
            <p className="font-bold text-[22px] text-[#4A4B4D]">
              {description}
            </p>
            <p className="text-[11px] text-[#B6B7B7] mt-[2px]">{count} Items</p>
          </div>
          <div className="w-8 h-8 flex flex-row justify-center rounded-full shadow-md items-center translate-x-1/2 bg-white cursor-pointer">
            <img src={OrangeForward} className="w-[6px] h-3 " alt="noImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBtn;
