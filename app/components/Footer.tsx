import { Mail, MapPin } from "lucide-react";

export const Footer = () => (
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
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <Mail size={20} className="text-[#2ab5e1]" />{" "}
              admon.bluebox@gmail.com
            </div>
            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <MapPin size={20} className="text-[#7dc143]" /> Bogotá, Colombia
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 font-medium text-sm">
          &copy; 2026 Bluebox Gestiones Ambientales S.A.S. Todos los derechos
          reservados.
        </div>
      </footer>
);