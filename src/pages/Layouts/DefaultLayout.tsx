import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        <h1>KridaLabs</h1>
      </Header>
      <main>
        {children}
      </main>
      <Footer>
        &copy; KridaLabs {new Date().getFullYear()}
      </Footer>
    </>
  );
}
