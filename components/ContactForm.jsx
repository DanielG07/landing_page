<<<<<<< HEAD
"use client"; //Directive to use hooks side-client

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const refForm = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const apikey = process.env.NEXT_PUBLIC_APIKEY;

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result.text);
        toast.success("Formulario enviado correctamente"); // Mostrar toast de éxito
        refForm.current.reset();
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="contact-form bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto my-10">
      <h2 className="text-2xl font-bold text-violet-700 text-center mb-6">
        Contáctanos
      </h2>
      <h3 className="text-xl text-black-700 text-center mb-6">
        En Xcript Cloud Solutions, transformamos la tecnología en soluciones
        prácticas para el crecimiento de tu negocio.
      </h3>
      <form ref={refForm} onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition duration-300 flex justify-center items-center"
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
=======
"use client"; //Directive to use hooks side-client

import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const refForm = useRef(); //Genera valores de referencia
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID; //serviceId ID from EmailJS
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID; //Template ID from EmailJS
        const apikey = process.env.NEXT_PUBLIC_APIKEY; //apikeyfrom EmailJS
        //retorna una promesa
        emailjs.sendForm(serviceId,templateId,refForm.current,apikey)
        .then(result => console.log(result.text))
        .catch(error => console.error(error))

    }
    return (
        <div className="contact-form bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto my-10">
            <h2 className="text-2xl font-bold text-violet-700 text-center mb-6">Contáctanos</h2>
            <h3 className="text-xl text-black-700 text-center mb-6">En Xcript Cloud Solutions, transformamos la tecnología en soluciones prácticas para el crecimiento de tu negocio.</h3>
            <form ref={refForm} onSubmit={handleSubmit}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />

                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />

                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                ></textarea>

                <button type="submit" className="w-full py-2 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition duration-300"
                >Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
>>>>>>> 3e04dd5 (Update de landing page)
