import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const navigate = useNavigate()
    const {createUser,setUser, updatedUser} = use(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault()
        const name = event.target.name?.value
        const photoURL = event.target.url?.value
        const email = event.target.email?.value
        const password = event.target.password?.value

        createUser(email,password)
        .then(result => {
            const user = result.user
            // console.log(user)
            updatedUser({displayName: name , photoURL: photoURL})
            .then(()=>{
              setUser({...user,displayName: name , photoURL: photoURL})
              navigate("/")
            })
            .catch(error => {
              console.log(error)
            })
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
        })


    }
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="font-semibold text-[30px] text-center py-5 border-b-1 border-gray-300">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
            />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="url"
              className="input"
              placeholder="Enter Your Photo URL"
            />
            {/* Email */}
            <label className="label">Email address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Your Email Address"
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter Your Password"
            />
            <div className="flex gap-2 mt-3">
              <input type="checkbox" className="checkbox w-5 h-5" />
              <p className="text-accent text-[13px]">Accept Term & Conditions</p>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>

            <p className="mt-3.5 font-semibold text-accent">
              Allready Have An Account ?{" "}
              <Link className="text-secondary ml-2" to="/auth/login">
                Log In
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
