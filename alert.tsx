/*
 * Design: Diagonal Trust Architecture
 * Testimonios: White bg, cards with avatar, quote, name, role
 * Star ratings, offset shadow cards
 */
import { Quote, Star } from "lucide-react";

const PENSIONER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238414375/gdCCxjhuoRsJGCqvxYzhFa/colombian-pensioner-XZLnoZDxtXwWPLASsBrs8g.webp";
const POLICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238414375/gdCCxjhuoRsJGCqvxYzhFa/colombian-police-DGJqWdkuUWCQJf8EtJuPb3.webp";
const TEACHER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238414375/gdCCxjhuoRsJGCqvxYzhFa/colombian-teacher-kopQZZWH9Cuz88AYghe48r.webp";

const testimonios = [
  {
    name: "Carlos Alberto M.",
    role: "Pensionado - Bogotá",
    image: PENSIONER_IMG,
    stars: 5,
    text: "Estaba reportado y pensé que nadie me iba a prestar. CrediLibranza me aprobó $25 millones en menos de 3 días. La cuota me la descuentan de la pensión y ni la siento. Excelente servicio.",
  },
  {
    name: "Andrés Felipe R.",
    role: "Policía Nacional - Medellín",
    image: POLICE_IMG,
    stars: 5,
    text: "Necesitaba consolidar unas deudas y me aprobaron $40 millones. El proceso fue muy rápido, sin tanto papeleo. El asesor me explicó todo clarito por WhatsApp. Muy recomendado.",
  },
  {
    name: "Martha Lucía G.",
    role: "Docente - Cali",
    image: TEACHER_IMG,
    stars: 5,
    text: "Como docente del sector público, me aprobaron un crédito de $15 millones para remodelar mi casa. La tasa es competitiva y el descuento por nómina es muy cómodo. Gracias CrediLibranza.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="relative bg-white py-20 lg:py-28">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-navy/5 text-navy font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Clientes satisfechos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-navy/60 font-body text-lg max-w-xl mx-auto">
            Historias reales de personas que confiaron en nosotros
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="reveal group bg-white border-2 border-navy/5 rounded-2xl p-6 sm:p-7 hover:border-emerald/20 hover:shadow-xl hover:shadow-emerald/5 transition-all duration-300 hover:-translate-y-1 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-emerald/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-navy/70 font-body text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy/5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald/20"
                  loading="lazy"
                />
                <div>
                  <p className="text-navy font-bold text-sm">{t.name}</p>
                  <p className="text-navy/50 text-xs font-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
