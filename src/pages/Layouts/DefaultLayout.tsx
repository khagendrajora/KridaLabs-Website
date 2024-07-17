import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-white xl:flex xl:justify-center">
        <div className='xl:w-[1500px]'>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
