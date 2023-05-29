import React from "react";
import Navbar from "../layouts/main/navbar";
import RegisterForm from "../layouts/auth-forms/register-form";

export default function Register() {
  return (
    <>
    	{/* NAVIGATION BAR */}
        <Navbar />
		{/* REGISTER FORM COMPONENT */}
        <RegisterForm />
    </>
  );
}