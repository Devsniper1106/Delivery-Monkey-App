import { useNavigate } from "react-router-dom";
import Data from "../../data/About.json";
import previous from "./images/previous.svg";
import bucket from "./images/shopping.svg";
import NotificationItem from "../../components/More/NotificationItem";
const Notification = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/more");
  };
  return (
    <>
      <div className="p-[22px] flex flex-col mt-[33px]">
        <div className="flex flex-row items-center justify-between ">
          <div className=" flex flex-row justify-center gap-5">
            <img alt="noImg" src={previous} onClick={handleBack} />
            <div className=" text-[24px]  text-[#4A4B4D]">Notifications</div>
          </div>
          <div className="justify-end items-center">
            <img alt="noImg" src={bucket} />
          </div>
        </div>
      </div>
      <div className="mt-[10px] flex flex-col mb-[120px]">
        {Data.notification.map((item, i) => (
          <NotificationItem time={item.time} title={item.content} key={i} />
        ))}
      </div>
    </>
  );
};

export default Notification;
