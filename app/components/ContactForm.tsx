"use client";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

type FormData = {
  nombre: string;
  empresa: string;
  email: string;
  mensaje: string;
};

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSending(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      throw new Error("EmailJS configuration missing");
    }

    try {
      await emailjs.send(serviceID, templateID, data, publicKey);
      alert(`¡Mensaje enviado! Gracias ${data.nombre}, Bluebox te contactará pronto.`);
      reset();
    } catch (error) {
      console.error("Error de EmailJS:", error);
      alert("Hubo un error al enviar. Por favor, intenta de nuevo o usa WhatsApp.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="py-28 bg-slate-50 px-6">
      <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Contacto Directo</h2>
          <p className="text-xl text-slate-500 mt-4">Nuestro equipo administrativo responderá a tu solicitud en breve.</p>
        </div>

        <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Campos de Nombre y Empresa */}
          <div className="grid md:grid-cols-2 gap-5">
            <input 
              {...register("nombre", { required: true })}
              placeholder="Tu Nombre" 
              className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2ab5e1]/30" 
            />
            <input 
              {...register("empresa", { required: true })}
              placeholder="Nombre de la Empresa" 
              className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2ab5e1]/30" 
            />
          </div>

          {/* Campo de Email */}
          <input 
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Correo Electrónico" 
            className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2ab5e1]/30" 
          />

          {/* Campo de Mensaje */}
          <textarea 
            {...register("mensaje", { required: true })}
            placeholder="¿En qué podemos ayudarte?" 
            rows={5} 
            className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2ab5e1]/30 resize-none"
          ></textarea>
          
          <button 
            type="submit"
            disabled={isSending}
            className={`bg-[#2ab5e1] text-white py-5 rounded-2xl font-black text-xl transition-all mt-4 shadow-lg shadow-[#2ab5e1]/20 ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110 active:scale-95'}`}
          >
            {isSending ? "Enviando..." : "Enviar Solicitud"}
          </button>
        </form>
      </div>
    </section>
  );
};