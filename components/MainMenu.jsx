"use client"; //Directive to use hooks side-client
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function MainMenu() {
  // Smooth scrolling handler
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <nav className="z-20 fixed flex px-10 top-0 left-0 w-full bg-slate-50 text-white shadow-lg ">
      <Link href="/" className="gap-2 flex-center pt-1 ">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">Xcript Cs</p>
      </Link>

      <ul className="flex flex-1 justify-end space-x-10 py-7 px-10 text-black text-xl">
        <li>
          <a href="#section1" className="hover:text-violet-500">
            Inicio
          </a>
        </li>
        <li>
          <a href="#section2" className="hover:text-violet-500">
            Producto
          </a>
        </li>
        <li>
          <a href="#section3" className="hover:text-violet-500">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#section4" className="hover:text-violet-500">
            Contáctanos
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default MainMenu;
