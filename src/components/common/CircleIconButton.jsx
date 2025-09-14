import React from "react";
import { FaComments } from "react-icons/fa";

export default function CircleIconButton({ onClick, ariaLabel = "Let's talk", className = "" }) {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 border-[#1398c8] text-black bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400 ${className}`}
        >
            <FaComments className="w-5 h-5" aria-hidden />
        </button>
    );
}
