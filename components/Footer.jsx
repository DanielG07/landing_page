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
<<<<<<< HEAD
        <div class="w-full mx-auto p-4 md:py-4">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://xcript.mx/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/assets/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black max-sm:items-center">Xcript</span>
                </a>
                <div>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
=======
      <div class="w-full mx-auto p-4 md:py-4">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://xcript.mx/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/assets/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black max-sm:items-center">
              Xcript
            </span>
          </a>
          <div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {/* <li>
>>>>>>> 3e04dd5 (Update de landing page)
                        <a href="#" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li> */}
              {/* <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                    </li> */}
              <li>
                <a>Contact</a>
              </li>
            </ul>

            <ul class="flex flex-wrap mb-6 text-sm font-normal text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a class="hover:underline">service@xcript.com.mx</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024 <a>Xcript CS™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
