/*
 * Design: Diagonal Trust Architecture
 * Hero: Full-width dark navy bg with generated hero image overlay
 * Oversized typography, two CTA buttons (green), social proof counter
 * Diagonal bottom cut — NO reveal animation (always visible immediately)
 */
import { WHATSAPP_LINK } from "@shared/const";
import { useCountUp } from "@/hooks/useCountUp";
import { ArrowRight, CheckCircle2, MessageCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238414375/gdCCxjhuoRsJGCqvxYzhFa/hero-bg-gDA5ZH5EwpuEfN6qecj3Da.webp";

export default function HeroSection() {
  const { count: clientCount, ref: counterRef } = useCountUp(500, 2500);

  const scrollToSimulator = () => {
    const el = document.getElementById("simulador");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] lg:min-h-[90vh] flex items-center overflow-hidden diagonal-bottom"
      style={{ backgroundColor: "#0B1D3A" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D3A] via-[#0B1D3A]/90 to-[#0B1D3A]/60" />

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[140%] border-l-2 border-emerald/40 rotate-12" />
        <div className="absolute top-[-10%] right-[5%] w-[100%] h-[120%] border-l border-emerald/20 rotate-12" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-emerald" />
            <span className="text-white/90 text-sm font-medium">
              Empresa regulada en Colombia
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            ¿Estás reportado?{" "}
            <span className="text-emerald">Aún puedes obtener</span>{" "}
            hasta{" "}
            <span className="relative inline-block">
              $80 millones
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-emerald/20 -z-10 skew-x-[-3deg]" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/70 font-body leading-relaxed mb-8 max-w-xl"
          >
            Aprobación rápida, sin codeudor y con descuento directo por nómina.
            Créditos por libranza para pensionados, policías, militares y docentes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={scrollToSimulator}
              className="inline-flex items-center justify-center gap-2 bg-emerald hover:bg-emerald-dark text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald/30"
            >
              Simular crédito
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div className="flex items-center gap-3" ref={counterRef as React.RefObject<HTMLDivElement>}>
              <div className="text-4xl lg:text-5xl font-black text-emerald tabular-nums">
                +{clientCount}
              </div>
              <div className="text-white/60 text-sm leading-tight font-body">
                clientes aprobados<br />en Colombia
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="flex items-center gap-4">
              {["Sin codeudor", "Respuesta 24h", "100% legal"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald" />
                  <span className="text-white/70 text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
