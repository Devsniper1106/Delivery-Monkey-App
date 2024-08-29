import { useState } from "react";
import empty from "./images/empty.svg";
import fill from "./images/fill.svg";
let bg = {
  happy: fill,
  default: empty,
};

const State = ["default", "happy"];
let btns = [
  {
    happy: 1,
  },
  {
    happy: 1,
  },
  {
    happy: 1,
  },
  {
    happy: 1,
  },
  {
    happy: 0,
  },
];

const Ratings = () => {
  const [current, setCurrent] = useState(4);
  const btnClick = (number) => {
    if (number === current) {
      for (let i = 0; i < number; i++) btns[i].happy = (btns[i].happy + 1) % 2;
      setCurrent(0);
    } else {
      for (let i = 1; i <= number; i++) btns[i - 1].happy = 1;
      for (let i = number + 1; i <= 5; i++) btns[i - 1].happy = 0;
      setCurrent(number);
    }
  };

  return (
    <>
      <div className="flex flex-row m-1 gap-2">
        <img
          alt="noImg"
          src={bg[State[btns[0].happy]]}
          onClick={() => btnClick(1)}
        />

        <img
          alt="noImg"
          src={bg[State[btns[1].happy]]}
          onClick={() => btnClick(2)}
        />

        <img
          alt="noImg"
          src={bg[State[btns[2].happy]]}
          onClick={() => btnClick(3)}
        />

        <img
          alt="noImg"
          src={bg[State[btns[3].happy]]}
          onClick={() => btnClick(4)}
        />

        <img
          alt="noImg"
          src={bg[State[btns[4].happy]]}
          onClick={() => btnClick(5)}
        />
      </div>
    </>
  );
};
export default Ratings;
