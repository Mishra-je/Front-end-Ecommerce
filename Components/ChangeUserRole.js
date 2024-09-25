import React, { useState } from "react";
import ROLE from "../Common/Role";
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import SummaryApi from "../Common";

const ChangeUserRole = ({name, email,role,userId,onClose,callFunc }) => {
  
  const [userRole, setUserRole] = useState(role);
  const handleChange = (e) => {
    setUserRole(e.target.value);
    console.log(e.target.value);
  };
  // const url = "http://localhost:3000/api//update-user";

  const updateUserRole = async() =>{
    try {
       const res =  await axios.post('http://localhost:3000/api//update-user',userId,userRole)
        console.log(res)
       if(res.data.success){
        toast.success(res.data.message)
        onClose();
        callFunc();
       }
        
    } catch (error) {
        console.log(error)
    }

  }
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-20 flex justify-between items-center bg-slate-200 bg-opacity-50">
      <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm">
        <div className=" float-right text-2xl hover:bg-slate-400 hover: font-semibold rounded-full p-1 ">
          <button className=" block " onClick={onClose}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <h1 className="pb-4 text-lg font-medium ">Change User Role</h1>
        <p>Name:{name}</p>
        <p>E-mail :{email} </p>
        <div className=" flex items-center justify-between my-4 ">
          <p>Role : </p>
          <select
            className=" border px-4 py-2"
            value={userRole}
            onChange={handleChange}
          >
            {Object.values(ROLE).map((e1) => {
              return (
                <option value={e1} key={e1}>
                  {e1}
                </option>
              );
            })}
          </select>
        </div>
        <button className=" w-fit mx-auto border block py-1 px-3 rounded-full  bg-red-600 text-white hover:bg-red-700 shadow-sm " onClick={updateUserRole} > 
          Chnage Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
