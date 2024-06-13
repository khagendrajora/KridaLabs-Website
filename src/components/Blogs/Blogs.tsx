import { useState } from 'react'

export const Blogs = () => {
    const [blog, setBlog] = useState(false)
    const handleClick = () => {
        setBlog(!blog)
    }
    return (
        <>
            <div id='blogs'></div>
            <div className='flex flex-col pt-10 px-6 space-y-2  lg:items-center lg:space-y-8 lg:pt-20'>
                <h1 className=' text-2xl font-bold lg:text-4xl'>Read Our blog</h1>
                <p className='text-gray-400'>Read some of our best  curated articles case studies and  other contents from our team</p>
                <div className='flex flex-col items-start mt-7 space-y-1 lg:flex-row  lg:justify-between lg:px-5 lg:w-full'>
                    <div>
                        <img src='/public/image 8.png' className='lg:w-48'></img>
                        <p className='text-1xl text-gray-400'>Design</p>
                        <h1 className='font-bold lg:w-48'>How great content helps drive success?</h1>
                        <button className='text-blue-500' onClick={handleClick}>Read more...</button>
                        {blog &&
                            <p className='text-gray-400 text-justify px-4 lg:w-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam debitis explicabo, pariatur accusamus sint consequatur iure esse deleniti, maiores eveniet nam dicta atque ratione, nihil fugiat numquam impedit natus!</p>

                        }
                    </div>
                    <div>
                        <img src='/public/image 8.png' className='lg:w-48'></img>
                        <p className='text-1xl text-gray-400'>Design</p>
                        <h1 className='font-bold lg:w-48'>How great content helps drive success?</h1>
                        <button className='text-blue-500' onClick={handleClick}>Read more...</button>
                        {blog &&
                            <p className='text-gray-400 text-justify px-4 lg:w-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam debitis explicabo, pariatur accusamus sint consequatur iure esse deleniti, maiores eveniet nam dicta atque ratione, nihil fugiat numquam impedit natus!</p>

                        }
                    </div>
                    <div>
                        <img src='/public/image 8.png' className='lg:w-48'></img>
                        <p className='text-1xl text-gray-400'>Design</p>
                        <h1 className='font-bold lg:w-48'>How great content helps drive success?</h1>
                        <button className='text-blue-500' onClick={handleClick}>Read more...</button>
                        {blog &&
                            <p className='text-gray-400 text-justify px-4 lg:w-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam debitis explicabo, pariatur accusamus sint consequatur iure esse deleniti, maiores eveniet nam dicta atque ratione, nihil fugiat numquam impedit natus!</p>

                        }
                    </div>

                </div>
            </div>


        </>
    )
}
