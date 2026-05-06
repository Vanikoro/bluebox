import Image from "next/image";
import { Phone } from "lucide-react";

export const Navbar = () => (
  <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image 
          src="/logo.png" 
          alt="Bluebox Logo" 
          width={200} height={200} 
          className="h-12 w-auto object-contain mix" 
          style={{ height: 'auto' }}
          priority 
        />
        <span className="text-2xl font-black tracking-tight text-[#2ab5e1] ml-2">
          blue<span className="text-[#7dc143]">box</span>
        </span>
      </div>
      
      <div className="hidden md:flex gap-8 font-semibold text-slate-600">
        {["Inicio", "Materiales", "Nosotros", "Contacto"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#2ab5e1] transition-colors">
            {item}
          </a>
        ))}
      </div>

      <a href="tel:+573136188704" className="inline-flex items-center gap-2 bg-[#7dc143] text-white px-6 py-2.5 rounded-full font-bold hover:brightness-110 transition-all active:scale-95">
        <Phone size={18} />
        313 618 8704
      </a>
    </div>
  </nav>
);