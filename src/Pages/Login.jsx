import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"

const Login = () => {
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    navigate("/profile/name");
  };

  return (
    <div className="min-h-screen flex flex-col gap-y-12 items-center justify-center bg-pink-100">
      <img src={logo} alt="" className="w-[100px]" />
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
              placeholder="Enter your email"
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
              placeholder="Enter your password"
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D12E25] cursor-pointer text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          onClick={() => navigate("/profile/name")}
          className="w-full cursor-pointer border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-200 transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            className="w-5 h-5"
          />
          <span>Login with Google</span>
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="w-full cursor-pointer bg-[#DE554D] text-white py-2 rounded-md mt-4 hover:bg-[#D12E25] transition"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;
