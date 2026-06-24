/*
 * Design: Diagonal Trust Architecture
 * Cómo funciona: 3 steps with large numbers, connecting lines
 * Navy bg with diagonal transitions
 */
import { ArrowRight, Banknote, MessageSquare, Search } from "lucide-react";

const pasos = [
  {
    num: "01",
    icon: Search,
    title: "Simula tu crédito",
    description: "Usa nuestro simulador para calcular el monto y la cuota que se ajusta a tu presupuesto.",
  },
  {
    num: "02",
    icon: MessageSquare,
    title: "Un asesor analiza tu perfil",
    description: "Nuestro equipo evalúa tu solicitud y te contacta con una propuesta personalizada en menos de 24 horas.",
  },
  {
    num: "03",
    icon: Banknote,
    title: "Recibe el dinero",
    description: "Una vez aprobado, el dinero se deposita directamente en tu cuenta bancaria. Así de fácil.",
  },
];

export default function ComoFunciona() {
  const scrollToSimulator = () => {
    const el = document.getElementById("simulador");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="como-funciona"
      className="relative bg-navy diagonal-both py-20 lg:py-28"
    >
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-emerald/20 text-emerald font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Proceso simple
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-white/50 font-body text-lg max-w-xl mx-auto">
            Obtener tu crédito por libranza es más fácil de lo que piensas
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {pasos.map((paso, i) => (
            <div key={i} className="reveal relative text-center">
              {/* Large number background */}
              <div className="text-[120px] font-black text-white/[0.03] leading-none absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none">
                {paso.num}
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-emerald/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <paso.icon className="w-8 h-8 text-emerald" />
                </div>

                {/* Step number */}
                <span className="text-emerald font-black text-sm mb-2 block">PASO {paso.num}</span>

                <h3 className="text-white font-bold text-xl mb-3">{paso.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs mx-auto">
                  {paso.description}
                </p>
              </div>

              {/* Arrow connector (desktop only) */}
              {i < pasos.length - 1 && (
                <div className="hidden md:flex absolute top-16 -right-6 lg:-right-8 items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-emerald/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <button
            onClick={scrollToSimulator}
            className="inline-flex items-center gap-2 bg-emerald hover:bg-emerald-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald/25"
          >
            Comenzar ahora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
