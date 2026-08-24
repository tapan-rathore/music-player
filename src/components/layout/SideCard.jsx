import React from "react";
import Button2 from "../common/Button2";

const SideCard = ({heading, paragraph, btnName}) => {

    return (
        <div className="min-h-32 shrink-0 p-2 m-2 rounded-lg bg-[#1f1f1f] flex flex-col gap-4">
            <div>
                <h3 className="font-bold text-base">{heading}</h3>
                <p className=" text-sm">{paragraph}</p>
            </div>
            <Button2 btnName={btnName}className="self-start text-sm"/>
        </div>
    )
}

export default SideCard