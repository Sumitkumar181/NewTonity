import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import office from "../../../../assets/images/ServicesImage/office.jpg";
import webDev from "../../../../assets/HomePageImage/development.png"
import react from "../../../../assets/images/Technology/react.svg";
import angular from "../../../../assets/images/Technology/angular.png";
import vue from "../../../../assets/images/Technology/vue.png";
import next from "../../../../assets/images/Technology/next.png";
import node from "../../../../assets/images/Technology/node.png";
import java from "../../../../assets/images/Technology/java.png";
import php from "../../../../assets/images/Technology/php.png";
import net from "../../../../assets/images/Technology/net.jpeg";
import python from "../../../../assets/images/Technology/python.jpeg";

import mysql from "../../../../assets/images/Technology/mysql.png";
import postgreSql from "../../../../assets/images/Technology/postgreSql.png";
import mongodb from "../../../../assets/images/Technology/mongodb.png";
import oracle from "../../../../assets/images/Technology/oracle.png";

import aws from "../../../../assets/images/Technology/aws.png";
import azure from "../../../../assets/images/Technology/azure.png";
import google_cloud from "../../../../assets/images/Technology/google_cloud.png";
import docker from "../../../../assets/images/Technology/docker.png";
import Kubernetes from "../../../../assets/images/Technology/Kubernetes.jpeg";

import Odoo from "../../../../assets/images/Technology/Odoo.png";
import Sap from "../../../../assets/images/Technology/Sap.jpeg";
import zoho from "../../../../assets/images/Technology/zoho.jpeg";
import erp from "../../../../assets/images/Technology/erp.png";
import salesforce from "../../../../assets/images/Technology/salesforce.png";
import leadership from "../../../../assets/images/ServicesImage/leadership.png"

const Crm = [
    {
        img: Odoo,
        title: "Odoo",
    },
    {
        img: Sap,
        title: "SAP",
    },
    {
        img: salesforce,
        title: "Salesforce",
    },
    {
        img: zoho,
        title: "Zoho",
    },
    {
        img: erp,
        title: "ERP Next",
    },
]

const Cloud = [
    {
        img: aws,
        title: "AWS",
    },
    {
        img: azure,
        title: "Azure",
    },
    {
        img: google_cloud,
        title: "Google Cloud",
    },
    {
        img: docker,
        title: "Docker",
    },
    {
        img: Kubernetes,
        title: "Kubernetes",
    },
]


const steps = [
    {
        id: 1,
        title: "Requirement Analysis",
        description: "Understand your business, goals, and target audience",
        icon: webDev,
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Craft engaging, intuitive, and user-friendly interfaces",
        icon: webDev,
    },
    {
        id: 3,
        title: "Development",
        description: "Build secure, scalable, and SEO-friendly websites",
        icon: webDev,
    },
    {
        id: 4,
        title: "Testing & QA",
        description: "Smooth functionality across devices and browsers",
        icon: webDev,
    },
    {
        id: 5,
        title: "Launch & Deployment",
        description: "Deploy your website with full optimization",
        icon: webDev,
    },
    {
        id: 6,
        title: "Ongoing Maintenance",
        description: "Continuous updates, support, and improvements",
        icon: webDev,
    },
];


const databases = [
    {
        img: mysql,
        title: "MySql",
    },
    {
        img: postgreSql,
        title: "PostgreSql",
    },
    {
        img: mongodb,
        title: "MongoDB",
    },
    {
        img: oracle,
        title: "Oracle",
    },
]

const frontend = [
    {
        img: react,
        title: "React",
    },
    {
        img: angular,
        title: "Angular",
    },
    {
        img: vue,
        title: "Vue.js",
    },
    {
        img: next,
        title: "Next.js",
    },
]

const mobile = [
    {
        img: react,
        title: "React Native",
    },
    {
        img: java,
        title: "Java",
    },
    {
        img: python,
        title: "Python",
    },
    {
        img: node,
        title: "Node.js",
    },
]

const Backend = [
    {
        img: node,
        title: "Node.js",
    },
    {
        img: java,
        title: "Java",
    },
    {
        img: net,
        title: ".Net",
    },
    {
        img: php,
        title: "PHP",
    },
    {
        img: python,
        title: "Python",
    },
]

const whyChooseUs = [
    {
        title: "Global Delivery with Local Expertise",
        icon: leadership,
    },
    {
        title: "Scalable & Future-Ready Solutions",
        icon: leadership,
    },
    {
        title: "Data-Driven Strategies",
        icon: leadership,
    },
    {
        title: "Years of expertise across diverse industries",
        icon: leadership,
    },
    {
        title: "Dedicated Support",
        icon: leadership,
    },
]

export default function BrandContent() {
    return (
        <div>
            
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-6 sm:mt-10 md:mt-16 lg:mt-20">
                <div>
                    <p className="text-gray-700 font-[Geist Mono Fallback] font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
                        Your website is the first impression potential customers have with your
                        business. A slow, outdated, or poorly designed website can cost leads,
                        trust, and revenue. That's why we help you to build fast, responsive,
                        and visually stunning websites that attract visitors, engage customers,
                        and generate more revenue for your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 sm:mt-12 md:mt-16 gap-6 sm:gap-8 md:gap-10 items-center mb-12 sm:mb-16 md:mb-20">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[Geist Mono Fallback] font-semibold leading-snug">
                            Why a strong website matters
                        </h2>

                        <div className="flex flex-col gap-3 sm:gap-4">
                            <span className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-100 flex items-center gap-2 sm:gap-3 shadow-sm">
                                <TbArrowBadgeRightFilled className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" color="#1398c8" />
                                <p className="font-[Geist Mono Fallback] text-xs sm:text-sm md:text-base">
                                    70% of users judge a business's credibility based on its website
                                </p>
                            </span>

                            <span className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-100 flex items-center gap-2 sm:gap-3 shadow-sm">
                                <TbArrowBadgeRightFilled className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" color="#1398c8" />
                                <p className="font-[Geist Mono Fallback] text-xs sm:text-sm md:text-base">
                                    A responsive design improves user experience across all devices
                                </p>
                            </span>

                            <span className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-100 flex items-center gap-2 sm:gap-3 shadow-sm">
                                <TbArrowBadgeRightFilled className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" color="#1398c8" />
                                <p className="font-[Geist Mono Fallback] text-xs sm:text-sm md:text-base">
                                    Fast-loading websites increase conversions and sales
                                </p>
                            </span>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-[roboto]">
                            A professional website not only showcases your brand but also acts as
                            a 24/7 sales and marketing tool, driving more leads and opportunities
                            for your business.
                        </p>
                    </div>

                    <div className="w-full">
                        <img
                            src={office}
                            alt="Office"
                            className="w-full h-auto rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>
            </div>

           
            <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-[Geist Mono Fallback]">
                <h2 className="text-[#1398c8] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal mb-8 sm:mb-12">
                    Our Web Development Process
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-10 md:gap-20 pt-8 sm:pt-10 px-2 sm:px-4">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative border border-[#1398c8]/40 rounded-lg p-4 sm:p-6 group hover:border-[#0e9ed3] transition"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center -mt-16 mb-4 bg-[#292929] mx-auto sm:mx-0">
                                <img src={step.icon} alt={step.title} className="h-8 sm:h-10 md:h-12 object-contain" />
                            </div>

                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-center sm:text-left">
                                {step.title}
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

           
            <section className="bg-[#e5f8fa] text-[#2a2b2b] py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-[Geist Mono Fallback]">
                <h2 className="text-[#161616] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal mb-3">
                    Our Tech Stack
                </h2>
                <p className="text-[#979797] text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                    Our tech stack empowers innovation, scalability, and seamless digital solutions.
                </p>

                
                {[
                    { title: "Frontend", data: frontend, cols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" },
                    { title: "Backend", data: Backend, cols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"},
                    { title: "Mobile", data: mobile, cols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" },
                    { title: "Databases", data: databases, cols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" },
                    { title: "Cloud & DevOps", data: Cloud, cols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" },
                    { title: "ERP/CRM", data: Crm, cols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" },
                ].map((section, index) => (
                    <div key={index} className="mt-8 sm:mt-10">
                        <h4 className="text-center text-lg sm:text-xl md:text-2xl font-normal mb-4 sm:mb-6">
                            {section.title}
                        </h4>
                        <div className={`grid ${section.cols} gap-3 sm:gap-4 md:gap-6 lg:gap-4 mt-6 sm:mt-8 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12`}>
                            {section.data.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="px-3 sm:px-4 py-4 sm:py-6 flex flex-col gap-2 items-center bg-white border border-[#EBEBEB] rounded-lg transition-all hover:shadow-md"
                                >
                                    <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                                        <img
                                            src={tech.img}
                                            alt={`${tech.title} Logo`}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <div className="border-b border-[#EBEBEB] w-full my-2"></div>
                                    <h2 className="text-xs sm:text-sm md:text-base font-normal text-center">
                                        {tech.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            
            <section className="bg-black  mb-6 flex flex-col lg:flex-row gap-4 sm:gap-6 text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-[Geist Mono Fallback]">
                
                <div className="hidden lg:flex flex-col items-center justify-center">
                    <h2 className="text-[#1398c8] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal [writing-mode:vertical-lr] [text-orientation:mixed] rotate-180">
                        WHY CHOOSE US
                    </h2>
                </div>

               
                <div className="lg:hidden text-center mb-6">
                    <h2 className="text-[#1398c8] text-2xl sm:text-3xl md:text-4xl font-semibold">
                        WHY CHOOSE US
                    </h2>
                </div>

                
                <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6 border border-white">
                    {whyChooseUs.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 sm:gap-4 w-28 sm:w-32 md:w-36 lg:w-40"
                        >
                          
                            {index % 2 === 0 ? (
                                <>
                                    <div className="h-20 w-20 sm:h-44 sm:w-44 md:h-44 md:w-44 border border-[#1398c8]/40 rounded-lg flex items-center justify-center hover:rounded-2xl group hover:border-[#0e9ed3] transition-all duration-300 hover:bg-[#292929]">
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
                                        />
                                    </div>
                                    <p className="text-center text-xs sm:text-sm font-normal leading-tight">
                                        {item.title}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-center text-xs sm:text-sm font-normal leading-tight">
                                        {item.title}
                                    </p>
                                    <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-44 md:w-44 border border-[#1398c8]/40 rounded-lg flex items-center justify-center hover:rounded-2xl group hover:border-[#0e9ed3] transition-all duration-300 hover:bg-[#292929]">
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}