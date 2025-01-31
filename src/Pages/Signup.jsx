import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"



const Signup = () => {
  const navigate =useNavigate();


const signupSchema = yup.object().shape({
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  phone: yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("Phone number is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    navigate("/profile/name");
  };

  return (
    <div className="min-h-screen flex flex-col gap-y-4 items-center justify-center bg-pink-100">
      <img src={logo} alt="" className="w-[100px]" />
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/3 max-sm:w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
          
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Enter your full name"
            />
            <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              {...register("phone")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Enter your phone number"
            />
            <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Enter your email"
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Enter your password"
            />
            <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Confirm your password"
            />
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword?.message}</p>
          </div>

          {/* Submit Button */}
          <button  type="submit" className="w-full bg-[#D12E25] cursor-pointer text-white py-2 rounded-md hover:bg-red-700">
            Sign Up
          </button>
        </form>

        {/* Google Signup Button */}
        <div className="mt-4 text-center">
          <button onClick={()=>navigate("/profile/name")} className="w-full border border-gray-300 py-2 cursor-pointer rounded-md flex items-center justify-center gap-2 hover:bg-gray-200">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Icon" className="w-5 h-5" />
            <span>Sign Up with Google</span>
          </button>
        </div>

        {/* Already have an account? */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
