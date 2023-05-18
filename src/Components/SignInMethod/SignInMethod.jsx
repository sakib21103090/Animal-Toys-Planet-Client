import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import app from '../../Firebase/firebase.config';

const SignInMethod = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const from =location.state?.from?.pathname || '/';

    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();


    const handelGoogleLogin=()=>{

        signInWithPopup(auth,provider)
        .then(result=>{
          const user=result.user;
           navigate(from,{replace :true});
          
        })
        .catch(error=>{
          console.log(error.message)
        })
      }
    const handelGitHubLogin=()=>{
        signInWithPopup(auth,GitProvider)
        .then(result=>{
          const user=result.user;
           navigate(from,{replace :true});
          
        })
        .catch(error=>{
          console.log(error.message)
        })
      }


    return (
        <div className='mb-4'>  
               <button onClick={handelGoogleLogin} class="btn gap-2 bg-amber-300 text-green-950 w-full mb-4"  ><FaGoogle></FaGoogle>Google</button>
               <button onClick={handelGitHubLogin} class="btn btn-success w-full gap-2"  ><FaGithub></FaGithub>GitHub</button>   
   </div>
    );
};

export default SignInMethod;