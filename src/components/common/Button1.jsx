import React from "react";

const Button1 = ({ 
    icon: Icon,
    btnName,
    className = "",
    iconClassName = "",
    translate = true, ...props }) => {
    return (
        <button 
        className="group p-1 cursor-pointer text-base font-semibold text-[#b3b3b3] flex items-center"
        {...props}>
            <div
                className={`
                inline-flex items-center gap-2 
                transition-all duration-150 ease-out 
                group-hover:text-white 
                ${translate ? "group-hover:-translate-y-0.5" : ""} ${className}`}
            >
                {Icon && <Icon size={18} className={iconClassName} />}
                {btnName}
            </div>
        </button>
    )
}

export default Button1