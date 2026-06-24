/*
 * Design: Diagonal Trust Architecture
 * Beneficios: Navy bg with diagonal top, white cards with thick left border
 * Icons in emerald circles, bold headlines
 */
import { BadgeCheck, Banknote, Clock, FileCheck, ShieldCheck, Zap } from "lucide-react";

const beneficios = [
  {
    icon: BadgeCheck,
    title: "Incluso si estás reportado",
    description: "Aprobamos créditos a personas reportadas en centrales de riesgo. Tu historial no es un impedimento.",
  },
  {
    icon: FileCheck,
    title: "Sin trámites complicados",
    description: "Proceso simple y rápido. Solo necesitas documentos básicos para iniciar tu solicitud.",
  },
  {
    icon: Zap,
    title: "Respuesta rápida",
    description: "Evaluamos tu perfil en menos de 24 horas. Recibe una respuesta sin demoras innecesarias.",
  },
  {
    icon: Banknote,
    title: "Montos altos disponibles",
    description: "Accede a créditos desde $1 millón hasta $100 millones según tu capacidad de pago.",
  },
  {
    icon: ShieldCheck,
    title: "Sin codeudor",
    description: "No necesitas que nadie responda por ti. Tu nómina o pensión es tu respaldo.",
  },
  {
    icon: Clock,
    title: "Descuento por nómina",
    description: "Las cuotas se descuentan directamente de tu salario o pensión. Sin preocupaciones.",
  },
];

export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="relative bg-navy diagonal-both py-20 lg:py-28"
    >
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-emerald/20 text-emerald font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Ventajas exclusivas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-white/50 font-body text-lg max-w-xl mx-auto">
            Ofrecemos las mejores condiciones del mercado para créditos por libranza en Colombia
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="reveal group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 bg-emerald/15 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald/25 transition-colors">
                <b.icon className="w-6 h-6 text-emerald" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-white/50 font-body text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
