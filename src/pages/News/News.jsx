import { Link } from "react-router-dom";
import { Navbar } from "../../layouts/main";

const News = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-main mb-8">
        Coming Soon!
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        We&rsquo;re currently working hard to bring this page to life.
      </p>
      <Link to="/">
          <button className="rounded-lg bg-main py-3 px-6 font-bold uppercase text-white transition duration-300 hover:scale-90 active:scale-100">
            Go back to Home
          </button>
        </Link>
    </div>
  )
}

export default News;
