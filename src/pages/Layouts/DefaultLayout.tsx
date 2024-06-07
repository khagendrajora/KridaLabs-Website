import { ReactNode } from "react";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        //
      </Header>
      <main>
        {children}
      </main>
      <Footer>
        //
      </Footer>
    </>
  );
}
