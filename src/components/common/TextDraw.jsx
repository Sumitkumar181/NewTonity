import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function TextDraw() {
    const rootRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
           
            const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

            
            tl.to("#scramble-text", {
                scrambleText: {
                    text: "Newtonity Technology", 
                    chars: "upperCase",
                    speed: 0.3,
                },
                duration: 2,
            });

            
            tl.to("#scramble-cursor", { opacity: 0, duration: 0.3 }, "+=0.5");

           
            const replay = () => tl.restart();
            rootRef.current?.addEventListener("click", replay);

            return () => {
                rootRef.current?.removeEventListener("click", replay);
                tl.kill();
            };
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={rootRef}
            className="relative flex flex-col justify-center items-center min-h-6xl  text-white text-center cursor-pointer px-4"
        >
            
            <p id="scramble-text-original" className="opacity-0">
                Newtonity Technology
            </p>

            
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight whitespace-nowrap">
                <span id="scramble-text" className="inline-block"></span>
                
            </p>

            <p className="mt-6 text-sm sm:text-base text-gray-400">
                
            </p>
        </div>
    );
}
