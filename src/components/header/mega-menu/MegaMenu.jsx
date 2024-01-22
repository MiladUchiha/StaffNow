

'use client'
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";
import MenuLinkTwo from "./MenuLinkTwo";


const MegaMenu = () => {
  const pathname = usePathname();
  const [currentTopRoute, setCurrentTopRoute] = useState('Home')
  return (
    <ul className="navbar-nav">
      <li className={currentTopRoute == 'Home' ? "nav-item dropdown position-static active":"nav-item dropdown position-static" }  >
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Home
        </a>
        
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className={currentTopRoute == 'Pages' ? "nav-item active dropdown":"nav-item dropdown" }>
        <a className={currentTopRoute == 'Pages' ? "nav-link dropdown-toggle active":"nav-link dropdown-toggle"} href="#" data-toggle="dropdown">
          Pages
        </a>
        <ul className="dropdown-menu">
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              
              
              data-toggle="dropdown"
            >
              Pricing
            </a>
            
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
              
              
              data-toggle="dropdown"
            >
              About Us
            </a>
            
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
             
              
              data-toggle="dropdown"
            >
              Contact Us
            </a>
            
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
            
              
              data-toggle="dropdown"
            >
              Team
            </a>
            
          </li>
          <li>
          <MenuLinkTwo topMenu={'Pages'}  val={{ name: 'FAQ',
    routerPath: '/faq'}} setCurrentTopRoute={setCurrentTopRoute} />

         
          </li>
          <li>
          <MenuLinkTwo topMenu={'Pages'}  val={{ name: 'Faq Details',
    routerPath: '/faqs/1'}} setCurrentTopRoute={setCurrentTopRoute} />
       
          </li>
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className={currentTopRoute == 'Feature' ? "nav-item active dropdown":"nav-item dropdown" }>
        <a className={currentTopRoute == 'Feature' ? "nav-link dropdown-toggle active":"nav-link dropdown-toggle"} href="#" data-toggle="dropdown">
          Feature
        </a>

        <ul className="dropdown-menu">
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
             
              
              data-toggle="dropdown"
            >
              Services
            </a>
           
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="#"
             
              
              data-toggle="dropdown"
            >
              Miscellaneous
            </a>
            
          </li>
          <li>
          <MenuLinkTwo topMenu={'Feature'}  val={{ name: 'Our Solution',
    routerPath: '/solution-management'}} setCurrentTopRoute={setCurrentTopRoute} />

          </li>
          <li>
          <MenuLinkTwo topMenu={'Feature'}  val={{ name: 'Product Feature',
    routerPath: '/product-customer-support'}} setCurrentTopRoute={setCurrentTopRoute} />
         
          </li>
          <li>
          <MenuLinkTwo topMenu={'Feature'}  val={{ name: 'Our Features',
    routerPath: '/features-customer-support'}} setCurrentTopRoute={setCurrentTopRoute} />
      
          </li>
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className={currentTopRoute == 'Portfolio' ? "nav-item active dropdown":"nav-item dropdown" }>
        <a className={currentTopRoute == 'Portfolio' ? "nav-link dropdown-toggle active":"nav-link dropdown-toggle"} href="#" data-toggle="dropdown">
          Portfolio
        </a>
        
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className={currentTopRoute == 'Blogs' ? "nav-item active dropdown":"nav-item dropdown" }>
        <a className={currentTopRoute == 'Blogs' ? "nav-link dropdown-toggle active":"nav-link dropdown-toggle"} href="#" data-toggle="dropdown">
          Blogs
        </a>
       
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className={currentTopRoute == 'Docs' ? "nav-item active dropdown":"nav-item dropdown" }>
        <a className={currentTopRoute == 'Docs' ? "nav-link dropdown-toggle active":"nav-link dropdown-toggle"} href="#" data-toggle="dropdown">
          Docs
        </a>
        
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
