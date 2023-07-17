import Layout from "@/components/Layout";
import Link from "next/link";



export default function News() {

    return (
        <> 
        <Layout>
            <>
            <div className="flex justify-center">
               
                <div className="flex justify-center flex-col">
                    <h2 className="mb-5">News</h2>
                    <p>17/07/23</p>
                    <div className="imageContainer">
                        <img src="inside_ep.jpg" alt="logo" className="newsImage" />  
                    </div>
                    <span className="text-sm">Stoked to finally be able to say that Mike Ingram and Jason Kilkas first ep is out beginning of July on the quality @sonaremusiclabel. Head over to our <Link href={'/listen'}>Listen</Link> section to check it out</span>
                </div>
            </div>
            </>
        </Layout>
        </>
       
    )
}