import DefaultLayout from "../Layouts/DefaultLayout";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects"
import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";
import ProjectsList from "../../components/Projects/ProjectsList";
import { scrollTo } from "../../utils";
import Button from "../../components/Button/Button";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function Home() {
  const renderGridElements = () => {
    const elements: React.ReactNode[] = []
    for (let i = 0; i < 192; i++) {
      elements.push(<div key={i} className="bg-gray-100 w-2 h-2 rounded"></div>)
    }
    return elements
  };

  return (
    <DefaultLayout>
      <section className="sm:hidden lg:flex lg:px-10 lg:mb-10 lg:flex-row lg:justify-center z-0 xl:flex xl:flex-row xl:justify-between xl:mx-[120px]  ">
        <div className="flex flex-col  space-y-4 justify-center ">
          <h1 className="text-4xl  font-bold mb-2  ">
            <span className="text-red-500 text-5xl">Pioneering </span> <br />Tomorrow"s Technology
          </h1>
          <p className=" sm:text-2xl font-bold mb-4 max-w-lg ">
            Welcome to <span className="text-indigo-500 text-3xl">KridaLabs</span>
          </p>
          <div className="font-semibold">

            We partner with businesses to navigate the ever-changing digital landscape, transforming their ambitions into reality.
          </div>

          <Button variant="primary" onClick={() => scrollTo("contactUs")}>
            Get Started
          </Button>
          <div className="grid grid-rows-8 grid-flow-col gap-3 -ml-[52px] absolute top-[455px]  z-0 "  >
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
              borderBottomRightRadius: "50%",
              zIndex: 0,
            }}
          ></div>
          <img
            src="https://cdn.pixabay.com/photo/2022/10/04/21/25/xr-7499160_1280.jpg"
            alt="Tech Illustration"
            className="rounded-lg shadow-lg border-bottom-left-radius z-0"
            style={{
              borderBottomLeftRadius: "40%",
              position: "relative",
              zIndex: 0,
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </section>
      <section className="p-6 space-y-5 lg:hidden xl:hidden">
        <div className="text-black font-extrabold flex justify-center text-wrap text-3xl"> <h1 className="text-4xl  font-bold mb-4 ">
          <span className="text-red-500 text-5xl">Pioneering </span> <br />Tomorrow"s Technology
        </h1></div>
        <div className="text-gray-400 text-wrap"> <p className=" sm:text-2xl font-bold mb-4 max-w-lg text-indigo-500">
          Welcome to KridaLabs
        </p>
          <div>

            We partner with businesses to navigate the ever-changing digital landscape, transforming their ambitions into reality.
          </div></div>
        <button className="bg-blue-600 text-white w-28 p-2  rounded-3xl hover:bg-blue-500 transition duration-300" onClick={() => scrollTo("contactUs")}>
          Get Started
        </button>
        <img src="/image 8.png" className="w-full" />
      </section>
      <Services />
      <Projects />
      <section className="flex p-5 justify-center flex-col">
        <h1 className="text-4xl flex items-center flex-col font-bold mb-4 ">Projects</h1>
        <ProjectsList />
      </section>
      <Testimonials />
      <Blog />
      <Contact />
    </DefaultLayout>
  );
}
