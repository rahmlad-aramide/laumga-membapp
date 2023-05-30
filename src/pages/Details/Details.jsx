import { Navbar, Footer } from '../../layouts/main';
import { Input, FileUploadInput } from '../../components';
const Details = () => {
  return (
    <section>
      <Navbar />
      <div className="pt-5 mt-10 md:mt-20 pb-10 md:pb-20 bg-hero-image min-h-screen bg-center bg-black/50 bg-blend-overlay font-mont">
        <div className="bg-white rounded-2xl w-[90%] md:w-[70%] max-w-[1088px] mx-auto mt-[102px] shadow-lg px-7 md:px-14 py-6 md:py-10">
          <div className="text-main font-mont font-medium text-4xl mb-5">
            Details
          </div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name">Name</label>
                <Input py="12px" id="name" type="text" placeholder="Enter your name here" required />
              </div>
              <div>
                <label htmlFor="matric">Matric No</label>
                <Input py="12px" id="matric" type="text" placeholder="Enter your matric number here" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Input py="12px" id="email" type="email" placeholder="Enter your email address here" required />
              </div>
              <div>
                <label htmlFor="occupation">Occupation</label>
                <Input py="12px" id="occupation" type="text" placeholder="Enter your occupation here" required />
              </div>
              <div>
                <label htmlFor="address">Permanent Address</label>
                <Input py="12px" id="address" type="text" placeholder="Enter your permanent address here" required />
              </div>
              <div>
                <label htmlFor="residential">Residential Address</label>
                <Input py="12px" id="residential" type="text" placeholder="Enter your residential address here" required />
              </div>
              <div>
                <div>Old Passport</div>
                <FileUploadInput />
              </div>
              <div>
                <div>Recent Passport</div>
                <FileUploadInput />
              </div>
            </div>
            <div className='flex'>
              <div className='mx-auto mt-12'>
                <button className='text-main bg-white border border-main hover:scale-90 active:scale-100 transition duration-200 py-2 px-6 md:px-10 mr-5'>
                  Cancel
                </button>
                <button className='bg-main text-white border border-main hover:scale-90 active:scale-100 transition duration-200 py-2 px-6 md:px-10'>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default Details;