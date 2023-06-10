import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import { Link, NavLink } from "react-router-dom";
import CloseMenu from "../../assets/closeMobileNav.svg";

export const Logout  = async (event) => {
    console.log("Inside Logout")
    event.preventDefault();
    localStorage.removeItem("userId")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("firstName")
    localStorage.removeItem("lastName")
    console.log("Removed all items")

    window.location.href = '/';
}

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const userId = localStorage.getItem('userId');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let nav
    nav = <ul className={`navbar-menu ${isOpen ? 'open' : ''} bg-white p-10 text-left text-[20px] min-w-[250px] h-[100vh] absolute top-[3.5rem] right-[-20px]`}>
            <li className="mb-3">
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/">Home</NavLink>
            </li>
            <li className="mb-3">
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="mb-3">
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/members">Members</NavLink>
            </li>
            <li className="mb-3">
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/news">News</NavLink>
            </li>
            <div className="flex flex-col gap-5 mt-10 text-center">
                <li className={`${userId ? 'hidden' : 'block'}`}>
                    <Link to="/signup">
                    <button className=" px-8 h-12 bg-main text-white font-medium text-lg rounded transition duration-200 hover:scale-90 active:scale-100">
                        Signup
                    </button>
                    </Link>
                </li>
                <li className={`${userId ? 'hidden' : 'block'}`}>
                    <Link to="/login">
                    <button className=" px-8 h-12 border-2 border-main text-main font-medium text-lg rounded transition duration-200 hover:scale-90 active:scale-100">
                        Login
                    </button>
                    </Link>
                </li>
                <li className={`${userId ? 'block' : 'hidden'}`}>
                    <button onClick={Logout} className=" px-8 h-12 border-2 border-main text-main font-medium text-lg rounded transition duration-200 hover:scale-90 active:scale-100">
                        Logout
                    </button>
                </li>
            </div>
        </ul>

    return (
        <nav className="navbar absolute right-5 top-5">
            <button className="" onClick={toggleMenu}>
                {isOpen ? <img src={CloseMenu} alt="hamburger menu" /> : <img src={Hamburger} alt="hamburger menu" />}
            </button>
            <div>
                {isOpen ? nav : ''}
            </div>
        </nav>
    );
}
