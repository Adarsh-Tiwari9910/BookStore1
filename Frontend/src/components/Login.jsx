import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';
const  Login = ({ onLogin }) => {
  const [authUser,setAuthUser]  = useAuth();
  const navigate = useNavigate(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const userInfo={
     
      email:data.email,
      password:data.password
    }
    await axios.post("https://bookstore1-backend-h2k4.onrender.com/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Login Successfully")
        localStorage.setItem("Users",JSON.stringify(res.data.user))
        setAuthUser(res.data.user);
        navigate('/course')
        window.location.reload();
      }
       
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("Error: ",err.response.data.message)
      }
       
    })
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button className="text-xl btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
            X
          </button>

          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Enter Your Password" // Updated placeholder
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <p className="text-red-600">{errors.password && <span>**password field is required</span>}</p> 
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <span className="underline text-blue-500 cursor-pointer">
                  <Link to="/signup">SignUp</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
