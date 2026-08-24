import React, { useState } from "react";
import SideCard from "./SideCard";
import { Plus } from "lucide-react";
import SideFooter from "./SideFooter";


const Sidebar = () => {

    const [showScrollbar, setShowScrollbar] = useState(false)

    return (
        <div className="bg-[#121212] ml-2 rounded-md flex flex-col justify-between shrink-0">
            <div>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-2 py-4">
                    <h3 className="font-bold">Your Library</h3>
                    <Plus />
                </div>

                <div onMouseEnter={() => { setShowScrollbar(true) }}
                    onMouseLeave={() => { setShowScrollbar(false) }}
                    className={`pt-2 h-36 flex flex-col gap-6 overflow-y-auto overflow-x-hidden spotify-scrollbar ${showScrollbar ? "scrollbar-visible" : ""}`}>
                    <SideCard heading="Create your first playlist" paragraph="It's easy, we'll help you" btnName="Create Playlist" />
                    <SideCard heading="Let's find some podcasts to follow" paragraph="We'll keep you updated on new episodes" btnName="Browse podcasts" />
                </div>
            </div>

            {/* Footer of side */}
            <SideFooter />

        </div>
    )
}

export default Sidebar