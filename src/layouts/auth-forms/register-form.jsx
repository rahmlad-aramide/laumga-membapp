import React from "react";
import { useState } from "react";
import { signUp } from "../../apis/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [response, setResponse] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(null);

	let theError, theResponse;

	const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

	const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

	const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

	const navigate = useNavigate();

	const handleSignupSubmit = async (event) => {
		event.preventDefault();
		setError('');
		setLoading(true);

		try {
			// Call the signUp API with firstName, lastName, email and password.
			const res = await signUp(firstName, lastName, email, password);
			setResponse(res);
			// Redirect to login page after successful response.
			setTimeout(() => { // wait for 3 seconds
				navigate("/login"); // then redirect to login page
			}, 3000);
			setLoading(false);
			
		} catch (err) {
			setLoading(false);
			// Handling sign-in error here
			setError(err);
		}
	};

	// display error message component
    if (error.message) {
        theError = <p className='bg-red-200 p-4 md:p-8 border border-red-700 rounded-md text-red-800 font-mont max-w-[350px] m-auto mb-2 text-center'>{error.message}. Please try again!</p>;
    }

	// display success message component
	if (response.message) {
        theResponse = <p className='bg-green-200 p-4 md:p-8 border border-green-700 rounded-md text-green-800 font-mont max-w-[350px] m-auto mb-2 text-center'>{response.message}. Please login!</p>;
    }

  	return (
		<>
		{/* REGISTRATION FORM */}
		<div className="shadow-2xl max-w-[550px] mx-7 md:mx-auto mt-[150px] px-8 sm:px-20 py-10 rounded-[40px] mb-20">
				{/* *********************** REGISTER FORM *************************** */}
				<form onSubmit={handleSignupSubmit} className="flex flex-col font-man">
					<p className=" font-mont text-[30px] md:text-[40px] text-main font-[500] text-center mb-2">Sign up</p>
					<span>{theError ? theError : null}</span> {/* DISPLAY ERROR MESSAGE */}
					<span>{theResponse ? theResponse : null}</span> {/* DISPLAY SUCCESS MESSAGE */}
					{/* FIRST NAME INPUT */}
					<label htmlFor="firstName">First Name</label>
					<input type="text" value={firstName} onChange={handleFirstNameChange} className="mt-3 bg-form_bg rounded-md outline-none p-3 md:p-4 mb-3"/>
					{/* LAST NAME INPUT */}
					<label htmlFor="lastName">Last Name</label>
					<input type="text" value={lastName} onChange={handleLastNameChange} className="mt-3 bg-form_bg rounded-md outline-none p-3 md:p-4 mb-3"/>
					{/* EMAIL INPUT */}
					<label htmlFor="email">Email</label>
					<input type="email" value={email} onChange={handleEmailChange} className="mt-3 bg-form_bg rounded-md outline-none p-4 mb-3"/>
					{/* CONFIRM PASSWORD INPUT */}
					<label htmlFor="password">Password</label>
					<input type="password" value={password} onChange={handlePasswordChange} className="mt-3 bg-form_bg rounded-md outline-none p-3 md:p-4 mb-3"/>
					<button type="submit" className=" bg-main font-mont w-full mb-6 m-auto rounded-md mt-6 text-white">{loading ? <p className="p-4">Loading...</p> : <p className="p-4">Sign up</p>}</button>
				</form>
				<p className="text-center font-man">Already have an account? <Link to="/login" className=" text-blue-500">Login</Link></p>
			</div>
		</>
  	);
}