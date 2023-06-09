// import Logo from "../../assets/logo.svg";
import NewLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    const userId = localStorage.getItem('userId');
    return (
        <>
        <div className="bg-main flex flex-col md:flex-row px-10 md:px-0 justify-around py-10 md:py-20 mt-10 md:mt-0">
            <div className="flex gap-5 items-center text-center">
                <img src={NewLogo} alt="logo" className="h-[48px] sm:h-[200px] w-auto" />
                <span className=" font-mont text-[40px] md:text-[73px] font-bold text-white"> Laumga <br /> MembApp</span>
            </div>
            <div className="font-mont text-white">
                <h1 className="text-[30px] font-man">Quick Links</h1>
                <ul className="text-[15px] md:text-[20px]">
                    <Link to="/"><li>Home</li></Link>
                    {userId && <Link to="/dashboard"><li>Dashboard</li></Link>}
                    <Link to="/news"><li>News</li></Link>
                </ul>
            </div>
            {!userId &&
            <div className="font-mont text-white">
                <h1 className="text-[30px] font-man">Become a Member</h1>
                <ul className="text-[15px] md:text-[20px]">
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