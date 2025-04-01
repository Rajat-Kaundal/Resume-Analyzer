import { useState } from "react";

const head = () => {
    const [isOpen, setIsOpen] = userState(false);

    return (
        <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">AI Resume analyzer </h1>

                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="/upload" className="hover:text-gray-400">Upload Resume</a>
                    <a href="/about" className="hover:text-gray-400">About</a>
                </nav>
                
            </div>

        </header>
    );

};

export default header