"use client";

import { Navbar } from "./components/Navbar";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Hero } from "./components/Hero";
import { Certifications } from "./components/Certifications";
import Materials from "./components/Materials";
import About from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function LandingPage() {
  
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#2ab5e1]/30 font-sans antialiased">
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <Certifications />
      <Materials />
      <About />
      <ContactForm />
      <Footer />
    </main>
  );
}
