import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const Service = () => {
    const service = document.getElementById('services')
    if (service) {
      window.scrollTo({
        top: service.offsetTop,
        behavior: 'smooth'
      })
    }
  }
  return (
    <footer className="bg-white text-black py-1 px-1 xl:mx-[120px] mt-4"> {/* Set padding-left and padding-right to 120px */}
      {/* Separator Line */}
      <hr className="border-t-2 border-gray-200" /> {/* Horizontal line */}


      {/* Left Section */}


      {/* Center Section */}
      <div className="flex flex-row flex-wrap lg:justify-between justify-evenly items-start  space-y-3 px-5 lg:px-5 xl:px-0  ">
        <div className=" lg:w-1/3 flex flex-col space-y-2 mt-3 ">
          <div className='flex items-center'>
            <img src='/logo.svg' className='pe-2 w-[80px] ' />
            <h2 className="text-2xl font-bold">KridaLabs</h2>
          </div>

          <p className="text-[10px] text-justify lg:w-52 xl:w-96">Discover how we’ve helped startups like yours transform their ideas into thriving ventures. From concept to execution, our innovative solutions have driven incredible results.</p>
        </div>
        {/* What We Do Section */}

        <div className="lg:w-auto flex flex-col justify-center space-y-2 items-start me-2 ">
          <h2 className="text-2xl font-bold" onClick={Service}>What We Do</h2>
          <ul className="text-[10px] space-y-1">
            <li><Link to='' className="hover:underline" onClick={Service}>Web Design</Link></li>
            <li><Link to='' className="hover:underline" onClick={Service}>App Design</Link></li>
            <li><Link to='' className="hover:underline" onClick={Service}>Social Media Manage</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="  lg:w-auto flex flex-col justify-center space-y-2 items-start me-2 ">
          <h2 className="text-2xl font-bold">Company</h2>
          <ul className="space-y-1 text-[10px]">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Become Investor</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className=" flex flex-col justify-center space-y-2 w-[142px] lg:w-auto items-start me-2">
          <h2 className="text-2xl font-bold">Support</h2>
          <ul className="space-y-1 text-[10px]">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Policy</a></li>
            <li><a href="#" className="hover:underline">Business</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-center space-y-2 items-start w-[106px] me-2 xl:me-0">
          <h2 className="text-2xl font-bold">Contact</h2>
          <ul className="space-y-1 text-[10px]">
            <li><a href="#" className="hover:underline">Email Us</a></li>
            <li><a href="#" className="hover:underline">Whatsapp</a></li>
            <li><a href="#" className="hover:underline">Support Chat</a></li>
          </ul>
        </div>
      </div>




      {/* Social Media Icons Section */}
      <div className="flex justify-center space-x-4 mt-10"> {/* Added margin-top to create a gap */}
        <a href="https://www.facebook.com/kridalabs" target="_blank" className="text-black hover:text-gray-600">
          <FaFacebookF size={24} /> {/* Increased size */}
        </a>
        <a href="https://www.linkedin.com/company/kridalabs" target="_blank" className="text-black hover:text-gray-600">
          <FaLinkedinIn size={24} /> {/* Increased size */}
        </a>
        <a href="https://www.instagram.com/kridalabs/" target="_blank" className="text-black hover:text-gray-600">
          <FaInstagram size={24} /> {/* Increased size */}
        </a>
      </div>
      {/* Separator Line */}
      <hr className="border-t-2 border-gray-200 my-2" /> {/* Horizontal line */}

      {/* Copyright Section */}
      <div className="text-center text-sm  text-gray-400">
        Copyright © 2024 KridaLabs. All rights reserved.
      </div>
    </footer>
  );
}
