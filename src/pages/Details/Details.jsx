import { Navbar, Footer } from '../../layouts/main';
import { Input, FileUploadInput } from '../../components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const defaultFormFields = {
  name: "",
  matric: "",
  email: "",
  occupation: "",
  address: "",
  residential: "",
  password: "",
  confirm_password: ""
}
// eslint-disable-next-line no-unused-vars
const defaultFileFIelds = {
  old_passport: null,
  recent_passport: null
}

const Details = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const {name, matric, email, occupation, address, residential, password, confirm_password} = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields)
  }


  const handleFileChange = (event) => {
    console.log(event.target)
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file);
    console.log(selectedFile);
  };

  return (
    <section>
      <Navbar />
      <div className="pt-5 mt-10 md:mt-20 pb-10 md:pb-20 bg-hero-image min-h-screen bg-center bg-black/50 bg-blend-overlay font-mont">
        <div className="bg-white rounded-2xl w-[90%] md:w-[70%] max-w-[1088px] mx-auto mt-[102px] shadow-lg px-7 md:px-14 py-6 md:py-10">
          <div className="text-main font-mont font-medium text-4xl mb-5">
            Update Your Details
          </div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name">Name</label>
                <Input py="12px" id="name" type="text" name="name" value={name} onChange={handleChange} placeholder="Enter your full name here" required />
              </div>
              <div>
                <label htmlFor="matric">Matric No</label>
                <Input py="12px" id="matric" type="text" name="matric" value={matric} onChange={handleChange} placeholder="Enter your matric number here" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Input py="12px" id="email" type="email" name="email" value={email} onChange={handleChange} placeholder="Enter your email address here" required />
              </div>
              <div>
                <label htmlFor="occupation">Occupation</label>
                <Input py="12px" id="occupation" type="text" name="occupation" value={occupation} onChange={handleChange} placeholder="Enter your occupation here" required />
              </div>
              <div>
                <label htmlFor="address">Permanent Address</label>
                <Input py="12px" id="address" type="text" name="address" value={address} onChange={handleChange} placeholder="Enter your permanent address here" required />
              </div>
              <div>
                <label htmlFor="residential">Residential Address</label>
                <Input py="12px" id="residential" type="text" name="residential" value={residential} onChange={handleChange} placeholder="Enter your residential address here" required />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Input py="12px" id="password" type="password" name="password" value={password} onChange={handleChange} placeholder="Enter your password here" required />
              </div>
              <div>
                <label htmlFor="confirm_password">Residential Address</label>
                <Input py="12px" id="confirm_password" type="password" name="confirm_password" value={confirm_password} onChange={handleChange} placeholder="Confirm your password" required />
              </div>
              <div>
                <div>Old Passport</div>
                <FileUploadInput selectedFile={selectedFile} handleFileChange={handleFileChange} />
              </div>
              <div>
                <div>Recent Passport</div>
                <FileUploadInput selectedFile={selectedFile} handleFileChange={handleFileChange} />
              </div>
            </div>
            <div className='flex'>
              <div className='mx-auto mt-12'>
                <Link to="/dashboard">
                <button className='rounded-lg text-main bg-white border border-main hover:scale-90 active:scale-100 transition duration-200 py-2 px-6 md:px-10 mr-5'>
                  Cancel
                </button>
                </Link>
                <button className='rounded-lg bg-main text-white border border-main hover:scale-90 active:scale-100 transition duration-200 py-2 px-6 md:px-10'>
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