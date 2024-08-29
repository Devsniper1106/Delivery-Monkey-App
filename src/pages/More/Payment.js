import Arrow from "./imgs/arrow.svg";
import Busket from "./imgs/busketball.svg";
import Check from "./imgs/check.svg";
import Visa from "./imgs/visa.svg";
import Plus from "./imgs/Plus.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddCreditModal from "./AddCreditModal";
const Payment = () => {
	const nav = useNavigate("/");

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		nav("/more");
	};
	const handleAddCard = () => {
		setIsOpen(true);
	};
	return (
		<>
			<div className="flex   max-w-2xl flex-col px-[22px] ">
				<div className="flex flex-col border-b-[1px] mt-8">
					<div className="flex flex-row justify-between mt-7 mb-6">
						<div className="flex flex-row justify-end  items-center gap-5">
							<div>
								<img alt="Noimg" src={Arrow} onClick={() => handleClick()} />
							</div>
							<div>
								<p className=" text-[24px] text-[#4A4B4D]">Payment Details</p>
							</div>
						</div>
						<div className="flex">
							<img alt="Noimg" src={Busket} />
						</div>
					</div>
					<div className="flex flex-row justify-start pb-3 ">
						<p className="font-bold text-[16px] text-[#4A4B4D]">
							Customize tour payment method
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col  w-[100%]  ">
				<div className="my-5 flex flex-row w-full justify-center shadow-2xl bg-[#F7F7F7] py-4">
					<div className="flex flex-col  w-4/5">
						<div className="flex flex-row  justify-between p-1 border-b-[1px]">
							<div className="flex flex-row">
								<p className="text-[12px] font-bold text-[#4A4B4D] py-1">
									Cash/Card on delivery
								</p>
							</div>
							<div className="flex flex-row">
								<img alt="Noimg" src={Check} />
							</div>
						</div>
						<div className="flex flex-row justify-between p-2 items-center pb-4 border-b-[1px] gap-3">
							<div className="flex items-center flex-row gap-4">
								<div className="">
									<img alt="Noimg" className=" h-7  max-w-none" src={Visa} />
								</div>
								<div className=" text-[#4A4B4D] text-[12px]">**** ****</div>
							</div>
							<div className="flex flex-1 flex-row  items-center justify-between">
								<div>
									<p className="text-[12px] text-[#4A4B4D]">2187</p>
								</div>
								<div>
									<button
										className="h-[30px] w-[86px] items-center font-bold rounded-3xl  text-[11px] text-[#FC6011] border-[1.5px] border-[#FC6011]"
										type="submit">
										Delete Card
									</button>
								</div>
							</div>
						</div>
						<div className="px-2 pt-3 pb-1">
							<p className="text-[12px] font-bold text-[#4A4B4D]">
								Other Methods
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex   max-w-2xl flex-col px-[22px] ">
				<div className="mt-[40px]">
					<button
						className="flex flex-row gap-3 items-center justify-center h-14 w-[100%] px-3 text-[1rem] font-semibold rounded-full bg-[#FC6011]  text-[white]"
						onClick={handleAddCard}>
						<img alt="Noimg" className="max-w-none" src={Plus} />
						<p>Add Another Credit/Debit Card</p>
					</button>
				</div>
			</div>
			{isOpen && <AddCreditModal setIsOpen={setIsOpen} Plus={Plus} />}
		</>
	);
};

export default Payment;
