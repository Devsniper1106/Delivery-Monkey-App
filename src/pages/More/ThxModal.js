import money from "../Address/images/money.svg";
import MonkeyBtn from "../../components/MonkeyBtn";
const ThxModal = ({ setIsOpen }) => {
  return (
    <>
      <div className="w-full fixed h-full bg-[#0000002d] flex-col">
        <div className="bg-[#ffffff] bottom-0 fixed rounded-t-3xl w-full flex flex-col justify-center">
          <div className="flex flex-row justify-between p-5">
            <div></div>
            <div
              className="fa fa-close"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>

          <div className=" justify-center flex mt-3">
            <img src={money} alt="money" />
          </div>
          <div className="flex flex-col px-[22px]">
            <div className="font-extrabold text-[26px] text-[#4A4B4D] text-center mt-[30px]">
              Thank you
            </div>
            <div className="font-bold text-[17px] text-[#4A4B4D] text-center mt-[4px]">
              for your order
            </div>
            <div className="font-medium text-[14px] text-[#4A4B4D] text-center mt-[4px]">
              Your Order is now being processed. We will let you know once the
              order is picked from the outlet.Check the status of your Order
            </div>
            <div
              className="mt-[34px] flex justify-center"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <MonkeyBtn
                title={"Track My Order"}
                bgcolor={"#FC6011"}
                bordercolor={"#FC6011"}
              />
            </div>
            <div className="font-bold text-[17px] text-[#4A4B4D] text-center mt-[17px] mb-[50px]">
              Back To Home
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThxModal;
