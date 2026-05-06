import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/573136188704?text=Hola%20BlueBox,%20me%20gustaría%20solicitar%20una%20recolección"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-60 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
  >
    <MessageCircle size={32} fill="currentColor" />
    <span className="max-w-0 opacity-0 overflow-hidden group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap text-sm">
      ¿Hablamos?
    </span>
  </a>
);
