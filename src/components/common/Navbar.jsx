import React, { useState } from 'react';
import logo from "../../assets/logos/logo.png";
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";




export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <nav className="w-full top-0 left-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-2 sm:px-4">

                <Link to="/" className="h-16 w-44 flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-full w-full object-cover" />
                </Link>


                <div className="hidden lg:flex space-x-6 font-medium text-[#0c2d44] relative">


                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("Services")}
                            className="flex items-center gap-1 hover:text-[#1398c8] focus:outline-none"
                        >
                            <span className="font-[inter] font-semibold">Services</span>
                            <MdArrowDropDown size={24} />
                        </button>

                        {openDropdown === "Services" && (
                            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-10 z-50">
                                <div className="bg-white shadow-2xl rounded-2xl p-8 w-[1200px] max-h-[100vh] overflow-y-auto grid grid-cols-4 gap-8 relative">


                                    <button
                                        onClick={() => setOpenDropdown(null)}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                    >
                                        <RxCross2 size={24} />
                                    </button>


                                    <div>
                                        <div className=''>
                                            <h3 className="font-semibold text-gray-900 mb-3">UI/UX Design</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                                <li><Link to="/services/prototyping" className="hover:text-blue-600">Prototyping</Link></li>
                                                <li><Link to="/services/information-architecture" className="hover:text-blue-600">Information Architecture</Link></li>
                                                <li><Link to="/services/web-flow" className="hover:text-blue-600">Web Flow</Link></li>
                                            </ul>
                                        </div>
                                        <div className='mt-4'>
                                            <h3 className="font-semibold text-gray-900 mb-3">App Marketing</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                                <li><Link to="/services/prototyping" className="hover:text-blue-600">Mobile App Marketing </Link></li>
                                                <li><Link to="/services/information-architecture" className="hover:text-blue-600">App Store Optimization</Link></li>
                                            </ul>
                                        </div>
                                        <div className='mt-4'>
                                            <h3 className="font-semibold text-gray-900 mb-3">Testing</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                                <li><Link to="/services/prototyping" className="hover:text-blue-600">Functional Testing</Link></li>
                                                <li><Link to="/services/information-architecture" className="hover:text-blue-600">Non-Functional Testing</Link></li>
                                            </ul>
                                        </div>
                                    </div>



                                    <div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-3">Web Development</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                                <li><Link to="/services/ecommerce" className="hover:text-blue-600">Ecommerce Development</Link></li>
                                                <li><Link to="/services/web-portal" className="hover:text-blue-600">Web Portal Development</Link></li>
                                                <li><Link to="/services/cms" className="hover:text-blue-600">CMS Development</Link></li>
                                                <li><Link to="/services/enterprise" className="hover:text-blue-600">Enterprise Web Development</Link></li>
                                                <li><Link to="/services/support" className="hover:text-blue-600">Support & Maintenance</Link></li>
                                            </ul>
                                        </div>
                                        <div className='mt-4'>
                                            <h3 className="font-semibold text-gray-900 mb-3">App Development</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                                <li><Link to="/services/ecommerce" className="hover:text-blue-600">Android App Development</Link></li>
                                                <li><Link to="/services/web-portal" className="hover:text-blue-600">iOS App Develpment</Link></li>
                                                <li><Link to="/services/cms" className="hover:text-blue-600">React Native Development   </Link></li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">Digital Marketing</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                            <li><Link to="/services/android" className="hover:text-blue-600 text-lg">Search Engine Optimization</Link></li>
                                            <li><Link to="/services/ios" className="hover:text-blue-600">Local SEO</Link></li>
                                            <li><Link to="/services/ionic" className="hover:text-blue-600">Ecommerce SEO</Link></li>
                                            <li><Link to="/services/react-native" className="hover:text-blue-600">Link Building</Link></li>
                                            <li><Link to="/services/xamarin" className="hover:text-blue-600">Youtube SEO</Link></li>
                                            <li><Link to="/services/windows" className="hover:text-blue-600">Google Recovery Services</Link></li>
                                            <li><Link to="/services/windows" className="hover:text-blue-600">Hire Dedicated SEO Services</Link></li>
                                        </ul>
                                        <ul className="space-y-2 text-gray-700 text-sm font-normal mt-4">
                                            <li><Link to="/services/android" className="hover:text-blue-600 text-lg">Social Media Marketing</Link></li>
                                            <li><Link to="/services/ios" className="hover:text-blue-600">Facebook Marketing</Link></li>
                                            <li><Link to="/services/ionic" className="hover:text-blue-600">Instagram Marketing</Link></li>
                                            <li><Link to="/services/react-native" className="hover:text-blue-600">Linkedln Marketing</Link></li>
                                            <li><Link to="/services/xamarin" className="hover:text-blue-600">Twitter Marketing</Link></li>
                                            <li><Link to="/services/windows" className="hover:text-blue-600">Email Marketing</Link></li>

                                        </ul>
                                    </div>


                                    <div className="bg-gradient-to-b from-cyan-400 to-cyan-600 text-white rounded-2xl p-5 flex flex-col items-center justify-center text-center">
                                        <p className="font-semibold text-sm">SPECIAL OFFER</p>
                                        <p className="text-xs mt-1">GET UPTO</p>
                                        <h2 className="text-3xl font-bold mt-2">10% OFF</h2>
                                        <p className="text-xs mt-2">ON OUR ENTIRE SPECTRUM OF WEB DEVELOPMENT SERVICES!</p>
                                        <Link
                                            to="/contact"
                                            className="mt-4 bg-white text-cyan-600 px-5 py-2 rounded-xl font-medium hover:bg-gray-100"
                                        >
                                            GET NOW
                                        </Link>
                                    </div>
                                    <div className='flex gap-4 items-center justify-center bg-blue-600 py-1  px-2 text-white'>
                                        <Link className='text-xl'>Our Services</Link>
                                        <FaLongArrowAltRight size={30} />

                                    </div>
                                </div>

                            </div>
                        )}


                    </div>


                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("Technologies")}
                            className="flex items-center gap-1 hover:text-[#1398c8] focus:outline-none"
                        >
                            <span className="font-[inter] font-semibold">Technologies</span>
                            <MdArrowDropDown size={24} />
                        </button>

                        {openDropdown === "Technologies" && (
                            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-20 z-50">
                                <div className="bg-white shadow-2xl rounded-2xl p-8 w-[1200px] max-h-[100vh] overflow-y-auto grid grid-cols-4 gap-8 relative">


                                    <button
                                        onClick={() => setOpenDropdown(null)}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                    >
                                        <RxCross2 size={24} />
                                    </button>


                                    <div>
                                        <div className=''>
                                            <h3 className="font-semibold text-gray-900 mb-3">Cloud Services</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                                <li><Link to="/services/prototyping" className="hover:text-blue-600">Amazon Web Services (AWS)</Link></li>
                                                <li><Link to="/services/information-architecture" className="hover:text-blue-600">Google Apps</Link></li>
                                                <li><Link to="/services/web-flow" className="hover:text-blue-600">Window Azure</Link></li>
                                            </ul>
                                        </div>
                                        <div className='mt-4'>
                                            <h3 className="font-semibold text-gray-900 mb-3">Backend</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                                <li><Link to="/services/prototyping" className="hover:text-blue-600">MySQL</Link></li>
                                                <li><Link to="/services/information-architecture" className="hover:text-blue-600">Oracle</Link></li>
                                                <li><Link to="/services/prototyping" className="hover:text-blue-600">SQL Server</Link></li>
                                                <li><Link to="/services/information-architecture" className="hover:text-blue-600">PostgreSQL</Link></li>
                                                <li><Link to="/services/information-architecture" className="hover:text-blue-600">MongoDB</Link></li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-3">Solutions Engineering</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                                <li><Link to="/services/ecommerce" className="hover:text-blue-600">PHP</Link></li>
                                                <li><Link to="/services/web-portal" className="hover:text-blue-600">Cake PHP</Link></li>
                                                <li><Link to="/services/cms" className="hover:text-blue-600">Codelgniter</Link></li>
                                                <li><Link to="/services/enterprise" className="hover:text-blue-600">Wordpress</Link></li>
                                                <li><Link to="/services/support" className="hover:text-blue-600">Joomla</Link></li>
                                            </ul>
                                        </div>
                                        <div className='mt-4'>
                                            <h3 className="font-semibold text-gray-900 mb-3">App Development</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                                <li><Link to="/services/ecommerce" className="hover:text-blue-600">Android App Development</Link></li>
                                                <li><Link to="/services/web-portal" className="hover:text-blue-600">iOS App Develpment</Link></li>
                                                <li><Link to="/services/cms" className="hover:text-blue-600">React Native Development   </Link></li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">Digital Marketing</h3>
                                        <ul className="space-y-2 text-gray-700 text-sm font-normal">
                                            <li><Link to="/services/android" className="hover:text-blue-600 text-lg">Search Engine Optimization</Link></li>
                                            <li><Link to="/services/ios" className="hover:text-blue-600">Local SEO</Link></li>
                                            <li><Link to="/services/ionic" className="hover:text-blue-600">Ecommerce SEO</Link></li>
                                            <li><Link to="/services/react-native" className="hover:text-blue-600">Link Building</Link></li>
                                            <li><Link to="/services/xamarin" className="hover:text-blue-600">Youtube SEO</Link></li>
                                            <li><Link to="/services/windows" className="hover:text-blue-600">Google Recovery Services</Link></li>
                                            <li><Link to="/services/windows" className="hover:text-blue-600">Hire Dedicated SEO Services</Link></li>
                                        </ul>
                                        <ul className="space-y-2 text-gray-700 text-sm font-normal mt-4">
                                            <li><Link to="/services/android" className="hover:text-blue-600 text-lg">Social Media Marketing</Link></li>
                                            <li><Link to="/services/ios" className="hover:text-blue-600">Facebook Marketing</Link></li>
                                            <li><Link to="/services/ionic" className="hover:text-blue-600">Instagram Marketing</Link></li>
                                            <li><Link to="/services/react-native" className="hover:text-blue-600">Linkedln Marketing</Link></li>
                                            <li><Link to="/services/xamarin" className="hover:text-blue-600">Twitter Marketing</Link></li>
                                            <li><Link to="/services/windows" className="hover:text-blue-600">Email Marketing</Link></li>

                                        </ul>
                                    </div>


                                    <div className="bg-gradient-to-b from-cyan-400 to-cyan-600 text-white rounded-2xl p-5 flex flex-col items-center justify-center text-center">
                                        <p className="font-semibold text-sm">SPECIAL OFFER</p>
                                        <p className="text-xs mt-1">GET UPTO</p>
                                        <h2 className="text-3xl font-bold mt-2">10% OFF</h2>
                                        <p className="text-xs mt-2">ON OUR ENTIRE SPECTRUM OF WEB DEVELOPMENT SERVICES!</p>
                                        <Link
                                            to="/contact"
                                            className="mt-4 bg-white text-cyan-600 px-5 py-2 rounded-xl font-medium hover:bg-gray-100"
                                        >
                                            GET NOW
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/work" className="hover:text-[#1398c8] font-[inter] font-semibold">
                        Industries
                    </Link>
                    <Link to="/startup-solution" className="hover:text-[#1398c8] font-[inter] font-semibold">
                        StartUp Solution
                    </Link>
                    <Link to="/website-software" className="hover:text-[#1398c8] font-[inter] font-semibold">
                        About Us
                    </Link>
                </div>



                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-[#1398c8] focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>


            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >

                <div className="flex items-center justify-end px-6 h-20 ">
                    <button onClick={() => setIsOpen(false)} className="text-[#1398c8]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>


                <ul className="flex flex-col space-y-6 px-6 py-6 text-[#0c2d44] font-medium">
                    <li><Link to="/" className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="about" className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>About Us</Link></li>
                    <li><Link to="services" className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>Our Work</Link></li>
                    <li><Link className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>StartUp Solution</Link></li>
                    <li><Link className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>Website/Software</Link></li>

                </ul>
            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-40 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
}
