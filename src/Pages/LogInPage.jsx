import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LogInPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {userLogIn, setUser} = use(AuthContext);
    const [error , setError] = useState("")
    

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email?.value
    const password = form.password?.value

    userLogIn(email, password)
    .then(result => {
        const user = result.user
        // console.log(user)
        setUser(user)
        navigate(`${location.state ? location.state : "/"}`)
    })
    .catch(error =>{
        setError(error.message)
    })
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="font-semibold text-[35px] text-center py-5 border-b-1 border-gray-300">
          Login your account
        </h1>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Your Email Address"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter Your Password"
              required
            />
            {
                error ? <p className="text-red-500">Invalid Email or Password</p> : ""
            }
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>

            <p className="mt-3.5 font-semibold text-accent">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary ml-2" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
