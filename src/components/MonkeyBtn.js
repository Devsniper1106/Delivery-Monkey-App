const MonkeyBtn = ({ bgcolor, title, bordercolor }) => {
  //   <MonkeyBtn
  //   title={"Fileed BUtton"}
  //   bgcolor={"#FC6011"}
  //   bordercolor={"#000"}
  // />
  return (
    <>
      <div
        className="w-80 h-14 rounded-full justify-center text-center flex text-white items-center text-base w-full"
        style={{
          backgroundColor: `${bgcolor}`,
          border: `2px solid ${bordercolor}`,
        }}
      >
        {title}
      </div>
    </>
  );
};
export default MonkeyBtn;
