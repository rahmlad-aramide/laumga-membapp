import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow h-20 flex justify-center font-kanit">
        <div className="max-w-[1200px] w-full h-full flex items-center justify-between px-4">
          {/* brand - logo and name */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 font-mont">
            <img src={Logo} alt="" className="h-[48px] sm:h-auto w-auto"/>
            <span className="font-semibold md:font-bold text-3xl sm:text-3xl md:text-4xl lg:text-[50px]">LAUMGA</span>
          </div>
          {/* nav links */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-xl font-light">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </nav>
          {/* cta button */}
          <Link to="/register" >
            <button className="hidden md:block px-8 h-14 bg-main text-white font-medium text-2xl rounded">Join now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
