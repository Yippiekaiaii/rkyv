import Link from "next/link"

export default function Navbar() {

return (
    <>
    <div className="mx-[20%]">
        <ul className="flex items-center justify-center h-20 navBar">
            {/*}<span><img src="rKyv-AW_Desat-white.jpg" alt="logo" className="w-20 mr-3"/></span>{*/}
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/news'}><li>News</li></Link>
            <Link href={'/'}><li>Events</li></Link>
            <Link href={'/'}><li>Contact</li></Link>
        </ul>
        <hr/>
    </div>
    
    </>

)

}