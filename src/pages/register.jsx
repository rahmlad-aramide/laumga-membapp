import React from "react";
import Navbar from "../layouts/main/navbar";
import RegisterForm from "../layouts/auth-forms/register-form";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
    {/* NAVIGATION BAR */}
        <Navbar />
        {/* LOGIN PAGE BACKGROUND IMAGE */}
        <div className="bg-hero-image bg-cover bg-no-repeat bg-center h-[120vh]">
        </div>
        {/* LOGIN FORM COMPONENT */}
        <div className="max-w-[596px] mt-[-650px] bg-black bg-opacity-30 p-10 rounded-[24px] mx-10 sm:ml-auto sm:mr-20">
            <p className="text-white font-mont text-[40px] font-bold max-w-max mx-auto">Sign Up</p>
            <RegisterForm />
            <p className="max-w-max mx-auto text-[20px] py-2 text-white font-mont">Already have an account? <Link to="/login" >Login</Link></p>
        </div>
      
    </>
  );
}