import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <div className="bg-main flex flex-col md:flex-row px-10 md:px-0 justify-around py-10 md:py-20 mt-10 md:mt-0">
            <div className="flex gap-5 items-center text-center">
                <img src={Logo} alt="logo" className="h-[48px] sm:h-auto w-auto" />
                <span className=" font-mont text-[40px] md:text-[73px] font-bold text-white">LAUMGA</span>
            </div>
            <div className="font-mont text-white">
                <h1 className="text-[30px] md:text-[40px] font-man">Quick Links</h1>
                <ul className="text-[15px] md:text-[20px]">
                    <Link to="/"><li>Home</li></Link>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="font-mont text-white">
                <h1 className="text-[30px] md:text-[40px] font-man">Become a Member</h1>
                <ul className="text-[15px] md:text-[20px]">
                    <Link to="/register">
                        <li>Join Us</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    );
}