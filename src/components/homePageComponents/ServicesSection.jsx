import React from "react";
import { motion } from "framer-motion";
import serviceBg4 from "../../assets/HomePageImage/servicesBg4.avif";
import serviceBg2 from "../../assets/HomePageImage/servicesBg2.jpg";


const line1 = "Work one step smarter and efficiently".split("");
const line2 = "with Newtonity Technology".split("");


const cards = [
    {
        title: "What We Offer!",
        items: [
            "UI/UX Design",
            "Branding Design",
            "Website Development",
            "Digital Marketing Solutions",
            "Mobile Apps Development",
            "Company Software Solutions",
        ],
    },
    {
        title: "What You Get!",
        items: [
            "Great Layouts",
            "Creative Ideas",
            "Best Hosting Ever",
            "Excellent Support",
            "Outstanding Support",
            "100% Customer Satisfaction",
        ],
    },
    {
        title: "Why Choose Us!",
        items: [
            "Always On Time",
            "Agile & Scalable Solutions",
            "Transparent Communication",
            "Industry-Experienced Team",
            "Data-driven & Creative Mindset",
            "Proven Track Record Of Success",
        ],
    },
];

export default function ServicesSection() {
    return (
        <section className="w-full box-border">
            
            <div
                className="relative w-full py-20 sm:py-28 lg:py-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${serviceBg4})` }}
            >
                
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c2d44]/80 to-[#1398c8]/70" />

                
                <div className="relative z-10 px-6 sm:px-12 lg:px-20">
                    {[line1, line2].map((line, idx) => (
                        <p
                            key={idx}
                            className="text-xl sm:text-2xl lg:text-3xl font-medium font-[audiowide] flex flex-wrap"
                        >
                            {line.map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ color: "#0c2d44" }}
                                    whileInView={{ color: "#ffffff" }}
                                    transition={{ delay: i * 0.03, duration: 0.3 }}
                                    viewport={{ once: true }} 
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </p>
                    ))}
                </div>
            </div>

            
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 lg:px-16 py-16 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${serviceBg2})` }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }} 
                        className="bg-[#123456]/30 backdrop-blur-md border border-gray-500 rounded-2xl p-6 text-white shadow-lg"
                    >
                        
                        <div className="border-b border-gray-400 mb-4 pb-2">
                            <h2 className="font-[audiowide] font-medium text-2xl sm:text-3xl lg:text-3xl">
                                {card.title}
                            </h2>
                        </div>

                     
                        <div className="grid gap-2">
                            {card.items.map((item, i) => (
                                <p
                                    key={i}
                                    className="font-[inter] font-normal text-base sm:text-lg lg:text-xl"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
