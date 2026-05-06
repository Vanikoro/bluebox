import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

    return(
        <section
        id="nosotros"
        className="py-28 bg-black text-white overflow-hidden relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* PARTE 1: QUIÉNES SOMOS, MISIÓN Y VISIÓN */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div {...fadeIn}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#7dc143]/10 text-[#7dc143] font-bold text-sm mb-6 border border-[#7dc143]/20">
                DESDE 2016 EN BOGOTÁ
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
                Líderes en <span className="text-[#2ab5e1]">Conservación</span>
              </h2>
              <p className="text-slate-300 text-xl mb-10 leading-relaxed">
                En <strong>BlueBox SAS ESP</strong>, somos una empresa dedicada
                al cuidado del ambiente mediante la gestión integral de residuos
                aprovechables. Brindamos bienestar y desarrollo continuo,
                cumpliendo con el <strong>Decreto 596 de 2016</strong> y
                normativas legales vigentes.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-4xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-[#2ab5e1] font-bold text-2xl mb-3">
                    Misión
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    Mejoramos la calidad ambiental mediante la recolección,
                    clasificación y transporte de residuos, brindando
                    capacitación y acompañamiento logístico.
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-4xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-[#7dc143] font-bold text-2xl mb-3">
                    Visión 2026
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    Ser referentes nacionales en innovación tecnológica para la
                    recolección eficiente, ofreciendo plusvalía económica y
                    ambiental a nuestros usuarios.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="relative h-137.5 rounded-[3.5rem] overflow-hidden border-8 border-white/5 shadow-2xl shadow-[#2ab5e1]/10">
              <Image
                src="/fondo.jpeg"
                alt="Gestión de residuos Bluebox"
                fill
                className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw" // <--- AGREGA ESTA LÍNEA AQUÍ
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <div className="bg-[#2ab5e1] text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">
                  CERTIFICADOS
                </div>
                <p className="text-5xl font-black text-white tracking-tighter">
                  ESP
                </p>
                <p className="text-[#7dc143] font-bold text-lg">
                  Empresa de Servicios Públicos
                </p>
              </div>
            </div>
          </div>

          {/* PARTE 2: EL PROCESO (STEPS) */}
          <div className="pt-20 border-t border-white/10">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black mb-4">
                Nuestro proceso{" "}
                <span className="text-[#7dc143] italic">Bluebox</span>
              </h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Logística de vanguardia diseñada para la eficiencia operativa de
                tu empresa.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  t: "Recolección Programada",
                  d: "Agendamos la recogida según el volumen y las necesidades específicas de tu empresa.",
                  color: "text-[#2ab5e1]",
                },
                {
                  step: "02",
                  t: "Clasificación Técnica",
                  d: "Separamos y procesamos los materiales en nuestra planta de acopio certificada en Bogotá.",
                  color: "text-[#7dc143]",
                },
                {
                  step: "03",
                  t: "Certificación Ambiental",
                  d: "Emitimos el documento legal de disposición final para tus reportes de sostenibilidad.",
                  color: "text-[#2ab5e1]",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <span
                    className={`text-7xl font-black ${item.color} opacity-20 absolute -top-8 -left-4 group-hover:opacity-40 transition-opacity`}
                  >
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#7dc143] transition-colors">
                      {item.t}
                    </h4>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
};
