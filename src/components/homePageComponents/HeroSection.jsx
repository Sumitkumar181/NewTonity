import React from 'react'
import NewTonity from '../../assets/logos/newTonity.png'
import Abstract from '../../assets/HomePageImage/AbstractDesign.svg';
import amazon from '../../assets/HomePageImage/amazon.svg';
import adobe from '../../assets/HomePageImage/adobe.svg';
import slack from '../../assets/HomePageImage/slack.svg';
import spotify from '../../assets/HomePageImage/spotify.svg';
import zoom from '../../assets/HomePageImage/zoom.svg';
import zaiper from '../../assets/HomePageImage/zaiper.svg';


export default function HeroSection() {
    return (
        <div>
        <section className="relative w-full min-h-screen mt-14 bg-white flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6 lg:px-8">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-[audiowide] font-bold text-[#1398c8] mb-6 mt-10 leading-tight">
                A <span className="text-[#0c2d44]">Digital Product </span> Studio <br className="hidden sm:block" /> that will Work
            </h1>

            <div className="flex flex-wrap justify-center mt-6 gap-2 mb-6 bg-[#1398c8] px-3 py-2 rounded-lg">
                <span className="px-4 py-2 text-sm sm:text-base bg-elephant text-white rounded-md">Startups</span>
                <span className="px-4 py-2 text-sm sm:text-base bg-gray-800 text-white rounded-md">Enterprise leaders</span>
                <span className="px-4 py-2 text-sm sm:text-base bg-gray-800 text-white rounded-md">Media & Publishers</span>
                <span className="px-4 py-2 text-sm sm:text-base bg-gray-800 text-white rounded-md">Social Good</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 z-10">
                <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition">
                    Our Works
                </button>
                <button className="px-6 py-3 bg-[#1398c8] text-white font-semibold rounded-md hover:bg-[#115d79] transition">
                    Contact Us
                </button>
            </div>

            <div className="absolute bottom-0 w-full h-full pointer-events-none overflow-hidden">
                <img src={Abstract} alt="Abstract" className="w-full h-full object-cover" />
            </div>

            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#0c2d44] text-white px-4 py-2 rounded-full shadow-md">
                <p className="text-lg sm:text-base font-medium">
                    Trusted By 250+ Companies
                </p>
            </div>
            

            </section>
            <div className='h-28 bg-[#0c2d44] flex items-center justify-center '>
                <ul className='flex items-center justify-evenly gap-26'>
                    <li><img src={amazon} alt='' className='' /></li>
                    <li><img src={zoom} alt='' className='' /></li>
                    <li><img src={slack} alt='' className='' /></li>
                    <li><img src={adobe} alt='' className='' /></li>
                    <li><img src={spotify} alt='' className='' /></li>
                    <li><img src={zaiper} alt='' className='' /></li>
                </ul>

            </div>
            </div>
    )
}
