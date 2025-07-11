"use client"; //Directive to use hooks side-client

import Link from "next/link"; //Allow us to move to the other pages of our application
import Image from "next/image"; //Automatically optimize the images for us
import { useEffect, useState } from "react"; //Hooks
//import { signIn, signOut, useSession, getProviders } from "next-auth/react"; //Authentication

const Footer = () => {
  //const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  /*useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);*/

  return (
    <footer class=" bg-white bg-opacity-90 pb-10 mt-6 rounded-lg w-screen">
      <div className="max-w-7xl mx-auto px-6 py-10 md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src={process.env.NEXT_PUBLIC_BASE_PATH + "/assets/images/logo.svg"}
            alt="Xcript Logo"
            width={32}
            height={32}
          />
          <span className="text-2xl font-semibold">Xcript</span>
        </div>

        {/* Navegación y contacto */}
        <div className="mt-6 md:mt-0 text-sm">
          <ul className="flex flex-col sm:flex-row sm:space-x-6 text-gray-500">
            <li>
              <Link href="#section1" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#section3" className="hover:underline">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link href="#section4" className="hover:underline">
                Contacto
              </Link>
            </li>
            <li>
              <a
                href="mailto:service@xcript.com.mx"
                className="hover:underline"
              >
                service@xcript.com.mx
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea divisora + derechos */}
      <div className="border-t border-gray-200 mt-6 py-6 text-center text-xs text-gray-500">
        © 2024 <span className="font-semibold">Xcript Cloud Solutions™</span>.
        Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
