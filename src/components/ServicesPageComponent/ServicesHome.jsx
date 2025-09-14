import React from 'react'
import Button from "../common/Button"
import Services from "../../assets/images/ServicesImage/Services.mp4"
import CircleIconButton from "../common/CircleIconButton"
import servicesBanner from "../../assets/images/ServicesImage/services2banner.jpg"
import Software from "../../assets/images/ServicesImage/software development.png";
import branding from "../../assets/images/ServicesImage/layer.png"
import digitalMarketing from "../../assets/images/ServicesImage/content-strategy.png"
import uxDesign from "../../assets/images/ServicesImage/ux-design.png"
import webDevelopment from "../../assets/images/ServicesImage/web development.png"
import appDevelopment from "../../assets/images/ServicesImage/mobile-development.png"
import fintech from "../../assets/images/ServicesImage/fintech.png";
import Edtech from "../../assets/images/ServicesImage/edtech.png"
import healthcare from "../../assets/images/ServicesImage/healthcare.png"
import logistics from "../../assets/images/ServicesImage/logistics.png"
import ecommerce from "../../assets/images/ServicesImage/ecommerce.png"
import discovery from "../../assets/images/ServicesImage/discovery.png"
import Marketing from "../../assets/images/ServicesImage/digital-marketing.png";
import Deployment from "../../assets/images/ServicesImage/project-scheme.png"
import Testing from "../../assets/images/ServicesImage/testing.png"
import Solution from "../../assets/images/ServicesImage/creativity.png"
import Design from "../../assets/images/ServicesImage/pen-tool.png"
import Support from "../../assets/images/ServicesImage/software.png"
import CustomDevelopment from "../../assets/images/ServicesImage/development.png"
import TextDraw from '../common/TextDraw';

    

const ServicesCard = [
    {
        icon: Software,
        title: "Company Software",
        desc: "Newtonity Technology offers end-to-end company software development services to empower businesses with tailored solutions. We focus on prioritizing scalability, security, and usability, so from ERP systems to industry-specific applications, our software is designed to automate processes, improve productivity, and provide seamless integrations."
    },
    {
        icon: branding,
        title: "Branding Design",
        desc: "We help in crafting compelling branding solutions that represent your business while offering a space to connect with your audience. Our services include logo design, visual storytelling, and building cohesive brand guidelines that reflect your values and mission, so ready to build a strong, memorable brand? Trust us."
    },
    {
        icon: webDevelopment,
        title: "Web Development",
        desc: "Newtonity helps provide robust, responsive websites that help reflect your brand identity effectively. We deliver website development services with cutting-edge technology to ensure fast performance, seamless navigation, and work to provide a captivating user experience that grows your online presence."
    },
    {
        icon: uxDesign,
        title: "UI/UX Design",
        desc: "We help in crafting compelling branding solutions that represent your business while offering a space to connect with your audience. Our services include logo design, visual storytelling, and building cohesive brand guidelines that reflect your values and mission, so ready to build a strong, memorable brand? Trust us."
    },
    {
        icon: appDevelopment,
        title: "Digital Marketing",
        desc: "Newtonity helps provide robust, responsive websites that help reflect your brand identity effectively. We deliver website development services with cutting-edge technology to ensure fast performance, seamless navigation, and work to provide a captivating user experience that grows your online presence."
    },
    {
        icon: digitalMarketing,
        title: "App Development",
        desc: "We help in crafting compelling branding solutions that represent your business while offering a space to connect with your audience. Our services include logo design, visual storytelling, and building cohesive brand guidelines that reflect your values and mission, so ready to build a strong, memorable brand? Trust us."
    },
]


const industry = [
    {
        icon: fintech,
        title: "Fintech",
    },
    {
        icon: Edtech,
        title: "Edtech",
    },
    {
        icon: healthcare,
        title: "Healthcare",
    },
    {
        icon: logistics,
        title: "Logistics",
    },
     {
         icon: ecommerce,
         title: "Ecommerce",
    },
    {
        icon: fintech,
        title: "Fintech",
    }
]


const hire = [
    {
        icon: fintech,
        title: "Developer",
    },
    {
        icon: Edtech,
        title: "Designer",
    },
    {
        icon: healthcare,
        title: "Consultant",
    },
    {
        icon: logistics,
        title: "Manual Tester",
    },
    {
        icon: ecommerce,
        title: "Content Writer",
    },
    {
        icon: fintech,
        title: "Technical Team",
    }
]


const SdlcModel = [
    {
        icon: discovery,
        title: "Discovery & Consultation",
    },
    {
        icon: Solution,
        title: "Solution Planning",
    },
    {
        icon: Design,
        title: "Design & Prototyping",
    },
    {
        icon: CustomDevelopment,
        title: "Custom Development",
    },
    {
        icon: Testing,
        title: "Testing & Compliance",
    },
    {
        icon: Deployment,
        title: "Deployment & Launch",
    },
    {
        icon: Marketing,
        title: "Marketing & User Acquisition",
    },
    {
        icon: Support,
        title: "Ongoing Support & Evolution",
    }
]



export default function ServicesHome() {
        


        return (
            <section className="relative  w-full py-10 sm:py-14 lg:py-20 bg-black ">
                <div className="lines-container">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10">

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-[inter] font-semibold text-[#1398c8]">
                        Newtonity is A Product
                    </h2>


                    <p className="mt-6 text-sm sm:text-base md:text-base text-[#dcdfe0] font-[inter] leading-relaxed">
                        Engineering Company providing strategic and technology consulting in the field of Web, Mobile and Software domain. We are focused on designing and developing user-centred products and applications for startups to elite business groups across the globe.
                    </p>


                    <p className="mt-3 text-sm sm:text-base md:text-base text-[#dcdfe0] font-[inter] leading-relaxed">
                        Newtonity is a team of individuals with diverse functional and technical expertise focused on solving business problems by developing customer-centric applications and e-business solutions. Newtonity is a place where one learns about professionalism, ethics, values and importance of client requirements, and how to solve them efficiently using product engineering and technology expertise.
                    </p>
                </div>
                <div className="max-w-full mx-auto mt-6 px-4 sm:px-6 lg:px-10 py-10 bg-[#eef0f1]">

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-[inter] font-semibold text-[#1398c8]">
                        Website Development
                    </h2>


                    <p className="mt-6 text-sm sm:text-base md:text-base text-[#346474] font-[inter] leading-relaxed">
                        We have a true passion for developing websites, and that is what we do best. Our websites are built with every device in mind – from the smallest smartphone to the largest display.
                    </p>


                    <p className="mt-3 text-sm sm:text-base md:text-base text-[#346474] font-[inter] leading-relaxed">
                        We have different packages available, ranging from a small 5-page static website to a fully dynamic WordPress development project.
                    </p>
                </div>
                <div className="max-w-full mx-auto mt-6 px-4 sm:px-6 lg:px-10 py-10    ">

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-[inter] font-semibold text-[#1398c8]">
                        Mobile Apps Design
                    </h2>


                    <ol className="mt-6 list-decimal list-inside space-y-2 text-[#dcdfe0] font-[inter] leading-relaxed text-sm sm:text-base md:text-base">
                        <li>A smart business strategy.</li>
                        <li>Killer UI/UX designs.</li>
                        <li>A team of Mobile Development Superheroes.</li>
                        <li>We’ve got all that it takes to develop the apps that will outrun all others in this glut of lackluster mobile apps.</li>
                    </ol>
                </div>
                <div className="max-w-full mx-auto mt-6 px-4 sm:px-6 lg:px-10 py-10 bg-[#eef0f1]">

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-[inter] font-semibold text-[#1398c8]">
                        Blog & Artical Writing
                    </h2>


                    <p className="mt-6 text-sm sm:text-base md:text-base text-[#346474] font-[inter] leading-relaxed">
                        When it comes to Search Engine Optimization (SEO), “Content is King”. Professionally written website and blog content makes a huge impact on both search engines and business credibility.
                    </p>


                    <p className="mt-3 text-sm sm:text-base md:text-base text-[#346474] font-[inter] leading-relaxed">
                        Our website article or blog writing service is for 500-600 word keyword-driven posts. SEO content writing and publishing to your WordPress website is included with all article writing services.
                    </p>
                </div>
                <div className="max-w-full mx-auto mt-6 px-4 sm:px-6 lg:px-10 py-10 ">

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-[inter] font-semibold text-[#1398c8]">
                        Hosting & Maintenance
                    </h2>


                    <p className="mt-6 text-sm sm:text-base md:text-base text-[#dcdfe0] font-[inter] leading-relaxed">
                        Our hosting servers are located at one of the most secure datacenters in the world. Website hosting includes regular software and security updates, support, e-mail, and more.
                    </p>


                    <p className="mt-3 text-sm sm:text-base md:text-base text-[#dcdfe0] font-[inter] leading-relaxed">
                        Our turnaround time for website maintenance and updates cannot be beat. Requests for small site changes are usually done within hours.
                    </p>
                    <p className="mt-3 text-sm sm:text-base md:text-base text-[#dcdfe0] font-[inter] leading-relaxed">
                        Strengthen your brand positioning, awareness, revenue objectives and market share with our custom-built digital marketing services to suit their business needs. Get easily accessible to your target audience on mobiles and social networking sites across different platforms.
                    </p>
                    <p className="mt-3 text-sm sm:text-base md:text-base text-[#dcdfe0] font-[inter] leading-relaxed">
                        Reimagine the way world looks at the transaction of data. Blockchain is creating the systems with the potential to disrupt the current way of business. Blockhain is essentially a repository of data that records transactions and places them in a nodal arrangement of computers. It stores information with foolproof time stamping for accelerated scalability of a project. While Bitcoin (BTC) democratized the creation of crypto currency, Ethereum provided us the concept of smart contracts. Flexsin is at the center of it all. We are capacitating the businesses with robust blockchain solutions.
                    </p>
                </div>
                <section className="relative w-full h-[16rem] sm:h-[18rem] md:h-[18rem] lg:h-[24rem] overflow-hidden">
                    
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={Services} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                   
                    {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 sm:px-6 md:px-12 text-center">
                        <h2 className="text-white font-[audiowide] font-medium mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                            AR/VR TOUR : Specialisation in AR/VR tours.
                        </h2>
                    </div> */}
                </section>

                <div className="grid max-w-7xl mx-auto mt-10 gap-6 px-4 sm:px-6 lg:px-8 
                grid-rows-1 sm:grid-rows-2 lg:grid-rows-3">

                    {ServicesCard.map((value, index) => (
                        <div
                            key={index}
                            className="relative group px-8 py-6 border border-white custom-border hover:border-[#1398c8] 
                hover:border-2 border-opacity/50 hover:rounded-2xl transition-all duration-300 ease-in-out
                overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-bl from-[#4e5253] to-[#838a8f] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div>
                            <img
                                src={value.icon}
                                alt={value.title}
                                className="w-20 h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                            />

                            
                                <h2 className="relative z-10 text-xl sm:text-2xl font-[inter] text-white font-semibold mb-3">
                                {value.title}
                            </h2>
                                 </div>

                            
                            <p className="relative z-10 text-sm sm:text-base md:text-lg text-[#97a5aa] leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}

                </div>
                <div className='grid max-w-6xl mx-auto mt-14 gap-6 px-4 sm:px-6 lg:px-8'>
                    <h2 className="text-white text-center font-[audiowide] font-medium mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                        Industries We Work With
                    </h2>
                    <div className='grid max-w-7xl mx-auto mt-4 gap-8 px-4 sm:px-6 lg:px-2 
                grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 '>
                        {industry.map((indus, idx) => (
                            <div key={idx} className='group  hover:shadow-lg  flex flex-col items-center justify-center
                 px-8 py-6  border border-white custom-border hover:border-[#1398c8]  hover:border-2 border-opacity/50 hover:rounded-2xl
                  transition-all duration-400 ease-in-out hover:bg-gradient-to-bl from-[#dfe3e4] to-[#838a8f]'>
                                <img
                                    src={indus.icon}
                                    alt={indus.title}
                                    className="w-10 h-10 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
                                />
                                <h2 className="text-xl sm:text-base font-[audiowide] text-white font-bold ">
                                    {indus.title}
                                </h2>

                            </div>

                        ))}
                        
                    </div>

                </div>
                <div className='grid max-w-6xl mx-auto mt-14 gap-6 px-4 sm:px-6 lg:px-8'>
                    <h2 className="text-white text-center font-[audiowide] font-medium mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                        Hire
                    </h2>
                    <div className='grid max-w-7xl mx-auto mt-4 gap-8 px-4 sm:px-6 lg:px-2 
                grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 '>
                        {hire.map((hireTeam, idx) => (
                            <div key={idx} className='group  hover:shadow-lg   flex flex-col items-center justify-center text-center
                 px-8 py-6  border border-white custom-border hover:border-[#1398c8]  hover:border-2 border-opacity/50 hover:rounded-2xl
                  transition-all duration-400 ease-in-out hover:bg-gradient-to-bl from-[#4e5253] to-[#838a8f]'>
                                <img
                                    src={hireTeam.icon}
                                    alt={hireTeam.title}
                                    className="w-10 h-10 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
                                />
                                <h2 className="text-xl sm:text-base font-[audiowide] text-white font-bold ">
                                    {hireTeam.title}
                                </h2>

                            </div>

                        ))}

                    </div>

                </div>

                <div className='grid max-w-6xl mx-auto mt-14 gap-6 px-4 sm:px-6 lg:px-8'>
                    <h2 className="text-white text-center font-[audiowide] font-medium mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                        End-to-End Digital Delivery
                    </h2>
                    <p className='text-white text-center font-[inter] text-base'><span className='text-[#1398c8]'>Core principles</span> guide every smart solution</p>
                    <div className='grid max-w-7xl mx-auto mt-4  
                grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mb-10'>
                        {SdlcModel.map((phase, idx) => (
                            <div key={idx} className='group  hover:shadow-lg   flex flex-col items-center justify-center text-center
                 px-8 py-6    hover:border-[#1398c8]  hover:border border-opacity/50 gap-2
                  transition-all duration-400 ease-in-out '>
                                <img
                                    src={phase.icon}
                                    alt={phase.title}
                                    className="w-14 h-14 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
                                />
                                <h2 className="text-xl sm:text-base font-[inter] text-white font-medium ">
                                    {phase.title}
                                </h2>

                            </div>

                        ))}

                    </div>

                </div>
                <section className="bg-white py-10 sm:py-14 md:py-20 px-5">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex flex-col items-center">
                            <button className="mb-3 px-4 py-1 border border-black text-xs md:text-sm font-extralight font-[kanit] uppercase rounded-full">
                                work with us
                            </button>

                            <h2 className="text-3xl sm:text-4xl text-[#212529] md:text-5xl lg:text-5xl font-[kanit] font-normal ">
                                We would love to hear
                                
                            </h2>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#212529] lg:text-5xl font-[kanit] font-normal leading-tight tracking-tight">
                                more about your project

                            </h2>

                           
                            <div className="mt-8 md:mt-10 flex items-center justify-center gap-4">
                              
                                <div className="md:hidden">
                                    <CircleIconButton onClick={() => {  }} />
                                </div>

                                
                                <div className="hidden md:block ">
                                    <Button
                                        className="h-38 w-38 bg-[#1398c8] hover:bg-[#0a526d] text-base md:text-lg transition-colors duration-300"
                                        ariaLabel="Let's talk about your project"
                                    >
                                        Let's Talk Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        )
    }
