import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className=" ml-[170px] mt-[42px] w-[1200px] h-[33px]">
      <div className="flex justify-between items-center h-full">
        <div className="text-xl font-bold">
          <a href="#" className="hover:text-gray-400">KridaLabs</a>
        </div>
        <nav>
          <ul className="flex space-x-12">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Project</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      
      
    </header>
    <section className="h-screen  ml-[120px] mt-[116px]  w-[1372px] h-[608px]  flex justify-between ">
        <div className="flex flex-col  ml-[52px] mt-[123px] ">
          <h1 className="text-5xl font-bold  mb-8">
            Future of Technology
          </h1>
          <p className="text-xl  mb-6">
            Empowering businesses with cutting-edge solutions and next-gen technology <br /> Empowering businesses with cutting-edge solutions and next-gen technology.
          </p>
          <button className="bg-blue-600 text-white w-40 py-3 rounded-3xl hover:bg-blue-500 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="relative w-[754px] h-[512px]">
      <div 
        className="absolute top-0 left-0 ml-[-63px]  bg-blue-200 w-[129px] h-[129px] rounded-full z-0"
        style={{
          zIndex: 0,
        }}
      ></div>
       <div 
 className="absolute top-[370px] left-[425px] bg-yellow-200 w-[178px] h-[178px] z-0 rounded-br-full"        style={{
          borderBottomRightRadius: '50%',
          zIndex: 0,
          marginRight: '456px',
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
        }}
      />
    </div>
     
    </section>
    
      /* <main>
        {children}
      </main>
      <Footer />
      
      
    </>
  );
}
