import Image from "next/image";


const Card = () => {
    return (
        <div className="justify-center w-full h-80 mt-80 mb-80 flex">
            <p>AnnsattOversikt</p>
            <div className="w-80 h-fit grid flex-row flex-wrap text-wrap absolute mt-20 bg-gray-600">
               <div className="mx-36">
                 <Image className="my-5 w-full min-w-full h-40" src={'/images/Sam-sulek.jpg'} alt="" width={280} height={100}/>
               </div>
             <div className="text-L">
               <h1>Head</h1>

             </div>
             <div className="">
             <p>Lalala</p>
             </div>

            </div>

        </div>
        

    );
    

};

export default Card;