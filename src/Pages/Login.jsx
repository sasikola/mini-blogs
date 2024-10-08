import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";
import Button from "../Components/Button";
import Divider from "../Components/Divider";
import Inputbox from "../Components/Inputbox";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/authSlice";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    phone: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    // const [name, value] = e.target; change to one below
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(userLogin(data)).then((res) => {
        if (!res.error) {
          Swal.fire({
            title: "Success",
            text: "User logged in successfully",
          });
          navigate("/");
        } else {
          Swal.fire({
            title: "Error",
            text: res.payload,
          });
          console.log(res)
        }
      });
    } catch (error) {
      Swal.fire({ title: "Error", text: error });
    }
  };

  return (
    <div className="flex w-full  h-[100vh]">
      <div className="hidden md:flex flex-col gap-y-4 w-1/3 min-h-screen bg-black items-center justify-center">
        <Logo type="sigin" />
        <span className="text-xl font-semibold text-white">Welcome, back!</span>
      </div>

      <div className="flex w-full md:w-2/3 h-full bg-white dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black via-[#071b3e] to-black items-center px-10 md:px-20 lg:px-40">
        <div className="h-full flex flex-col items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
          <div className="block mb-10 md:hidden">
            <Logo />
          </div>
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                Sign in to your account
              </h2>
            </div>

            <Button
              label="Sign in with Google"
              icon={<FcGoogle className="" />}
              styles="w-full flex flex-row-reverse gap-4 bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full border border-gray-300"
            />

            <Divider label="or sign in with email" />

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col rounded-md shadow-sm -space-y-px gap-5">
                <Inputbox
                  label="Mobile Number"
                  name="phone"
                  type="phone"
                  isRequired={true}
                  placeholder="987653210"
                  value={data?.phone}
                  onChange={handleChange}
                />

                <Inputbox
                  label="Password"
                  name="password"
                  type="password"
                  isRequired={true}
                  placeholder="Password"
                  value={data?.password}
                  onChange={handleChange}
                />
              </div>

              <Button
                label=" Sign In"
                type="submit"
                styles="group relative w-full flex justify-center py-2.5 2xl:py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-black dark:bg-rose-800 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 mt-8"
              />
            </form>

            <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
              <p>
                Dont't have an account?{" "}
                <Link to="/register" className="text-rose-800 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
