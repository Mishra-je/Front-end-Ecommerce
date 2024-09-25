import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Context from "./Context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./Store/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fethchDetails()
  },[]);

  const fethchDetails = async () => {
    await axios.get("http://localhost:3000/api/user-details").then((res) => {
      console.log(res.data);
      axios.defaults.withCredentials = true;
      if (res.data.success === true) {
        dispatch(setUserDetails(res.data));
      }
      
    });
  };

  return (
    <>
      <Context.Provider
        value={{
          fethchDetails // user fetch details
        }}
      >
        <Header />
        <ToastContainer />
        <main>
          <Outlet />
        </main>
        <Footer  />
      </Context.Provider>
    </>
  );
};

export default App;
