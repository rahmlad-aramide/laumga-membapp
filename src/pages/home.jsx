/* eslint-disable react/no-unescaped-entities */
import Navbar from "../layouts/main/navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
// import HeroImage from "../assets/images/hero-image.jpg";
import MissionImage from "../assets/images/mission-img.png";
import President from "../assets/images/president.png";
import Footer from "../layouts/main/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mb-20"></div>
      <Main />
    </>
  );
}

function Main() {
  const userId = localStorage.getItem('userId');
  return (
    <>
      <main
        className="font-man overflow-hidden h-[800px] bg-hero-image bg-black bg-opacity-60 bg-no-repeat bg-cover bg-center bg-blend-overlay flex flex-col gap-6 justify-center items-center px-4 text-white "
      >
        {/* ***** HERO SECTION ***** */}
        <header className="max-w-[802px] font-semibold text-3xl sm:text-4xl md:text-5xl text-center leading-normal">
          Unlocking Opportunities, <br /> Embracing Diversity: Muslim <br />{" "}
          Graduates Thrive
        </header>

        <p className="text-center max-w-[611px] text-lg sm:text-xl ">
          Where potential meets opportunity, we are dedicated to empowering
          Muslim graduates to embrace their journeys and unlock their full
          potential. With a supportive community, valuable resources, and a
          commitment to excellence,
        </p>
        {
          !userId?
          <Link to="/signup">
          <button className="font-kanit h-12 px-8 rounded bg-main font-medium text-xl transition duration-200 hover:scale-90 active:scale-100">
            Join now
          </button>
        </Link>:
          <Link to="/dashboard">
          <button className="font-kanit h-12 px-8 rounded bg-main font-medium text-xl transition duration-200 hover:scale-90 active:scale-100">
            Go to Dashboard
          </button>
        </Link>
        }
      </main>
      {/* ***** WELCOME SECTION ***** */}
      <section className="flex flex-col md:flex-row mx-10 md:mx-0 items-center justify-around mt-20 md:mt-28 mb-40">
        <div className="hidden md:flex gap-5 items-center text-center">
          <img src={Logo} alt="logo" className="h-[48px] sm:h-auto w-auto" />
          <span className=" font-mont text-[40px] md:text-[73px] font-bold text-main">LAUMGA <br />MembApp</span>
        </div>
        <div className="font-man max-w-[600px] text-center md:text-left">
          <h1 className="text-[30px] md:text-[42px] font-bold text-main">Welcome To MembApp</h1>
          <p className="text-[14px] md:text-[18px]">
            All praise and adorations are due to Allah, the Lord of all 
            creatures. We send our salutation upon the noble soul of our 
            Prophet Muhammad (SAW),his household, his companions and the generality 
            of the Muslims till the Day of Judgment (Amin).
            It is with great pleasure that I welcome you to the official website of 
            Ladoke Akintola University of Technology (LAUTECH) Muslim Graduates' 
            Association.
          </p>
        </div>
      </section>
      {/* ***** MISSION SECTION ***** */}
      <section className="flex flex-col md:flex-row items-center bg-main p-5 justify-around pb-20">
        <div className="max-w-[800px] font-man text-white mx-5 md:mx-0">
          <h1 className="text-[30px] md:text-[42px] font-bold">Mission</h1>
          <p className="text-[14px] md:text-[18px] ">
            Our mission is to create a strong and vibrant community of 
            Muslim graduates by providing them with a platform to connect, 
            learn, and grow. We strive to foster a supportive environment 
            where members can share experiences, seek advice, and collaborate 
            with like-minded individuals. Through our programs, events, 
            and partnerships, we aim to equip Muslim graduates with the skills, 
            knowledge, and confidence they need to thrive in their chosen fields.
          </p>
        </div>
        <div className="mt-20 md:mt-[-80px] shadow-2xl mx-5 md:mx-0">
          <img src={MissionImage} alt="our-mission" />
        </div>
      </section>
      {/* ***** PRESIDENT SECTION ***** */}
      <section className="flex flex-col md:flex-row md:gap-10 items-center mt-10 md:mt-20 text-center md:text-left">
        <div className="border-8 border-main mb-8 mx-8">
          <img src={President} alt="President" />
        </div>
        <div className="text-main">
          <p className="font-bold text-[35px] md:text-[58px] font-man">Dr. Abass Alade</p>
          <p className="font-kanit text-[24px] md:text-[40px] font-medium">President</p>
        </div>
      </section>
      {/* ***** FOOTER SECTION ***** */}
      <Footer />
    </>
  );
}
