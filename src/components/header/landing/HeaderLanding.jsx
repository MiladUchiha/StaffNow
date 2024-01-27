'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
const logo = "/logo.png";

const HeaderLanding = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 90) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    }
  }, [])





  return (
    <>
      <div className={
        navbar ? "fixed top-0 z-50 w-full bg-white shadow-xl h-16 " : "fixed top-0  z-50 w-full bg-white"
      }>
        <div className="container flex   ">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" width={60} height={60} />
            <span className="ml-2 text-3xl font-bold tracking-wide text-gray-800">StaffNow</span>
          </Link>
          <div className="flex text-center items-center justify-end flex-1 ml-5 space-x-8">
            {pathname === "/" ? (
              <Link href="/login">
               
                  Logga in
                
              </Link>
            ) : (
             null
            )
            }
            
            
           


          </div>

        </div>
      </div>

    </>
  );
};

export default HeaderLanding;
