"use client"

import Layout from "@/components/Layout";
import { useState } from "react";


export default function Gallery() {

    const [showEnlarged, setShowEnlarged]=useState(false)
    const [enlargePath, setEnlargePath]=useState("")

    function toggleEnlarge(e){
        setEnlargePath(e.target.src)        
        setShowEnlarged(!showEnlarged)
    }

    return (
        <> 
         <div className="inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/img/aries.jpg")'}}>
            <Layout>
                
                <div className="flex justify-center mt-3 flex-wrap gap-4 pb-10">
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0000.jpg" alt="gallery image 1" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0002.jpg" alt="gallery image 2" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0006.jpg" alt="gallery image 3" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0007.jpg" alt="gallery image 4" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0008.jpg" alt="gallery image 5" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0009.jpg" alt="gallery image 6" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0013.jpg" alt="gallery image 7" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0014.jpg" alt="gallery image 8" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0016.jpg" alt="gallery image 9" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0011.jpg" alt="gallery image 10" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0001.jpg" alt="gallery image 11" onClick={toggleEnlarge}/></div>
                    <div className="eventImage-container"><img className="eventImage" src="/img/IMG-20230711-WA0015.jpg" alt="gallery image 12" onClick={toggleEnlarge}/></div>
                </div>
            </Layout>
        </div>

        {showEnlarged && (

        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-50">         
            <div className="fixed inset-0 bg-black opacity-75"></div>          
          <img src={enlargePath} alt="enlarged gallery image" onClick={toggleEnlarge} className="relative z-10"></img>
        </div>

        )}
        
        </>
       
    )
}