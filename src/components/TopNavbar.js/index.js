import topState from "./images/topstate.svg";

const TopNavbar = () => {
  return (
    <>
      <div
        className="flex justify-center m-2 absolute mx-6"
        style={{
          zIndex: 10000,
        }}
      >
        <img src={topState} alt="noImg" />
      </div>
    </>
  );
};

export default TopNavbar;
