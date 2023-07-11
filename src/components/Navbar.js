import Link from "next/link"

export default function Navbar() {

return (
    <>
    <div className="navBar">
    <div className="mx-[20%] navBar">
        <ul className="flex items-center justify-center h-20 navBar">
            <span><img src="rKyv-AW_Desat-white clipped.jpg" alt="logo" className="w-20 mr-10"/></span>
            <Link href={'/'}><li className="linkBounce">Home</li></Link>
            <Link href={'/news'}><li className="linkBounce">News</li></Link>
            {/*}<Link href={'/events'}><li className="linkBounce">Events</li></Link>{*/}
            <Link href={'/listen'}><li className="linkBounce">Listen</li></Link>
            <Link href={'/gallery'}><li className="linkBounce">Gallery</li></Link>
            <Link href={'/contact'}><li className="linkBounce">About</li></Link>
        </ul>
       
    </div>
    <hr/>
    </div>
    </>

)

}