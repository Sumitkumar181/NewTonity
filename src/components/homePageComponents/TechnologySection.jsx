import React, { useState } from "react";
import {
    FaReact,
    FaVuejs,
    FaAngular,
    FaBootstrap,
    FaNodeJs,
    FaWordpress,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiFirebase,
    SiExpress,
    SiDjango,
    SiSpringboot,
    SiDrupal,
    SiJoomla,
    SiShopify,
    SiKubernetes,
    SiJenkins,
    SiFlutter,
    SiKotlin,
    SiSwift,
} from "react-icons/si";

// ----------------------------
// Technology Data
// ----------------------------
const technologyData = {
    Frontend: [
        { name: "React", icon: <FaReact className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Vue", icon: <FaVuejs className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Angular", icon: <FaAngular className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-7 h-7 sm:w-8 sm:h-8" /> },
    ],
    Mobile: [
        { name: "React Native", icon: <FaReact className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Flutter", icon: <SiFlutter className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Swift", icon: <SiSwift className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Kotlin", icon: <SiKotlin className="w-7 h-7 sm:w-8 sm:h-8" /> },
    ],
    Database: [
        { name: "MongoDB", icon: <SiMongodb className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "MySQL", icon: <SiMysql className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Firebase", icon: <SiFirebase className="w-7 h-7 sm:w-8 sm:h-8" /> },
    ],
    Backend: [
        { name: "Node.js", icon: <FaNodeJs className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Express.js", icon: <SiExpress className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Django", icon: <SiDjango className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-7 h-7 sm:w-8 sm:h-8" /> },
    ],
    CMS: [
        { name: "WordPress", icon: <FaWordpress className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Drupal", icon: <SiDrupal className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Joomla", icon: <SiJoomla className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Shopify", icon: <SiShopify className="w-7 h-7 sm:w-8 sm:h-8" /> },
    ],
    "Infra & DevOps": [
        { name: "AWS", icon: <FaAws className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Docker", icon: <FaDocker className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-7 h-7 sm:w-8 sm:h-8" /> },
        { name: "Jenkins", icon: <SiJenkins className="w-7 h-7 sm:w-8 sm:h-8" /> },
    ],
};

const technologyCategories = Object.keys(technologyData);

// ----------------------------
// Main Component
// ----------------------------
export default function TechnologySection() {
    const [selectedTech, setSelectedTech] = useState("Frontend");

    return (
        <section className="w-full mt-10 px-4 sm:px-8 lg:px-12 mb-10 box-border">
            {/* Section Title */}
            <h2 className="font-[audiowide] text-2xl sm:text-3xl lg:text-4xl mb-8 text-center leading-snug">
                <span className="text-[#1398c8]">Technology</span> We Work{" "}
                <span className="text-[#0c2d44]">With Us</span>
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-start sm:justify-center gap-3 sm:gap-6 lg:gap-8
                      overflow-x-auto max-w-full scrollbar-hide py-2">
                {technologyCategories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTech(category)}
                        className={`whitespace-nowrap py-2 px-5 cursor-pointer text-sm sm:text-base
                        flex items-center justify-center font-[inter] font-medium transition-colors duration-300
                        ${selectedTech === category
                                ? "bg-[#0c2d44] text-white"
                                : "bg-[#1398c8] text-white hover:bg-[#0c2d44]"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Technology Grid */}
            <div className="mt-6 bg-[#ebedf0] py-8 sm:py-10 w-full  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4  gap-4 sm:gap-6 w-full">
                    {technologyData[selectedTech].map((tech, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 sm:gap-2 p-4 sm:p-5  bg-white 
                         text-[#0c2d44] font-[inter] text-sm sm:text-base
                         hover:text-[#1398c8] transition-all duration-300"
                        >
                            <span>{tech.icon}</span>
                            <span className="text-base sm:text-lg font-medium">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
