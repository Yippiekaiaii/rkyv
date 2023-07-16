import Layout from "@/components/Layout";


export default function Gallery() {

    return (
        <> 
         <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/img/aries.jpg")'}}>
            <Layout>
                
                <div className="flex justify-center mt-3 flex-wrap gap-4">
                    <img className="eventImage" src="/img/IMG-20230711-WA0000.jpg" alt="gallery image 1"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0002.jpg" alt="gallery image 2"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0006.jpg" alt="gallery image 3"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0007.jpg" alt="gallery image 4"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0008.jpg" alt="gallery image 5"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0009.jpg" alt="gallery image 6"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0013.jpg" alt="gallery image 7"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0014.jpg" alt="gallery image 8"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0016.jpg" alt="gallery image 9"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0011.jpg" alt="gallery image 10"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0001.jpg" alt="gallery image 11"/>
                    <img className="eventImage" src="/img/IMG-20230711-WA0015.jpg" alt="gallery image 12"/>
                </div>
            </Layout>
        </div>
        </>
       
    )
}