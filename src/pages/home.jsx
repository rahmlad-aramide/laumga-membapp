import Navbar from "../layouts/main/navbar";
import HeroImg from "../assets/hero-image.png";

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
      <main className="font-man overflow-hidden bg-hero-image h-[800px]  bg-black bg-opacity-60 bg-no-repeat bg-cover flex flex-col gap-6 justify-center items-center px-4 text-white ">
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

        <button className="font-kanit h-[56px] px-8 rounded bg-main font-medium font-2xl">
          Join now
        </button>
      </main>
    </>
  );
}
