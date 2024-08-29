import shopCart from "../Menu/images/shopping-cart.svg";
import OffersComponent from "../../components/Offers/OffersComponent";
import FoodOne from "./images/FoodOne.svg";
import FoodTwo from "./images/FoodTwo.svg";
import FoodThree from "./images/FoodThree.svg";

const Offers = () => {
  const descriptionJSON = [
    { description: "Café de Noires", img: FoodOne },
    { description: "Isso", img: FoodTwo },
    { description: "Cafe Beans", img: FoodThree },
  ];
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-between items-center mt-8  px-5">
          <p className="text-2xl text-[#4A4B4D]">Latest Offers</p>
          <img src={shopCart} alt="shopCart" />
        </div>
        <div className="text-[14px] text-[#7C7D7E] mt-4 ml-5">
          Find discounts, Offers special
        </div>
        <div className="ml-5 w-[157px] sm:w-[40%] h-[30px] xss:h-[40px] bg-[#FC6011] rounded-full mt-9 text-white text-xs flex flex-row justify-center items-center mb-[22px]">
          Check Offers
        </div>
        <div className="mb-24">
          {descriptionJSON.map((item, i) => (
            <OffersComponent
              key={i}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Offers;
