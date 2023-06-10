// import Logo from "../../assets/logo.svg";
import NewLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    const userId = localStorage.getItem('userId');
    return (
        <>
        <div className="bg-main flex flex-col lg:flex-row px-10 justify-around py-10 md:py-20 mt-10 md:mt-0">
            <div className="flex gap-5 items-center text-center mb-6">
                <img src={NewLogo} alt="logo" className="h-[48px] sm:h-[200px] w-auto" />
                <span className=" font-mont text-xl sm:text-[50px] md:text-[70px] leading-normal text-left font-bold text-white"> Laumga <br /> MembApp</span>
            </div>
            <div className="font-mont text-white">
                <h1 className="text-xl md:text-3xl font-man">Quick Links</h1>
                <ul className="md:text-xl">
                    <Link to="/"><li>Home</li></Link>
                    {userId && <Link to="/dashboard"><li>Dashboard</li></Link>}
                    <Link to="/news"><li>News</li></Link>
                </ul>
            </div>
            {!userId &&
            <div className="font-mont text-white">
                <h1 className="text-xl md:text-3xl font-man">Become a Member</h1>
                <ul className="md:text-xl">
                    <Link to="/signup">
                        <li>Join Us</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                </ul>
            </div>
            }
        </div>
        </>
    );
}