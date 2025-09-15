"use client";
import { usePathname } from "next/navigation";
import Navbar2 from "../shared/Navbar2";
import Footer from "../shared/Footer";


export default function DynamicNavbarLayout({ children }) {
    const pathname = usePathname();

    const willNotShow =
        pathname === "/" ||
        pathname === "/en" ||
        pathname === "/ar" ||
        pathname === "/pt" ||
        pathname === "/bn" ;

  return (
        <div className="md:flex flex-col justify-center items-center">
            {/* ✅ Show Navbar2 only if path is not /home */}
            {!willNotShow  && <Navbar2 />}
            {children}
            <Footer />
        </div>
    );
}
