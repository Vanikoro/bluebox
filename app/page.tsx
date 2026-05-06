"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Recycle,
  Factory,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#2ab5e1]/30 font-sans antialiased">
      {/* BOTÓN FLOTANTE WHATSAPP */}
      {/* BOTÓN FLOTANTE WHATSAPP - Optimizado v4 */}
      <a
        href="https://wa.me/tu-numero"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-60 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="max-w-0 opacity-0 overflow-hidden group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap text-sm">
          ¿Hablamos?
        </span>
      </a>
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Bluebox Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-black tracking-tight text-[#2ab5e1] ml-2">
              blue<span className="text-[#7dc143]">box</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 font-semibold text-slate-600">
            {["Inicio", "Materiales", "Nosotros", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#2ab5e1] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="tel:+57000000"
            className="inline-flex items-center gap-2 bg-[#7dc143] text-white px-6 py-2.5 rounded-full font-bold hover:brightness-110 hover:shadow-lg transition-all active:scale-95"
          >
            <Phone size={18} />
            Llamar ahora
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="inicio"
        className="relative pt-36 pb-24 overflow-hidden bg-slate-50/50"
      >
        <div className="absolute inset-0 -z-20 opacity-5">
          <Image
            src="/fondo.jpeg"
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Círculos animados con Colores Directos */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#7dc143]/20 rounded-full blur-[120px] -z-10"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#2ab5e1]/20 rounded-full blur-[120px] -z-10"
        />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#2ab5e1]/10 text-[#2ab5e1] font-bold text-sm mb-6 border border-[#2ab5e1]/20">
              SOLUCIONES CIRCULARES B2B
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900">
              Gestión <br />
              <span className="text-[#2ab5e1] italic">Inteligente</span> <br />
              de Residuos.
            </h1>
            <p className="text-xl text-slate-500 mt-8 max-w-lg leading-relaxed">
              Optimizamos los procesos de reciclaje para tu empresa con
              logística de vanguardia y cumplimiento normativo garantizado.
            </p>
            <div className="flex flex-wrap gap-4 mt-12">
              <button className="bg-black text-white px-10 py-4.5 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all group shadow-xl active:scale-95">
                Agendar Recolección{" "}
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative z-10 p-4 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden shadow-[#2ab5e1]/10">
              <Image
                src="/logo.jpeg"
                alt="Bluebox Ecosystem"
                width={600}
                height={600}
                className="w-full rounded-3xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN: CERTIFICACIONES */}
      <section className="bg-white py-12 border-y border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {[
              "Certificación Ambiental",
              "Disposición Final Legal",
              "Economía Circular B2B",
              "Normativa ISO 14001",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 font-bold text-slate-500"
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm ${i % 2 === 0 ? "bg-[#2ab5e1]" : "bg-[#7dc143]"}`}
                >
                  ✓
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: MATERIALES */}
      <section
        id="materiales"
        className="py-28 bg-slate-50/50 px-6 text-center"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-5 text-slate-900 tracking-tight">
              ¿Qué materiales gestionamos?
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Recolectamos y procesamos una amplia gama de materiales
              industriales y comerciales con trazabilidad garantizada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Plásticos",
                desc: "PET, PEAD, PVC y más.",
                icon: <Recycle className="text-[#2ab5e1]" size={32} />,
                delay: 0.1,
              },
              {
                title: "Metales",
                desc: "Ferrosos y no ferrosos.",
                icon: <Factory className="text-[#7dc143]" size={32} />,
                delay: 0.2,
              },
              {
                title: "Papel y Cartón",
                desc: "Archivo, plegadiza y Kraft.",
                icon: <Recycle className="text-[#2ab5e1]" size={32} />,
                delay: 0.3,
              },
              {
                title: "Electrónicos",
                desc: "Gestión de RAEE certificada.",
                icon: <Factory className="text-[#7dc143]" size={32} />,
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#2ab5e1] transition-all text-left group shadow-lg shadow-slate-200/50"
              >
                <div className="mb-6 group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: NOSOTROS */}
      <section
        id="nosotros"
        className="py-28 bg-black text-white overflow-hidden relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tight">
                Nuestro proceso{" "}
                <span className="text-[#7dc143] italic">Bluebox</span>
              </h2>
              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    t: "Recolección Programada",
                    d: "Agendamos la recogida según el volumen y necesidades de tu empresa.",
                  },
                  {
                    step: "02",
                    t: "Clasificación Técnica",
                    d: "Separamos y procesamos materiales en nuestra planta de acopio certificada.",
                  },
                  {
                    step: "03",
                    t: "Certificación Ambiental",
                    d: "Emitimos el documento legal de disposición final para tus reportes de sostenibilidad.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start">
                    <span className="text-4xl font-black text-[#2ab5e1]/30 mt-1">
                      {item.step}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {item.t}
                      </h4>
                      <p className="text-slate-400 text-lg leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative h-120 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              <Image
                src="/fondo.jpeg"
                alt="Planta de Bluebox"
                fill
                className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="py-28 bg-slate-50 px-6">
        <div className="max-w-3xl mx-auto bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              ¿Listo para transformar tus residuos?
            </h2>
            <p className="text-xl text-slate-500 mt-4 max-w-xl mx-auto">
              Déjanos tus datos y un asesor corporativo te contactará para una
              solución personalizada.
            </p>
          </div>
          <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Tu Nombre"
                className="p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2ab5e1]/30 transition-all font-medium"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2ab5e1]/30 transition-all font-medium"
              />
            </div>
            <input
              type="email"
              placeholder="Correo Electrónico Corporativo"
              className="p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2ab5e1]/30 transition-all font-medium"
            />
            <textarea
              placeholder="Cuéntanos sobre los materiales que necesitas gestionar..."
              rows={5}
              className="p-5 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#2ab5e1]/30 transition-all font-medium resize-none"
            ></textarea>

            <button className="bg-[#2ab5e1] text-white py-5 rounded-2xl font-black text-xl hover:brightness-110 hover:shadow-xl transition-all active:scale-[0.98] mt-4 shadow-lg shadow-[#2ab5e1]/20">
              Enviar Solicitud de Cotización
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-16 border-t border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tight text-slate-900">
              Bluebox <span className="text-[#2ab5e1] italic">Reciclaje</span>
            </h3>
            <p className="text-slate-500 mt-1 font-medium">
              Líderes en economía circular para empresas.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex items-center gap-3 text-slate-600 font-semibold">
              <Mail size={22} className="text-[#2ab5e1]" /> info@bluebox.com
            </div>
            <div className="flex items-center gap-3 text-slate-600 font-semibold">
              <MapPin size={22} className="text-[#7dc143]" /> Planta Central de
              Acopio
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 font-medium text-sm">
          &copy; 2026 Bluebox Gestiones Ambientales S.A.S. Todos los derechos
          reservados.
        </div>
      </footer>
    </main>
  );
}
