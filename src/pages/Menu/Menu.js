import shopCart from "./images/shopping-cart.svg";
import searchIcon from "./images/search-icon.svg";
import MenuBtn from "../../components/Menu/MenuBtn";
import Food from "./images/food.svg";
import Beverage from "./images/beverage.svg";
import Promotions from "./images/promotions.png";
import Desserts from "./images/desserts.png";

const Menu = () => {
  const btnContent = [
    {
      description: "Food",
      count: 120,
      img: Food,
    },
    {
      description: "Beverages",
      count: 220,
      img: Beverage,
    },
    {
      description: "Desserts",
      count: 155,
      img: Desserts,
    },
    {
      description: "Food",
      count: 25,
      img: Promotions,
    },
  ];
  return (
    <>
      <div className="w-full px-5 mb-32">
        <div className="flex flex-row justify-between items-center mt-8">
          <p className="text-2xl text-[#4A4B4D]">Menu</p>
          <img src={shopCart} alt="noImg" />
        </div>

        <div className="w-full mt-6">
          <img
            src={searchIcon}
            className="mt-3 ml-5 absolute z-10"
            alt="noImg"
          />
          <input
            className="w-full h-11 placeholder:italic bg-[#F2F2F2] rounded-full indent-14 outline-none"
            placeholder="Search food"
          ></input>
        </div>
        <div className="flex flex-col mt-9">
          <div className="w-[97px] h-[485px] rounded-r-[38px] bg-[#FC6011] fixed z-[-30] -translate-x-5 mb-[52px]" />
          {btnContent.map((item, i) => (
            <MenuBtn
              key={i}
              description={item.description}
              count={item.count}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
