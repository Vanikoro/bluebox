import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => (
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
        loading="eager"
        sizes="100vw"
      />
    </div>

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
          Optimizamos los procesos de reciclaje para tu empresa con logística de
          vanguardia y cumplimiento normativo garantizado.
        </p>
        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href="#contacto"
            className="bg-black text-white px-10 py-4.5 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all group shadow-xl active:scale-95 cursor-pointer"
          >
            Agendar Recolección{" "}
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
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
);
