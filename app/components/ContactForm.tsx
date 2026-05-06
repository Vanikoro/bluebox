"use client";
import { useForm } from "react-hook-form";

type FormData = {
  nombre: string;
  empresa: string;
  email: string;
  mensaje: string;
};

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Aquí es donde sucede la magia dinámica
    console.log("Datos enviados:", data);
    
    // Simulación de envío: Aquí podrías conectar con un servicio de correos
    alert(`¡Gracias ${data.nombre}! Bluebox recibió tu solicitud sobre ${data.empresa}. Nos contactaremos pronto.`);
    
    reset(); // Limpia el formulario después de enviar
  };

  return (
    <section id="contacto" className="py-28 bg-slate-50 px-6">
      <div className="max-w-3xl mx-auto bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">¿Listo para transformar tus residuos?</h2>
          <p className="text-xl text-slate-500 mt-4">Déjanos tus datos y un asesor corporativo te contactará.</p>
        </div>

        <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <input 
                {...register("nombre", { required: "El nombre es obligatorio" })}
                placeholder="Tu Nombre" 
                className={`w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 transition-all ${errors.nombre ? 'border-red-500 focus:ring-red-200' : 'focus:ring-[#2ab5e1]/30'}`} 
              />
              {errors.nombre && <span className="text-red-500 text-xs mt-1 ml-2">{errors.nombre.message}</span>}
            </div>
            
            <div>
              <input 
                {...register("empresa", { required: "Dinos el nombre de tu empresa" })}
                placeholder="Empresa" 
                className={`w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 transition-all ${errors.empresa ? 'border-red-500 focus:ring-red-200' : 'focus:ring-[#2ab5e1]/30'}`} 
              />
              {errors.empresa && <span className="text-red-500 text-xs mt-1 ml-2">{errors.empresa.message}</span>}
            </div>
          </div>

          <div>
            <input 
              {...register("email", { 
                required: "El correo es necesario",
                pattern: { value: /^\S+@\S+$/i, message: "El formato de correo no es válido" }
              })}
              placeholder="Correo Electrónico Corporativo" 
              className={`w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-200' : 'focus:ring-[#2ab5e1]/30'}`} 
            />
            {errors.email && <span className="text-red-500 text-xs mt-1 ml-2">{errors.email.message}</span>}
          </div>

          <div>
            <textarea 
              {...register("mensaje", { required: "Cuéntanos qué necesitas" })}
              placeholder="¿Qué materiales necesitas gestionar?" 
              rows={5} 
              className={`w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 transition-all resize-none ${errors.mensaje ? 'border-red-500 focus:ring-red-200' : 'focus:ring-[#2ab5e1]/30'}`}
            ></textarea>
            {errors.mensaje && <span className="text-red-500 text-xs mt-1 ml-2">{errors.mensaje.message}</span>}
          </div>
          
          <button 
            type="submit"
            className="bg-[#2ab5e1] text-white py-5 rounded-2xl font-black text-xl hover:brightness-110 hover:shadow-xl transition-all active:scale-[0.98] mt-4 shadow-lg shadow-[#2ab5e1]/20"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </section>
  );
};