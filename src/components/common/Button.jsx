import React, { useRef, useEffect } from "react";
import gsap from "gsap";


export default function Button({ children, className = "", ariaLabel }) {
    const btnRef = useRef(null);
    const fillRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        
        const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        btnRef.current._reducedMotion = reduced;

        if (!reduced) {
            gsap.set(fillRef.current, { yPercent: 100 });
        } else {
           
            gsap.set(fillRef.current, { yPercent: 100 });
        }

        return () => {
            
            gsap.killTweensOf(fillRef.current);
            gsap.killTweensOf(textRef.current);
        };
    }, []);

    const animateIn = () => {
        if (btnRef.current._reducedMotion) {
            gsap.set(fillRef.current, { yPercent: 0 });
            gsap.set(textRef.current, { color: "#fff" });
            return;
        }
        gsap.to(fillRef.current, { yPercent: 0, duration: 0.45, ease: "power3.out" });
        gsap.to(textRef.current, { color: "#fff", duration: 0.25 }, "<");
    };

    const animateOut = () => {
        if (btnRef.current._reducedMotion) {
            gsap.set(fillRef.current, { yPercent: 100 });
            gsap.set(textRef.current, { color: "" });
            return;
        }
        gsap.to(fillRef.current, { yPercent: 100, duration: 0.45, ease: "power3.inOut" });
        gsap.to(textRef.current, { color: "", duration: 0.25 }, "<");
    };

    return (
        <button
            ref={btnRef}
            onMouseEnter={animateIn}
            onMouseLeave={animateOut}
            onFocus={animateIn}
            onBlur={animateOut}
            aria-label={ariaLabel || (typeof children === "string" ? children : "Call to action")}
            className={`relative overflow-hidden inline-flex items-center justify-center rounded-full border-2 border-[#66fcf1] text-black font-[kanit] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400 ${className}`}
        >
            
            <span
                ref={fillRef}
                className="absolute inset-0 bg-[color:var(--accent)] z-0 will-change-transform"
                style={{ transform: "translateY(100%)" }}
                aria-hidden
            />
            
            <span ref={textRef} className="relative z-10 transition-colors duration-200">
                {children}
            </span>
        </button>
    );
}
