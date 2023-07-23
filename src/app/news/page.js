import Layout from "@/components/Layout";
import Link from "next/link";



export default function News() {

    return (
        <> 

        
        <Layout>
            <>
            <div className="flex justify-center">
               
                <div className="flex justify-center flex-col w-auto md:w-2/3">
                    <h2 className=" flex justify-center mb-5 text-xl">News</h2>
                    
                    <div className="border border-solid border-white p-2 bg-black mx-5 newsItem">
                        <p className="text-xs">17/07/23</p>
                        <div className="news-content">

                            <div className="imageContainer mr-2">
                                <img src="inside_ep.jpg" alt="news image" className="newsImage" />                          
                            </div> 
                            <div className="">  
                                <p className="ml-0 md:ml-2 mr-2 mb-1 glow newsText p-2">First EP out now!!</p>                      
                                <p className="text-sm ml-0 md:ml-2 newsText p-2">                           
                                Stoked to finally be able to say that Mike Ingram and Jason Kilkas first ep is out beginning of July on the quality @sonaremusiclabel. Head over to our <Link href={'/listen'} className="glow">Listen</Link> section to check it out
                                </p>  
                            </div>        
                        </div>
                    </div>

                </div>
            </div>
                       
            </>
        </Layout>
       
        </>
       
    )
}