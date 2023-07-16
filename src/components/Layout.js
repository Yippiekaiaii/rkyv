"use client"

import { useState } from "react";
import Navbar from "./Navbar";

export default function Layout({children}) {

    const [showNav, setShowNav] = useState(false)
    
    return (
            <div>
                <div className="flex items-center navBar">
                    <div className="block md:hidden flex items-center p-4">
                    <button onClick={()=> setShowNav(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    </div> 
                    <img src="rKyv-AW_Desat-white clipped.jpg" alt="logo" className="block md:hidden w-20 flex mx-auto"/>
                </div>
                <Navbar show={showNav}/>  
              
                <div className="mx-[20%] mt-5">{children}</div>         
            </div>
            )
    
}