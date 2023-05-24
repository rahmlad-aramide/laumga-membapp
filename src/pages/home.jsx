import Navbar from "../layouts/main/navbar";
import { Link } from "react-router-dom";

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
  return (
    <>
      <main
        className="font-man overflow-hidden h-[800px] bg-hero-image  bg-black bg-opacity-60 bg-no-repeat bg-cover flex flex-col gap-6 justify-center items-center px-4 text-white "
      >
        {/* ///////////////// */}
        <header className=" max-w-[802px] font-semibold text-3xl sm:text-4xl md:text-5xl text-center leading-tight">
          Unlocking Opportunities, <br /> Embracing Diversity: Muslim <br />{" "}
          Graduates Thrive
        </header>

        <p className="text-center max-w-[611px] text-lg sm:text-xl ">
          Where potential meets opportunity, we are dedicated to empowering
          Muslim graduates to embrace their journeys and unlock their full
          potential. With a supportive community, valuable resources, and a
          commitment to excellence,
        </p>

        <Link to="/register">
          <button className="font-kanit h-[56px] px-8 rounded bg-main font-medium font-2xl">
            Join now
          </button>
        </Link>
      </main>
    </>
  );
}