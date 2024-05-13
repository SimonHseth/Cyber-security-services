import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='h-20 flex-row flex absolute w-full align-middle' >
            <Image className="w-fit h-16 ml-5 mt-2 " src={'/images/cybersec.png'} alt={"CyberSec-Image"} width={"220"} height={"20"}  />  
            <ul className="m-auto text-grey-300 flex flex-nowrap space-x-8 ">
                <Link href='/'>
                    <p>produkter</p>
                </Link>

                <Link href={'/'}>
                <p>Tjenester</p>
                </Link>

                <Link href={'/'}>
                <p>Industrier</p>
                </Link>

                <Link href={'/'}>
                <p>Om oss</p>
                </Link>

                <Link href={'/'}>
                <p>Kontakt</p>
                </Link>
            </ul>

           <div className="flex flex-nowrap space-x-10 mt-7 mr-10">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>

           </div>
           
        </nav>
    );
};

export default Navbar;