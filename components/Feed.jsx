import React from "react";
import Cards from "./Cards";

function Feed() {
  return (
    <div class="px-14 mt-3 lg:flex justify-self-center">
      <Cards
        title={"Google Cloud"}
        icon={"/assets/images/google.png"}
        text={
          "Elegimos Google Cloud por su destacada seguridad y confiabilidad, fundamentales en el desarrollo de soluciones serverless."
        }
      />
      <Cards
        title={"IA"}
        icon={"/assets/images/ia.png"}
        text={
          "Implementamos IA para crear herramientas que optimicen procesos, elevando la eficiencia y productividad de tu empresa."
        }
      />
      <Cards
        title={"Solana Blockchain"}
        icon={"/assets/images/solana.png"}
        text={
          "Aplicativos en Solana Blockchain, full eficiencia y bajos costos transaccionales, ideal en la implementación del Web 3"
        }
      />
      <Cards
        title={"API Res"}
        icon={"/assets/images/api.png"}
        text={
          "Desarrollamos poderosas APIs diseñadas para optimizar herramientas y aplicaciones mediante Microservicios personalizados."
        }
      />
    </div>
  );
}
export default Feed;
