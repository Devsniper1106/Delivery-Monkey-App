import { useNavigate } from "react-router-dom";
import Data from "../../data/About.json";
import previous from "./images/previous.svg";
import bucket from "./images/shopping.svg";
import InboxItem from "../../components/More/InboxItem";

const InboxComponent = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/more");
  };
  return (
    <>
      <div className="p-[22px] flex flex-col mt-[33px]">
        <div className="flex flex-row items-center justify-between ">
          <div className=" flex flex-row justify-center gap-5">
            <img src={previous} onClick={handleBack} alt="noImg" />
            <div className=" text-[24px]  text-[#4A4B4D]">Inbox</div>
          </div>
          <div className="justify-end items-center">
            <img src={bucket} alt="noImg" />
          </div>
        </div>
      </div>
      <div className="mt-[10px] flex flex-col mb-[120px]">
        {Data.inbox.map((item, i) => (
          <InboxItem
            time={item.time}
            title={item.title}
            content={item.content}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default InboxComponent;
