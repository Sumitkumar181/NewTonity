import React, { useState } from 'react';
import logo from "../../assets/logos/logo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full top-0 left-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-2 sm:px-4">
              
                <Link to="/" className="h-16 w-44 flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-full w-full object-cover" />
                </Link>

               
                <div className="hidden lg:flex space-x-6 font-medium text-[#0c2d44]">
                    <Link to="/" className="hover:text-[#1398c8] font-[audiowide] font-semibold">Home</Link>
                    <Link to="about" className="hover:text-[#1398c8] font-[audiowide] font-semibold">About Us</Link>
                    <Link to="services" className="hover:text-[#1398c8] font-[audiowide] font-semibold">Services</Link>
                    <Link className="hover:text-[#1398c8] font-[audiowide] font-semibold">Our Work</Link>
                    <Link className="hover:text-[#1398c8] font-[audiowide] font-semibold">StartUp Solution</Link>
                    <Link className="hover:text-[#1398c8] font-[audiowide] font-semibold">Website/Software</Link>
                </div>

                
                <div className="hidden lg:block">
                    <Link className="bg-[#1398c8] text-white font-bold hover:bg-[#0c2d44] rounded-lg px-6 py-2 transition">
                        Contact Us
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
                    <li>
                        <Link className="block bg-[#1398c8] text-white font-bold hover:bg-[#0c2d44] rounded-lg px-6 py-2 text-center transition" onClick={() => setIsOpen(false)}>
                            Contact Us
                        </Link>
                    </li>
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
