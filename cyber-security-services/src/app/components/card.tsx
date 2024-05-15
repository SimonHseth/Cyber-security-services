import Image from "next/image";

const Card = () => {
    return (
        <div className="justify-center w-full h-80 mt-40 mb-60 flex grid ">
            <p>AnnsattOversikt</p>
            <div className="w-fit h-fit grid flex-row flex-wrap text-wrap absolute mt-20 ml-20 bg-gray-600 justify-center rounded-md">
               <div className="mx-20">
                 <Image className="min-w-full mt-10 h-30 w-30 rounded-full" src={'/images/Sam-sulek.jpg'} alt="" width={280} height={100}/>
               </div>
             <div className="ml-10 mb-1 text-xl">
               <h1>Sam</h1>

             </div>
             <div className=" ml-10 mb-5">
             <p>Direktør</p>
             </div>

            </div>
           

        </div>
        

    );
    

};

export default Card;