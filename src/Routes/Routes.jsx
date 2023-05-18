import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Home from "../Components/Home/Home/Home";
import AllToys from "../Components/AllToys/AllToys";
import AddAToy from "../Components/AddAToy/AddAToy";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/LogPages/Login";
import SignUp from "../Components/LogPages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children :[
        {
            path : '/',
            element :<Home></Home>
        },
        {
          path : '/AllToys',
            element : <AllToys></AllToys>
        },
        {
          path : '/AddAToy',
            element : <AddAToy></AddAToy>
        },
        {
          path : '/Blog',
            element : <Blog></Blog>
        },
        {
          path : '/login',
            element : <Login></Login>
        },
        {
          path : '/SignUp',
            element : <SignUp></SignUp>
        },
    ]
    },
  ]);

  export default router;