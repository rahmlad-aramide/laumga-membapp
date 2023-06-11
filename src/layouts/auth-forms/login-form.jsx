import { useState } from "react";
import { signIn } from "../../apis/index";
import { useNavigate } from "react-router-dom";
import { Circles } from 'react-loader-spinner';
import {notify, warn} from '../../main';

const loader = <Circles
height="30"
width="30"
color="#fff"
ariaLabel="circles-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>

export default function LoginForm() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [response, setResponse] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(null);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const navigate = useNavigate();

	const handleLoginSubmit = async (event) => {
		event.preventDefault();
		setError('');
		setLoading(true);

		try {
			// Call the signIn function with matricNo and password
			const res = await signIn(email, password);
			setResponse(res);
			console.log(res)
			const userId = res.result._id;
			const verified = res.result.verified;
			const userEmail = res.result.email;
			const surname = res.result.surname;
			const lastName = res.result.lastName;
			const matricNumber = res.result.matricNumber;
			const recentPicture = res.result.userDetails.recentPicture;

			localStorage.setItem("userId", userId)
			localStorage.setItem("verified", verified)
			localStorage.setItem("userEmail", userEmail)
			localStorage.setItem("surname", surname)
			localStorage.setItem("lastName", lastName)
			localStorage.setItem("matricNumber", matricNumber)
			localStorage.setItem("recentPicture", recentPicture)
			setLoading(false);

			setTimeout(() => {
				navigate("/dashboard");
			}, 3000);
			// Handling successful sign-in here
		} catch (err) {
			setLoading(false);
			// Handling sign-in error here
			setError(err);
			console.log(err)
		}
	};

	// display error message component
	if (error.message) {
		warn(`${error.message}, pls try again`)
	}

	// display success message component
	if (response.message) {
		notify(`${response.message}, you're being redirected`)
	}

	return (
		<>
			{/* LOGIN FORM */}
			<div className="shadow-2xl max-w-[550px] mx-7 md:mx-auto relative top-48 px-8 sm:px-20 py-10 rounded-[40px] bg-white bg-no-repeat bg-cover bg-center bg-blend-overlay">
				{/* *********************** LOGIN FORM *************************** */}
				<form onSubmit={handleLoginSubmit} className="flex flex-col font-man">
					<p className=" font-mont text-[30px] md:text-[40px] text-main font-[500] text-center mb-2">Login</p>
					{/* EMAIL INPUT */}
					<label htmlFor="email" className="text-black">Email</label>
					<input type="email" value={email} placeholder="Enter email address" onChange={handleEmailChange} required className="mt-3 bg-form_bg rounded-md outline-none p-3 md:p-4 mb-3" />
					{/* PASSWORD INPUT */}
					<label htmlFor="password" className="text-black">Password</label>
					<input type="password" value={password} placeholder="Enter password" onChange={handlePasswordChange} required className="mt-3 bg-form_bg rounded-md outline-none p-3 md:p-4 mb-3" />
					<p className=" text-center text-main underline">Forgot Password?</p>
					<button type="submit" className=" bg-main font-mont w-full mb-6 m-auto rounded-md mt-6 text-white">{loading ? <div className="p-4 flex justify-center">{loader}</div> : <p className=" p-4">Login</p>}</button>
				</form>
			</div>
		</>
	);
}