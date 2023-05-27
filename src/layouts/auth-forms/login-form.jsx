import React from "react";
import { useState } from "react";
import { signIn } from "../../apis/index";

export default function LoginForm() {

	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);

	const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

	const handleLoginSubmit = async (event) => {
		event.preventDefault();

		try {
			// Call the signIn function with matricNo and password
			const res = await signIn(email, password);
			setResponse(res.message);
			console.log(response);
			// Handle successful sign-in here
		} catch (error) {
			// Handle sign-in error here
			console.log(error.message);
		}
	};

  	return (
		<>
		{/* LOGIN FORM */}
			<div className="shadow-2xl max-w-[550px] mx-7 md:mx-auto mt-[150px] px-20 py-10 rounded-[40px]">
				{/* *********************** LOGIN FORM *************************** */}
				<form onSubmit={handleLoginSubmit} className="flex flex-col">
					<p className=" font-mont text-[30px] md:text-[40px] text-main font-[500] text-center">Login</p>
					{/* EMAIL INPUT */}
					<label htmlFor="email">Email</label>
					<input type="email" value={email} onChange={handleEmailChange} className="mt-3 bg-form_bg rounded-md outline-none p-4 mb-3"/>
					{/* PASSWORD INPUT */}
					<label htmlFor="password">Password</label>
					<input type="password" value={password} onChange={handlePasswordChange} className="mt-3 bg-form_bg rounded-md outline-none p-4 mb-3"/>
					<p className=" text-center text-blue-600">Frogot Password?</p>
					<button type="submit" className=" bg-main font-mont w-full mb-6 m-auto rounded-md mt-6 text-white"><p className=" p-4">Login</p></button>
				</form>
			</div>
		</>
  	);
}