import React from "react";
import FeaturesGear from "@components/FeaturesGear";
import Image from "next/image";

const agents = [
  {
    title: "Agente gestor de archivos",
    description:
      "Organiza, categoriza y encuentra documentos, facilitando el control y acceso de la información.",
    icon: "/assets/images/carpeta.png",
  },
  {
    title: "Agente analista de datos",
    description:
      "Interpreta datos en tiempo real, genera reportes automatizados y detecta patrones.",
    icon: "/assets/images/analista.png",
  },
  {
    title: "Agente de soporte",
    description:
      "Atiende consultas internas o de clientes 24/7 con un motor conversacional inteligente y contextual.",
    icon: "/assets/images/support.png",
  },
  {
    title: "Agente sugerenciador",
    description:
      "Propone mejoras, predicciones o ideas basadas en IA para optimizar procesos y anticiparse a necesidades.",
    icon: "/assets/images/idea.png",
  },
];

function FeaturesModuls() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 lg:px-10">
      {/* Columna Izquierda */}
      <div className="flex flex-col space-y-6">
        {agents.slice(0, 2).map((agent, index) => (
          <AgentCard key={index} {...agent} />
        ))}
      </div>

      {/* Engranaje Central */}
      <div className="lg:col-span-2 flex justify-center items-center">
        <FeaturesGear />
      </div>

      {/* Columna Derecha */}
      <div className="flex flex-col space-y-6">
        {agents.slice(2).map((agent, index) => (
          <AgentCard key={index + 2} {...agent} />
        ))}
      </div>
    </div>
  );
}

function AgentCard({ title, description, icon }) {
  return (
    <div className="flex items-start bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      {/* Ping */}
      <div className="mt-1 mr-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-3">
          <Image
            src={process.env.NEXT_PUBLIC_BASE_PATH + "/" + icon}
            alt={title}
            width={40}
            height={40}
          />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default FeaturesModuls;
