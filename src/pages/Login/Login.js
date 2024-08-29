import { useNavigate } from "react-router-dom";
import MonkeyBtn from "../../components/MonkeyBtn";
import Data from "../../data/Data.json";

import { useState } from "react";
const Login = ({ setIslogin }) => {
	const navigator = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignup = () => {
		navigator("/signup");
	};
	const handleLogin = () => {
		if (email.trim() && password.trim) {
			const user = Data.Users.filter((item) => item.email === email);
			console.log(user);
			// if (user.password === password) {

			// } else {
			//   console.log("Password Error");
			// }
			setIslogin(true);
			navigator("/dashboard");
		}
	};
	return (
		<>
			<div className="bg-white  pt-20 pb-10 text-center px-8 justify-center flex flex-col w-full ">
				<div>
					<div className="text-center text-3xl">Login</div>
					<div className="pt-2 text-zinc-600 text-sm">
						Add your details to login
					</div>
				</div>
				<div>
					<div className="pt-8">
						<input
							className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14 focus:outline-none"
							placeholder="Your Email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className="py-7">
						<input
							className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14 focus:outline-none"
							placeholder="Password"
							type="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<div className="w-full" onClick={handleLogin}>
						<MonkeyBtn bgcolor={"#FC6011"} title={"Login"} />
					</div>
				</div>
				<div>
					<div className="my-6 flex justify-center">
						<div
							className="text-[#7C7D7E] text-sm w-36 "
							onClick={() => {
								navigator("/reset");
							}}>
							Forgot your password?
						</div>
					</div>

					<div className="text-[#7C7D7E] py-6 text-sm">or Login With</div>
				</div>
				<div>
					<div>
						<div className="h-14 rounded-full justify-center text-center flex text-white items-center text-base bg-[#367FC0]  w-full">
							<div className="fa fa-facebook mr-7" />
							<div className="text-[12px]">Login with Facebook</div>
						</div>
					</div>
					<div className="py-6">
						<div className="h-14 rounded-full justify-center text-center flex text-white items-center bg-[#DD4B39]  w-full">
							<div className="fa fa-google-plus mr-7" />
							<div className="text-[12px]">Login with Google</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center pt-[60px] gap-1">
					<div className="text-[#7C7D7E] text-sm self-center">
						Don't have an Account?
					</div>
					<div className="font-bold">
						<button
							className="bg-transparent text-[#FC6011] self-center"
							onClick={() => handleSignup()}>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
