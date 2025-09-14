import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function FlairFollower() {
    const xTo = useRef();
    const yTo = useRef();
    const app = useRef();

    const { context } = useGSAP(() => {
        xTo.current = gsap.quickTo(".flair", "x", { duration: 0.8, ease: "power3" });
        yTo.current = gsap.quickTo(".flair", "y", { duration: 0.8, ease: "power3" });
    }, { scope: app });

    useEffect(() => {
        const moveShape = (e) => {
            if (xTo.current && yTo.current) {
                xTo.current(e.clientX);
                yTo.current(e.clientY);
            }
        };

        window.addEventListener("mousemove", moveShape);

        return () => {
            window.removeEventListener("mousemove", moveShape);
            context.revert();
        };
    }, [context]);

    return (
        <div
            ref={app}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
        >
            <div className="flair"></div>
        </div>
    );
}
