import { useNavigate } from "react-router-dom";
import MonkeyBtn from "../../components/MonkeyBtn";
import { useState } from "react";
const NewPassword = () => {
  const navigator = useNavigate();
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const handleNewPwd = () => {
    if (pwd1 !== pwd2 || !pwd1.trim() || !pwd2.trim()) return;
    navigator("/dashboard");
  };
  return (
    <>
      <div className="bg-white px-8 pt-9 pb-10 text-center h-[812px] content-between">
        <div className="text-center text-3xl text-[#4A4B4D]">New Password</div>
        <div className="py-3 text-[#7C7D7E] text-sm">
          Please enter your email to receive a link to create a new password via
          email
        </div>
        <div className="py-7">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14 focus:outline-none"
            placeholder="New Password"
            type="password"
            value={pwd1}
            onChange={(e) => setPwd1(e.target.value)}
          />
        </div>
        <div className="py-1">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14 focus:outline-none"
            placeholder="Confirm Password"
            type="password"
            value={pwd2}
            onChange={(e) => setPwd2(e.target.value)}
          />
        </div>

        <div className="w-full py-6 cursor-pointer" onClick={handleNewPwd}>
          <MonkeyBtn bgcolor={"#FC6011"} title={"Next"} />
        </div>
      </div>
    </>
  );
};

export default NewPassword;
