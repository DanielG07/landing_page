import Feed from "@components/Feed";
import ContactForm from "@components/ContactForm";
import FeaturesModuls from "@components/FeaturesModuls";
import MainMenu from "@components/MainMenu";
import LogosBanner from "@components/LogosBanner";

const Home = () => (
  <main className="w-full flex flex-col items-center">
    <section id="section1" className="w-full text-center py-24 px-4">
      <link rel="icon" href="/assets/icons/logo.svg" />
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight m-40">
        Next Level <br />
        <span className="violet_gradient">Cloud Computing + IA</span>
      </h1>
      <p className="mt-10 text-xl md:text-2xl max-w-4xl mx-auto m-20">
        Impulsa tu organización con soluciones tecnológicas inteligentes. En
        Xcript desarrollamos sistemas que optimizan procesos, reducen costos y
        mejoran la eficiencia operativa, combinando lo mejor de la Inteligencia
        Artificial, la Nube y la arquitectura basada en microservicios y APIs.
      </p>
    </section>

    <section id="section2" className="w-full bg-white py-24 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center violet_gradient mb-12">
        Suite de agentes de IA en la nube que te apoyarán en todo momento
      </h2>
      <div className="max-w-6xl mx-auto">
        <FeaturesModuls />
      </div>
    </section>

    <section id="section3" className="w-full py-24 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Xcript
      </h2>
      <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto mb-16">
        Somos un equipo de expertos certificados en Google Cloud y desarrollo de
        software empresarial. Acompañamos a tu organización en la implementación
        de soluciones tecnológicas robustas, seguras y escalables. Creamos
        plataformas digitales a la medida que transforman desafíos en
        oportunidades a través de innovación, IA y automatización.
      </p>
      <div className="max-w-6xl mx-auto">
        <Feed />
        <LogosBanner></LogosBanner>
      </div>
    </section>

    <section id="section4" className="w-full bg-white py-24 px-4">
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-12">
        ¿Listo para llevar tu sistema al siguiente nivel?
      </h2>
      <div className="max-w-3xl mx-auto">
        <ContactForm />
      </div>
    </section>
  </main>
);

export default Home;
