import backgroundIMG from "./images/background.png";
import avatar from "./images/avatar.svg";
import bubble from "./images/bubble.svg";
import splash from "./images/splash.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Splash = () => {
  const navigator = useNavigate();
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 1500);
  }, []);
  return (
    <>
      {flag ? (
        <div>
          <img alt="noImg" src={splash} className="w-screen" />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-screen">
            <img alt="noImg" src={bubble} className="absolute z-50 w-screen " />

            <img alt="noImg" src={backgroundIMG} className="w-screen " />
          </div>
          <div className="flex flex-col items-center color-[#7C7D7E]  -translate-y-16">
            <img alt="noImg" src={avatar} />
            <div className="flex flex-row  text-[34px] font-bold">
              <div className="text-[#FC6011]">Meal</div>
              <div className="text-[#4A4B4D]">MonKey</div>
            </div>
            <div className="text-[#4A4B4D] text-[10px] mb-[44px] tracking-[3px]">
              FOOD DELIVERY
            </div>
            <div className="text-[#7C7D7E] mx-[50px] text-center text-[13px] mb-[40px]">
              Discover the best foods from over 1,000 restaurants and fast
              delivery to your doorstep
            </div>
            <div
              className="w-80 h-14 rounded-full justify-center text-center flex text-white items-center text-base bg-[#FC6011] mb-[20px] hand"
              onClick={() => {
                navigator("/login");
              }}
            >
              Login789789
            </div>                      
            <div
              className="w-80 h-14 rounded-full justify-center text-center flex text-[#FC6011] items-center text-base bg-white hand"
              style={{
                border: "2px solid #FC6011",
              }}
              onClick={() => {
                navigator("/signup");
              }}
            >
              Create an Account
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Splash;
