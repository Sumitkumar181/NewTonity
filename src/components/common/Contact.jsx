import React from 'react'
import CircleIconButton from './CircleIconButton';
import Button from './Button';

export default function Contact() {
    return (
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
                            <CircleIconButton onClick={() => { }} />
                        </div>


                        <div className="hidden md:block ">
                            <Button
                                className="h-38 w-38 bg-[#66fcf1] hover:bg-[#1cc5ba] text-base md:text-lg transition-colors duration-300"
                                ariaLabel="Let's talk about your project"
                            >
                                Let's Talk Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
