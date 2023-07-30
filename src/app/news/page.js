"use client"

import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";



export default function News() {

    const [articleOverflow, setArticleOverlow]=useState(false)
    const newsTextRef = useRef(null)

    useEffect(()=>{
        const handleTextHeight =()=>{
            const height = newsTextRef.current.getBoundingClientRect().height;
            setArticleOverlow(height > 150);
        }

        handleTextHeight(); // Call the function initially to check the height

        // Add event listener for resizing, in case the text height changes dynamically
        window.addEventListener("resize", handleTextHeight);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener("resize", handleTextHeight);
        };

    },[])



    return (
        <> 

        <div className="inset-0 bg-cover bg-center z-0 min-h-screen" style={{ backgroundImage: 'url("/img/sample_photo001.jpg")'}}>
            <Layout>
                <>
                <div className="flex justify-center">
                
                    <div className="flex justify-center flex-col w-auto md:w-2/3">
                        <h2 className=" flex justify-center mb-5 text-xl">News</h2>
                        
                        <div className="border border-solid border-white p-2 bg-black mx-5 newsItem mb-5">
                            <p className="text-xs">17/07/23</p>
                            <div className="news-content">
                                <div className="imageContainer mr-2">
                                    <img src="inside_ep.jpg" alt="news image" className="newsImage" />                          
                                </div> 
                                <div className="">  
                                    <p className="ml-0 md:ml-2 mr-2 mb-1 glow newsTitle p-2">First EP out now!!</p>                      
                                    <p className="text-sm ml-0 md:ml-2 newsText p-2">                           
                                    Stoked to finally be able to say that Mike Ingram and Jason Kilkas first ep is out beginning of July on the quality @sonaremusiclabel. Head over to our <Link href={'/listen'} className="glow">Listen</Link> section to check it out
                                    </p>  
                                </div>        
                            </div>
                        </div>

                        <div className="border border-solid border-white p-2 bg-black mx-5 newsItem mb-5">
                            
                            <div className="flex justify-between">
                            <p className="text-xs">17/07/23</p>
                            <button className="text-xs mr-2">Full article...</button>
                            </div>

                            <div className="news-content">
                                <div className="imageContainer mr-2">
                                    <img src="inside_ep.jpg" alt="news image" className="newsImage" />                          
                                </div> 
                                <div className="">  
                                    <p className="ml-0 md:ml-2 mr-2 mb-1 glow newsTitle p-2">Test Article!!</p>                      
                                    <p
                                        ref={newsTextRef}
                                        className={`text-sm ml-0 md:ml-2 mr-2 mb-1 newsText p-2 ${
                                            articleOverflow ? "max-h-150" : ""
                                        }`}
                                        >                        
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere dolorum cumque quas beatae, quos odit itaque, velit ipsum mollitia delectus tempora, eos est ut tenetur culpa. Molestias aut harum reiciendis exercitationem necessitatibus quasi iste ducimus alias, modi architecto mollitia perferendis fugit veritatis? Mollitia, non velit consectetur quasi aliquam ratione culpa facere beatae, maxime illo, eos fugiat? Repellendus aliquid at error rem sapiente iste, sit quaerat autem ipsa repellat odit facere nihil ducimus quae similique, nobis officia laborum nulla. Qui inventore velit a nisi ducimus soluta, necessitatibus beatae optio sint quod nihil veritatis ea ex? Quo rem dolores, laudantium fugit est sapiente ducimus non eos in iste labore tempora possimus explicabo molestias alias dicta velit et ratione ipsa quaerat numquam repellat molestiae magni? Iusto accusantium quo culpa sunt soluta architecto. Quia, non adipisci exercitationem similique modi dolores officia ut magni, aperiam accusamus cupiditate iure alias saepe corrupti sed, eius deserunt sunt? Fugit optio vitae tempora qui impedit odit distinctio delectus, nulla magni consequatur libero labore iure esse? Cum blanditiis nulla consequuntur consequatur cupiditate, totam commodi quas dicta nobis ad ea omnis minus ullam. Quisquam ducimus, aliquid ipsa totam quas autem, aperiam sed tempora dicta ratione nulla eos, omnis libero dolor expedita provident numquam ab sunt excepturi ipsum at sequi ea illum vel! Similique quas necessitatibus numquam? Magnam laudantium repudiandae commodi incidunt eius illo modi inventore minima repellat dolor! Facere nobis iste provident minus est, consequuntur facilis voluptatibus aut libero quo ducimus placeat unde officia dolorem ipsam harum? Non sequi labore officiis delectus dolor error ea perferendis laudantium, eum quas magnam. Nam asperiores, voluptatibus nulla eius modi aliquam sequi blanditiis totam tempora odio ullam ratione fugit qui numquam quae voluptatem porro, iure cum impedit, sit facilis. At dicta obcaecati unde quas earum quisquam alias eius! Laudantium a autem aliquam voluptatum expedita magnam praesentium eaque hic. Tempore excepturi numquam adipisci voluptates nostrum provident saepe aut placeat et vero, eveniet accusantium similique alias suscipit quidem. Ratione quam praesentium obcaecati similique, tempore placeat aliquam. Obcaecati autem modi nostrum, quis rerum, vel qui expedita aliquam iusto neque commodi eaque quisquam animi beatae repellat asperiores error dolorem magni accusamus numquam! Pariatur aut quos assumenda consequuntur voluptatem, molestiae blanditiis tempore hic ducimus deleniti et. Qui voluptates nisi quibusdam repellendus nulla architecto dicta aspernatur. Deserunt sapiente numquam eum ipsum earum, tempora saepe ipsa id cupiditate. Ducimus animi officia quo harum rem fugit quam totam, laborum vel accusamus, dignissimos adipisci? Autem impedit, nobis, atque quo ex, commodi rerum explicabo veniam rem voluptatem neque incidunt omnis eveniet iure accusantium quisquam enim vel veritatis cumque? Praesentium minima quod, molestiae enim autem ut. Odio molestias nulla voluptatibus qui impedit velit dolor aut placeat autem laboriosam quis porro iusto veritatis, eos facilis suscipit sed ullam fugit veniam maiores. Voluptatibus, quod tempora? Qui nesciunt eaque aliquid enim corrupti amet unde ipsam odio dignissimos ut, labore consectetur accusantium nisi libero possimus quos, sequi, ad eligendi minus alias debitis molestiae quisquam! Cupiditate dolorum modi sapiente sint illum facilis eligendi, perferendis ullam autem cum tenetur, repudiandae eaque.
                                    </p>  
                                </div>        
                            </div>
                        </div>

                    </div>
                </div>
                        
                </>
            </Layout>
        </div>
       
        </>
       
    )
}