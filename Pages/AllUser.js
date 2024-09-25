import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ChangeUserRole from "../Components/ChangeUserRole";

const AllUser = () => {
  const [Alluser, setAlluser] = useState([]);
  const [updateUserDetails,setUpdateUserDetails] = useState({
    email : "",
    name : "",
    role : "",
    _id  : ""
    // userId : ""
})
//console.log("Data will be ",updateUserDetails)

  const [OpenUpdatesRole, SetOpenUpdateRole] = useState(false);
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/all-user");
      if (response.data.success === true) {
        setAlluser(response.data.data);
        // setUpdateUserDetails(response.data.data)
      }
    } catch (error) {
      console.log(error);
      toast.message(error);
    }
  };
  return (
    <div className='bg-white pb-4'>
    <table className='w-full userTable'>
        <thead>
            <tr className='bg-black text-white'>
                <th>Sr.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody className=''>
            {
              Alluser.map((el,index) => {
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{el?.name}</td>
                            <td>{el?.email}</td>
                            <td>{el?.role}</td>
                            <td>{moment(el?.createdAt).format('LL')}</td>
                            <td>
                                <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white' 
                                  //  onClick={()=>{}
                                    // setUpdateUserDetails(el)
                                    onClick={()=>{
                                      setUpdateUserDetails(el)
                                      SetOpenUpdateRole(true)
                                     
                                    }}
                                >
                                    <FaEdit/>
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>

            {
              OpenUpdatesRole && (
                <ChangeUserRole
                onClose={()=>SetOpenUpdateRole(false)} 
                name={updateUserDetails.name}
                email={updateUserDetails.email}
                role={updateUserDetails.role}
                userId={updateUserDetails._id}
                callFunc={fetchAllUsers}
            />
              )
            }
      
           
         
    
</div>

      
  );
};

export default AllUser;
