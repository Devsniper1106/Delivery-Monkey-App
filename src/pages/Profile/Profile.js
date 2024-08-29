import { useState } from "react";
import MonkeyBtn from "../../components/MonkeyBtn";
import ProfileInput from "../../components/Profile/ProfileInput";
import bucket from "./images/shopping.svg";
import userIMG from "./images/user.png";
const Profiler = () => {
  const [name, setName] = useState("Emilia Clarke");
  const [emailAdd, setEmailAdd] = useState("emiliaclarke@email.com");
  const [mobileno, setMoblieNo] = useState("emiliaclarke@email.com");
  const [address, setAddress] = useState("No 23, 6th Lane, Colombo 03");
  const [password, setPassword] = useState("123456");
  const [password2, setPassword2] = useState("123456");

  const inputSerial = [
    {
      placetitle: "name",
      data: name,
      idValue: "name",
      type: "text",
      onChangeFn: setName,
    },
    {
      placetitle: "Email",
      data: emailAdd,
      idValue: "emailAdd",
      type: "text",
      onChangeFn: setEmailAdd,
    },
    {
      placetitle: "Mobile No",
      data: mobileno,
      idValue: "mobileno",
      type: "text",
      onChangeFn: setMoblieNo,
    },
    {
      placetitle: "Address",
      data: address,
      idValue: "address",
      type: "text",
      onChangeFn: setAddress,
    },
    {
      placetitle: "Password",
      data: password,
      idValue: "pwd1",
      type: "password",
      onChangeFn: setPassword,
    },
    {
      placetitle: "Confirm Password",
      data: password2,
      idValue: "pwd2",
      type: "password",
      onChangeFn: setPassword2,
    },
  ];

  return (
    <div className="px-[22px] mb-[120px]">
      <div className=" mt-[33px] flex flex-row items-center justify-between ">
        <div className="items-center">
          <div className=" text-[24px]  text-[#4A4B4D]">Profile</div>
        </div>
        <div className=" items-center">
          <img src={bucket} alt="bucket" />
        </div>
      </div>
      <div className="justify-center flex mt-[30px] flex-col">
        <div className="flex justify-center">
          <img src={userIMG} alt="user" className="w-[102px] h-[102px] " />
        </div>
        <div className="flex gap-[11px] flex-col mt-[18px]">
          <div className="text-center text-[#FC6011] text-[10px] ">
            <div className="fa fa-edit" />
            &nbsp;Edit Profile
          </div>
          <div className="text-center text-[#4A4B4D] text-[16px] font-bold">
            Hi there Emilia!
          </div>
          <div className="text-center text-[#7C7D7E] text-[11px]">Sign Out</div>
        </div>
      </div>

      <div className="flex flex-col gap-[17px] mb-[17px] mt-[47px]">
        {inputSerial.map((item, i) => (
          <ProfileInput
            key={item.idValue}
            placetitle={item.placetitle}
            data={item.data}
            idValue={item.idValue}
            onChangeFn={item.onChangeFn}
            type={item.type}
          />
        ))}
      </div>
      <div>
        <MonkeyBtn bgcolor={"#FC6011"} bordercolor={"#FC6011"} title={"Save"} />
      </div>
    </div>
  );
};

export default Profiler;
