import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
//import Provider from '@components/Provider'

export const metadata = {
  title: "Xcript CS",
  description: "IA & Cloud Solutions",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
