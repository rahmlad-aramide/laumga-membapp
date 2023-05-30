import {Navbar, Footer} from '../../layouts/main';
import President from "../../assets/images/president.png";

const Dashboard = () => {
  return (
    <section>
      <Navbar />
      <div className="md:grid md:grid-cols-12 bg-hero-image min-h-screen bg-center bg-black/50 bg-blend-overlay font-mont">
        <div className='md:col-span-3 h-full bg-[#f4f4f4] pt-28 pb-5 md:pb-0 md:mr-10'>
          <div className='flex justify-around md:block'>
            <div className='flex flex-col ml-5 md:ml-0 md:mb-10'>
              <div className='mx-auto mb-4'>
                <img src={President} alt="recent passport" className='rounded-full' />
              </div>
              <div className='mx-auto'>Recent Passport</div>
            </div>
            <div className='flex flex-col mr-3 md:mr-0'>
              <div className='mx-auto mb-4 scale-90'>
                <img src={President} alt="old passport" className='rounded-full' />
              </div>
              <div className='mx-auto'>Old Passport</div>
            </div>
          </div>
        </div>
        <div className='col-span-9'>
        <div className="w-[90%] mx-auto mt-[50px] md:mt-[150px] md:px-7 md:px-14 py-6 md:py-10">
          <div className="text-white text-center font-mont font-medium text-4xl">
            Personal Details
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white rounded-2xl md:w-[90%] mx-auto mt-8 shadow-lg px-5 md:px-7 md:px-14 py-6 md:py-10">
            <div>
              <div className='font-normal sm:font-medium text-2xl'>Name</div>
              <div>Abdrahman Oladimeji</div>
            </div>
            <div>
              <div className='font-normal sm:font-medium text-2xl'>Matric No</div>
              <div>902360</div>
            </div>
            <div>
              <div className='font-normal sm:font-medium text-2xl'>Email</div>
              <div>rahman.o@doshservices.com</div>
            </div>
            <div>
              <div className='font-normal sm:font-medium text-2xl'>Occupation</div>
              <div>Software Engineer</div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default Dashboard;