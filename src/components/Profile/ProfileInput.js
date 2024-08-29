import { useEffect, useState } from "react";

const ProfileInput = ({ placetitle, data, onChangeFn, type, idValue }) => {
  const [pwd, setPwd] = useState("");
  let tmp = "";
  useEffect(() => {
    if (type === "password") {
      for (let i = 0; i < data.length; i++) tmp = tmp + "*";
      setPwd(tmp);
    }
  }, [data]);
  return (
    <>
      <div className="h-[56px] bg-[#eeeeee] rounded-full items-center px-8  flex">
        <div className="flex flex-col w-full">
          <div className="text-[#B6B7B7] text-[10px]"> {placetitle}</div>
          <input
            className="focus:outline-none bg-[#eeeeee] text-[#4A4B4D]"
            value={type === "password" ? pwd : data}
            type={type}
            id={idValue}
            onChange={(e) => onChangeFn(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileInput;
