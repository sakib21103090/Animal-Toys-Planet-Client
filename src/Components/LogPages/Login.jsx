import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import SignInMethod from '../SignInMethod/SignInMethod';

// import {  FaGithub, FaGoogle } from 'react-icons/fa';
// import PopUp from '../PopUp/PopUp';;

const Login = () => {
    const [error ,setError]=useState('');
    const{SignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
  
  
    const from =location.state?.from?.pathname || '/';
  
    const HandelLogin=event=>{
      event.preventDefault();
      const form =event.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password);
      setError('')
  
      
      SignIn(email,password)
      .then(result => {
      
          const LoggedUser = result.user;
          console.log(LoggedUser);
          form.reset();
          navigate(from,{replace :true});
         
        })
        .catch(error => {
          console.log(error);
          setError('wrong input please input valid data');
          
        });
    
    }
    return (
        <div className="hero min-h-screen bg-rose-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img className='w-[600px]  rounded-2xl' src={`https://i.ibb.co/5FgjVhq/download.png`} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-lime-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login Please</h1>
                        <form onSubmit={HandelLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder=" Enter email" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-amber-300 text-black" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Don't have an account<Link className='text-purple-600 font-bold' to="/SignUp">Sign Up</Link> </p>
                        <div>
                        <p className=' text-black  bg-orange-400 text-center rounded border fw-bold mt-2'> <small>{error}</small></p>
                        </div>
                        <div>
                            <SignInMethod></SignInMethod>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;