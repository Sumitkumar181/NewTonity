import React from 'react'
import sucessAbstract from "../../assets/HomePageImage/sucessAbstract.jpg"

export default function Success() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 sm:px-6 md:px-10 py-10 bg-[#eff6fb]">

            
            <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-center sm:text-left font-[inter] font-semibold mb-4 leading-snug">
                    Time to turn your vision into reality: <br />
                    Join us to foster innovation and success in no time.
                </h2>


                <p className="font-[inter] text-sm sm:text-base text-black mb-2">
                    At Newtonity Technology, we don’t just build businesses, we empower them to thrive.
                    Our major focus is on specializing in Business Development,
                </p>

                <p className="font-[inter] text-sm sm:text-base text-black mb-2">
                    Business Design, and Business Promotion. We offer custom solutions designed
                    to elevate your brand and fuel your success.
                </p>

                <p className="font-[inter] text-sm sm:text-base text-black mt-4">
                    Our powerhouse and dedicated team brings diverse expertise across Graphics and Design,
                    including Website Development, Digital Marketing, SEO, Content Writing, Video Animation,
                    Programming, and cutting-edge Technology Solutions.
                </p>

                <p className="font-[inter] text-sm sm:text-base text-black mt-3">
                    From creative storytelling to technical brilliance, we craft strategies that resonate
                    and deliver results. Explore our Services to see how we can illuminate the path
                    to your business’s next big breakthrough!
                </p>
            </div>

            
            <div className="flex justify-center md:justify-end">
                <img
                    src={sucessAbstract}
                    alt="Success Abstract"
                    className="w-full max-w-md md:max-w-full h-auto rounded-2xl shadow-lg"
                />
            </div>

        </div>
    )
}
