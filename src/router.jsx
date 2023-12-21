import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "./Main/Main";
import Home from "./Home/Home";
import Register from "./Pages/Register/Register";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
       
      ]
    },
    
     {
          path: "/register",
          element: <Register/>
      }
  ]);
export default router