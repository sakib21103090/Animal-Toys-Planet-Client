import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import {  useLocation, useNavigate } from 'react-router-dom';
import app from '../../Firebase/firebase.config';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const SignInMethod = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const from =location.state?.from?.pathname || '/';

    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();
  


    const handelGoogle=()=>{

        signInWithPopup(auth,provider)
        .then(result=>{
          const user=result.user;
          Swal.fire('Hey', 'Login successful', 'success');
           navigate(from,{replace :true});
          
        })
        .catch(error=>{
          console.log(error.message)
        })
      }
  


    return (
        <div className='mb-4'>  
               <button onClick={handelGoogle} className="btn gap-2 bg-amber-300 text-green-950 w-full mb-4"  ><FaGoogle></FaGoogle>Google</button>
                
   </div>
    );
};

export default SignInMethod;