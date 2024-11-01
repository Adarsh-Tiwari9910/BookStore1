import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>  {
    const userInfo={
      name:data.name,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4005/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successfully")
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
      document.getElementById("my_modal_3").showModal()
    }).catch((err)=>{
      if(err.response){
        console.log(err.response.data)
        toast.error(`Error: ${err.response.data.message}`);
      }
       
    })
  };

  return (
     
    <div className="flex h-screen items-center justify-center">
      <Toaster/>
      <div className="modal-box border-[2px] shadow-md p-5 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button className="text-xl btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <Link to="/">X</Link>
          </button>

          <h3 className="font-bold text-lg">SignUp</h3>

          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            <p className="text-red-600">{errors.name && <span>**name field is required</span>}</p>
          </div>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <p className="text-red-600">{errors.email && <span>**email field is required</span>}</p>
          </div>

          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <p className="text-red-600">{errors.password && <span>**password field is required</span>}</p>
          </div>

          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              SignUp
            </button>
            <p>
              Have an Account?{" "}
              <span
                className="underline text-blue-500 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
      <Login />
    </div>
  );
};

export default Signup;
