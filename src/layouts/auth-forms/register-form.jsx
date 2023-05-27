import React from "react";
import { useState } from "react";
import { signUp } from "../../apis/index";

export default function RegisterForm() {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

	const handleSignupSubmit = async (event) => {
		event.preventDefault();

		try {
			// Call the signIn function with matricNo and password
			const res = await signUp(firstName, lastName, email, password);
			setResponse(res)
			// Handle successful sign-in here
		} catch (error) {
			// Handle sign-in error here
			console.log(error);
		}
	};

  	return (
		<>
		{/* REGISTRATION FORM */}
		<div className="shadow-2xl max-w-[550px] mx-7 md:mx-auto mt-[150px] px-8 sm:px-20 py-10 rounded-[40px] mb-20">
				{/* *********************** REGISTER FORM *************************** */}
				<form action={handleSignupSubmit} className="flex flex-col">
					<p className=" font-mont text-[30px] md:text-[40px] text-main font-[500] text-center">Sign up</p>
					{/* FIRST NAME INPUT */}
					<label htmlFor="firstName">First Name</label>
					<input type="text" value={firstName} onChange={handleFirstNameChange} className="mt-3 bg-form_bg rounded-md outline-none p-4 mb-3"/>
					{/* LAST NAME INPUT */}
					<label htmlFor="lastName">Last Name</label>
					<input type="text" value={lastName} onChange={handleLastNameChange} className="mt-3 bg-form_bg rounded-md outline-none p-4 mb-3"/>
					{/* EMAIL INPUT */}
					<label htmlFor="email">Email</label>
					<input type="email" value={email} onChange={handleEmailChange} className="mt-3 bg-form_bg rounded-md outline-none p-4 mb-3"/>
					{/* CONFIRM PASSWORD INPUT */}
					<label htmlFor="password">Password</label>
					<input type="password" value={password} onChange={handlePasswordChange} className="mt-3 bg-form_bg rounded-md outline-none p-4 mb-3"/>
					<button type="submit" className=" bg-main font-mont w-full mb-6 m-auto rounded-md mt-6 text-white"><p className=" p-4">Sign up</p></button>
				</form>
			</div>
		</>
  	);
}