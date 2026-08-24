import React from "react";

const Button2 = ({ btnName, className = "" }) => {
    return (
        <div
            className={`
            inline-flex items-center justify-center
            px-6 p-2
            rounded-full
            cursor-pointer
            font-bold
            text-black 
            bg-white 
            shadow-sm 
            transition-all duration-150 ease-out 
            hover:bg-[#f2f2f2] hover:scale-105 hover:shadow-md 
            active:scale-95 
            ${className}`}>{btnName}
        </div>
    )
}

export default Button2