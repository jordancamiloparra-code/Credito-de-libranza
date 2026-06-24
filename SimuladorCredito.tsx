/*
 * Design: Diagonal Trust Architecture
 * Formulario: White bg, elevated card with shadow
 * Green submit button, clean form fields
 */
import { WHATSAPP_LINK } from "@shared/const";
import { ArrowRight, Lock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const montos = [
  "Menos de $5 millones",
  "$5 - $10 millones",
  "$10 - $20 millones",
  "$20 - $50 millones",
  "$50 - $80 millones",
  "Más de $80 millones",
];

export default function FormularioCaptura() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [montoDeseado, setMontoDeseado] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim() || !whatsapp.trim() || !montoDeseado) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setSending(true);

    // Build WhatsApp message with form data
    const msg = `Hola, quiero solicitar un crédito por libranza.\n\nNombre: ${nombre}\nWhatsApp: ${whatsapp}\nMonto deseado: ${montoDeseado}`;
    const url = `https://wa.me/573242014391?text=${encodeURIComponent(msg)}`;

    // Simulate brief delay then redirect
    setTimeout(() => {
      setSending(false);
      toast.success("¡Datos enviados! Te redirigimos a WhatsApp...");
      window.open(url, "_blank");
    }, 800);
  };

  return (
    <section id="formulario" className="relative bg-slate-light py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="reveal">
            <span className="inline-block bg-emerald/10 text-emerald font-semibold text-sm px-4 py-2 rounded-full mb-4">
              Solicita ahora
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-6">
              Deja tus datos y te contactamos
            </h2>
            <p className="text-navy/60 font-body text-lg mb-8 leading-relaxed">
              Completa el formulario y un asesor especializado se comunicará contigo
              en menos de 24 horas para evaluar tu solicitud sin costo alguno.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm">Tus datos están seguros</p>
                  <p className="text-navy/50 text-xs font-body">Cumplimos con la Ley 1581 de protección de datos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm">Respuesta garantizada</p>
                  <p className="text-navy/50 text-xs font-body">Te contactamos en máximo 24 horas hábiles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl shadow-navy/8 border border-navy/5 p-6 sm:p-8"
            >
              <h3 className="text-navy font-bold text-xl mb-6">
                Quiero mi crédito ahora
              </h3>

              {/* Nombre */}
              <div className="mb-5">
                <label className="block text-navy font-semibold text-sm mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej: Juan Carlos Pérez"
                  className="w-full bg-slate-light border border-navy/10 rounded-lg px-4 py-3 text-navy font-body placeholder:text-navy/30 focus:ring-2 focus:ring-emerald/30 focus:border-emerald outline-none transition-all"
                />
              </div>

              {/* WhatsApp */}
              <div className="mb-5">
                <label className="block text-navy font-semibold text-sm mb-2">
                  Número de WhatsApp
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Ej: 300 123 4567"
                  className="w-full bg-slate-light border border-navy/10 rounded-lg px-4 py-3 text-navy font-body placeholder:text-navy/30 focus:ring-2 focus:ring-emerald/30 focus:border-emerald outline-none transition-all"
                />
              </div>

              {/* Monto deseado */}
              <div className="mb-6">
                <label className="block text-navy font-semibold text-sm mb-2">
                  Monto deseado
                </label>
                <select
                  value={montoDeseado}
                  onChange={(e) => setMontoDeseado(e.target.value)}
                  className="w-full bg-slate-light border border-navy/10 rounded-lg px-4 py-3 text-navy font-body focus:ring-2 focus:ring-emerald/30 focus:border-emerald outline-none transition-all"
                >
                  <option value="">Selecciona un rango</option>
                  {montos.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-emerald hover:bg-emerald-dark disabled:opacity-70 text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald/25"
              >
                {sending ? (
                  "Enviando..."
                ) : (
                  <>
                    Quiero mi crédito ahora
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-navy/40 text-xs font-body text-center mt-4">
                Al enviar aceptas nuestra política de tratamiento de datos personales
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
