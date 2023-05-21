import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Home from "../Components/Home/Home/Home";
import AllToys from "../Components/AllToys/AllToys";
import AddAToy from "../Components/AddAToy/AddAToy";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/LogPages/Login";
import SignUp from "../Components/LogPages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../Components/MyToy/MyToy";
import Error from "../Components/Extra/Error";
import Modal from "../Components/AllToys/Modal";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
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
            element : <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path : '/MyToy',
            element : <PrivateRoute><MyToy></MyToy></PrivateRoute>
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
          path : 'modal/:id',
            element :<Modal></Modal>,
            loader: ({params}) => fetch(`http://localhost:5000/allToy/${params.id}`)
        },
        {
          path : '/SignUp',
            element : <SignUp></SignUp>
        },
    ]
    },
  ]);

  export default router;