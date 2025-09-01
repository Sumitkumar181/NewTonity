import React, { useState } from "react";

const technologyData = {
    Frontend: ["React", "Vue", "Angular", "Tailwind CSS", "Bootstrap"],
    Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    Backend: ["Node.js", "Express.js", "Django", "Spring Boot"],
    CMS: ["WordPress", "Drupal", "Joomla", "Shopify"],
    "Infra and DevOps": ["AWS", "Docker", "Kubernetes", "Jenkins"],
};

const technologyName = Object.keys(technologyData);

export default function TechnologySection() {
    const [selectedTech, setSelectedTech] = useState("Frontend");

    return (
        <div className="grid mt-10">

            <h2 className="font-[audiowide] text-2xl sm:text-3xl lg:text-4xl mb-8 text-center">
                <span className="text-[#1398c8]">Technology</span> We Work{" "}
                <span className="text-[#0c2d44]"> With Us</span>
            </h2>


            <div
                className="flex items-center justify-center gap-8 px-4 sm:px-10 
                   overflow-x-auto sm:overflow-x-visible 
                   scrollbar-hide"
            >
                {technologyName.map((tech, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedTech(tech)}
                        className={`
              min-w-[150px]  py-4 px-6 rounded-lg cursor-pointer 
              flex items-center justify-center font-[inter] font-semibold
              transition-colors duration-300 
              ${selectedTech === tech ? "bg-[#0c2d44] text-white" : "bg-[#1398c8] text-white hover:bg-[#0c2d44]"}
            `}
                    >
                        {tech}
                    </div>
                ))}
            </div>


            <div className="grid py-10 mx-10 mt-6 border rounded-lg bg-white shadow">
                <div className="flex flex-wrap gap-3 justify-center">
                    {technologyData[selectedTech].map((item, idx) => (
                        <span
                            key={idx}
                            className="px-8 py-2 bg-[#f0f9ff] border border-[#1398c8] text-[#0c2d44] rounded-lg font-[inter] text-sm hover:bg-[#1398c8] hover:text-white transition"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
