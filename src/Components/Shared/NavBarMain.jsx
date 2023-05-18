import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const NavBarMain = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }
   
    return (
        <div className="navbar bg-slate-950 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-success lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold bg-lime-100 rounded-box w-52">
            <li><Link className='text-black-300' to="/">Home</Link> </li>
            <li><Link className='text-black-300' to="/AllToys">All Toys</Link> </li>
            <li><Link className='text-black-300' to="/AddAToy">Add A Toy</Link> </li>
            <li><Link className='text-black-300' to="/Blog">Blog</Link> </li>
              
            
            </ul>
          </div>
           
          <p className="btn btn-ghost font-bold normal-case text-xl "> <span className="text-green-600">Animal-</span><span className="text-rose-600">Toys-</span ><span className="text-amber-400">
          Planet</span></p>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link className='text-lime-200' to="/">Home</Link> </li>
            <li><Link className='text-lime-200' to="/AllToys">All Toys</Link> </li>
            <li><Link className='text-lime-200' to="/AddAToy">Add A Toy</Link> </li>
            <li><Link className='text-lime-200' to="/Blog">Blog</Link> </li>
          </ul>
        </div>
        <div>     
        </div>
        <div className="navbar-end">
          {user && <img className='rounded-full w-[50px] m-4' src={user.photoURL} alt={user.displayName} /> }
           {user ? <button onClick={handleLogOut} className="btn btn-outline bg-lime-100 m-4">Log Out</button>:<Link to="/login" className="btn btn-success bg-lime-100 mx-4">Login</Link> }
        </div>
      </div>
    );
};

export default NavBarMain;