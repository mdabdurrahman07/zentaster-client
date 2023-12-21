import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
     <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-purple-500" : ""
        }
        >
       <h1 className="text-xl font-medium">Home</h1>
        </NavLink>
        <NavLink
    to="/about"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-purple-500" : ""
    }
    >
     <h1 className="text-xl font-medium">About</h1>
    </NavLink>
        <NavLink
    to="/register"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-purple-500" : ""
    }
    >
     <h1 className="text-xl font-medium">Sign Up</h1>
    </NavLink>
    </>
     const [isOpen , SetisOpen] = useState(false)
     const navabrToggle = () => {
         SetisOpen(!isOpen)
     }
    return (
        <>
        <div className="w-1/3 flex justify-end">
            <div className="hidden md:flex justify-around w-full">
            {navlinks}
        </div>
        <div>
            <button className="md:hidden" onClick={navabrToggle}>{
                isOpen ? <X/> : <Menu/>
            }</button>
           
        </div>
       
        </div>
        {
    isOpen && 
    <div className="flex basis-full flex-col items-center">
    {navlinks}
    </div>
   }
        </>
    );
};

export default Navbar;