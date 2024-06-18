import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-1 px-1 xl:mx-[120px] mt-4"> {/* Set padding-left and padding-right to 120px */}
      {/* Separator Line */}
      <hr className="border-t-2 border-gray-200" /> {/* Horizontal line */}


      {/* Left Section */}


      {/* Center Section */}
      <div className="flex flex-row flex-wrap justify-between  mx-7 space-y-3  ">
        <div className=" lg:w-1/3 flex flex-col space-y-2 mt-3 ">
          <h2 className="text-2xl font-bold">KridaLabs</h2>
          <p className="text-[10px] text-justify">Discover how we’ve helped business like yours transform their ideas into thriving ventures. From concept to execution, our innovative solutions have driven incredible results.</p>
        </div>
        {/* What We Do Section */}
        <div className="lg:w-auto flex flex-col justify-start me-2 ">
          <h2 className="text-1xl font-bold">What We Do</h2>
          <ul className="text-[10px] space-y-1">
            <li><a href="#" className="hover:underline ">Web Design</a></li>
            <li><a href="#" className="hover:underline">App Design</a></li>
            <li><a href="#" className="hover:underline ">Social Media Manage</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="  lg:w-auto flex flex-col me-2 ">
          <h2 className="text-1xl font-bold">Company</h2>
          <ul className="space-y-1 text-[10px]">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Become Investor</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className=" flex flex-col me-2">
          <h2 className="text-1xl font-bold">Support</h2>
          <ul className="space-y-1 text-[10px]">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Policy</a></li>
            <li><a href="#" className="hover:underline">Business</a></li>
          </ul>
        </div>
        <div className="flex flex-col me-2">
          <h2 className="text-1xl font-bold">Contact</h2>
          <ul className="space-y-1 text-[10px]">
            <li><a href="#" className="hover:underline">Email Us</a></li>
            <li><a href="#" className="hover:underline">Whatsapp</a></li>
            <li><a href="#" className="hover:underline">Support Chat</a></li>
          </ul>
        </div>
      </div>




      {/* Social Media Icons Section */}
      <div className="flex justify-center space-x-4 mt-10"> {/* Added margin-top to create a gap */}
        <a href="#" className="text-black hover:text-gray-600">
          <FaFacebookF size={24} /> {/* Increased size */}
        </a>
        <a href="#" className="text-black hover:text-gray-600">
          <FaTwitter size={24} /> {/* Increased size */}
        </a>
        <a href="#" className="text-black hover:text-gray-600">
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
