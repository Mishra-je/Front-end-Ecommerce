const backendDomin = "http://localhost:3001";

const SummaryApi = {
  signUP: {
    url: `${backendDomin}/api/signup`,
    method: "post",
  },

  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
    },
    Logout : {
      url : `${backendDomin}/api/logout`,
      method : "get"
    },
    updateUser : {
      url : `${backendDomin}/api/UpdateUser`,
      method : 'post'
    }

};


export default SummaryApi

// http://localhost:3001/api/logout