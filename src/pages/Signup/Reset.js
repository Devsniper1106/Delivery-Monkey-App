import { useNavigate } from "react-router-dom";
import MonkeyBtn from "../../components/MonkeyBtn";
import { useState } from "react";
const Reset = () => {
  const navigator = useNavigate();
  const [value, setValue] = useState("");
  const handleReset = () => {
    if (!value.trim()) return;
    navigator("/otp");
  };
  return (
    <>
      <div className="w-full flex flex-col justify-center pt-9 px-10 text-center">
        <div className="text-center text-3xl text-[#4A4B4D]">
          Reset Password
        </div>
        <div className="pt-3 text-[#7C7D7E] text-sm">
          Please enter your email to receive a link to create a new password via
          email
        </div>
        <div className="pt-16">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14 focus:outline-none"
            placeholder="Email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="w-full py-8 cursor-pointer" onClick={handleReset}>
          <MonkeyBtn bgcolor={"#FC6011"} title={"Send"} />
        </div>
      </div>
    </>
  );
};

export default Reset;
