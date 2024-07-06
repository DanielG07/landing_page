import Feed from "@components/Feed";
import Footer from "@components/Footer";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <link rel="icon" href="/assets/icons/logo.svg" />
    <h1 className='head_text text-center'>
      Next Level
      <br className='max-md:hidden' />
      <span className='violet_gradient text-center'> Cloud, IA, Blockchain</span>
    </h1>
    <p className='desc text-center'>
      Soluciones para la optimización y economización de sistemas para tu organización utilizando tecnologías de vanguardia 
      como el Cloud Computing, Blockchain, IA, Microservices y API.
    </p>
    <Feed/>
  </section>
);

export default Home;