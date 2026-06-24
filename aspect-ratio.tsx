/*
 * Design: Diagonal Trust Architecture
 * Urgencia: Navy bg with emerald accents, countdown-style urgency
 * Bold messaging, pulsing CTA
 */
import { WHATSAPP_LINK } from "@shared/const";
import { AlertTriangle, Clock, MessageCircle, Zap } from "lucide-react";

export default function Urgencia() {
  return (
    <section className="relative bg-navy diagonal-both py-20 lg:py-24">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          {/* Alert badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 font-semibold text-sm px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            Cupos limitados
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            No dejes pasar esta oportunidad
          </h2>

          {/* Urgency messages */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Evaluación sin costo</p>
                <p className="text-white/50 text-xs font-body">Por tiempo limitado</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald/15 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-emerald" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Aprobaciones limitadas</p>
                <p className="text-white/50 text-xs font-body">Solicita hoy mismo</p>
              </div>
            </div>
          </div>

          <p className="text-white/60 font-body text-lg mb-8 max-w-lg mx-auto">
            Cada día que pasa es una oportunidad menos. Nuestros asesores están disponibles ahora mismo para ayudarte.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald hover:bg-emerald-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald/30"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
            </a>
            <button
              onClick={() => document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
            >
              Simular crédito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
