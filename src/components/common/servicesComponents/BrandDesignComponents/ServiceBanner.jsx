import React from "react";
import service from "../../../../assets/images/AboutImage/brand.jpg";

export default function ServiceBanner() {
    return (
        <section className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[300px] w-full">
           
            <img
                src={service}
                alt="Service Banner"
                className="w-full h-full object-cover"
            />

           
            <div className="absolute inset-0 bg-black/50"></div>

           
            <div className="absolute inset-0 flex flex-col lg:flex-row items-start lg:items-end justify-center lg:justify-between px-6 sm:px-10 md:px-16 lg:px-24 pb-6 lg:pb-12">
                
                <div className="">
                    <h2 className="text-white font-[Geist Mono Fallback] font-semibold leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        IT Solutions for Modern Businesses
                    </h2>
                    <p className="text-white font-[Geist Mono Fallback] mt-3 text-sm sm:text-base md:text-lg lg:text-xl">
                        Innovative IT solutions empowering modern businesses with efficiency
                        and growth.
                    </p>
                </div>

                {/* Right Content */}
                <div className="mt-6 lg:mt-0 flex flex-col items-start lg:items-end">
                    <p className="text-sm sm:text-base md:text-lg text-white font-medium font-[Geist Mono Fallback]">
                        Get Your Free Consultation
                    </p>
                    <button className="py-2 px-5 rounded-lg font-[Geist Mono Fallback] text-white border-2 mt-3 border-white hover:bg-white hover:text-black transition">
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
}
