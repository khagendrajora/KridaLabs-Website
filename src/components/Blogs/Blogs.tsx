import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export const Blogs = () => {
    const [blogf, setBlogf] = useState(false)
    const [blogs, setBlogs] = useState(false)
    const [blogt, setBlogt] = useState(false)
    const handleClickFirst = () => {
        setBlogf(!blogf)
    }
    const handleClickSecond = () => {
        setBlogs(!blogs)
    }
    const handleClickThird = () => {
        setBlogt(!blogt)
    }
    return (
        <>
            <div id='blogs'></div>
            {blogf || blogs || blogt ?

                (
                    <div className='flex flex-col pt-10 px-6 space-y-2 mb-80  lg:items-center lg:space-y-8 lg:pt-20'>
                        <h1 className=' text-2xl font-bold lg:text-4xl'>Read Our blog</h1>
                        <p className='text-gray-400'>Read some of our best  curated articles case studies and  other contents from our team</p>
                        <div className='flex flex-col relative items-center mt-7 space-y-1 lg:flex-row  lg:justify-center lg:space-x-12 xl:px-5 lg:w-60  xl:w-full'>
                            <div>
                                <img src='/image 8.png' className='xl:w-96 lg:w-60'></img>
                                <p className='text-1xl text-gray-400'>Design</p>
                                <h1 className='font-bold lg:w-60 xl:w-96 '>How great content helps drive success?</h1>
                                <div className='w-40 flex flex-row space-x-1'>
                                    <button className='text-blue-500 w-20' onClick={handleClickFirst}>Read more</button>
                                    <div className='w-4 mt-1'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickFirst} />
                                    </div>
                                </div>
                                {blogf &&
                                    <div className=''>
                                        <p className='text-gray-400 text-justify px-4 lg:w-48 absolute'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam debitis explicabo, pariatur accusamus sint consequatur iure esse deleniti, maiores eveniet nam dicta atque ratione, nihil fugiat numquam impedit natus!</p>
                                    </div>

                                }
                            </div>
                            <div>
                                <img src='/image 8.png' className='xl:w-96'></img>
                                <p className='text-1xl text-gray-400'>Design</p>
                                <h1 className='font-bold xl:w-96 lg:w-60'>How great content helps drive success?</h1>
                                <div className='w-40 flex flex-row space-x-1'>
                                    <button className='text-blue-500' onClick={handleClickSecond}>Read more</button>
                                    <div className='w-4 mt-1'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickSecond} />
                                    </div>
                                </div>
                                {blogs &&
                                    <p className='text-gray-400 text-justify absolute px-4 lg:w-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam debitis explicabo, pariatur accusamus sint consequatur iure esse deleniti, maiores eveniet nam dicta atque ratione, nihil fugiat numquam impedit natus!</p>

                                }
                            </div>
                            <div>
                                <img src='/image 8.png' className='xl:w-96'></img>
                                <p className='text-1xl text-gray-400'>Design</p>
                                <h1 className='font-bold xl:w-96 lg:w-60'>How great content helps drive success?</h1>
                                <div className='w-40 flex flex-row space-x-1'>
                                    <button className='text-blue-500' onClick={handleClickThird}>Read more</button>
                                    <div className='w-4 mt-1'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickThird} />
                                    </div>
                                </div>
                                {blogt &&
                                    <p className='text-gray-400 text-justify absolute px-4 lg:w-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam debitis explicabo, pariatur accusamus sint consequatur iure esse deleniti, maiores eveniet nam dicta atque ratione, nihil fugiat numquam impedit natus!</p>

                                }
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col pt-10 px-6 space-y-2  lg:items-center lg:space-y-8 lg:pt-20'>
                        <h1 className=' text-2xl font-bold lg:text-4xl'>Read Our blog</h1>
                        <p className='text-gray-400'>Read some of our best  curated articles case studies and  other contents from our team</p>
                        <div className='flex flex-col relative items-center mt-7 space-y-1 lg:flex-row  lg:justify-center lg:space-x-12 xl:px-5 lg:w-60  xl:w-full'>
                            <div>
                                <img src='/image 8.png' className='xl:w-96 lg:w-60'></img>
                                <p className='text-1xl text-gray-400'>Design</p>
                                <h1 className='font-bold lg:w-60 xl:w-96 '>How great content helps drive success?</h1>
                                <div className='w-40 flex flex-row space-x-1'>
                                    <button className='text-blue-500 w-20' onClick={handleClickFirst}>Read more</button>
                                    <div className='w-4 mt-1'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickFirst} />
                                    </div>
                                </div>
                                {blogf &&
                                    <div className=''>
                                        <p className='text-gray-400 text-justify px-4 lg:w-48 absolute'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam debitis explicabo, pariatur accusamus sint consequatur iure esse deleniti, maiores eveniet nam dicta atque ratione, nihil fugiat numquam impedit natus!</p>
                                    </div>

                                }
                            </div>
                            <div>
                                <img src='/image 8.png' className='xl:w-96'></img>
                                <p className='text-1xl text-gray-400'>Design</p>
                                <h1 className='font-bold xl:w-96 lg:w-60'>How great content helps drive success?</h1>
                                <div className='w-40 flex flex-row space-x-1'>
                                    <button className='text-blue-500' onClick={handleClickSecond}>Read more</button>
                                    <div className='w-4 mt-1'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickSecond} />
                                    </div>
                                </div>
                                {blogs &&
                                    <p className='text-gray-400 text-justify absolute px-4 lg:w-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam debitis explicabo, pariatur accusamus sint consequatur iure esse deleniti, maiores eveniet nam dicta atque ratione, nihil fugiat numquam impedit natus!</p>

                                }
                            </div>
                            <div>
                                <img src='/image 8.png' className='xl:w-96'></img>
                                <p className='text-1xl text-gray-400'>Design</p>
                                <h1 className='font-bold xl:w-96 lg:w-60'>How great content helps drive success?</h1>
                                <div className='w-40 flex flex-row space-x-1'>
                                    <button className='text-blue-500' onClick={handleClickThird}>Read more</button>
                                    <div className='w-4 mt-1'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickThird} />
                                    </div>
                                </div>
                                {blogt &&
                                    <p className='text-gray-400 text-justify absolute px-4 lg:w-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam debitis explicabo, pariatur accusamus sint consequatur iure esse deleniti, maiores eveniet nam dicta atque ratione, nihil fugiat numquam impedit natus!</p>

                                }
                            </div>

                        </div>
                    </div>
                )
            }

        </>
    )
}
