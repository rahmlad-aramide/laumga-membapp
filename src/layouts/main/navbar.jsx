import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <div className="fixed top-0 left-0 w-full bg-white shadow h-20 flex justify-center font-kanit">
        <div className="max-w-[1200px] w-full h-full flex items-center justify-between px-4">
          {/* brand - logo and name */}
          <Link to="/">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 font-mont cursor-pointer">
              <img src={Logo} alt="" className="h-[48px] sm:h-auto w-auto" />
              <span className="font-semibold md:font-bold text-3xl sm:text-3xl md:text-4xl lg:text-[40px]">
                MembApp
              </span>
            </div>
          </Link>
          {/* nav links */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-xl font-light">
              <li>
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/news">News</NavLink>
              </li>
            </ul>
          </nav>
          {/* cta button */}
          <div className="flex gap-5">
            <Link to="/signup">
              <button className="hidden md:block px-8 h-12 bg-main text-white font-medium text-lg rounded transition duration-200 hover:scale-90 active:scale-100">
                Signup
              </button>
            </Link>
            <Link to="/register">
              <button className="hidden md:block px-8 h-12 bg-main text-white font-medium text-lg rounded transition duration-200 hover:scale-90 active:scale-100">
                Join now
              </button>
            </Link>
            <Link to="/login">
              <button className="hidden md:block px-8 h-12 border-2 border-main text-main font-medium text-lg rounded transition duration-200 hover:scale-90 active:scale-100">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`absolute top-0 left-0 block h-screen w-[70%] bg-white md:hidden ${!isNavOpen && `-translate-x-full`
            } transition duration-300`}
        >
          <button
            className="ml-4 mt-1 text-4xl font-medium active:scale-90"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            &times;
          </button>
          <div className="pt-3">
            <div className="mb-3 text-center font-lancelot text-3xl md:text-5xl">
              <Link to="/">MembApp</Link>
            </div>
            <div className="mt-3 ml-4 flex cursor-pointer flex-row items-center justify-start transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.9375rem] md:flex-col">
              <div className="text-lg md:text-sm">Favorites</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
