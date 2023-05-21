import React from "react";
import Navbar from "../layouts/main/navbar";
import LoginForm from "../layouts/auth-forms/login-form";

export default function Login() {
  return (
    <>
    {/* NAVIGATION BAR */}
      <Navbar />
      {/* LOGIN PAGE BACKGROUND IMAGE */}
      <div className="bg-login-image bg-cover bg-no-repeat bg-center h-[120vh]">
        <h1 className=" pt-40 text-white text-[70px] font-bold font-mont max-w-max mx-auto sm:ml-20">Login</h1>
        {/* LOGIN FORM COMPONENT */}
        <div className="max-w-[596px] bg-white bg-opacity-30 p-10 rounded-[24px] mx-10 sm:ml-auto sm:mr-20">
            <p className="text-white font-mont text-[40px] font-bold">Login</p>
            <LoginForm />
        </div>
      </div>
      
    </>
  );
}