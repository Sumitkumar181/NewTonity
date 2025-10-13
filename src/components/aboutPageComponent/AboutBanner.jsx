import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../../assets/images/AboutImage/uhd_30fps.mp4"


gsap.registerPlugin(ScrollTrigger);



export default function AboutBanner() {

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                overlayRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );


            gsap.from(titleRef.current, {
                y: 80,
                opacity: 0,
                duration: 3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });


            gsap.from(subtitleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[16rem] sm:h-[18rem] md:h-[18rem] lg:h-[35rem] object-cover"
            >
                <source src={about} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 sm:px-6 md:px-12 text-center"
            >
                <h2
                    ref={titleRef}
                    className="text-white font-[Geist Mono Fallback] font-medium mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl"
                >
                    Development Success for modern business
                </h2>
                <h2
                    ref={titleRef}
                    className="text-white font-[Geist Mono Fallback] font-medium mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl"
                >
                    modern business
                </h2>
                <p
                    ref={subtitleRef}
                    className="text-white font-[inter] mt-4 text-base sm:text-lg md:text-xl lg:text-xl max-w-3xl"
                >
                    We offer a wide range of services including custom software development, mobile app development, web application development, enterprise solutions, and software consulting.
                </p>
            </div>
        </section>


    )
}
