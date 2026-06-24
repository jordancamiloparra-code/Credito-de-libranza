/*
 * Design: Diagonal Trust Architecture
 * Filtro: Light bg, checklist style with green checkmarks
 * Audience segments with icons, asymmetric layout
 */
import { WHATSAPP_LINK } from "@shared/const";
import { Briefcase, CheckCircle2, GraduationCap, MessageCircle, Shield, UserCheck } from "lucide-react";

const requisitos = [
  "Mayor de edad (18 años o más)",
  "Ingresos demostrables por nómina o pensión",
  "Cuenta bancaria activa en Colombia",
  "Vinculado a una entidad pagadora",
];

const segmentos = [
  { icon: UserCheck, label: "Pensionados", color: "bg-emerald/10 text-emerald" },
  { icon: Shield, label: "Policías", color: "bg-blue-100 text-blue-700" },
  { icon: Shield, label: "Militares", color: "bg-amber-100 text-amber-700" },
  { icon: GraduationCap, label: "Docentes", color: "bg-violet-100 text-violet-700" },
  { icon: Briefcase, label: "Sector público", color: "bg-rose-100 text-rose-700" },
];

export default function FiltroClientes() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Requirements */}
          <div className="reveal">
            <span className="inline-block bg-navy/5 text-navy font-semibold text-sm px-4 py-2 rounded-full mb-4">
              Requisitos simples
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-6">
              ¿Aplicas para este crédito?
            </h2>
            <p className="text-navy/60 font-body text-lg mb-8">
              Verifica si cumples con los requisitos básicos. Si marcas todos, estás a un paso de obtener tu crédito.
            </p>

            <div className="space-y-4 mb-8">
              {requisitos.map((req, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-slate-light rounded-lg px-4 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald flex-shrink-0" />
                  <span className="text-navy font-medium font-body">{req}</span>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald hover:bg-emerald-dark text-white font-bold px-6 py-3.5 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald/25"
            >
              <MessageCircle className="w-5 h-5" />
              Verificar mi elegibilidad
            </a>
          </div>

          {/* Right: Target segments */}
          <div className="reveal">
            <div className="bg-slate-light rounded-2xl p-6 sm:p-8 border border-navy/5">
              <h3 className="text-navy font-bold text-xl mb-6">
                Créditos diseñados para:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {segmentos.map((seg, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-xl p-4 ${
                      i === segmentos.length - 1 ? "col-span-2 sm:col-span-1" : ""
                    }`}
                    style={{ backgroundColor: "white" }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${seg.color}`}>
                      <seg.icon className="w-5 h-5" />
                    </div>
                    <span className="text-navy font-semibold text-sm">{seg.label}</span>
                  </div>
                ))}
              </div>

              {/* Family image */}
              <div className="mt-6 rounded-xl overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663238414375/gdCCxjhuoRsJGCqvxYzhFa/family-happy-JJbTkAoHcAxdRubSTuqs6m.webp"
                  alt="Familia colombiana feliz"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
