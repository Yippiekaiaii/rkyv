import Layout from "@/components/Layout";
import Link from "next/link";



export default function News() {

    return (
        <> 
        <Layout>
            <>
            <div className="flex justify-center">
               
                <div className="flex justify-center flex-col w-auto md:w-2/3">
                    <h2 className="mb-5">News</h2>
                    
                    <div className="border border-solid border-white p-2 rounded-lg">
                        <p>17/07/23</p>
                        <div className="news-content">

                            <div className="imageContainer">
                                <img src="inside_ep.jpg" alt="news image" className="newsImage" />                          
                            </div>                          
                            <p className="text-sm ml-0 md:ml-2 newsText">
                            Stoked to finally be able to say that Mike Ingram and Jason Kilkas first ep is out beginning of July on the quality @sonaremusiclabel. Head over to our <Link href={'/listen'}>Listen</Link> section to check it out
                            </p>         
                        </div>
                    </div>

                </div>
            </div>
                       
            </>
        </Layout>
        </>
       
    )
}