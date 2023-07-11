import Layout from "@/components/Layout";
import Link from "next/link";



export default function News() {

    return (
        <> 
        <Layout>
            <>
                <div className="flex justify-center">
                    <div className="flex justify-center">
                        <img src="inside_ep.jpg" alt="logo" className="newsImage mr-3"/>  
                        <span className="w-1/3">Stoked to finally be able to say that Mike Ingram and Jason Kilkas first ep is out beginning of July on the quality @sonaremusiclabel. Head over to our <Link href={'/listen'}>Listen</Link> section to check it out</span>
                    </div>
                    
                </div>
            </>
        </Layout>
        </>
       
    )
}