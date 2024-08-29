import { useNavigate } from "react-router-dom";
import MonkeyBtn from "../../components/MonkeyBtn";
import { useState } from "react";
import Data from "../../data/Data.json";
const DataInputComp = ({ placetitle, data, idValue, onChangeFn, type }) => {
  return (
    <input
      className="w-full focus:outline-none my-4 rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
      placeholder={placetitle}
      value={data}
      id={idValue}
      type={type}
      onChange={(e) => {
        onChangeFn(e.target.value);
      }}
    />
  );
};
const Signup = () => {
  const navigator = useNavigate();
  const handleLogin = () => {
    navigator("/login");
  };
  const [name, setName] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [mobileno, setMoblieNo] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const inputSerial = [
    {
      placetitle: "name",
      data: name,
      type: "text",
      idValue: "name",
      onChangeFn: setName,
    },
    {
      placetitle: "Email",
      data: emailAdd,
      type: "text",
      idValue: "emailAdd",
      onChangeFn: setEmailAdd,
    },
    {
      placetitle: "Mobile No",
      data: mobileno,
      type: "text",
      idValue: "mobileno",
      onChangeFn: setMoblieNo,
    },
    {
      placetitle: "Address",
      data: address,
      type: "text",
      idValue: "address",
      onChangeFn: setAddress,
    },
    {
      placetitle: "Password",
      data: password,
      type: "password",
      idValue: "pwd1",
      onChangeFn: setPassword,
    },
    {
      placetitle: "Confirm Password",
      data: password2,
      type: "password",
      idValue: "pwd2",
      onChangeFn: setPassword2,
    },
  ];

  const handleSignUp = () => {
    if (
      password !== password2 ||
      !password.trim() ||
      !name.trim() ||
      !emailAdd.trim()
    )
      return;
    const Users = Data.Users;
    const user = {
      id: Users.length,
      name: name,
      email: emailAdd,
      mobileno: mobileno,
      address: address,
      Password: password,
    };
    Users.push(user);
    console.log(Users);
    navigator("/welcome");
  };

  return (
    <>
      <div className="bg-white px-8 pt-14 pb-10 text-center h-[812px] content-between">
        <div className="text-center text-3xl text-[#4A4B4D]">Sign Up</div>
        <div className="pt-2 text-[#7C7D7E] text-sm mb-5">
          Add your details to sign up
        </div>

        {inputSerial.map((item) => (
          <DataInputComp
            key={item.idValue}
            placetitle={item.placetitle}
            data={item.name}
            idValue={item.idValue}
            onChangeFn={item.onChangeFn}
            type={item.type}
          />
        ))}

        <div className="w-full cursor-pointer mt-2" onClick={handleSignUp}>
          <MonkeyBtn bgcolor={"#FC6011"} title={"Sign Up"} />
        </div>
        <div className="flex justify-center pt-6 gap-1">
          <div className="text-[#7C7D7E] text-sm self-center">
            Already have an Account?
          </div>
          <div>
            <button
              className="bg-transparent text-[#FC6011] self-center"
              onClick={() => handleLogin()}
            >
              <b>Login</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
