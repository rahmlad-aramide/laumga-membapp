import { useState } from "react";
import axios from "axios";
import { Footer, Navbar } from "../../layouts/main";
import President from "../../assets/images/president.png";
import search from "../../assets/search.svg";
import { Circles } from 'react-loader-spinner';

const loader = <Circles
    height="30"
    width="30"
    color="#CCAE0E"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
/>

export default function Members() {
    // const recentPicture = localStorage.getItem("recentPicture")
    // const oldPicture = localStorage.getItem("oldPicture")
    const [selectedOption, setSelectedOption] = useState('')
    const [loading, setLoading] = useState(false)

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSelectedOption = (event) => {
		setSelectedOption(event.target.value);
	};

    const handleSearch = async (event) => {
        event.preventDefault()
        setLoading(true)
        
        if (selectedOption == '') {
            setSelectedOption("lastName")
        }
        const formData = {
            [selectedOption]: searchTerm
        }
    
        console.log(formData)
        try {
            console.log("Before response")
            const response = await axios.post("https://laumga-membapp-api.onrender.com/dashboard/search", formData);
            console.log("Inside response")
            setSearchResults(response.search);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    };

    return (
        <>
            <section>
                <Navbar />
                <div className="mt-[-90px] bg-hero-image min-h-screen bg-center bg-black/50 bg-blend-overlay font-mont">
                    {/* <div className='md:col-span-3 h-full bg-[#f4f4f4] pt-28 pb-5 md:pb-0 md:mr-10'>
                        <div className='flex justify-around gap-3 md:block'>
                            <div className='flex flex-col ml-5 md:ml-0 md:mb-10'>
                                <div className='mx-auto mb-4'>
                                    <img src={recentPicture ? recentPicture : President} alt="recent passport" className='rounded-full max-w-[300px]' />
                                </div>
                                <div className='mx-auto'>Recent Passport</div>
                            </div>
                            <div className='flex flex-col mr-3 md:mr-0'>
                                <div className='mx-auto mb-4'>
                                    <img src={oldPicture ? oldPicture : President} alt="old passport" className='rounded-full max-w-[300px]' />
                                </div>
                                <div className='mx-auto'>Old Passport</div>
                            </div>
                        </div>
                    </div> */}
                    <div className="w-[100%] pt-[150px] md:pt-0 m-auto">
                        <div className="w-[90%] md:w-[40%] md:mx-auto mt-[50px] md:mt-[150px] m-auto py-6 md:py-10">
                            <form onSubmit={handleSearch} action="" className="bg-white max-w-max rounded-lg flex items-center">
                                <input type="search" placeholder="Search" value={searchTerm} onChange={handleSearchChange} className="p-5 rounded-3xl w-[160px] md:w-[500px] outline-none"/>
                                <select onChange={handleSelectedOption} name="options" id="options" className="bg-white">
                                    <option value="lastName">Last Name</option>
                                    <option value="surname">Surname</option>
                                    <option value="middleName">Middle Name</option>
                                    <option value="matricNumber">Matric No.</option>
                                </select>
                                <div className={`${loading ? 'mr-2 min-w-max' : 'mr-0 min-w-max'}`}>{loading ? loader : <button type="submit" className="mr-5"><img src={search} alt="search" /></button>}</div>
                            </form>
                        </div>
                            {searchResults && <p className="text-center text-white text-[15px] md:text-[30px]">Search result(s) here</p>}
                        <div className="w-[90%] md:w-[90%] relative left-5 right-5 m-auto">
                            <ul className="flex flex-wrap md:justify-around gap-10 py-10">
                                {searchResults ? searchResults.map((result) => (
                                    <li key={result._id}>
                                        <div className=" bg-form_bg break-words rounded-xl max-w-[285px] text-center p-10">
                                            <img src={President} alt="user image" width={150} className="rounded-full mx-auto" />
                                            <p className="mt-5">{result.firstName + ' ' + result.lastName}</p>
                                            <p><span className="font-semibold">Location: </span>{result.userDetails.location}</p>
                                            <p><span className="font-semibold">Email: </span>{result.email}</p>
                                            <p><span className="font-semibold">Phone: </span>{result.userDetails.phoneNumber1}</p>
                                        </div>
                                    </li>
                                )) : <p className="text-white text-[15px] md:text-[30px]">No result(s) found</p>}
                            </ul>
                        </div>
                        <div className="flex w-full items-center justify-center mb-8">   
                            <div className="text-white text-center text-lg md:text-2xl">These are our members</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-5 md:gap-10 my-2 md:my-4 pb-5 md:pb-20">
                            <div className=" bg-form_bg break-words rounded-xl max-w-[285px] text-center p-10">
                                    <img src={President} alt="user image" width={150} className="rounded-full mx-auto" />
                                    <p className="mt-5">Abdrahman Oladimeji</p>
                                    <p><span className="font-semibold">Location: </span>Lagos, Nigeria</p>
                                    <p><span className="font-semibold">Email: </span>abdularahmanhak@gmail.com</p>
                                    <p><span className="font-semibold">Phone: </span>08166223687</p>
                                </div>
                                <div className=" bg-form_bg break-words rounded-xl max-w-[285px] text-center p-10">
                                    <img src={President} alt="user image" width={150} className="rounded-full mx-auto" />
                                    <p className="mt-5">Abdulrahman Hakeem</p>
                                    <p><span className="font-semibold">Location: </span>Lagos, Nigeria</p>
                                    <p><span className="font-semibold">Email: </span>abdularahmanhak@gmail.com</p>
                                    <p><span className="font-semibold">Phone: </span>08166223687</p>
                                </div>
                                <div className=" bg-form_bg break-words rounded-xl max-w-[285px] text-center p-10">
                                    <img src={President} alt="user image" width={150} className="rounded-full mx-auto" />
                                    <p className="mt-5">Abdulrahman Hakeem</p>
                                    <p><span className="font-semibold">Location: </span>Lagos, Nigeria</p>
                                    <p><span className="font-semibold">Email: </span>abdularahmanhak@gmail.com</p>
                                    <p><span className="font-semibold">Phone: </span>08166223687</p>
                                </div>
                                <div className=" bg-form_bg break-words rounded-xl max-w-[285px] text-center p-10">
                                    <img src={President} alt="user image" width={150} className="rounded-full mx-auto" />
                                    <p className="mt-5">Abdulrahman Hakeem</p>
                                    <p><span className="font-semibold">Location: </span>Lagos, Nigeria</p>
                                    <p><span className="font-semibold">Email: </span>abdularahmanhak@gmail.com</p>
                                    <p><span className="font-semibold">Phone: </span>08166223687</p>
                                </div>
                                <div className=" bg-form_bg break-words rounded-xl max-w-[285px] text-center p-10">
                                    <img src={President} alt="user image" width={150} className="rounded-full mx-auto" />
                                    <p className="mt-5">Abdulrahman Hakeem</p>
                                    <p><span className="font-semibold">Location: </span>Lagos, Nigeria</p>
                                    <p><span className="font-semibold">Email: </span>abdularahmanhak@gmail.com</p>
                                    <p><span className="font-semibold">Phone: </span>08166223687</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}