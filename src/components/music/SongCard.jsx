import React from "react";

const SongCard = () => {
    return (
        <div className="w-44 p-2 shrink-0 rounded-lg bg-[#121212] hover:bg-[#1f1f1f] transition-colors duration-200">
            <img
                className="w-full aspect-square rounded-md object-cover"
                src="https://a10.gaanacdn.com/gn_img/albums/oAJbDlbnL8/JbDDzDQqbn/size_l_1786538364.jpg"
                alt="" />

            <h3 className="mt-2 text-base font-semibold text-white line-clamp-2 hover:underline">Tera Mera Rishta - New Version (From "Awarapan 2")</h3>
            <p className="mt-1 text-sm font-semibold text-[#a7a7a7] line-clamp-2">Mithoon, Saaj Bhatt, Sayeed Quadri, Mustafa Zahid, Subodhh Sharma, Pritam</p>
        </div>
    )
}

export default SongCard