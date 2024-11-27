import React from "react";
import FeaturesGear from "@components/FeaturesGear";
import Image from "next/image";

function FeaturesModuls() {
  return (
    <div class="px-10 grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-4">
      <div class="px-10 flex justify-self-center lg:grid lg:grid-cols-1 lg:gap-4">
        <div class="lg:flex grid grid-cols-1">
          <div class="p-1 m-1">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div class="p-1 m-1 ">
            <a class="p-1 m-2">Agente gestor de archivos.</a>
            <Image
              src={"/assets/images/carpeta.png"}
              alt="logo"
              width={50}
              height={50}
              className="flex absolute mt-3"
            />
          </div>
        </div>

        <div class="lg:flex grid grid-cols-1">
          <div class="p-1 m-1">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div class="p-1 m-1 ">
            <a class="p-1 m-2">Agente analista de datos.</a>
            <Image
              src={"/assets/images/analista.png"}
              alt="logo"
              width={50}
              height={50}
              className="flex absolute mt-3"
            />
          </div>
        </div>
      </div>

      <div class="mt-20 lg:mt-0 mb-20 lg:mb-0 lg:col-span-2">
        <FeaturesGear />
      </div>

      <div class="px-10 flex justify-self-center lg:grid lg:grid-cols-1 lg:gap-4">
        <div class="lg:flex grid grid-cols-1">
          <div class="p-1 m-1">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div class="p-1 m-1 ">
            <a class="p-1 m-2">Agente de soporte.</a>
            <Image
              src={"/assets/images/support.png"}
              alt="logo"
              width={50}
              height={50}
              className="flex absolute mt-3"
            />
          </div>
        </div>
        <div class="lg:flex grid grid-cols-1">
          <div class="p-1 m-1">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div class="p-1 m-1 ">
            <a class="p-1 m-2">Agente sugerenciador.</a>
            <Image
              src={"/assets/images/idea.png"}
              alt="logo"
              width={50}
              height={50}
              className="flex absolute mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturesModuls;
