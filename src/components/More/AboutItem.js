const AboutItem = ({ title }) => {
  return (
    <>
      <div className="flex flex-row px-[22px] mb-[14px]">
        <div className="flex">
          <div className="w-[6px] h-[6px] rounded-full bg-[#EE5A30] mt-[6px]"></div>
        </div>
        <div className="ml-1 flex items-center">
          <div>
            <div className="text-[14px] text-[#4A4B4D]">{title}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutItem;
