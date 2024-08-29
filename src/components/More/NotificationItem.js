const NotificationItem = ({ title, time }) => {
  return (
    <>
      <div className="flex flex-row  border-b h-16 px-[22px] hover:bg-[#eeeeee] ">
        <div className="flex">
          <div className="w-[10px] h-[10px] rounded-full bg-[#EE5A30] mt-[15px]"></div>
        </div>
        <div className="ml-8 flex items-center">
          <div>
            <div className="overflow-y-hidden h-6 text-[14px] text-[#4A4B4D]">
              {title}
            </div>
            <div className=" overflow-y-hidden text-[12px] text-[#B6B7B7]">
              {time}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotificationItem;
