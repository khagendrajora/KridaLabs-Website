

export const ContactUS = () => {


    return (
        <>
            <div id="contactUs"></div>
            <div className='flex flex-col pt-10 px-5 space-y-1 lg:flex-row lg:justify-between xl:justify-evenly lg:items-center'>
                <div className="p-6 sm:hidden lg:flex lg:w-1/2 lg:justify-center ">
                    <img src="/Group 143.svg" className="w-[541px]"></img>
                </div>
                <div className="px-10 lg:w-1/2 xl:w-1/3 lg:flex-col  lg:space-y-4 ">
                    <h1 className=' text-4xl font-bold'>Contact Us</h1>
                    <p className='text-gray-400 text-justify my-5  '>Get in touch us to kickstart your ideas.</p>
                    <form className='space-y-4'>
                        <input type='text' placeholder='Your Email' className='p-3 pl-7 text-black bg-blue-100 rounded-md w-full' />
                        <input type='text' placeholder='Name' className='p-3 pl-7 text-black bg-blue-100 rounded-lg w-full' />
                        <textarea typeof='text' placeholder='message' cols={3} rows={5} className='p-3 pl-7 text-black bg-blue-100 rounded-lg w-full' />
                        <button className="bg-blue-700 text-white w-auto xl:text-[20px] text-[20px] lg:text-[15px] lg:p-4 font-bold p-5 px-[40px]  rounded-[60px] hover:bg-blue-500 transition duration-300" type='submit'>
                            Contact Now
                        </button>
                    </form>

                </div>

            </div>

        </>
    )
}
