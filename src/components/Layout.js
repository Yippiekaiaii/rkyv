

import Navbar from "./Navbar";

export default function Layout({children}) {
    
    return (
            <div>             
                <Navbar/>    
                <div className="mx-[20%] mt-5">{children}</div>         
            </div>
            )
    
}