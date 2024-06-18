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
            <div className='flex flex-col pt-10 px-6 lg-flex-row lg:justify-center  lg:items-center  '>
                <h1 className=' text-2xl font-bold lg:text-4xl'>Read Our blog</h1>
                {blogf || blogs || blogt ?

                    (
                        <>
                            <div className='mb-2   lg:relative'>

                                <div className='flex flex-col relative lg:mb-40  items-center mt-7  lg:flex-row  lg:justify-center lg:space-x-12 xl:px-5 lg:w-60  xl:w-full'>


                                    <div className='mb-10 '>
                                        <img src='/image1.png' className='xl:w-96 lg:w-60 bg-cover'></img>
                                        <p className='text-1xl text-gray-400'>Design</p>
                                        <h1 className='font-bold lg:w-60 xl:w-96 '>Material-UI: A Comprehensive UI framework for Developers</h1>
                                        <div className='w-40 flex flex-row space-x-1'>
                                            <button className='text-blue-500 w-20' onClick={handleClickFirst}>Read more</button>
                                            <div className='w-4 mt-1'>
                                                <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickFirst} />
                                            </div>
                                        </div>
                                        {blogf &&
                                            <div className='lg:mb-40 lg:absolute'>
                                                <p className='text-gray-400 text-justify w-80 lg:mb-10 px-1 lg:w-60 xl:w-80' >Material-UI is a popular React UI framework that implements Google's Material Design. It offers a robust and customizable set of components, making it an excellent choice for building modern web applications. In this blog post, we will explore the essentials of Material-UI, best practices for implementation, and some advanced tips to help you get the most out of this powerful library.</p>
                                            </div>

                                        }
                                    </div>


                                    <div className=' mb-10'>
                                        <img src='/image2.png' className='xl:w-96 lg:w-60 bg-cover'></img>
                                        <p className='text-1xl text-gray-400'>Knowledge</p>
                                        <h1 className='font-bold xl:w-96 lg:w-60'>The Impact of Technology: Transforming Human Life</h1>
                                        <div className='w-40 flex flex-row space-x-1'>
                                            <button className='text-blue-500' onClick={handleClickSecond}>Read more</button>
                                            <div className='w-4 mt-1'>
                                                <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickSecond} />
                                            </div>
                                        </div>
                                        {blogs &&
                                            <div className='lg:mb-40 lg:absolute'>

                                                <p className='text-gray-400 text-justify w-80 px-1 lg:mb-10  lg:w-60  xl:w-80'>Technology has profoundly influenced almost every aspect of our daily lives, revolutionizing the way we communicate, work, and live. From the internet to artificial intelligence, technological advancements continue to shape our world in unprecedented ways.</p>
                                            </div>

                                        }
                                    </div>

                                    <div className=' mb-10'>
                                        <img src='/image.png' className='xl:w-96 lg:w-60 bg-cover'></img>
                                        <p className='text-1xl text-gray-400'>Knowledge</p>
                                        <h1 className='font-bold xl:w-96 lg:w-60'>Essential Technologies to Know: Empowering Your Digital Journey</h1>
                                        <div className='w-40 flex flex-row space-x-1'>
                                            <button className='text-blue-500' onClick={handleClickThird}>Read more</button>
                                            <div className='w-4 mt-1'>
                                                <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickThird} />
                                            </div>
                                        </div>
                                        {blogt &&
                                            <div className='lg:mb-20 lg:absolute'>

                                                <p className='text-gray-400 text-justify w-80 px-1 lg:mb-10  lg:w-60  xl:w-80'>Staying updated with essential technologies is crucial for personal and professional growth. Key technologies to be aware of include Artificial Intelligence (AI) and Machine Learning (ML) for intelligent decision-making, Cloud Computing for scalable and flexible resources, and Cybersecurity to protect data. The Internet of Things (IoT) connects devices for smarter environments, while Blockchain ensures secure transactions. Augmented Reality (AR) and Virtual Reality (VR) create immersive experiences, and 5G technology enhances connectivity with faster speeds and lower latency</p>
                                            </div>

                                        }
                                    </div>
                                    {/* } */}

                                </div>
                            </div>
                        </>
                    ) : (<>

                        <div className='flex flex-col relative items-center mt-7 lg:flex-row  lg:justify-center  lg:items-center lg:space-x-12 xl:px-5 lg:w-60  xl:w-full'>
                            <div className='mb-10'>
                                <img src='/image1.png' className='xl:w-96 lg:w-60 bg-cover'></img>
                                <p className='text-1xl text-gray-400'>Design</p>
                                <h1 className='font-bold lg:w-60 xl:w-96 '>Material-UI: A Comprehensive UI framework for Developers</h1>
                                <div className='w-40 flex flex-row space-x-1'>
                                    <button className='text-blue-500 w-20' onClick={handleClickFirst}>Read more</button>
                                    <div className='w-4 mt-1'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickFirst} />
                                    </div>
                                </div>
                                {blogf &&
                                    <div className=''>
                                        <p className='text-gray-400 text-justify px-1 lg:w-60  xl:w-80 absolute'>Material-UI is a popular React UI framework that implements Google's Material Design. It offers a robust and customizable set of components, making it an excellent choice for building modern web applications. In this blog post, we will explore the essentials of Material-UI, best practices for implementation, and some advanced tips to help you get the most out of this powerful library.</p>
                                    </div>

                                }
                            </div>
                            <div className='mb-10'>
                                <img src='/image2.png' className='xl:w-96 lg:w-60'></img>
                                <p className='text-1xl text-gray-400'>Knowledge</p>
                                <h1 className='font-bold xl:w-96 lg:w-60'>The Impact of Technology: Transforming Human Life</h1>
                                <div className='w-40 flex flex-row space-x-1'>
                                    <button className='text-blue-500' onClick={handleClickSecond}>Read more</button>
                                    <div className='w-4 mt-1'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickSecond} />
                                    </div>
                                </div>
                                {blogs &&
                                    <div className=''>
                                        <p className='text-gray-400 text-justify px-1 lg:w-60  xl:w-80 absolute'>Technology has profoundly influenced almost every aspect of our daily lives, revolutionizing the way we communicate, work, and live. From the internet to artificial intelligence, technological advancements continue to shape our world in unprecedented ways.</p>
                                    </div>
                                }
                            </div>
                            <div className='mb-10'>
                                <img src='/image.png' className='xl:w-96 lg:w-60'></img>
                                <p className='text-1xl text-gray-400'>Knowledge</p>
                                <h1 className='font-bold xl:w-96 lg:w-60'>Essential Technologies to Know: Empowering Your Digital Journey</h1>
                                <div className='w-40 flex flex-row space-x-1'>
                                    <button className='text-blue-500' onClick={handleClickThird}>Read more</button>
                                    <div className='w-4 mt-1'>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 w-4 cursor-pointer' onClick={handleClickThird} />
                                    </div>
                                </div>
                                {blogt &&
                                    <div className=''>
                                        <p className='text-gray-400 text-justify px-1 lg:w-60  xl:w-80 absolute'>Staying updated with essential technologies is crucial for personal and professional growth. Key technologies to be aware of include Artificial Intelligence (AI) and Machine Learning (ML) for intelligent decision-making, Cloud Computing for scalable and flexible resources, and Cybersecurity to protect data. The Internet of Things (IoT) connects devices for smarter environments, while Blockchain ensures secure transactions. Augmented Reality (AR) and Virtual Reality (VR) create immersive experiences, and 5G technology enhances connectivity with faster speeds and lower latency</p>
                                    </div>
                                }
                            </div>

                        </div>

                    </>
                    )
                }
            </div >

        </>
    )
}
