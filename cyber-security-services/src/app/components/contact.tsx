
  

const Contact = () => {
    return (


        
        <div className="justify-center mx-auto flex flex-row w-fit h-80 bg-gray-600 grid">
            <div className="top-0 right-0 mr-10 ml-5 mt-5">
                <p>Navn</p>
                <div className=" h-7 w-28">
                    <input type="text" name="" id="" className="rounded-md text-black" />

                </div>

            </div>
            <div className="bottom-0 left-0 mr-20 ml-5">
                <p>E-Postaddresse</p>
                <div className=" h-7 w-48">
                    <input type="text" name="" id="" className="rounded-md text-black"  />

                </div>

            </div>
            <div className="mr-20 ml-5">
                <p>Telefon</p>
                <div className=" h-7 w-40">
                    <input type="text" className="rounded-md text-black"  />

                </div>

            </div>

            <button type="button" className="w-28 h-10 bg-teal-700 ml-5 rounded-md">
                <p>Send Inn</p>

            </button>
        </div>
    )
}

export default Contact;