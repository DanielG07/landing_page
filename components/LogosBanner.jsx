import Image from "next/image";

const clients = [
  { name: "Cliente 1", logo: "/assets/images/Certifi_DataEngineer.png" },
  { name: "Cliente 2", logo: "/assets/images/Certifi_Devops.png" },
  { name: "Cliente 3", logo: "/assets/images/Certifi_Digitalleader.png" },
  { name: "Cliente 4", logo: "/assets/images/Certifi_DataEngineer.png" },
  { name: "Cliente 5", logo: "/assets/images/Certifi_Devops.png" },
  { name: "Cliente 6", logo: "/assets/images/Certifi_Digitalleader.png" },

  // Agrega más logos aquí
];

function LogosBanner() {
  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8 mt-20 rounded-lg shadow-inner">
      <h3 className="text-center text-gray-700 text-lg font-semibold mb-6">
        {/* Empresas que confían en nosotros */}
      </h3>
      <div className="relative w-full">
        <div className="inline-flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="h-20 w-40 flex items-center justify-center mx-6"
            >
              <Image
                src={process.env.NEXT_PUBLIC_BASE_PATH + "" + client.logo}
                alt={`Logo de ${client.name}`}
                width={120}
                height={40}
                className="object-contain grayscale-0 hover:grayscale transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogosBanner;
