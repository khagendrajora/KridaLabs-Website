

export const ContactUS = () => {
    return (
        <>
            <div id="contactUs"></div>
            <div className='flex flex-col pt-10 px-5 space-y-1 lg:flex-row lg:justify-between xl:justify-evenly'>
                <div className="p-6 sm:hidden lg:block">
                    <img src="/public/Group 143.png"></img>
                </div>
                <div className="px-10">
                    <h1 className=' text-2xl font-bold'>Contact Us</h1>
                    <p className='text-gray-400 text-justify '>Get in touch us to kickstart your ideas.</p>
                    <form className='space-y-3'>
                        <input type='text' placeholder='Your Email' className='p-1 text-black bg-blue-200 rounded-lg w-full' />
                        <input type='text' placeholder='Name' className='p-1 text-black bg-blue-200 rounded-lg w-full' />
                        <textarea typeof='text' placeholder='message' className='p-1 text-black bg-blue-200 rounded-lg w-full' />
                        <button className="bg-blue-800 text-white w-28 p-2  rounded-3xl hover:bg-blue-500 transition duration-300" type='submit'>
                            Contact Now
                        </button>
                    </form>

                </div>

            </div>

        </>
    )
}
