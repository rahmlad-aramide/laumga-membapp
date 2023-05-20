import React from "react";

export default function LoginForm() {
  return (
    <>
    {/* LOGIN FORM */}
        <form action="" className=" flex flex-col px-10 py-5">
            {/* MATRIC NUMBER INPUT */}
            <label htmlFor="email" className="text-white text-[25px] font-medium">Matric Number</label>
            <input type="text" className="text-white text-[16px] max-w-[491px] rounded-lg p-3 outline-none bg-white bg-opacity-30"/>
            {/* PASSWORD INPUT */}
            <label htmlFor="password" className="text-white text-[25px] font-medium">Password</label>
            <input type="password" className="text-white text-[16px] max-w-[491px] rounded-lg p-3 outline-none bg-white bg-opacity-30"/>
            <p className=" ml-auto mr-0 text-[20px] py-2 text-white font-mont">Forgot password?</p>
            {/* LOGIN BUTTON */}
            <button className="mx-auto p-5 bg-[#CCB746] min-w-[250px] rounded-2xl text-[25px] font-mont font-bold">Login</button>
        </form>
    </>
  );
}