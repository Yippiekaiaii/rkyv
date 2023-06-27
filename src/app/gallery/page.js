import Layout from "@/components/Layout";


export default function Gallery() {

    return (
        <> 
        <Layout>
            
            <div className="flex justify-center space-x-4 mt-3">
                <img className="eventImage" src="/img/sample_photo001.jpg" alt="dj sample 1"/>
                <img className="eventImage" src="/img/sample_photo002.jpg" alt="dj sample 2"/>
                <img className="eventImage" src="/img/sample_photo003.jpg" alt="dj sample 3"/>
            </div>
        </Layout>
        </>
       
    )
}