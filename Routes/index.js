import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import Signup from "../Pages/Signup";
import AdminPanel from "../Pages/AdminPanel";
import AllUser from "../Pages/AllUser";
import AllProduct from "../Pages/AllProduct";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "" ,
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>

            },
            {
                path : "forgot-password",
                element : <ForgotPassword/>
            },
            {
                path : "Sign-up",
                element : <Signup/>
            },
            {
                path :"admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path:"all-users",
                        element : <AllUser/>
                    },
                    {
                        path:"all-product",
                        element : <AllProduct/>
                    },

                ]
            },
           
        ]
    }
])

export default router;