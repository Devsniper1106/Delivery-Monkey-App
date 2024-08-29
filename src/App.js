import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Reset from "./pages/Signup/Reset.js";
import OPT from "./pages/Signup/Otp.js";
import NewPassword from "./pages/Signup/NewPassword.js";
import Menu from "./pages/Menu/Menu";
import Offers from "./pages/Offers/Offers";
import Profile from "./pages/Profile/Profile";
import Morepage from "./pages/More/Morepage";
import Checkout from "./pages/More/Checkout.js";
import Footer from "./components/Footer";
import Splash from "./pages/Splash/index.js";
import Food from "./pages/Menu/Food.js";
import Item from "./pages/Menu/FoodItem.js";
import Notification from "./pages/More/Notification.js";
import Payment from "./pages/More/Payment.js";
import Welcome from "./pages/Login/Welcome.js";
import Address from "./pages/Address/index.js";
import InboxComponent from "./pages/More/InboxComponent.js";
import TopNavbar from "./components/TopNavbar.js";
import { useState } from "react";
import MyOrder from "./pages/More/MyOrder.js";
import AboutComp from "./pages/More/AboutComp";
export default function App() {
	const [islogin, setIslogin] = useState(false);

	return (
		<div className="main-container flex flex-col">
			{/* <TopNavbar /> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Splash />} />
					<Route path="/login" element={<Login setIslogin={setIslogin} />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/reset" element={<Reset />} />
					<Route path="/otp" element={<OPT />} />
					<Route path="/newpwd" element={<NewPassword />} />
					<Route pash="/dashboard" element={<Dashboard />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/food" element={<Food />} />
					<Route path="/food/items" element={<Item />} />
					<Route path="/offers" element={<Offers />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/more" element={<Morepage />} />
					<Route path="/aboutus" element={<AboutComp />} />
					<Route path="/payment" element={<Payment />} />
					<Route path="/welcome" element={<Welcome />} />
					<Route path="/inbox" element={<InboxComponent />} />
					<Route path="/notification" element={<Notification />} />
					<Route path="/myorder" element={<MyOrder />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/changeaddress" element={<Address />} />
					<Route path="*" element={<Dashboard />} />
				</Routes>
				{islogin && <Footer />}
			</BrowserRouter>
		</div>
	);
}
