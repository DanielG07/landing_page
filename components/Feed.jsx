import React from "react";
import Cards from "./Cards";

function Feed() {
  return (
    <div className="px-14 mt-3 lg:flex justify-self-center">
      <Cards
        title="Google Cloud"
        icon="/assets/images/google.png"
        text="Confiamos en Google Cloud por su seguridad, escalabilidad y servicios avanzados, clave para construir soluciones modernas y serverless."
      />
      <Cards
        title="API Res"
        icon="/assets/images/api.png"
        text="Diseñamos APIs robustas y microservicios escalables para acelerar la integración y evolución tecnológica de tus plataformas."
      />
      <Cards
        title="IA"
        icon="/assets/images/ia.png"
        text="Aplicamos IA para automatizar procesos, analizar datos y crear agentes inteligentes que potencian la productividad de tu negocio."
      />
      {/* <Cards
        title="Solana Blockchain"
        icon="/assets/images/solana.png"
        text="Desarrollamos soluciones Web3 en Solana para ofrecer transacciones ultrarrápidas, económicas y seguras con tecnología blockchain."
      /> */}
    </div>
  );
}
export default Feed;
