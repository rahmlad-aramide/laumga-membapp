import { Navbar, Footer } from '../../layouts/main';
import { Input, FileUploadInput } from '../../components';
import { useState } from 'react';
import Terms from './Terms';
import { signUp } from '../../apis';
import { useNavigate } from 'react-router-dom';
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
  sname: "",
  fname: "",
  matric: "",
  email: "",
  password: "",
  confirm_password: ""
}
// eslint-disable-next-line no-unused-vars
const defaultFileFIelds = {
  old_passport: null,
  recent_passport: null
}

const Signup = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [policy, setPolicy] = useState(false);
  const [selectedFile1, setSelectedFile1] = useState(null);
  // const [selectedFile2, setSelectedFile2] = useState(null);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(null);
  const [matched, setMatched] = useState(null);

  const handleFileUpload1 = (event) => {
    const file = event.target.files[0];
    // setSelectedFile1(file);
    // Check if a file is selected
    if (file) {
      const reader = new FileReader();

      // Set the callback function to be executed once the file is loaded
      reader.onload = function (event) {
        const base64String = event.target.result;
        // Use the base64 string as needed (e.g., send it to the server, display it on the page)
        setSelectedFile1(base64String);
      };

      // Read the file as a data URL (base64)
      reader.readAsDataURL(file);
    }
  };
  

  const { sname, fname, matric, email, password, confirm_password } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    setMatched(null)
  }
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      surname: formFields.sname,
      lastName: formFields.fname,
      email: formFields.email,
      matricNumber: formFields.matric,
      password: formFields.password,
      recentPicture: selectedFile1
    }
    if (password !== confirm_password) {
      setMatched(false)
      return;
    }
    setError('');
    setLoading(true);

    try {
      const res = await signUp(formData);
      setResponse(res);
      console.log(res)

      setTimeout(() => {
        navigate("/login");
      }, 3000);
      setLoading(false);

    } catch (err) {
      setLoading(false);
      setError(err);
      console.log(err)
    }
  };

  let theError, theResponse
  // display error message component
  if (error.message) {
    theError = <p className='bg-red-200 p-4 md:p-8 border md:relative md:left-[50%] md:right-[50%] border-red-700 rounded-md text-red-800 font-mont max-w-[350px] m-auto mb-2 text-center'>{error.message}. Please try again!</p>;
  }

  // display success message component
  if (response.message) {
    theResponse = <p className='bg-green-200 p-4 md:p-8 border md:relative left-[50%] right-[50%] border-green-700 rounded-md text-green-800 font-mont max-w-[350px] m-auto mb-2 text-center'>{response.message}. Please login!</p>;
  }


  return (
    <section className='mt-20'>
      <Navbar />
      <div>
        <div className="pt-5 mt-10 md:mt-20 pb-10 md:pb-20 bg-hero-image min-h-screen bg-center bg-black/50 font-mont">
          {policy ?
            <div className="bg-white rounded-2xl w-[90%] md:w-[70%] max-w-[1088px] mx-auto mt-[102px] shadow-lg px-7 md:px-14 py-6 md:py-10">
              <div className="text-main font-mont font-medium text-4xl mb-5">
                Signup
              </div>
              <form onSubmit={handleSignupSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {theError ? <span> {theError} </span>: null} {/* DISPLAY ERROR MESSAGE */}
                  {theResponse ? <span> {theResponse} </span> : null} {/* DISPLAY SUCCESS MESSAGE */}
                  <div>
                    <label htmlFor="sname">Surname</label>
                    <Input py="12px" id="sname" type="text" name="sname" value={sname} onChange={handleChange} placeholder="Enter your surname here" required />
                  </div>
                  <div>
                    <label htmlFor="fname">First Name</label>
                    <Input py="12px" id="fname" type="text" name="fname" value={fname} onChange={handleChange} placeholder="Enter your first name here" required />
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
                    <label htmlFor="password">Password</label>
                    <Input py="12px" id="password" type="password" name="password" value={password} onChange={handleChange} placeholder="Enter your password" required />
                  </div>
                  <div>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <Input py="12px" id="confirm_password" type="password" name="confirm_password" value={confirm_password} onChange={handleChange} placeholder="Confirm your password" required />
                    {matched===false && <p className='text-pink-600 mt-2'>Password doesn&apos;t match!</p>}
                  </div>
                  <div>
                    <div>Picture (max 100kb)</div>
                    <FileUploadInput selectedFile={selectedFile1} handleFileChange={handleFileUpload1} />
                  </div>
                  {/* <div>
                    <div>Recent Passport</div>
                    <FileUploadInput selectedFile={selectedFile2} handleFileChange={handleFileUpload2} />
                  </div> */}
                </div>
                <div className='flex justify-end items-end'>
                  <div className='mt-12 flex justify-end items-end'>
                    <button disabled={matched===false} className='disabled:opacity-50 disabled:scale-100 bg-main text-white rounded-lg border border-main hover:scale-90 active:scale-100 transition duration-200 py-2 px-6 md:px-10'>
                      {loading ? Loader : <p>Signup</p>}
                    </button>
                  </div>
                </div>
              </form>
            </div> :
            <div className="bg-white rounded-2xl w-[90%] md:w-[70%] max-w-[1088px] mx-auto mt-[102px] shadow-lg px-7 md:px-14 py-6 md:py-10">
              <Terms setPolicy={setPolicy} />
            </div>
          }
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default Signup;