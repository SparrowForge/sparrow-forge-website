"use client";
import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
    { code: "pt", label: "Português" },
     { code: "bn", label: "বাংলা" },
];

const LanguageButton = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const currentLocale = useLocale();

    const handleChange = (code) => {
        setOpen(false);
        router.push(`/${code}`); // redirect to the new locale route
    };

    return (
        <div className="relative inline-block text-left text-white ">
            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-full px-3 py-2 shadow-sm  hover:bg-lightblue"
            >
                <FaGlobe className="text-xl" />
                <span className="hidden sm:inline">{currentLocale.toUpperCase()}</span>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-2 md:left-0 mt-2 w-20 md:w-40 rounded-md bg-deepblue/90 shadow-lg z-50">
                    <ul className="py-1 text-white">
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <button
                                    onClick={() => handleChange(lang.code)}
                                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-lightblue 
          ${currentLocale === lang.code ? "font-semibold text-lightblue hover:bg-white" : "text-white"}`}
                                >
                                    {lang.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>

            )}
        </div>
    );
};

export default LanguageButton;
