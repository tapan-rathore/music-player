import React from "react";
import Button1 from "../common/Button1";
import Button2 from "../common/Button2";

const SideFooter = () => {
    return (
        <div className="flex flex-col gap-6 m-2 p-2">
            <div className="flex flex-wrap">
                <Button1 btnName="Legal" className="text-xs" translate={false} />
                <Button1 btnName="Safety & Privacy Center" className="text-xs" translate={false} />
                <Button1 btnName="Privacy Policy" className="text-xs" translate={false} />
                <Button1 btnName="Cookies" className="text-xs" translate={false} />
                <Button1 btnName="About Ads" className="text-xs" translate={false} />
                <Button1 btnName="Accessibility" className="text-xs text-white hover:underline" translate={false} />
            </div>
            <Button2 btnName="Engish"
                className="self-center" />
        </div>
    )
}

export default SideFooter