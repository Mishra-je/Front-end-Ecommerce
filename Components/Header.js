import React, { useState } from "react";
import logo from "../assest/logo.png";
// import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../Common";
import { toast } from "react-toastify";
import { setUserDetails } from "../Store/userSlice";
import axios from "axios";
const Header = () => {
  const [menuDisplay , setMenuDisplay] = useState(false)
  const user = useSelector((state) => state?.user?.user);
  console.log("User header", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios
      .get("http://localhost:3000/api/logout")
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          toast.success(result.data.message);
          dispatch(setUserDetails(null));
          navigate("/");
        }
        if (result.data.error) {
          toast.error(result.data.message);
        }
      })
      .catch((err) => {
        console.log("Error is ", err);
      });
  };

  return (
    <>
      <header className=" shadow-md h-24 bg-white  ">
        <div className=" container mx-auto flex items-center pr-4 justify-evenly  ">
          <div>
            <Link to={"/"}>
              <img
                src={logo}
                alt="mylogo"
                className="h-24 justify-center px-3  "
              />
            </Link>
          </div>
          <form className=" md:w-[40%] sm:w-[30%] mx-auto ">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white hidden md:block"
            >
              Search
            </label>
            <div className="relative hidden md:flex">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full  p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50  "
                placeholder="Search here..."
                required
              />
              <button
                type="submit"
                className="text-white absolute max-w-md end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex pr-6  items-center gap-4 ">
            <div className=" relative  flex justify-center " onClick={() => setMenuDisplay(prev => !prev)}>
              <div className="text-4xl cursor-pointer p-2 "  >
                {user?.data?.profilePic ? (
                  <img
                    src={user.data.profilePic}
                    className="w-10 h-10 rounded-full"
                    alt={user.data.name}
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
              {
                menuDisplay && (
                  <div className="  hidden md:block bg-white absolute bottom-0 top-11 h-fit p-2 shadow-lg rounded z-20  ">
                {/* hidden group-hover:block */}
                <nav>
                  <Link
                    className=" whitespace-nowrap  hover:bg-slate-100 "
                    to={"admin-panel"}
                  >
                    Admin Panel
                  </Link>
                </nav>
              </div>
                ) 
              }

              
            </div>

            {/* <div className="text-4xl cursor-pointer p-2 ">
              {<FaRegCircleUser />}
            </div> */}
            <div className="text-3xl relative ">
              <span>
                {" "}
                <FaShoppingCart />
              </span>
              <div className="bg-red-600 h-5 rounded-full text-white w-5 p-2 absolute top-0 -right-3 flex items-center justify-center">
                <p className="text-sm">0</p>
              </div>
            </div>
          </div>
          <div>
            {user?.data?._id ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-3 py-2 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
