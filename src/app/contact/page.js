import Layout from "@/components/Layout";
import Link from "next/link"

export default function Contact() {

    return (
        <>
         <div className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0">
        <Layout>           

            <div className="flex flex-col justify-center items-center text-center gap-5 mt-10">
                <p className="text-sm w-screen px-8 mb-2 lg:w-2/3 md:mx-0">Leeds UK - Jay Kilka and Mikey Acid Dad Projekt Ingram have been at the forefront of the Leeds electronic music scene for a number of years. Now joint forces in the studio it has become clear this meeting of minds has affirmed a certain sound which have now become RKYV.</p>        
                <p className="text-sm w-screen px-8 lg:w-2/3 md:mx-0">Both avid music collectors and possessing a natural inclination towards technology and fascination with sound design, they soon developed a strong focus on pushing boundaries of electronic music. Their sound is heavily influenced by the dance floors of the legendary Fabric,DC10,Berghain and Sonar Festival Barcelona with them finding support from Joseph Capriati and Richie Hawtin through James Zabelia to name but a few.</p>
            </div>

            <div className="flex justify-center mt-10 mb-4">
                 <h2 >Contact Us</h2>               
            </div> 

            <div className="flex justify-center mb-10"> 
                <Link href="https://www.instagram.com/rkyv_music/" target="_blank"><img src="instagram480.png" alt="instagram" className="w-10 mr-3"/></Link>
                <Link href="https://soundcloud.com/rkyv" target="_blank"><img src="soundcloud.png" alt="soundcloud" className="w-10 mr-3"/></Link>                
            </div>
        
        </Layout>
        </div> 
        </>
       
    )
}