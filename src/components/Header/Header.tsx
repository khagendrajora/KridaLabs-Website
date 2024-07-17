import { useState } from "react";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
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
  };

  const Project = () => {
    const project = document.getElementById('projects')
    if (project) {
      window.scrollTo({
        top: project.offsetTop,
        behavior: 'smooth'
      })
    }
  };

  const Blog = () => {
    const blog = document.getElementById('blogs')
    if (blog) {
      window.scrollTo({
        top: blog.offsetTop,
        behavior: 'smooth'
      })
    }
  };

  const ContactUs = () => {
    const contactus = document.getElementById('contactUs')
    if (contactus) {
      window.scrollTo({
        top: contactus.offsetTop,
        behavior: 'smooth'
      })
    }
  };

  return (
    <header className="p-4 sm:ml-[10px] sm:mt-[15px] h-[100px]   ">
      <div className="flex justify-between">
        <div className="text-xl font-bold flex items-center">
          <a href='/' ><img src='/logo.svg' className='pe-2 w-[80px] ' /></a>
          <a href="/" className="hover:text-gray-400 ">KridaLabs</a>
        </div>
        <nav className="sm:hidden lg:hidden xl:block  xl:me-24">
          <ul className="flex space-x-12 text-lg">
            <li><a className="hover:text-gray-400">Home</a></li>
            <li><a className="hover:text-gray-400" onClick={Service}>Services</a></li>
            <li><a className="hover:text-gray-400" onClick={Project}>Project</a></li>
            <li><a className="hover:text-gray-400" onClick={Blog}>Blog</a></li>
            <li><a className="hover:text-gray-400" onClick={ContactUs}>Contact</a></li>
          </ul>
        </nav>
        {!menuOpen ? (
          <>

            <button
              className="xl:hidden flex  items-center px-3 py-2  text-black  hover:text-gray-400 "
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
          </>
        ) : (
          <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} className=' h-8 me-5 mt-4' />
        )

        }
      </div>
      {menuOpen && (
        <nav className=" absolute top-28 right-0 z-10 flex justify-end bg-white shadow-lg rounded-lg py-2 w-full">

          <ul className="flex flex-col space-y-4 z-10 font-primary me-2">
            <li><a href="#" className="hover:text-gray-400 px-4 py-2">Home</a></li>
            <li><a href="#" className="hover:text-gray-400 px-4 py-2" onClick={Service}>Services</a></li>
            <li><a href="#" className="hover:text-gray-400 px-4 py-2" onClick={Project}>Project</a></li>
            <li><a href="#" className="hover:text-gray-400 px-4 py-2" onClick={Blog}>Blog</a></li>
            <li><a href="#" className="hover:text-gray-400 px-4 py-2" onClick={ContactUs}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
