/*
 * Design: Diagonal Trust Architecture
 * Home: Full landing page assembling all sections
 * Scroll reveal animations, smooth scrolling
 */
import Beneficios from "@/components/Beneficios";
import ComoFunciona from "@/components/ComoFunciona";
import FiltroClientes from "@/components/FiltroClientes";
import Footer from "@/components/Footer";
import FormularioCaptura from "@/components/FormularioCaptura";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SimuladorCredito from "@/components/SimuladorCredito";
import Testimonios from "@/components/Testimonios";
import Urgencia from "@/components/Urgencia";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const pageRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SimuladorCredito />
      <Beneficios />
      <FiltroClientes />
      <ComoFunciona />
      <FormularioCaptura />
      <Testimonios />
      <Urgencia />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
