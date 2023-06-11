import { Navbar, Footer } from '../../layouts/main';
import { Input, FileUploadInput } from '../../components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateDetails } from '../../apis';
import { useNavigate } from 'react-router-dom';
import {ToastContainer} from "react-toastify"
import {notify, warn} from '../../main'
import { Circles } from 'react-loader-spinner';

const Loader = <Circles
  height="30"
  width="30"
  color="#fff"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
const defaultFormFields = {
  name: "",
  about: "",
  location: "",
  occupation: "",
  phoneNo1: "",
  phoneNo2: "",
}
// eslint-disable-next-line no-unused-vars
const defaultFileFIelds = {
  old_passport: null,
  recent_passport: null
}

const Details = () => {
  const userId = localStorage.getItem("userId")
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(null);

  const { name, about, location, occupation, phoneNo1, phoneNo2 } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }


  const handleFileUpload1 = (event) => {
    const file = event.target.files[0];
    // Check if a file is selected
    if (file) {
      const reader = new FileReader();
      // Set the callback function to be executed once the file is loaded
      reader.onload = function (event) {
        const base64String = event.target.result;
        // Use the base64 string as needed (e.g., send it to the server, display it on the page)
        setSelectedFile(base64String);
      };
      // Read the file as a data URL (base64)
      reader.readAsDataURL(file);
    }
  }

  const handleFileUpload2 = (event) => {
    const file = event.target.files[0];
    // Check if a file is selected
    if (file) {
      const reader = new FileReader();
      // Set the callback function to be executed once the file is loaded
      reader.onload = function (event) {
        const base64String = event.target.result;
        // Use the base64 string as needed (e.g., send it to the server, display it on the page)
        setSelectedFile2(base64String);
      };
      // Read the file as a data URL (base64)
      reader.readAsDataURL(file);
    }
  }

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const formData = {
      id: userId,
      recentPicture: selectedFile,
      oldPicture: selectedFile2,
      location: formFields.address,
      occupation: formFields.occupation,
      phoneNumber1: formFields.phoneNo1,
      phoneNumber2: formFields.phoneNo2,
      about: formFields.about,
      middleName: formFields.name,
    }

    try {
      const res = await updateDetails(formData);
      setResponse(res);
      setError('')

      const recentPicture = res.result.userDetails.recentPicture;
      const oldPicture = res.result.userDetails.oldPicture;
      const middleName = res.result.userDetails.middleName;
      const occupation = res.result.userDetails.occupation;
      const location = res.result.userDetails.location;
      const number1 = res.result.userDetails.phoneNumber1;
      const number2 = res.result.userDetails.phoneNumber2;
      
      if(occupation) localStorage.setItem("occupation", occupation)
      if(recentPicture) localStorage.setItem("recentPicture", recentPicture)
      if(oldPicture) localStorage.setItem("oldPicture", oldPicture)
      if(middleName) localStorage.setItem("middleName", middleName)
      if(location) localStorage.setItem("location", location)
      if(about) localStorage.setItem("about", about)
      if(number1) localStorage.setItem("number1", number1)
      if(number2) localStorage.setItem("number2", number2)
      
      setLoading(false)
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      setLoading(false)
      setError(error)
      warn("An error has occured")
      console.log("Inside error")
      console.error(error);
    }
  }

   // display error message component
   if (error.message) {
    warn(`${error.message}. Pls try again.`)
  }

  // display success message component
  if (response.message) {
    notify(`${response.message}, you're being redirected`)
  }

  return (
    <section>
      <Navbar />
      <ToastContainer />
      <div className="pt-5 mt-10 md:mt-20 pb-10 md:pb-20 bg-hero-image min-h-screen bg-center bg-black/50 bg-blend-overlay font-mont">
        <div className="bg-white rounded-2xl w-[90%] md:w-[70%] max-w-[1088px] mx-auto mt-[102px] shadow-lg px-7 md:px-14 py-6 md:py-10">
          <div className="text-main font-mont font-medium text-4xl mb-5">
            Update Your Details
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name">Middle Name</label>
                <Input py="12px" id="name" type="text" name="name" value={name} onChange={handleChange} placeholder="Enter your middle name here" />
              </div>
              <div>
                <label htmlFor="about">About</label>
                <Input py="12px" id="about" type="text" name="about" value={about} onChange={handleChange} placeholder="Enter your short bio here" />
              </div>
              <div>
                <label htmlFor="occupation">Occupation</label>
                <Input py="12px" id="occupation" type="text" name="occupation" value={occupation} onChange={handleChange} placeholder="Enter your occupation here" />
              </div>
              <div>
                <label htmlFor="location">Residential Address</label>
                <Input py="12px" id="location" type="text" name="location" value={location} onChange={handleChange} placeholder="Enter your permanent address here" />
              </div>
              <div>
                <label htmlFor="phoneNo1">Phone number one</label>
                <Input py="12px" id="phoneNo1" type="text" name="phoneNo1" value={phoneNo1} onChange={handleChange} placeholder="Enter your phone number here" />
              </div>
              <div>
                <label htmlFor="phoneNo2">Phone number two</label>
                <Input py="12px" id="phoneNo2" type="text" name="phoneNo2" value={phoneNo2} onChange={handleChange} placeholder="Enter your second phone number" />
              </div>
              {/* <br className="hidden md:flex" /> */}
              <div>
                <div>Recent Passport</div>
                <FileUploadInput selectedFile={selectedFile2} handleFileChange={handleFileUpload2} />
              </div>
              <div>
                <div>Old Passport</div>
                <FileUploadInput selectedFile={selectedFile} handleFileChange={handleFileUpload1} />
              </div>
            </div>
            <div className='flex'>
              <div className='mx-auto mt-12'>
                {loading ? "" :
                  <Link to="/dashboard">
                    <button className='rounded-lg text-main bg-white border border-main hover:scale-90 active:scale-100 transition duration-200 py-2 px-6 md:px-10 mr-5'>
                      Cancel
                    </button>
                  </Link>
                }
                <button className='rounded-lg bg-main text-white border border-main hover:scale-90 active:scale-100 transition duration-200 py-2 px-6 md:px-10'>
                  {loading ? Loader : 'Save'}
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