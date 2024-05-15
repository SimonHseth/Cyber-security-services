import Navbar from './components/Navbar';
import Main from './components/main';
import Card from './components/card';
import Contact from './components/contact';
import Image from 'next/image';
import Footer from './components/footer';


export default function Home() {
  return (
    <nav className="justify-center ">
      <Navbar />
      <div className='flex mx-auto space-y-40'>
        <Card/>
      </div>
      <div>
        <Contact/>
      </div>
      <div className='inset-x-bottom flex justify-center bottom-10 '>
        <Footer/>
      </div>
    </nav>
    

  );
}
