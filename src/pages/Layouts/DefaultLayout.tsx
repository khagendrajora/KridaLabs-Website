import { useState } from 'react';
import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import { Services } from "../../components/Services/Services";
import { Projects } from "../../components/Projects/Projects"
import { Blogs } from '../../components/Blogs/Blogs';
import { ClientView } from '../../components/ClientView/ClientView';
import { ContactUS } from '../../components/Contact/ContactUS';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const Service = () => {
    const service = document.getElementById('services')
    if (service) {
      window.scrollTo({
        top: service.offsetTop,
        behavior: 'smooth'
      })
    }
  }
  const Project = () => {
    const project = document.getElementById('projects')
    if (project) {
      window.scrollTo({
        top: project.offsetTop,
        behavior: 'smooth'
      })
    }
  }
  const Blog = () => {
    const blog = document.getElementById('blogs')
    if (blog) {
      window.scrollTo({
        top: blog.offsetTop,
        behavior: 'smooth'
      })
    }
  }
  const ContactUs = () => {
    const contactus = document.getElementById('contactUs')
    if (contactus) {
      window.scrollTo({
        top: contactus.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const renderGridElements = () => {
    const elements: React.ReactNode[] = []
    for (let i = 0; i < 192; i++) {
      elements.push(<div key={i} className='bg-gray-100 w-2 h-2 rounded'></div>)
    }
    return elements
  }

  return (
    <>
      <div className="bg-white ">
        <header className="p-4 sm:ml-[10px] sm:mt-[15px] h-[100px]   ">
          <div className="flex justify-between">
            <div className="text-xl font-bold flex items-center">
              <a href='/' ><img src='/logo.svg' className='pe-2 w-[80px] ' /></a>
              <a href="/" className="hover:text-gray-400 ">KridaLabs</a>
            </div>
            <nav className="sm:hidden lg:hidden xl:block  xl:me-24">
              <ul className="flex space-x-12 text-lg">
                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                <li><a href="#" className="hover:text-gray-400" onClick={Service}>Services</a></li>
                <li><a href="#" className="hover:text-gray-400" onClick={Project}>Project</a></li>
                <li><a href="#" className="hover:text-gray-400" onClick={Blog}>Blog</a></li>
                <li><a href="#" className="hover:text-gray-400" onClick={ContactUs}>Contact</a></li>
              </ul>
            </nav>
            <button
              className="xl:hidden flex  items-center px-3 py-2  text-gray-500  hover:text-gray-400 "
              onClick={toggleMenu}
            >
              <svg
                className="fill-current h-8 "
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <nav className=" absolute top-28 right-0 flex justify-end bg-white shadow-lg rounded-lg py-2 w-full">
              <FontAwesomeIcon icon={faXmark} />
              <ul className="flex flex-col space-y-4  font-primary me-2">
                <li><a href="#" className="hover:text-gray-400 px-4 py-2">Home</a></li>
                <li><a href="#" className="hover:text-gray-400 px-4 py-2" onClick={Service}>Services</a></li>
                <li><a href="#" className="hover:text-gray-400 px-4 py-2" onClick={Project}>Project</a></li>
                <li><a href="#" className="hover:text-gray-400 px-4 py-2" onClick={Blog}>Blog</a></li>
                <li><a href="#" className="hover:text-gray-400 px-4 py-2" onClick={ContactUs}>Contact</a></li>
              </ul>
            </nav>
          )}
        </header>
        <section className="sm:hidden lg:flex lg:px-10 lg:mb-10 lg:flex-row lg:justify-center  xl:flex xl:flex-row xl:justify-between xl:mx-[120px] ">
          <div className="flex flex-col  space-y-4 justify-center ">
            <h1 className="text-4xl  font-bold mb-4 ">
              Pioneering  <br />Tomorrow's Technology
            </h1>
            <p className=" sm:text-xl mb-4 max-w-lg">
              Welcome to KridaLabs
            </p>
            <div>

              We partner with businesses to navigate the ever-changing digital landscape, transforming their ambitions into reality.
            </div>

            <button className="bg-blue-600 text-white w-32 sm:w-40 py-2 sm:py-3 rounded-3xl hover:bg-blue-500 transition duration-300 z-10">
              Get Started
            </button>
            <div className='grid grid-rows-8 grid-flow-col gap-3 -ml-[52px] absolute top-[455px]  z-0 '  >
              {renderGridElements()}
            </div>
          </div>
          <div className="relative w-[600px]  h-[512px] mt-8 sm:mt-0">
            <div
              className="absolute top-0 left-0 ml-[-63px] bg-blue-500 w-[129px] h-[129px] rounded-full z-0"
              style={{
                zIndex: 0,
              }}
            ></div>
            <div
              className="absolute top-[150px] sm:top-[370px] xl:left-[50%] lg:left-[20%]  transform translate-x-[-50%]  sm:translate-x-0  bg-yellow-200 w-[178px] h-[178px] z-0"
              style={{
                borderBottomRightRadius: '50%',
                zIndex: 0,
              }}
            ></div>
            <img
              src="https://cdn.pixabay.com/photo/2022/10/04/21/25/xr-7499160_1280.jpg"
              alt="Tech Illustration"
              className="rounded-lg shadow-lg border-bottom-left-radius z-10"
              style={{
                borderBottomLeftRadius: '40%',
                position: 'relative',
                zIndex: 10,
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </section>
        <section className='p-6 space-y-5 lg:hidden xl:hidden'>
          <div className='text-black font-extrabold flex justify-center text-wrap text-3xl'>A Digital Product Agency</div>
          <div className='text-gray-400 text-wrap'>Leading digital agency with solid design and development expertise. We build readymade website, mobile application and elaborate online business services</div>
          <button className="bg-blue-600 text-white w-28 p-2  rounded-3xl hover:bg-blue-500 transition duration-300">
            Contact Now
          </button>
          <img src='/image 8.png' className='w-full' />
        </section>
        <Services />
        <Projects />
        <ClientView />
        <Blogs />
        <ContactUS />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
