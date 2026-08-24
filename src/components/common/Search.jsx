import React from "react";
import { Search as SearchIcon } from "lucide-react"

const Search = () => {
    return (
        <div className="bg-[#1f1f1f] flex items-center gap-2 p-2 rounded-3xl">
            <SearchIcon color="#b3b3b3" />
            <input className="w-xs outline-none" type="text" placeholder="What do you want to play?" />
        </div>
    )
}

export default Search