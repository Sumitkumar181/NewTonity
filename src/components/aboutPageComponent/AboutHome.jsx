import React from "react";
import Vision from "../../assets/images/AboutImage/vision.png";
import Mission from "../../assets/images/AboutImage/launch.png";
import Goal from "../../assets/images/AboutImage/target.png";
import Strategy from "../../assets/images/AboutImage/strategy.png";

import consistency from "../../assets/images/AboutImage/consistency.png";
import Teamwork from "../../assets/images/AboutImage/idea.png";
import Innovation from "../../assets/images/AboutImage/programming.png";
import Integrity from "../../assets/images/AboutImage/cooperation.png";
import Contact from "../common/Contact";

const businessMantra = [
    {
        icon: Vision,
        title: "OUR VISION",
        desc: "To achieve sustainable growth through digital excellence and establish ourselves as a leader in the innovative and agile software development and digital marketing industry.",
    },
    {
        icon: Mission,
        title: "OUR MISSION",
        desc: "Our mission is to be an innovative performance-driven digital leader embracing the client's brand story and delivering exceptional results.",
    },
    {
        icon: Goal,
        title: "OUR GOALS",
        desc: "Execution Excellence · Elated Customer · Improved Efficiency · Energized Workforce",
    },
    {
        icon: Strategy,
        title: "OUR STRATEGIES",
        desc: "Collaboration · Transparency · Attract & Retain Talent · Timely Delivery",
    },
];


const coreValue = [
    {
        icon: Innovation,
        title: "INNOVATION",
        desc: "It is our unceasing endeavor to inspire intrusiveness and harness innovation. We constantly use progressive and creative approach for goal achievement and solving complex problems.",
    },
    {
        icon: Teamwork,
        title: "TEAMWORK",
        desc: "We believe that people who work together in collaboration achieve great heights and can handle most pressing challenges with ease. We work closely across all teams and make decisions in the best interest of the company.",
    },
    {
        icon: Integrity,
        title: "INTEGRITY",
        desc: "We’re honest and transparent in our dealings and never compromise on integrity. We emphasize on integrity in every decision that we take, resulting in developing an everlasting association based on trust and respect.",
    },
    {
        icon: consistency,
        title: "CONSISTENCY",
        desc: "Consistently is the key to success and we strive hard to be consistent in all our offerings. We try to bring uniformity in all that we do and our endeavor is to be trustworthy and dependable among our clients.",
    },
];

export default function AboutHome() {
    return (
        <div>
        <main className="px-4 sm:px-6 lg:px-8 mt-24 max-w-6xl mx-auto">
           
            <section className="text-center sm:text-left space-y-6">
                <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-[kanit] text-white ">
                    Building Tomorrow’s Business,
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-[kanit] text-white leading-tight">
                    Today with Newtonity Technology
                    </h2>
                </div>
                <p className="text-[#66fcf1] font-[inter] text-lg sm:text-xl md:text-2xl mt-4">
                    Newtonity Technology is leading the way.
                </p>
            </section>


            <section className="mt-14 grid gap-6 text-center sm:text-left">
                <p className="text-white text-base sm:text-base font-[inter] leading-relaxed">
                    Newtonity crafts digital tools that help businesses perform better,
                    faster, and smarter. From websites to mobile apps, marketing to ERP
                    and CRM systems, our solutions are designed to support growth and
                    deliver results. Every project we handle is focused on solving real
                    business challenges and creating meaningful improvements.
                </p>
                <p className="text-white text-base sm:text-lg font-[inter] leading-relaxed">
                    We don’t follow one-size-fits-all templates. Every business is
                    different, and so is every solution we build. Our process starts by
                    understanding your operations, your needs, and your future goals.
                    Whether you're a startup or a growing enterprise, we focus on
                    developing solutions that integrate seamlessly and perform reliably.
                </p>
                <p className="text-white text-base sm:text-lg font-[inter] leading-relaxed">
                    Clients choose Solwyz for our clarity, consistency, and honest
                    approach. We value long-term relationships and are committed to
                    helping you succeed at every step. From the first idea to post-launch
                    support, we keep your business at the center of everything we do. At
                    Solwyz Technologies, we don’t just deliver services—we become your
                    technology partner, ensuring that your digital foundation is strong,
                    scalable, and ready for whatever’s next.
                </p>
            </section>

           
            <section className="mt-32 ">
                <h2 className="text-white text-center font-[kanit] font-normal mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Our Business Mantra
                </h2>

                <ul
                    role="list"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl overflow-hidden border border-white transition-all duration-700 hover:shadow-[0_0_25px_#00f0ff] group"
                >
                    {businessMantra.map((mantra, idx) => (
                        <li
                            key={idx}
                            className="flex flex-col items-center gap-4 bg-black p-4 hover:translate-y-[-4px] transition-transform"
                        >
                            <img
                                src={mantra.icon}
                                alt={mantra.title}
                                loading="lazy"
                                decoding="async"
                                width={80}
                                height={80}
                                className="w-14 h-14 object-contain"
                            />
                            <h3 className="text-[#66fcf1] text-lg sm:text-xl font-[kanit] font-medium text-center">
                                {mantra.title}
                            </h3>
                            <p className="text-white text-sm sm:text-base font-[inter] text-center leading-relaxed">
                                {mantra.desc}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mt-32">
                <h2 className="text-white text-center font-[kanit] font-normal mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Our Core Values
                </h2>

                <ul
                    role="list"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl overflow-hidden border border-white "
                >
                    {coreValue.map((value, idx) => (
                        <li
                            key={idx}
                            className="flex flex-col items-center gap-4 bg-black p-4 hover:translate-y-[-4px] transition-transform"
                        >
                            <img
                                src={value.icon}
                                alt={value.title}
                                loading="lazy"
                                decoding="async"
                                width={80}
                                height={80}
                                className="w-14 h-14 object-contain"
                            />
                            <h3 className="text-[#66fcf1] text-lg sm:text-xl font-[kanit] font-medium text-center">
                                {value.title}
                            </h3>
                            <p className="text-white text-sm sm:text-base font-[inter] text-center leading-relaxed">
                                {value.desc}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
            
            </main>
            <div className="mt-20">
                <Contact />
            </div>
           
            </div>
    );
}
