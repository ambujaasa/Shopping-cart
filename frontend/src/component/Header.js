import React, { useState } from "react";
import logo from "../assets/shopping logo.jpeg";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);

  /*console.log(userData.email);*/
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

  /*console.log(process.env.REACT_APP_ADMIN_EMAIL);*/
  const cartItemNumber = useSelector((state) => state.product.cartItem);
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/*desktop*/}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-16">
            <img src={logo} alt={logo} className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className=" gap-4 md:gap-7 text-base md:text-lg hidden md:flex">
            <Link to={"/"}>Home</Link>
            <Link to={"menu/64c2728a03055f658f6b6d92"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-400 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className=" text-slate-400">
            <div
              className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md"
              onClick={handleShowMenu}
            >
              {userData.image ? (
                <img
                  src={userData.image}
                  alt={"headerimage"}
                  className="h-full w-full"
                />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    New Product
                  </Link>
                )}

                {userData.image ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstname})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className=" text-base md:text-lg flex flex-col md:hidden ">
                  <Link to={"/"} className=" px-2 py-1">
                    Home
                  </Link>
                  <Link
                    to={"menu/64c2728a03055f658f6b6d92"}
                    className=" px-2 py-1"
                  >
                    Menu
                  </Link>
                  <Link to={"about"} className=" px-2 py-1">
                    About
                  </Link>
                  <Link to={"contact"} className=" px-2 py-1">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      {/*mobile*/}
    </header>
  );
};

export default Header;
