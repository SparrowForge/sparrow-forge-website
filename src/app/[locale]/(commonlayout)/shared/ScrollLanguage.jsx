"use client";
import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "pt", label: "Português" },
  { code: "bn", label: "বাংলা" },
];

const ScrollLanguage = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const currentLocale = useLocale();

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setOpen(false); // close dropdown if hidden
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleChange = (code) => {
    setOpen(false);
    router.push(`/${code}`);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-8 z-100">
      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-deepblue shadow-2xl border border-lightblue text-white hover:bg-deepblue transition"
      >
        <FaGlobe className="text-xl" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-14 right-0 w-28 rounded-lg bg-deepblue/90 shadow-lg">
          <ul className="py-2 text-center">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleChange(lang.code)}
                  className={`block w-full px-3 py-1 text-sm rounded-md transition 
                    ${
                      currentLocale === lang.code
                        ? "bg-lightblue text-white font-semibold"
                        : "text-white hover:bg-lightblue/50"
                    }`}
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

export default ScrollLanguage;
