import Layout from "@/components/Layout";
import Head from 'next/head'


export default function Listen() {

    return (
        <> 
        <div className="absolute inset-0 bg-contain bg-no-repeat bg-center z-0" style={{ backgroundImage: 'url("/img/IMG-20230711-WA0006.jpg")'}}>
        <Layout>        
        <div >  
                    <Head>
                        <script async src="https://w.soundcloud.com/player/api.js" />
                    </Head>

                    
                    <div>
                        <h2 className="flex justify-center text-black">Check out our tracks below...</h2>
                        {/*Inside Imbeded Player*/}
                        <div>
                            <h2 className="flex justify-center mt-5 text-black">Inside EP</h2>
                            <div className="flex justify-center mt-2 flex-column">                       
                                <iframe 
                                width="30%"
                                height="166"
                                scrolling="no"
                                frameBorder="no"
                                allow="autoplay"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1546861252&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                                />                            
                            </div>  
                        </div>
                        {/*Inside Imbeded Player End*/}

                        {/*Butch Imbeded Player End*/} 
                        <div>
                            <h2 className="flex justify-center mt-5 text-black">Butch</h2>
                            <div className="flex justify-center mt-2">         
                                <iframe 
                                width="30%" 
                                height="166" 
                                scrolling="no" 
                                frameborder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1289553472&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                            </div>
                        </div>
                        {/*Butch Imbeded Player End*/}


                    </div>
       
        </div>
        </Layout>
        </div>
        </>
       
    )
}