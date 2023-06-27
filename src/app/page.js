
import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Home() {
  return (
    <>      
        <Layout></Layout>

        <div className="flex justify-center items-center">
          <img src="rKyv-AW_Desat-white clipped.jpg" alt="logo" className="mr-3"/>
        </div>
        <div className="flex justify-center">
          <Link href="https://www.instagram.com/rkyv_music/"><img src="instagram480.png" alt="instagram" className="w-10 mr-3"/></Link>
          <img src="twitter500.png" alt="instagram" className="w-10"/>
        </div>
        <h1 className="flex justify-center mt-5">...Coming Soon</h1>
    </>
    
  )
}
