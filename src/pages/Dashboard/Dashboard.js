import shopping from "./images/shopping-cart.png";
import offers from "./images/offers.png";
import lankan from "./images/Lankan.png";
import italian from "./images/Itanlian.png";
import indian from "./images/indian.png";
import tuktuk from "./images/tuktuk.png";
import deNoir from "./images/deNoir.png";
import tella from "./images/tella.png";
import bambaa from "./images/bambaa.png";
import josh from "./images/josh.png";
import barita from "./images/barita.png";
import hour from "./images/hour.png";
import bella from "./images/bella.png";
import "./style/style.css";
import FoodDataRow from "../../components/Dashboard/FoodDataRow";
import FoodDataColumn from "../../components/Dashboard/FoodDataColumn";
import MostPopular from "../../components/Dashboard/MostPopular";
import RecentItems from "../../components/Dashboard/RecentItems";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const foodDataColumn = [
    { title: "Offers", picture: offers },
    { title: "Sri Lankan", picture: lankan },
    { title: "Italian", picture: italian },
    { title: "Indian", picture: indian },
  ];
  const foodDataRow = [
    { title: "Minute by tuk tuk", picture: tuktuk },
    { title: "Café de Noir", picture: deNoir },
    { title: "Bakes by Tella", picture: tella },
  ];
  const mostPopular = [
    { title: "Café De Bambaa", picture: bambaa },
    { title: "Burger by Bella", picture: bella },
  ];
  const recentItems = [
    { title: "Mulberry Pizza by Josh", picture: josh, country: "West Food" },
    { title: "Barita", picture: barita, country: "Coffee" },
    { title: "Pizza Rush Hour", picture: hour, country: "Italian Food" },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="py-3 w-dvw">
        <div className="px-5">
          <div className="flex justify-between items-center py-5">
            <div className="text-lg font-medium text-[#4A4B4D] sm:text-[35px] md:text-[50px] transition-all ">
              Good morninkg Akila!
            </div>
            <div>
              <img
                src={shopping}
                alt="No image"
                className="hover:animate-bounce md:w-11 lg:w-24"
              />
            </div>
          </div>
          <div className="text-xs text-[#4A4B4D]">Delivering to</div>
          <div className="py-1 font-bold text-[#4A4B4D]">
            <select className="focus:outline-none rounded-md">
              <option className=" hover:bg-slate-800" value="0">
                Current Location
              </option>
              <option className=" hover:bg-slate-800" value="1">
                My office
              </option>
            </select>
          </div>
          <div className="bg-[#F2F2F2] flex flex-row items-center rounded-full w-full h-[45px] mb-[30px] my-5  px-5">
            <div className="text-center text-xl text-[#676869] pr-5">
              <i className="fa fa-search font-sans"></i>
            </div>
            <div className="w-full ">
              <input
                className=" bg-transparent focus:outline-none w-full placeholder:italic"
                placeholder="Search food"
              />
            </div>
          </div>
          <div className="grid grid-flow-col auto-cols-max gap-8 text-center font-bold text-[#4A4B4D] text-sm overflow-x-scroll mb-6">
            {foodDataColumn.map((item, i) => {
              return (
                <FoodDataColumn
                  key={i}
                  title={item.title}
                  picture={item.picture}
                />
              );
            })}
          </div>
          <div className="grid grid-flow-col justify-between items-end py-7">
            <p className="text-xl text-[#4A4B4D]">Popular Restaurents</p>
            <button
              className="text-[#FC6011] text-sm"
              onClick={() => {
                navigate("/menu");
              }}
            >
              View all
            </button>
          </div>
        </div>

        <div className="">
          {foodDataRow.map((item, i) => {
            return (
              <FoodDataRow key={i} title={item.title} picture={item.picture} />
            );
          })}
        </div>
      </div>
      <div className="w-dvw px-5 pb-36">
        <div className=" grid grid-flow-col justify-between items-end py-5">
          <p className="text-xl text-[#4A4B4D]"> Most Popular</p>
          <button
            className="text-[#FC6011] text-sm"
            onClick={() => {
              navigate("/menu");
            }}
          >
            View all
          </button>
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-5 text-center font-bold text-[#4A4B4D] text-sm overflow-x-scroll mb-6">
          {mostPopular.map((item, i) => {
            return (
              <MostPopular key={i} title={item.title} picture={item.picture} />
            );
          })}
        </div>
        <div className=" grid grid-flow-col justify-between items-end py-5">
          <p className="text-xl text-[#4A4B4D]">Recent Items</p>
          <button
            className="text-[#FC6011] text-sm"
            onClick={() => {
              navigate("/menu");
            }}
          >
            View all
          </button>
        </div>
        <div className="">
          {recentItems.map((item, i) => {
            return (
              <RecentItems
                key={i}
                title={item.title}
                picture={item.picture}
                country={item.country}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
