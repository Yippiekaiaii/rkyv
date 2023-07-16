"use client"

import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import Head from 'next/head'
import { useState,useEffect } from "react"

export default function Home() {  

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
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0" style={{ backgroundImage: 'url("/img/IMG-20230711-WA0000.jpg")' }}>

        <Layout></Layout>

        <div className="flex justify-center items-center">
          {/*}<img src="rKyv-AW_Desat-white clipped.jpg" alt="logo" className="mr-3"/>{*/}
        </div>
        <div className="flex justify-center mb-10">        
          <Link href="https://www.instagram.com/rkyv_music/" target="_blank"><img src="instagram480.png" alt="instagram" className="w-10 mr-3"/></Link>
          <Link href="https://soundcloud.com/rkyv" target="_blank"><img src="soundcloud.png" alt="soundcloud" className="w-10 mr-3"/></Link>
          <img src="twitter500.png" alt="instagram" className="w-10"/>
        </div>
      

        <div className="flex justify-center mt-5">
          <h3 className="typed">Listen now....</h3>
        </div>
        
            <Head>
              <script async src="https://w.soundcloud.com/player/api.js" />
            </Head>

        <div className="flex justify-center mt-2 mx-5">
            <iframe 
              width={window.innerWidth} 
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1546861252&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
            <div
              style={{
                fontSize: '10px',
                color: '#cccccc',
                lineBreak: 'anywhere',
                wordBreak: 'normal',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontFamily:
                  'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                fontWeight: 100,
              }}
            >              
            </div>
        </div>

        <div className="flex justify-center text-xs">
              <a
                href="https://soundcloud.com/sonaremusic"
                title="Sonarè Music"
                target="_blank"
                style={{ color: '#cccccc', textDecoration: 'none' }}
              >
                Sonarè Music
              </a>{' '}
              ·{' '}
              <a
                href="https://soundcloud.com/sonaremusic/son003-inside-ep-rkyv-previews"
                title="SON003 - Inside EP - RKYV [Digital release date 06-07-23]"
                target="_blank"
                style={{ color: '#cccccc', textDecoration: 'none' }}
              >
                SON003 - Inside EP - RKYV [Digital release date 06-07-23]
              </a>
        </div>
        </div>
        
    </>
    
  )
}
