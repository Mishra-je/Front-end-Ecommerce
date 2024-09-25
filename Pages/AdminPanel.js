import React from "react";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log("User header", user);
  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden  ">
      <aside className="bg-white w-full min-h-full max-w-60 customShadow  ">
        <div className=" h-32 justify-center items-center flex flex-col  ">
          <div className="text-5xl cursor-pointer relative justify-center p-4 ">
            {user?.data?.profilePic ? (
              <img
                src={user.data.profilePic}
                className="w-20 h-20 rounded-full"
                alt={user.data.name}
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <p className=" capitalize font-semibold text-lg ">
            {user?.data.name}
          </p>
          <p className=" text-sm ">{user?.data.role}</p>
        </div>
        {/* navigation */}
        <div className="mt-5">
          <nav className=" grid p-4 ">
            <Link to={"all-users"} className=" px-2 py-1 hover:bg-slate-100 ">
              All Users
            </Link>
            <Link to={"all-product"} className=" px-2 py-1 hover:bg-slate-100 ">
              Upload Product
            </Link>
          </nav>
        </div>
      </aside>
      <main className=" w-full h-full p-2 ">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
