import React from "react";
import Search from "../common/Search";
import logo from "../../assets/Logo.jpg"
import Button1 from "../common/Button1";
import Button2 from "../common/Button2";
import { Download } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex p-2 justify-between">
            {/* Left content of Navbar */}
            <div className="flex gap-4">
                <img src={logo} alt="Logo" />
                <Search />
            </div>

            {/* right content of Navbar */}
            <div className="flex gap-6">
                <div className="flex items-center">
                    <Button1 btnName="Premium" />
                    <Button1 btnName="Support" />
                    <Button1 btnName="Download" />
                </div>
                <div className="border-l my-2"></div>
                <div className="flex items-center gap-2">
                    <Button1 btnName="Install App" className="text-sm" icon={Download} iconClassName="size-4"/>
                    <Button1 btnName="Sign up" className="text-sm" />
                    <Button2 btnName="Log in" />
                </div>
            </div>
        </div>
    )
}

export default Navbar