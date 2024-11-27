import Feed from "@components/Feed";
import ContactForm from "@components/ContactForm";
<<<<<<< HEAD

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <link rel="icon" href="/assets/icons/logo.svg" />
    <h1 className='head_text text-center'>
      Next Level
      <br className='max-md:hidden' />
      <span className='violet_gradient text-center'> Cloud, IA, Blockchain</span>
    </h1>
    <p className='desc text-center'>
    Somos una consultoría enfocada en brindar soluciones para la optimización y economización de sistemas para tu organización utilizando tecnologías de vanguardia 
      como el Cloud Computing, Blockchain, IA, Microservices y API.
    </p>
    <Feed/>
    <ContactForm/>
=======
import FeaturesModuls from "@components/FeaturesModuls";
import MainMenu from "@components/MainMenu";

const Home = () => (
  <section className="w-full flex-center flex-col mt-20">
    <div id="section1">
      <br className="max-md:hidden" />
      <div className="mb-60 mt-20">
        <link rel="icon" href="/assets/icons/logo.svg" />
        <h1 className="head_text text-center py-4 mt-20">
          Next Level
          <br className="max-md:hidden" />
          <span className="violet_gradient text-center">
            Cloud Computing + IA
          </span>
        </h1>
        <h2 className="mx-40 text-2xl text-center py-4 mt-20">
          Ofrecemos soluciones innovadoras para optimizar y reducir costos en
          los sistemas de tu organización, aprovechando tecnologías de
          vanguardia como Inteligencia Artificial y Cloud Computing a través de
          Microservicios y APIs, todo integrado en nuestra suite de productos
          diseñada para escalar contigo.
        </h2>
      </div>
    </div>

    <div id="section2" className="mb-60 ">
      <br className="max-md:hidden" />
      <h2 className="mx-40 text-4xl text-center font-bold py-5 mb-5 mt-20 violet_gradient">
        Suit de agentes de IA en la nube que te apoyarán en todo momento
      </h2>
      <FeaturesModuls />
    </div>

    <div id="section3" className="mb-60 ">
      <br className="max-md:hidden" />
      <div class="col-span-2 mt-20">
        <h2 className="mx-40 text-4xl text-center font-bold py-5 mb-5 mt-20">
          Xcript
        </h2>
        <h2 className="mx-10 text-2xl text-center p-4 my-10 mb-20">
          Somos un quipo certificado y especializado en Google Cloud y el
          desarrollo tecnológico, listo para apoyarte en la implementación y
          aprovechamiento de nuestra suite de servicios. Estamos aquí para
          asegurarnos de que utilices exactamente lo que tu negocio necesita de
          forma óptima y eficiente.
        </h2>
      </div>
      <Feed />
    </div>

    <div id="section4" className="mb-60 ">
      <br className="max-md:hidden" />
      <ContactForm />
    </div>
>>>>>>> 3e04dd5 (Update de landing page)
  </section>
);

export default Home;
