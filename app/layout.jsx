import "@styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

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
          <ToastContainer />
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
