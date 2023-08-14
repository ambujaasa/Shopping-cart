import React, { useState } from "react";
import loginSignupImage from "../assets/signup.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../Utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [Data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    image: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  console.log(process.env.REACT_APP_SERVER_DOMIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, email, password, confirmpassword } = Data;
    if (firstname && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(Data),
          }
        );
        const dataRes = await fetchData.json();

        //alert(dataRes.message);
        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        alert("password and confirmpassword not equal");
      }
    } else {
      alert("please enter required fields");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img
            src={Data.image ? Data.image : loginSignupImage}
            alt={"Signup"}
            className="w-full h-full"
          />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              className="hidden"
              accept="images/"
              onChange={handleUploadProfileImage}
            />
          </label>
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            type={"text"}
            id="firstname"
            name="firstname"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={Data.firstname}
            onChange={handleOnChange}
          />

          <label htmlFor="lastname">Last Name</label>
          <input
            type={"text"}
            id="lastname"
            name="lastname"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300"
            value={Data.lastname}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300"
            value={Data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type={"password"}
            id="password"
            name="password"
            className="mt-1 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300"
            value={Data.password}
            onChange={handleOnChange}
          />

          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type={"password"}
            id="confirmpassword"
            name="confirmpassword"
            className="mt-1 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300"
            value={Data.confirmpassword}
            onChange={handleOnChange}
          />

          <button className="w-fullmax-w-{150px} bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-5 mr-10 ml-10">
            Signup
          </button>
        </form>
        <p className="text-sm text-left mt-2">
          Already have account ?
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
