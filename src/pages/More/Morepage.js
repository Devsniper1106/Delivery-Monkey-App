import income from "./images/income.svg";
import bag from "./images/bag.svg";
import ring from "./images/ring.svg";
import mail from "./images/mail.svg";
import info from "./images/info.svg";
import bucket from "./images/shopping.svg";
import Moreitem from "../../components/More/MoreItem";
const Morepage = () => {
  const Moredata = [
    { icon: income, title: "Payment Details", next: "/payment", alarm: 0 },
    { icon: bag, title: "My Orders", next: "/myorder", alarm: 0 },
    { icon: ring, title: "Notifications", next: "/notification", alarm: 15 },
    { icon: mail, title: "Inbox", next: "/inbox", alarm: 0 },
    { icon: info, title: "About Us", next: "/aboutus", alarm: 0 },
  ];

  return (
    <>
      <div className="px-[22px] mt-[33px] flex flex-row items-center justify-between ">
        <div className="items-center">
          <div className=" text-[24px]  text-[#4A4B4D]">More</div>
        </div>
        <div className=" items-center">
          <img src={bucket} alt="noImg" />
        </div>
      </div>
      <div className="p-[22px]">
        {Moredata.map((item, i) => {
          return (
            <Moreitem
              key={i}
              icon={item.icon}
              title={item.title}
              next={item.next}
              alarm={item.alarm}
            />
          );
        })}
      </div>
    </>
  );
};

export default Morepage;
