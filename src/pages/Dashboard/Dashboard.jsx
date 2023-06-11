import { Navbar } from '../../layouts/main';
import President from "../../assets/images/president.png";
// import review from "../../assets/images/review-image.jpg";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const verified = localStorage.getItem("verified")
  const email = localStorage.getItem("userEmail")
  const surname = localStorage.getItem("surname")
  const lastName = localStorage.getItem("lastName")
  const middleName = localStorage.getItem("middleName")
  const matricNumber = localStorage.getItem("matricNumber")
  const occupation = localStorage.getItem("occupation")
  const about = localStorage.getItem("about")
  const location = localStorage.getItem("location")
  const recentPicture = localStorage.getItem("recentPicture")
  const oldPicture = localStorage.getItem("oldPicture")
  const number1 = localStorage.getItem("number1")
  const number2 = localStorage.getItem("number2")

  return (
    <section>
      <Navbar />
      {verified ?
        <div className="md:grid md:grid-cols-12 bg-hero-image min-h-screen bg-center bg-black/50 bg-blend-overlay font-mont">
          <div className='md:col-span-3 h-full bg-[#f4f4f4] pt-28 pb-5 md:pb-0 md:mr-10'>
            <div className='flex justify-around gap-3 md:block'>
              <div className='w-1/2 md:w-full px-2 flex flex-col ml-5 md:ml-0 md:mb-10'>
                <div className='mx-auto mb-4'>
                  <img src={recentPicture ? recentPicture : President} alt="recent passport" className='rounded-full' />
                </div>
                <div className='mx-auto text-center'>Recent Passport</div>
              </div>
              <div className='w-1/2 md:w-full px-2 flex flex-col mr-3 md:mr-0'>
                <div className='mx-auto mb-4'>
                  <img src={oldPicture ? oldPicture : President} alt="old passport" className='rounded-full max-w-[100px] md:max-w-[200px]' />
                </div>
                <div className='mx-auto text-center'>Old Passport</div>
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
                  <div>{!surname? <p>Not set</p> : (`${surname} ${middleName ? middleName : ""} ${lastName}`)}</div>
                </div>
                <div>
                  <div className='font-normal sm:font-medium text-2xl'>Matric No</div>
                  <div>{matricNumber ? matricNumber : <p>Not set</p>}</div>
                </div>
                <div>
                  <div className='font-normal sm:font-medium text-2xl'>Email</div>
                  <div className="break-words">{email ? email : <p>Not set</p>}</div>
                </div>
                <div>
                  <div className='font-normal sm:font-medium text-2xl'>Occupation</div>
                  <div>{occupation ? occupation : <p>Not set, update details to set it</p>}</div>
                </div>
                <div>
                  <div className='font-normal sm:font-medium text-2xl'>Short Bio</div>
                  <div>{about ? about : <p>Not set, update details to set it</p>}</div>
                </div>
                <div>
                  <div className='font-normal sm:font-medium text-2xl'>Location</div>
                  <div>{location ? location : <p>Not set, update details to set it</p>}</div>
                </div>
                <div>
                  <div className='font-normal sm:font-medium text-2xl'>Phone Number</div>
                  <div>{number1 ? number1 : <p>Not set, update details to set it</p>}</div>
                </div>
                <div>
                  <div className='font-normal sm:font-medium text-2xl'>Alternative Number</div>
                  <div>{number2 ? number2 : <p>Not set, update details to set it</p>}</div>
                </div>
              </div>
              <div className='mt-12 mb-12 md:mb-0 flex justify-end items-end'>
                <Link to="/dashboard/details">
                  <button className='bg-main text-white rounded-lg border border-main hover:scale-90 active:scale-100 transition duration-200 py-2 px-6 md:px-10'>
                    Update Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div> :
        <div className="bg-hero-image bg-center bg-black/50 bg-blend-overlay bg-cover min-h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center bg-white py-8 my-12 md:my-0 mt-28 sm:mt-20 rounded-lg w-[90%] md:w-[50%]">
          <div>
            <div className="w-[280px] sm:w-[300px] h-[200px] rounded bg-review-image bg-right bg-cover max-w-[400px]">
              {/* <img src={review} alt="Under Review"  /> */}
            </div>
          </div>
          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold text-main mb-8">
            Under Review!
          </h1>
          <p className="text-lg mb-12 px-4 text-center">
            Your account creation is currently under review. You&apos;ll be able to see your dashboard once approved! <br /> Kindly check back later, but while you wait, you can have a tour around the platform.
          </p>
          <Link to="/">
            <button className="rounded-lg bg-main py-3 px-6 font-bold uppercase text-white transition duration-300 hover:scale-90 active:scale-100">
              Go back to Home
            </button>
          </Link>
          </div>
        </div>
      }
    </section>
  )
}
export default Dashboard;