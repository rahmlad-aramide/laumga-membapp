import { Link, NavLink } from "react-router-dom";
// import Logo from "../../assets/logo.svg";
import MobileNavbar from "./mobileNav";
import NewLogo from "../../assets/images/logo.png";
import { Logout } from "./mobileNav";

export default function Navbar() {
  const userId = localStorage.getItem('userId');

  return (
    <header>
      <div className="fixed top-0 left-0 w-full bg-white shadow h-20 flex justify-center font-kanit z-20">
        <div className="max-w-[1200px] w-full h-full flex items-center justify-between px-4">
          {/* brand - logo and name */}
          <Link to="/">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 font-mont cursor-pointer">
              <img src={NewLogo} alt="" className="h-[48px] w-auto" />
              <span className="font-semibold md:font-bold text-xl sm:text-2xl">
                LAUMGA <br /> MembApp
              </span>
            </div>
          </Link>
          {/* nav links */}
          <nav className="md:hidden">
            <MobileNavbar />
          </nav>
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-xl font-light">
              <li>
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/members">Members</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "text-main active:opacity-50 hover:underline" : "hover:underline"} to="/news">News</NavLink>
              </li>
            </ul>
          </nav>
          {/* cta button */}
          <div className="flex gap-5">
            <Link to="/signup" className={`${userId ? 'hidden' : 'block'}`}>
              <button className="hidden md:block px-8 h-12 bg-main text-white font-medium text-lg rounded transition duration-200 hover:scale-90 active:scale-100">
                Signup
              </button>
            </Link>
            <Link to="/login" className={`${userId ? 'hidden' : 'block' }`}>
              <button className="hidden md:block px-8 h-12 border-2 border-main text-main font-medium text-lg rounded transition duration-200 hover:scale-90 active:scale-100">
                Login
              </button>
            </Link>
            <div className={`${userId ? 'block' : 'hidden' }`}>
              <button onClick={Logout} className="hidden md:block px-8 h-12 border-2 border-main text-main font-medium text-lg rounded transition duration-200 hover:scale-90 active:scale-100">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
