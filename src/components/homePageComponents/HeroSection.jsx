import React from "react";
import { motion } from "framer-motion";

import Abstract from "../../assets/HomePageImage/AbstractDesign.svg";
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
           
            <section className="relative w-full min-h-[40vh] sm:min-h-[80vh] md:min-h-screen bg-white flex flex-col items-center justify-center text-center overflow-hidden"
                style={{
                    backgroundImage: `url(${Abstract})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-[audiowide] font-bold text-[#1398c8] mb-6 mt-0 lg:mt-10 leading-tight">
                    A <span className="text-[#0c2d44]">Digital Product </span> Studio{" "}
                    <br className="hidden sm:block" /> that will Work
                </h1>

                
                <div className="flex flex-row sm:flex-row gap-3 sm:gap-2 z-10">
                    <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition">
                        Our Works
                    </button>
                    <button className="px-6 py-3 bg-[#1398c8] text-white font-semibold rounded-md hover:bg-[#115d79] transition">
                        Contact Us
                    </button>
                </div>

                
                


                
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0c2d44] text-white px-4 py-2 sm:px-4 rounded-full shadow-md">
                    <p className="text-xs sm:text-sm md:text-lg font-medium">
                        Trusted By 250+ Companies
                    </p>
                </div>

            </section>

            
            <div className="bg-[#0c2d44] flex items-center justify-center py-6 px-4 sm:px-8 overflow-x-auto scrollbar-hide">
                <ul className="flex flex-row flex-nowrap gap-6 sm:gap-10 md:gap-18">
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
                                className="h-12 w-auto object-contain"
                            />
                        </motion.li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
