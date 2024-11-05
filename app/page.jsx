import Feed from "@components/Feed";
import ContactForm from "@components/ContactForm";

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
  </section>
);

export default Home;