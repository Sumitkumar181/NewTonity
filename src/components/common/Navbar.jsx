import React, { useState } from 'react';
import logo from "../../assets/logos/logo.png";
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
import appDevelopment from "../../assets/images/ServicesImage/software development.png";
import branding from "../../assets/images/ServicesImage/layer.png"
import digitalMarketing from "../../assets/images/ServicesImage/content-strategy.png"
import uxDesign from "../../assets/images/ServicesImage/ux-design.png"
import webDevelopment from "../../assets/images/ServicesImage/web development.png"

const ServicesCard = [
    {
        icon: branding,
        title: "Branding Design",
        link: "/branding-design",   
    },
    {
        icon: webDevelopment,
        title: "Web Development",
        link: "/web-development",
    },
    {
        icon: uxDesign,
        title: "UI/UX Design",
        link: "/ui-ux-design",
    },
    {
        icon: digitalMarketing,
        title: "Digital Marketing",
        link: "/digital-marketing",
    },
    {
        icon: appDevelopment,
        title: "App Development",
        link: "/app-development",
    },
];






export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);


    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <nav className="w-full top-0 left-0 z-50 bg-[#ffffff] shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-2 sm:px-4">

                <Link to="/" className="h-20 w-56 flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-full w-full object-cover" />
                </Link>


                <div className="hidden lg:flex space-x-6 font-medium text-black relative">


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
                                <div className="bg-[#141414] shadow-2xl rounded-2xl p-10 w-[1300px] max-h-[100vh] overflow-y-auto flex flex-col relative">


                                    <button
                                        onClick={() => setOpenDropdown(null)}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                    >
                                        <RxCross2 size={24} />
                                    </button>

                                    <div className="grid grid-cols-5 gap-4 ">
                                        {ServicesCard.map((card, idx) => (
                                            <Link
                                                to={card.link}
                                                key={idx}
                                                onClick={() => setOpenDropdown(null)}
                                                className="border border-white flex flex-col gap-4 rounded-lg px-2 p-4 
                 items-center justify-center content-center transition-all duration-300 hover:shadow-[0_0_25px_#00f0ff] group"
                                            >
                                                <img
                                                    src={card.icon}
                                                    alt="Company software"
                                                    className="h-20 w-20 object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                                <p className="font-[inter] text-base text-white">{card.title}</p>
                                            </Link>
                                        ))}
                                        

                                    </div>
                                    <div className="mt-6 flex justify-between items-center  pt-4 text-white">

                                       
                                        <div className="flex items-center gap-3 text-[#1398c8] underline cursor-pointer">
                                            <Link to="/services"
                                                onClick={() => setOpenDropdown(null)} className="text-xl font-medium">Our Services</Link>
                                            <FaLongArrowAltRight size={24} />
                                        </div>

                                        
                                        <div className="flex items-center gap-3 bg-[#1398c8] px-6 py-1 rounded-full cursor-pointer">
                                            <Link className="text-lg font-normal text-white uppercase">Request a Call</Link>
                                        </div>

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
                    <Link to="/about" className="hover:text-[#1398c8] font-[inter] font-semibold">
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
                className={`fixed top-0 left-0 h-full w-screen bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >

                <div className="flex items-center justify-between px-6 h-20">
                    <Link to="/" className="h-10 w-28 flex-shrink-0">
                        <img src={logo} alt="Logo" className="h-full w-full object-cover" />
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="text-[#1398c8]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>


                <ul className="flex flex-col space-y-4 px-6 py-6 text-[#0c2d44] font-medium">
                    <li>
                        <Link to="/" className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>

                    <li>
                        <button
                            onClick={() => toggleDropdown("services")}
                            className="w-full text-left hover:text-[#1398c8] font-semibold flex justify-between items-center"
                        >
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openDropdown === "services" && (
                            <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                                <li>
                                    <button
                                        onClick={() => toggleDropdown("web development")}
                                        className="w-full text-left hover:text-[#1398c8] font-semibold flex justify-between items-center"
                                    >
                                        Web development
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${openDropdown === "web development" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openDropdown === "web development" && (
                                        <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                                            <li><Link to="/services/web-development" onClick={() => setIsOpen(false)}>Web Development</Link></li>
                                            <li><Link to="/services/app-development" onClick={() => setIsOpen(false)}>App Development</Link></li>
                                            <li><Link to="/services/ui-ux" onClick={() => setIsOpen(false)}>UI/UX Design</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li><Link to="/services/app-development" onClick={() => setIsOpen(false)}>App Development</Link></li>
                                <li><Link to="/services/ui-ux" onClick={() => setIsOpen(false)}>UI/UX Design</Link></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button
                            onClick={() => toggleDropdown("technologies")}
                            className="w-full text-left hover:text-[#1398c8] font-semibold flex justify-between items-center"
                        >
                            Technologies
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${openDropdown === "technologies" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openDropdown === "technologies" && (
                            <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                                <li><Link to="/technologies/react" onClick={() => setIsOpen(false)}>React</Link></li>
                                <li><Link to="/technologies/node" onClick={() => setIsOpen(false)}>Node.js</Link></li>
                                <li><Link to="/technologies/aws" onClick={() => setIsOpen(false)}>AWS</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/about" className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>About Us</Link></li>
                    <li><Link to="/work" className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>Our Work</Link></li>
                    <li><Link to="/startup-solution" className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>StartUp Solution</Link></li>
                    <li><Link to="/website-software" className="hover:text-[#1398c8] font-semibold" onClick={() => setIsOpen(false)}>Website/Software</Link></li>
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
