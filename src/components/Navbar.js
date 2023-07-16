"use client"

import Link from "next/link"

export default function Navbar({show}) {
   console.log("show:",show)
 
return (
    <>
    <div className="navBar">
    <div className="mx-[20%] navBar">    

        <ul className={(show?"flex items-center justify-center h-20 navBar transition-all":"flex items-center justify-center h-20 navBar hidden md:flex transition-all")}>            
            <span><img src="rKyv-AW_Desat-white clipped.jpg" alt="logo" className="w-20 mr-10 hidden md:flex"/></span>
            <Link href={'/'}><li className="linkBounce">Home</li></Link>
            <Link href={'/news'}><li className="linkBounce">News</li></Link>          
            <Link href={'/listen'}><li className="linkBounce">Listen</li></Link>
            <Link href={'/gallery'}><li className="linkBounce">Gallery</li></Link>
            <Link href={'/contact'}><li className="linkBounce">About</li></Link>
        </ul> 
  
       
    </div>
    <hr/>
    </div>
    </>

)

}