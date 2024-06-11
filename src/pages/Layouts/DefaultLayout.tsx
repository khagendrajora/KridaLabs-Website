import { useState } from 'react';
import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import { Services } from "../../components/Services/Services";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-white">
        <header className="p-4 sm:ml-[120px] sm:mt-[42px] sm:w-[1200px] sm:h-[33px]">
          <div className="flex justify-between items-center h-full">
            <div className="text-xl font-bold">
              <a href="#" className="hover:text-gray-400">KridaLabs</a>
            </div>
            <nav className="hidden sm:block">
              <ul className="flex space-x-12">
                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                <li><a href="#" className="hover:text-gray-400">Services</a></li>
                <li><a href="#" className="hover:text-gray-400">Project</a></li>
                <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact</a></li>
              </ul>
            </nav>
            <button
              className="sm:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-400 hover:border-gray-400"
              onClick={toggleMenu}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <nav className="sm:hidden absolute top-16 right-0 bg-white shadow-lg rounded-lg py-2 w-[200px]">
              <ul className="flex flex-col space-y-2">
                <li><a href="#" className="hover:text-gray-400 px-4 py-2">Home</a></li>
                <li><a href="#" className="hover:text-gray-400 px-4 py-2">Services</a></li>
                <li><a href="#" className="hover:text-gray-400 px-4 py-2">Project</a></li>
                <li><a href="#" className="hover:text-gray-400 px-4 py-2">Blog</a></li>
                <li><a href="#" className="hover:text-gray-400 px-4 py-2">Contact</a></li>
              </ul>
            </nav>
          )}
        </header>
        <section className="ml-4  sm:ml-[68px] sm:mt-[116px] w-full sm:w-[1372px] h-auto sm:h-[608px] flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col ml-4 sm:ml-[52px] mt-8 sm:mt-[123px]">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-8">
              Future of Technology
            </h1>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 max-w-lg">
              Empowering businesses with cutting-edge solutions and next-gen technology  Empowering businesses with cutting-edge solutions and next-gen technology.
            </p>
            <button className="bg-blue-600 text-white w-32 sm:w-40 py-2 sm:py-3 rounded-3xl hover:bg-blue-500 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="relative w-full sm:w-[754px] h-[300px] sm:h-[512px] mt-8 sm:mt-0">
            <div
              className="absolute top-0 left-0 ml-[-63px] bg-blue-500 w-[129px] h-[129px] rounded-full z-0"
              style={{
                zIndex: 0,
              }}
            ></div>
            <div
              className="absolute top-[150px] sm:top-[370px] left-[50%] transform translate-x-[-50%] sm:translate-x-0 sm:left-[396px] bg-yellow-200 w-[178px] h-[178px] z-0"
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
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </section>
        <Services />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
