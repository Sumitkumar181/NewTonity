import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import map from  "../../assets/HomePageImage/map.png"

export default function Footer() {
  return (
    <footer className="relative  text-gray-300 bg-black font-[inter] py-12 overflow-hidden">

      
      <div
        className="absolute inset-0  pointer-events-none"
        style={{
          backgroundImage: `url(${map})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain", 
        }}
      ></div>

      
      <div className="relative z-10 container mx-auto px-6 lg:px-16">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-600 pb-10">

          
          <div>
            <h3 className="text-lg mb-4 text-white font-[Audiowide]">Services</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>App Marketing</li>
              <li>Digital Marketing</li>
              <li>Emerging Technologies</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Web Development</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg mb-4 text-white font-[Audiowide]">Company</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Our Events</li>
              <li>Testimonials</li>
              <li>Blog</li>
              <li>Terms And Conditions</li>
              <li>Cancellation Refunds</li>
              <li>Contact Us</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg mb-4 text-white font-[Audiowide]">Technologies</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>Backend</li>
              <li>Cloud Services</li>
              <li>CRM</li>
              <li>Frontend UI</li>
              <li>Solution Engineering</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg mb-4 text-white font-[Audiowide]">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white">
              <li>
                <p>ADVANT NAVIS BUSINESS PARK, Plot No-7, Noida-Greater Noida Expy, Sector No 142, Noida, Uttar Pradesh 201305, India</p>
              </li>
              <li>
                <p>Phone: +91 9876543210</p>
              </li>
              <li>
                <p>Email: info@newtonity.com</p>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="flex justify-center sm:justify-between items-center gap-4 flex-wrap py-6 border-b border-gray-600">
          <div className="flex flex-wrap gap-2">
            {[
              { name: "facebook", icon: <FaFacebookF /> },
              { name: "instagram", icon: <FaInstagram /> },
              { name: "twitter", icon: <FaXTwitter /> },
              { name: "linkedin", icon: <FaLinkedinIn /> },
              { name: "skype", icon: <FaSkype /> },
            ].map((item, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 bg-[#2a3a47] px-5 py-2 text-sm uppercase hover:bg-[#364b5a] transition"
              >
                {item.icon} {item.name}
              </button>
            ))}
          </div>
        </div>

        
        <div className="text-center text-xs mt-6 text-gray-400">
          © 2024-25{" "}
          <span className="text-[#1398c8] font-semibold">
            Newtonity Technology
          </span>
          , ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
