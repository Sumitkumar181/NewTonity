import React from "react";
import { motion } from "framer-motion";

import Banner4 from "../../assets/HomePageImage/banner2.jpg"
import amazon from "../../assets/HomePageImage/amazon.svg";
import adobe from "../../assets/HomePageImage/adobe.svg";
import slack from "../../assets/HomePageImage/slack.svg";
import spotify from "../../assets/HomePageImage/spotify.svg";
import zoom from "../../assets/HomePageImage/zoom.svg";
import zaiper from "../../assets/HomePageImage/zaiper.svg";

export default function HeroSection() {
    const logos = [
        { src: amazon, alt: "Amazon" },
        { src: zoom, alt: "Zoom" },
        { src: slack, alt: "Slack" },
        { src: adobe, alt: "Adobe" },
        { src: spotify, alt: "Spotify" },
        { src: zaiper, alt: "Zaiper" },
    ];

    return (
        <div className="overflow-x-hidden overflow-y-auto"> 
           
            <section
                className="relative w-full min-h-[30vh] sm:min-h-[80vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden"
                style={{
                    backgroundImage: `url(${Banner4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
               
                <div className="absolute inset-0 bg-[#011c30] opacity-40 z-0"></div>

                
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-[audiowide] font-bold text-white sm:mb-6 mb-2 mt-0 lg:mt-10 leading-tight">
                        A <span className="text-white">Digital Product</span> Studio
                        <br className="hidden sm:block" /> that will Work
                    </h1>

                    <div className="flex flex-row gap-3 sm:gap-6 mb-6">
                        <button className="relative px-4 sm:px-20 sm:py-3 py-3 bg-[#1398c8] text-sm sm:text-xl text-white font-[inter] font-bold   hover:bg-[#0d6a8b] transition-transform skew-x-[-12deg]">
                            <span className="inline-block transform skew-x-[12deg]">Our Works</span>
                        </button>
                        <button className="px-4 sm:px-20 sm:py-2 py-3 border-2 text-sm sm:text-xl text-white font-[inter] font-bold hover:text-[#1398c8] transition-transform skew-x-[-12deg]">
                            <span className="inline-block transform skew-x-[12deg]">Contact Us</span>
                        </button>
                    </div>
                </div>

               
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0c2d44] text-white px-4 py-2 sm:px-4 rounded-full shadow-md z-10">
                    <p className="text-xs sm:text-xs md:text-sm font-[inter] font-medium">
                        Trusted By 250+ Companies
                    </p>
                </div>
            </section>


            
            <div className="bg-[#0c2d44] flex items-center justify-center py-6 px-4 sm:px-8 overflow-x-auto scrollbar-hide">
                <ul className="flex flex-row flex-nowrap gap-10 sm:gap-10 md:gap-18">
                    {logos.map((logo, i) => (
                        <motion.li
                            key={i}
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-1/3 sm:w-auto flex justify-center"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 w-auto object-contain"
                            />
                        </motion.li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
