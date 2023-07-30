"use client";

import Layout from "@/components/Layout";
import Head from 'next/head'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Listen() {    

    const [windowSize,setWindowSize]= useState({width:496, height:undefined,})
   
    //Handle responsive sizing of sound cloud component
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth<496){
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
          }         
        };    
        window.addEventListener('resize', handleResize);    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);    
     
     

    return (
        <> 
        <div className="inset-0 bg-cover bg-center z-0 min-h-screen" style={{ backgroundImage: 'url("/img/IMG-20230711-WA0006.jpg")'}}>
        <Layout>        
        <div className="pb-10">  
                    <Head>
                        <script async src="https://w.soundcloud.com/player/api.js" />
                    </Head>

                    
                    <div>
                        <h2 className="flex justify-center text-black text-center">Check out our tracks below...</h2>

                        <p className="text-black flex justify-center">Or visit our Beatport page to buy any of our tracks </p> 
                            <p className="text-black flex justify-center"><Link href="https://www.beatport.com/release/inside-ep/4148570" className="glow-black" target="_blank" rel="noopener noreferrer">HERE</Link></p>
                       

                        <div className="flex justify-center gap-5 flex-wrap">
                            {/*Inside Imbeded Player*/}
                            <div>
                                <h2 className="flex justify-center mt-5 text-black">Inside EP</h2>
                                <div className="flex justify-center mt-2 flex-column">                       
                                    <iframe 
                                    width={windowSize.innerWidth}
                                    height="166"
                                    scrolling="no"
                                    frameBorder="no"
                                    allow="autoplay"
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1546861252&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                                    />                            
                                </div>  
                            </div>
                            {/*Inside Imbeded Player End*/}

                            <div>
                                <h2 className="flex justify-center mt-5 text-black">Inside</h2>
                                <div className="flex justify-center mt-2">
                                    <iframe src="https://embed.beatport.com/?id=17788165&type=track" width={windowSize.innerWidth} height="162" frameborder="0" scrolling="no" className="beatPort"></iframe>
                                </div>
                            </div>

                            {/*Butch Imbeded Player End*/} 
                            <div>
                                <h2 className="flex justify-center mt-5 text-black">Butch</h2>
                                <div className="flex justify-center mt-2">         
                                    <iframe 
                                    width={windowSize.innerWidth} 
                                    height="166" 
                                    scrolling="no" 
                                    frameborder="no" 
                                    allow="autoplay" 
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1289553472&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                                </div>
                            </div>
                            {/*Butch Imbeded Player End*/}                          

                            <div>
                                <h2 className="flex justify-center mt-5 text-black">Inside Laura Jones Remix</h2>
                                <div className="flex justify-center mt-2">
                                    <iframe src="https://embed.beatport.com/?id=17788168&type=track" width={windowSize.innerWidth} height="162" frameborder="0" scrolling="no" className="beatPort"></iframe>
                                </div>
                            </div>

                            <div>
                                <h2 className="flex justify-center mt-5 text-black">Behind You</h2>
                                <div className="flex justify-center mt-2">
                                    <iframe src="https://embed.beatport.com/?id=17788168&type=track" width={windowSize.innerWidth} height="162" frameborder="0" scrolling="no" className="beatPort"></iframe>
                                </div>
                            </div>

                            <div>
                                <h2 className="flex justify-center mt-5 text-black">Running Man</h2>
                                <div className="flex justify-center mt-2">
                                    <iframe src="https://embed.beatport.com/?id=17788168&type=track" width={windowSize.innerWidth} height="162" frameborder="0" scrolling="no" className="beatPort"></iframe>
                                </div>
                            </div>               
                        </div>
                    </div>      
             
       
        </div>

      
        </Layout>
        </div>
        </>
       
    )
}