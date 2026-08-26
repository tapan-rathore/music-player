import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="min-h-full bg-white px-4 py-10 font-serif text-black">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">

                    {/* 404 Illustration */}
                    <div className="h-[400px]
                            bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')]
                            bg-center bg-no-repeat bg-contain">

                        <h1 className="pt-4 text-center text-[80px] font-bold">404</h1>
                    </div>

                    {/* Content */}
                    <div className="-mt-12">
                        <h2
                            className="text-3xl font-bold">
                            Look like you're lost
                        </h2>

                        <p
                            className="mt-3 text-gray-600">
                            The page you are looking for is not available!
                        </p>

                        <Link
                            to="/"
                            className="mt-5 inline-block rounded-md bg-[#39ac31] px-5 py-2.5 font-semibold text-white transition-transform duration-200 hover:scale-105">
                            Go to Home
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NotFound;