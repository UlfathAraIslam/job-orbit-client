import React, { use } from 'react';
import signinLottie from '../../assets/lotties/signin.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../context/AuthContext';
import SocialLogin from '../Home/Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';
const Signin = () => {

    const {signInUser} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    console.log('location in signIn page',location);

    const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email,password)
    .then(result => {
        console.log(result.user);
        navigate(from);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });

  };

    return (
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie style={{width: '200px'}} animationData={signinLottie} loop={true}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Signin now!</h1>
        <form onSubmit={handleSignin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input 
          name='email'
          type="email" 
          className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input 
          name='password'
          type="password" 
          className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">signin</button>
        </fieldset>
        </form>
        <SocialLogin from={from}/>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signin;