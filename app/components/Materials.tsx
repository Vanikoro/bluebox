import { motion } from "framer-motion";
import { Factory, Recycle } from "lucide-react";

export default function Materials() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <section id="materiales" className="py-28 bg-slate-50/50 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-5 text-slate-900 tracking-tight">
            ¿Qué materiales gestionamos?
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Recolectamos y procesamos una amplia gama de materiales industriales
            y comerciales con trazabilidad garantizada.
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
  );
}
