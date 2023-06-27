
import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"


export default function Home({children}) {
  return (
    <>      
        <Layout></Layout>

        <div className="flex justify-center items-center">
          <img src="rKyv-AW_Desat-white clipped.jpg" alt="logo" className="mr-3"/>
        </div>
        <div className="flex justify-center">
          <img src="instagram480.png" alt="instagram" className="w-10 mr-3"/>
          <img src="twitter500.png" alt="instagram" className="w-10"/>
        </div>
    </>
    
  )
}
