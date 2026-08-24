import React from "react";
import { CirclePlus } from "lucide-react";

const SidePlayerCard = () => {
    return (
        <div className="flex items-center justify-start">
            <img
                className="w-14 h-14 aspect-square rounded-md object-cover"
                src="https://a10.gaanacdn.com/gn_img/albums/oAJbDlbnL8/JbDDzDQqbn/size_l_1786538364.jpg"
                alt="" />
            <div className="p-2">
                <h3 className="text-sm font-semibold text-white line-clamp-1 hover:underline">Tera Mera Rishta - New Version (From "Awarapan 2")</h3>
                <p className="text-xs  font-semibold text-[#a7a7a7] line-clamp-1">Mithoon, Saaj Bhatt, Sayeed Quadri, Mustafa Zahid, Subodhh Sharma, Pritam</p>
            </div>
            <CirclePlus />
        </div>
    )
}

export default SidePlayerCard