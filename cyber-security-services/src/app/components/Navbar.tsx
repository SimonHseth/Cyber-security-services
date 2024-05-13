import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Navbar = () => {
    return (
        <nav className='h-20 flex-row flex absolute w-full align-middle' >
            <Image className="w-fit h-7 ml-20 mt-5 " src={'/images/cybersec.png'} alt={"CyberSec-Image"} width={"220"} height={"20"}  />  
            <ul className="m-auto text-s font-inter text-gray-300 flex flex-nowrap space-x-8 align-middle ">
                <Link href={'/'}>
                <p>Om oss</p>
                </Link>
            </ul>

           <div className="flex flex-nowrap space-x-10 mt-7 mr-10 w-fit">
            <Link href='https://www.linkedin.com/'>
            <FaLinkedinIn />
            </Link>
            <Link href='https://www.twitter.com/'>
            <FaXTwitter />
            </Link>
            <Link href='https://www.instagram.com/'>
            <FaInstagram />
            </Link>
            <Link href='https://www.facebook.com' >
            <FaFacebookF />
            </Link>
            
            
            
            

           </div>
           
        </nav>
    );
};

export default Navbar;