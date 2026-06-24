/*
 * Design: Diagonal Trust Architecture
 * Footer: Dark navy bg, organized columns, green accents
 * WhatsApp link, legal notices, data policy
 */
import { COMPANY_EMAIL, COMPANY_PHONE, WHATSAPP_LINK } from "@shared/const";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-emerald rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none">C</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                CrediLibranza
              </span>
            </div>
            <p className="text-white/40 font-body text-sm leading-relaxed mb-4">
              Somos una empresa colombiana especializada en créditos por libranza
              para pensionados, policías, militares, docentes y empleados del sector público.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald hover:text-emerald-dark font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Simulador de crédito", id: "simulador" },
                { label: "Beneficios", id: "beneficios" },
                { label: "Cómo funciona", id: "como-funciona" },
                { label: "Testimonios", id: "testimonios" },
                { label: "Solicitar crédito", id: "formulario" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-white/40 hover:text-white text-sm font-body transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald" />
                <a href={`tel:${COMPANY_PHONE}`} className="text-white/40 hover:text-white text-sm font-body transition-colors">
                  {COMPANY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-white/40 hover:text-white text-sm font-body transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm font-body transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald mt-0.5" />
                <span className="text-white/40 text-sm font-body">
                  Bogotá, Colombia
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <button className="text-white/40 hover:text-white text-sm font-body transition-colors">
                  Aviso legal
                </button>
              </li>
              <li>
                <button className="text-white/40 hover:text-white text-sm font-body transition-colors">
                  Política de datos personales
                </button>
              </li>
              <li>
                <button className="text-white/40 hover:text-white text-sm font-body transition-colors">
                  Términos y condiciones
                </button>
              </li>
              <li>
                <button className="text-white/40 hover:text-white text-sm font-body transition-colors">
                  Política de cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs font-body text-center sm:text-left">
              &copy; {currentYear} CrediLibranza Colombia. Todos los derechos reservados.
            </p>
            <p className="text-white/20 text-xs font-body text-center sm:text-right max-w-md">
              Las tasas y montos son referenciales y están sujetos a estudio de crédito.
              CrediLibranza no es un banco ni una entidad financiera vigilada por la Superintendencia Financiera.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
