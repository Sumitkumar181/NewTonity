import React from "react";
import webDevelopment from "../../assets/HomePageImage/web.gif";
import appDevelopment from "../../assets/HomePageImage/app.gif";
import UiUx from "../../assets/HomePageImage/UiUx.gif";
import seo from "../../assets/HomePageImage/seo.gif";
import digital from "../../assets/HomePageImage/digital.gif";
import Ecommerce from "../../assets/HomePageImage/Ecommerce.gif";

export default function ShowServices() {
    const services = [
        {
            title: "Web Development",
            desc: "Our Developers Are Urge To Innovate And Explore Different Arrays Of Coding.",
            img: webDevelopment,
        },
        {
            title: "App Development",
            desc: "We craft powerful, scalable and high-performing mobile applications for every platform.",
            img: appDevelopment,
        },
        {
            title: "UI/UX Design",
            desc: "We design intuitive and engaging user experiences with modern UI frameworks.",
            img: UiUx,
        },
        {
            title: "Search Engine Optimization",
            desc: "Want To Be At The Top Rankings In All The Major Search Engines? Then You Ought To Have Good SEO Strategy For Your Site.",
            img: seo,
        },
        {
            title: "Ecommerce Development",
            desc: "Make Your Online Shopping Website Livelier And User Friendly With Our Reasonable & Customized Ecommerce Solutions.",
            img: Ecommerce,
        },
        {
            title: "Digital Marketing",
            desc: "Here Comes The Need Of Adwords Management Wherein Your Google Adwords Accounts And Campaigns Are Perfectly Managed.",
            img: digital,
        },
    ];

    return (
        <div className="w-full px-4 sm:px-6 lg:px-12 py-10 bg-[#f9fafb]">
            
            <h2 className="font-[audiowide] text-2xl sm:text-3xl lg:text-4xl text-center">
                <span className="text-[#1398c8]">Our</span> Development{" "}
                <span className="text-[#0c2d44]">Services</span>
            </h2>
            <p className="font-[inter] text-center text-base mt-3">
                We are a creative and committed web design, development and digital
                marketing agency in India, known for more than a decade to build the
                most beautiful & engaging UI designs for distinct businesses. Our
                experts deliver a balance of creativeness and user experience with their
                result-oriented innovations and our clients get more than just a
                well-designed website, as we make sure to make users visit the site
                again & again.
            </p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="border px-4 py-8 flex flex-col items-center text-center bg-white shadow-md 
                       transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-14 h-14 object-contain mb-4"
                        />
                        <h3 className="font-[audiowide] font-semibold text-xl mb-4">
                            {service.title}
                        </h3>
                        <p className="text-base font-[roboto] text-black mb-4">
                            {service.desc}
                        </p>
                        <div className="mt-auto">
                            <button className="px-4 py-2 border text-sm font-[inter] rounded-md 
                                 hover:bg-[#1398c8] hover:text-white transition">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
