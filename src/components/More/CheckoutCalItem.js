const CheckoutCalItem = ({ title, money }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="text-[#4A4B4D] text-[13px]">{title}</div>
        <div className="text-[#4A4B4D] text-[13px] font-bold">
          {money > 0 ? `$${money}` : `-$${money * -1}`}
        </div>
      </div>
    </>
  );
};

export default CheckoutCalItem;
