import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const NavBarMain = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }
   
    return (
        <div className="navbar bg-slate-900 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-success lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold   bg-lime-100 rounded-box w-52">
            <li><NavLink className='text-black-300' to="/">Home</NavLink> </li>
            <li><NavLink className='text-black-300' to="/AllToys">All Toys</NavLink> </li>
            <li><NavLink className='text-black-300' to="/AddAToy">Add A Toy</NavLink> </li>
            <li><NavLink className='text-black-300' to="/MyToy">My Toys</NavLink> </li>
            <li><NavLink className='text-black-300' to="/Blog">Blog</NavLink> </li>
            <div className=" navbar-end">
          {user && <img className='rounded-full w-[30px]  md:m-4' src={user.photoURL}  /> }
           {user ? <button onClick={handleLogOut} className="nav-btn md:m-4  hover:bg-lime-600 hover:border hover:border-blue-900  hover:text-black duration-300">Log Out</button>:<NavLink to="/login" className="btn btn-success bg-lime-100 md:mx-4   hover:bg-lime-600 hover:border hover:border-blue-900  hover:text-black duration-300 ">Login</NavLink> }
        </div>
              
            
            </ul>
          </div>
           
          <p className="btn btn-ghost font-bold normal-case text-xl   "> <img className='w-[80px]  rounded-full' src={`https://i.ibb.co/zPb35SC/headuyhi.jpg`} alt="" /> <span className="text-green-600">Animal-</span><span className="text-rose-600">Toys-</span ><span className="text-amber-400">
          Planet</span></p>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><NavLink className='text-lime-200' to="/">Home</NavLink> </li>
            <li><NavLink className='text-lime-200' to="/AllToys">All Toys</NavLink> </li>
           {user&& <li><NavLink className='text-lime-200' to="/AddAToy">Add A Toy</NavLink> </li>}
          { user&&<li ><NavLink className='text-lime-200' to="/MyToy">My Toys</NavLink> </li>}
         <li><NavLink className='text-lime-200' to="/Blog">Blog</NavLink> </li>
          </ul>
       
        <div className="hidden md:block ">
        {user ? <button onClick={handleLogOut} className="nav-btn md:m-2  hover:bg-lime-600 hover:border hover:border-blue-900  hover:text-black duration-300">Log Out</button>:<NavLink to="/login" className="nav-btn md:mx-4 w-[300px] hover:bg-lime-600 hover:border hover:border-blue-900  hover:text-black duration-300 ">Login</NavLink> }
          </div>
        </div>
        <div>     
        </div>
        <div className=" navbar-end  ">
          <div className="hidden md:block">
          {user && <img className='rounded-full w-[40px] md:m-2' src={user.photoURL}  /> }
        </div>
        
        </div>
      </div>
    );
};

export default NavBarMain;