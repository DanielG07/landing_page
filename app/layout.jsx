import "@styles/globals.css";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

export const metadata = {
  title: "Xcript CS",
  description: "IA & Cloud Solutions",
=======

import Nav from "@components/Nav";
import Footer from "@components/Footer";
//import Provider from '@components/Provider'

export const metadata = {
  title: "Xcript CS",
  description: "Cloud and Blockchain Solutions",
>>>>>>> 3e04dd5 (Update de landing page)
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
<<<<<<< HEAD
          <ToastContainer />
=======
>>>>>>> 3e04dd5 (Update de landing page)
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
