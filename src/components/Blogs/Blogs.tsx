import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                <div className='flex flex-col items-center mt-7 space-y-1 lg:flex-row  lg:justify-center lg:space-x-12 xl:px-5   lg:w-60  xl:w-full'>
                    <div>
                        <img src='/image1.png' className='xl:w-96 lg:w-60'></img>
                        <p className='text-1xl text-gray-400'>Design</p>
                        <h1 className='font-bold lg:w-60 xl:w-96 '>How great content helps drive success?</h1>
                        <div className='space-x-2 flex-row'>
                            <button className='text-blue-500' onClick={handleClick}>Read more</button>
                            <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 cursor-pointer' onClick={handleClick} />
                        </div>
                        {blog &&
                            <p className='text-gray-400 text-justify px-4 lg:w-48'>Material-UI is a popular React UI framework that implements Google's Material Design. It offers a robust and customizable set of components, making it an excellent choice for building modern web applications.</p>

                        }
                    </div>
                    <div>
                        <img src='/image 8.png' className='xl:w-96'></img>
                        <p className='text-1xl text-gray-400'>Design</p>
                        <h1 className='font-bold xl:w-96 lg:w-60'>How great content helps drive success?</h1>
                        <div className='space-x-2 flex-row'>
                            <button className='text-blue-500' onClick={handleClick}>Read more</button>
                            <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 cursor-pointer' onClick={handleClick} />
                        </div>
                        {blog &&
                            <p className='text-gray-400 text-justify px-4 lg:w-48'>One of the most significant impacts of technology is the transformation of communication. The rise of the internet and mobile devices has enabled instant connectivity across the globe. Social media platforms, messaging apps, and video conferencing tools have made it easier to maintain relationships, both personal and professional, regardless of geographical barriers.</p>

                        }
                    </div>
                    <div>
                        <img src='/image 8.png' className='xl:w-96'></img>
                        <p className='text-1xl text-gray-400'>Design</p>
                        <h1 className='font-bold xl:w-96 lg:w-60'>How great content helps drive success?</h1>
                        <div className='space-x-2 flex-row'>
                            <button className='text-blue-500' onClick={handleClick}>Read more</button>
                            <FontAwesomeIcon icon={faArrowRight} className='text-blue-400 cursor-pointer' onClick={handleClick} />
                        </div>
                        {blog &&
                            <p className='text-gray-400 text-justify px-4 '>Staying updated with essential technologies is crucial for personal and professional growth. Key technologies to be aware of include Artificial Intelligence (AI) and Machine Learning (ML) for intelligent decision-making, Cloud Computing for scalable and flexible resources, and Cybersecurity to protect data. The Internet of Things (IoT) connects devices for smarter environments, while Blockchain ensures secure transactions. Augmented Reality (AR) and Virtual Reality (VR) create immersive experiences, and 5G technology enhances connectivity with faster speeds and lower latency. Quantum Computing, though still emerging, promises to solve complex problems. Understanding these technologies can significantly enhance your digital literacy and open up new opportunities.</p>

                        }
                    </div>

                </div>
            </div>


        </>
    )
}
