import mainbg from "./images/body.png";
import home from "./images/home.svg";
import home_red from "./images/homeActive.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import menu from "./images/menu.svg";
import menu_red from "./images/menuActive.svg";
import offer from "./images/bag.svg";
import offer_red from "./images/bagActive.svg";
import profile from "./images/profile.svg";
import profile_red from "./images/profileActive.svg";
import more from "./images/more.svg";
import more_red from "./images/moreActive.svg";
import FooterButton from "./FooterButton";

const Footer = () => {
  const [page, setPage] = useState("home");
  const navigate = useNavigate();
  // const move = () => {
  //   setPage("home");
  //   navigate("home");
  // };
  const ddd="godset"
  return (
    <>
      {/* <div
        className="h-[120px] mt-2 fixed bottom-0 w-screen" // fixed bottom-0
        style={{
          zIndex: 1000,
        }}
      >
        <div className="justify-center flex -z-10  w-screen">
          <img src={mainbg} className=" w-screen" alt="noImg"/>
        </div>
        <div // home avatar
          className="flex justify-center z-50  items-center"
          style={{
            transform: "translateY(-134px)",
          }}
        >
          <img
            src={seletct === HOME ? homeActiveIMG : homeIMG}
            className="w-[72px] hand"
            onClick={() => {
              setseletct(HOME);
              navigate("/dashboard");
            }}
          />
        </div>
        <div // icons
          className="flex z-50  justify-between px-8"
          style={{
            transform: "translateY(-130px)",
          }}
        >
          <div
            className="justify-center w-6 flex flex-col items-center hand"
            onClick={() => {
              setseletct(MENU);
              navigate("/menu");
            }}
          >
            <img src={seletct === MENU ? menuActive : menu} alt="noImg"/>
            <div
              className="text-[12px]"
              style={{
                color: seletct === MENU ? "#FC6011" : "#B6B7B7",
              }}
            >
              Menu
            </div>
          </div>
          <div
            className="justify-center w-6 flex flex-col items-center hand"
            onClick={() => {
              setseletct(OFFERS);
              navigate("/offers");
            }}
          >
            <img src={seletct === OFFERS ? bagActive : bag} alt="noImg"/>
            <div
              className="text-[12px]"
              style={{
                color: seletct === OFFERS ? "#FC6011" : "#B6B7B7",
              }}
            >
              Offers
            </div>
          </div>
          <div></div>
          <div></div>
          <div
            className="justify-center w-6 flex flex-col items-center hand"
            onClick={() => {
              setseletct(PROFILE);
              navigate("/profile");
            }}
          >
            <img src={seletct === PROFILE ? profileActive : profile} alt="noImg" />
            <div
              className="text-[12px]"
              style={{
                color: seletct === PROFILE ? "#FC6011" : "#B6B7B7",
              }}
            >
              Profile
            </div>
          </div>
          <div
            className="justify-center w-6 flex flex-col items-center hand"
            onClick={() => {
              setseletct(MORE);
              navigate("/more");
            }}
          >
            <img src={seletct === MORE ? moreActive : more} alt="noImg"/>
            <div
              className="text-[12px]"
              style={{
                color: seletct === MORE ? "#FC6011" : "#B6B7B7",
              }}
            >
              More
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-row items-end mt-6 fixed bottom-0 w-screen justify-between">
        <div className="flex flex-row justify-between w-[35%]">
          <FooterButton
            setPage={setPage}
            page={page}
            src={page == "menu" ? menu_red : menu}
            type={"Menu"}
          />
          <FooterButton
            setPage={setPage}
            page={page}
            src={page == "offers" ? offer_red : offer}
            type={"Offers"}
          />
        </div>
        <img
          className="mb-12 mx-1.5 z-30"
          src={page == "home" ? home_red : home}
          onClick={move}
        />
        <img
          className="absolute z-20 w-[100%] h-[92px]"
          src={mainbg}
          alt="noImg"
        />
        <div className="flex flex-row justify-between w-[35%]">
          <FooterButton
            setPage={setPage}
            page={page}
            src={page == "profile" ? profile_red : profile}
            type={"Profile"}
          />
          <FooterButton
            setPage={setPage}
            page={page}
            src={page == "more" ? more_red : more}
            type={"More"}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
