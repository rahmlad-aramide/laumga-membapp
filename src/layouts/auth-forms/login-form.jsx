import { useState } from "react";
import { signIn } from "../../apis/index";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [response, setResponse] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(null);

	let theError, theResponse;

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
			const userId = res.result._id;
			const userEmail = res.result.email;
			const firstName = res.result.firstName;
			const lastName = res.result.lastName;

			localStorage.setItem("userId", userId)
			localStorage.setItem("userEmail", userEmail)
			localStorage.setItem("firstName", firstName)
			localStorage.setItem("lastName", lastName)
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
		theError = <p className='bg-red-200 p-4 md:p-8 border border-red-700 rounded-md text-red-800 font-mont max-w-[350px] m-auto mb-2 text-center'>{error.message}. Please try again!</p>;
	}

	// display success message component
	if (response.message) {
		theResponse = <p className='bg-green-200 p-4 md:p-8 border border-green-700 rounded-md text-green-900 font-mont max-w-[350px] m-auto mb-2 text-center'>{response.message}!.</p>;
	}

	return (
		<>
			{/* LOGIN FORM */}
			<div className="shadow-2xl max-w-[550px] mx-7 md:mx-auto mt-[150px] px-8 sm:px-20 py-10 rounded-[40px] bg-hero-image bg-black bg-opacity-60 bg-no-repeat bg-cover bg-center bg-blend-overlay">
				{/* *********************** LOGIN FORM *************************** */}
				<form onSubmit={handleLoginSubmit} className="flex flex-col font-man">
					<p className=" font-mont text-[30px] md:text-[40px] text-main font-[500] text-center mb-2">Login</p>
					<span>{theError ? theError : null}</span> {/* DISPLAY ERROR MESSAGE */}
					<span>{theResponse ? theResponse : null}</span> {/* DISPLAY SUCCESS MESSAGE */}
					{/* EMAIL INPUT */}
					<label htmlFor="email" className="text-white">Email</label>
					<input type="email" value={email} onChange={handleEmailChange} className="mt-3 bg-form_bg rounded-md outline-none p-3 md:p-4 mb-3" />
					{/* PASSWORD INPUT */}
					<label htmlFor="password" className="text-white">Password</label>
					<input type="password" value={password} onChange={handlePasswordChange} className="mt-3 bg-form_bg rounded-md outline-none p-3 md:p-4 mb-3" />
					<p className=" text-center text-main underline">Forgot Password?</p>
					<button type="submit" className=" bg-main font-mont w-full mb-6 m-auto rounded-md mt-6 text-white">{loading ? <p className="p-4">Loading...</p> : <p className=" p-4">Login</p>}</button>
				</form>
			</div>
		</>
	);
}