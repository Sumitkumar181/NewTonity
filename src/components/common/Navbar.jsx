import React, { useState } from 'react';
import logo from "../../assets/logos/logo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full  top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
                <Link to="/" className="h-32 w-60 flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-full w-full object-cover" />
                </Link>

                <div className="hidden lg:flex space-x-4 font-medium text-[#0c2d44]">
                    <Link to="/" className="hover:text-[#1398c8] font-audiowide text-base font-[audiowide] font-semibold transition-colors duration-200">Home</Link>
                    <Link to="about" className="hover:text-[#1398c8] text-base font-[audiowide] font-semibold transition-colors duration-200">About Us</Link>
                    <Link to="services" className="hover:text-[#1398c8] text-base font-[audiowide] font-semibold transition-colors duration-200">Services</Link>
                    <Link className="hover:text-[#1398c8] text-base font-[audiowide] font-semibold transition-colors duration-200">Our Work</Link>
                    <Link className="hover:text-[#1398c8] text-base font-[audiowide] font-semibold transition-colors duration-200">StartUp Solution</Link>
                    <Link className="hover:text-[#1398c8] text-base font-[audiowide] font-semibold transition-colors duration-200">Website/Software</Link>
                </div>

                <div className="hidden lg:block">
                    <Link className="bg-[#1398c8] text-white font-bold text-base hover:bg-[#0c2d44] rounded-lg px-6 py-2  transition-colors duration-200">
                        Contact Us
                    </Link>
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#1398c8] focus:outline-none"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
                    <ul className="flex flex-col space-y-4 px-6 py-4 text-elephant font-medium">
                        <li><Link to="/" className="hover:text-easternblue text-base font-semibold">Home</Link></li>
                        <li><Link to="about" className="hover:text-easternblue text-base font-semibold">About Us</Link></li>
                        <li><Link to="services" className="hover:text-easternblue text-base font-semibold">Services</Link></li>
                        <li><Link className="hover:text-easternblue text-base font-semibold">Our Work</Link></li>
                        <li><Link className="hover:text-easternblue text-base font-semibold">StartUp Solution</Link></li>
                        <li><Link className="hover:text-easternblue text-base font-semibold">Website/Software</Link></li>
                        <li>
                            <Link className="block bg-easternblue text-white font-bold text-base hover:bg-elephant rounded-lg px-6 py-2 transition text-center">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
