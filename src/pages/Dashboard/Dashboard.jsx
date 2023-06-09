import { Navbar } from '../../layouts/main';
import President from "../../assets/images/president.png";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const email = localStorage.getItem("userEmail")
	const surname = localStorage.getItem("surname")
	const lastName = localStorage.getItem("lastName")
	const matricNumber = localStorage.getItem("matricNumber")
	const occupation = localStorage.getItem("occupation")
	const recentPicture = localStorage.getItem("recentPicture")

  return (
    <section>
      <Navbar />
      <div className="md:grid md:grid-cols-12 bg-hero-image min-h-screen bg-center bg-black/50 bg-blend-overlay font-mont">
        <div className='md:col-span-3 h-full bg-[#f4f4f4] pt-28 pb-5 md:pb-0 md:mr-10'>
          <div className='flex justify-around gap-3 md:block'>
            <div className='flex flex-col ml-5 md:ml-0 md:mb-10'>
              <div className='mx-auto mb-4'>
                <img src={recentPicture? recentPicture: President} alt="recent passport" className='rounded-full' />
              </div>
              <div className='mx-auto'>Recent Passport</div>
            </div>
            <div className='flex flex-col mr-3 md:mr-0'>
              <div className='mx-auto mb-4'>
                <img src={President} alt="old passport" className='rounded-full' />
              </div>
              <div className='mx-auto'>Old Passport</div>
            </div>
          </div>
        </div>
        <div className='col-span-9'>
          <div className="w-[90%] mx-auto mt-[50px] md:mt-[150px] md:px-7 py-6 md:py-10">
            <div className="text-white text-center font-mont font-medium text-4xl">
              Personal Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white rounded-2xl md:w-[90%] mx-auto mt-8 shadow-lg px-5 md:px-7 py-6 md:py-10">
              <div>
                <div className='font-normal sm:font-medium text-2xl'>Name</div>
                <div>{surname ? surname + ' ' + lastName : <p>Not set</p>}</div>
              </div>
              <div>
                <div className='font-normal sm:font-medium text-2xl'>Matric No</div>
                <div>{matricNumber ? matricNumber : <p>Not set</p>}</div>
              </div>
              <div>
                <div className='font-normal sm:font-medium text-2xl'>Email</div>
                <div>{email ? email : <p>Not set</p>}</div>
              </div>
              <div>
                <div className='font-normal sm:font-medium text-2xl'>Occupation</div>
                <div>{occupation ? occupation : <p>Not set</p>}</div>
              </div>
            </div>
            <div className='mt-12 flex justify-end items-end'>
              <Link to="/dashboard/details">
              <button className='bg-main text-white rounded-lg border border-main hover:scale-90 active:scale-100 transition duration-200 py-2 px-6 md:px-10'>
                Update Details
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dashboard;