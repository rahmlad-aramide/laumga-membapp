import { useState } from "react";
import axios from "axios";
import { Footer, Navbar } from "../../layouts/main";
import President from "../../assets/images/president.png";
import search from "../../assets/search.svg"

export default function Members() {
    const recentPicture = localStorage.getItem("recentPicture")
    const oldPicture = localStorage.getItem("oldPicture")

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault()
        // const { value } = event.target;
        // setSearchTerm(value);

        const formData = {
            lastName: searchTerm
        }
        console.log("Inside on change", searchTerm)

        try {
            console.log("Before response")
            const response = await axios.post("https://laumga-membapp-api.onrender.com/dashboard/search", formData);
            console.log("Inside response")
            setSearchResults(response.search);
            console.log(response.search)
        } catch (error) {
            console.log("Inside error")
            console.error(error);
        }
    };

    return (
        <>
            <section>
                <Navbar />
                <div className="md:grid md:grid-cols-12 bg-hero-image min-h-screen bg-center bg-black/50 bg-blend-overlay font-mont">
                    <div className='md:col-span-3 h-full bg-[#f4f4f4] pt-28 pb-5 md:pb-0 md:mr-10'>
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
                    </div>
                    <div className='col-span-9'>
                        <div className="w-[90%] ml-[10%] mr-[10%] md:mx-auto mt-[50px] md:mt-[150px] py-6 md:py-10">
                            <form onSubmit={handleSearch} action="" className="bg-white max-w-max rounded-lg flex items-center">
                                <input type="search" placeholder="Search" value={searchTerm} onChange={handleSearchChange} className="p-5 rounded-3xl w-[250px] md:w-[500px] outline-none" />
                                <button type="submit" className="mr-5"><img src={search} alt="search" /></button>
                            </form>
                            <ul className="flex flex-wrap gap-20 mt-10">
                                {searchResults ? searchResults.map((result) => (
                                    <li key={result._id}>
                                        <div className=" bg-form_bg break-words rounded-xl max-w-[285px] text-center p-10">
                                            <img src={President} alt="user image" width={150} className="rounded-full mx-auto" />
                                            <p className="mt-5">{result.firstName + ' ' + result.lastName}</p>
                                            <p><span className="font-semibold">Location: </span>Lagos, Nigeria</p>
                                            <p><span className="font-semibold">Email: </span>abdularahmanhak@gmail.com</p>
                                            <p><span className="font-semibold">Phone: </span>08166223687</p>
                                        </div>
                                    </li>
                                )) : <p className="text-white text-[15px] md:text-[30px]">No result(s) found</p>}
                            </ul>
                        </div>
                        <div>   
                            <div>These are our members</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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