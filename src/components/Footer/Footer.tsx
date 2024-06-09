import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 px-[120px]"> {/* Set padding-left and padding-right to 120px */}
        {/* Separator Line */}
      <hr className="border-t-2 border-gray-200 my-8" /> {/* Horizontal line */}

      <div className="flex flex-wrap justify-between	 gap-0">
        {/* Company Info Section */}
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/6 gap-4">
          <h2 className="text-2xl font-bold">KridaLabs</h2>
          <p className="text-sm">
            abc
          </p>
        </div>

        {/* What We Do Section */}
        <div className="w-full sm:w-1/2 lg:w-1/6 flex flex-col gap-2">
          <h2 className="text-2xl font-bold">What We Do</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Web Design</a></li>
            <li><a href="#" className="hover:underline">App Design</a></li>
            <li><a href="#" className="hover:underline">Social Media Manage</a></li>
            
          </ul>
        </div>

        {/* Company Section */}
        <div className="w-full sm:w-1/2 lg:w-1/6 flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Become Investor</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="w-full sm:w-1/2 lg:w-1/6 flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Support</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Policy</a></li>
            <li><a href="#" className="hover:underline">Business</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full sm:w-1/2 lg:w-1/6 flex flex-col gap-2  ">
          <h2 className="text-2xl font-bold">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Email Us</a></li>
            <li><a href="#" className="hover:underline">Whatsapp</a></li>
            <li><a href="#" className="hover:underline">Support Chat</a></li>
          </ul>
        </div>
      </div>
      
      {/* Social Media Icons Section */}
      <div className="flex space-x-4 mt-10"> {/* Added margin-top to create a gap */}
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
      <hr className="border-t-2 border-gray-200 my-8" /> {/* Horizontal line */}

      {/* Copyright Section */}
      <div className="text-center text-sm mt-4 text-gray-400">
        Copyright © 2024 KridaLabs. All rights reserved.
      </div>
    </footer>
  );
}
