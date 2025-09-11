import React from 'react'
import servicesBanner from "../../assets/images/ServicesImage/servicesBanner.jpg"

export default function Servicesbanner() {
    return (
        <section className="relative w-full">
            <img
                src={servicesBanner}
                alt="Our Services Banner"
                className="w-full h-[16rem] sm:h-[18rem] md:h-[18rem] lg:h-[24rem] object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 sm:px-6 md:px-12 text-center">
                <h2 className="text-white font-[audiowide] font-medium mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Our Services
                </h2>
                <p className="text-white font-[inter] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl">
                    Crafted With Care Specifically For You
                </p>
            </div>
        </section>


    )
}
