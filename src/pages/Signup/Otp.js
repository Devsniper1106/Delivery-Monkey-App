import { useNavigate } from "react-router-dom";
import MonkeyBtn from "../../components/MonkeyBtn";
import { useState } from "react";
const OPTinputItem = ({ val, setVal, num }) => {
  return (
    <input
      className="rounded-xl bg-[#F2F2F2]  text-center text-2xl h-14 w-14 focus:outline-none"
      placeholder="*"
      value={val}
      type="number"
      id={num}
      onChange={(e) => {
        if (val === undefined) setVal(e.target.value);
        else setVal(e.target.value % 10);
      }}
    />
  );
};
const Otp = () => {
  const navigator = useNavigate();
  const [v1, setV1] = useState();
  const [v2, setV2] = useState();
  const [v3, setV3] = useState();
  const [v4, setV4] = useState();
  const dataInput = [
    {
      id: 1,
      val: v1,
      fn: setV1,
    },
    {
      id: 2,
      val: v2,
      fn: setV2,
    },
    {
      id: 3,
      val: v3,
      fn: setV3,
    },
    {
      id: 4,
      val: v4,
      fn: setV4,
    },
  ];
  const handleOTP = () => {
    if (
      v1 === undefined ||
      v2 === undefined ||
      v3 === undefined ||
      v4 === undefined
    )
      return;
    console.log(v1, v2, v3, v4);
    navigator("/newpwd");
  };
  return (
    <>
      <div className="bg-white px-8 pt-10 pb-10 text-center h-[812px] content-between">
        <div>
          <div className="text-center text-2xl text-[#4A4B4D]">
            We have sent an OTP to<br></br> your Mobile
          </div>
          <div className="py-3 text-[#7C7D7E] text-sm">
            Please check your mobile number 071******12<br></br>continue to
            reset password
          </div>
        </div>

        <div>
          <div className="flex py-10 justify-between">
            {dataInput.map((item) => (
              <OPTinputItem
                key={item.id}
                val={item.val}
                setVal={item.fn}
                num={item.id}
              />
            ))}
          </div>

          <div className="w-full cursor-pointer" onClick={handleOTP}>
            <MonkeyBtn bgcolor={"#FC6011"} title={"Next"} />
          </div>
        </div>
        <div className="flex justify-center pt-6 gap-1">
          <div className="text-[#7C7D7E] text-sm self-center">
            Didn't Receive?
          </div>
          <div>
            <button className="bg-transparent text-[#FC6011] self-center">
              <b>Click Here</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
