const CheckoutPaymentItem = ({ img, title, chkIMG, id, setChkNum, chkNum }) => {
  return (
    <>
      <div
        className="w-full h-[43px] bg-[#F6F6F6] px-[21px] items-center justify-between flex flex-row rounded-md cursor-pointer"
        style={{
          border: "1px solid #d6d6d6",
        }}
        onClick={() => {
          setChkNum(id);
        }}
      >
        <div className="flex flex-row text-[12px] text-[#2D2D2D]">
          {img !== undefined ? <img src={img} alt="no image" /> : <></>}
          {title}
        </div>
        {chkNum === id ? (
          <div className="w-[14px] h-[14px] rounded-full bg-[#EE5A30]" />
        ) : (
          <div className="w-[14px] h-[14px]">
            <img src={chkIMG} alt="noImg" />
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutPaymentItem;
