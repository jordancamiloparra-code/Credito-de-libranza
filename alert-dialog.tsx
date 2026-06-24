/*
 * Design: Diagonal Trust Architecture
 * Simulador: White bg section with elevated card, interactive slider
 * Real-time calculation, green CTA, diagonal top transition
 */
import { WHATSAPP_LINK } from "@shared/const";
import { Calculator, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";

const MIN_MONTO = 1_000_000;
const MAX_MONTO = 100_000_000;
const STEP = 1_000_000;
const TASA_MENSUAL = 0.0125; // 1.25% mensual aprox
const PLAZO_MESES = 60; // 5 años

function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function calcularCuota(monto: number, tasa: number, plazo: number): number {
  if (tasa === 0) return monto / plazo;
  return (monto * tasa * Math.pow(1 + tasa, plazo)) / (Math.pow(1 + tasa, plazo) - 1);
}

export default function SimuladorCredito() {
  const [monto, setMonto] = useState(20_000_000);
  const [plazo, setPlazo] = useState(48);

  const cuota = useMemo(() => calcularCuota(monto, TASA_MENSUAL, plazo), [monto, plazo]);

  const montoPercent = ((monto - MIN_MONTO) / (MAX_MONTO - MIN_MONTO)) * 100;
  const plazoPercent = ((plazo - 12) / (PLAZO_MESES - 12)) * 100;

  const whatsappMsg = `Hola, quiero solicitar un crédito por libranza de ${formatCOP(monto)} a ${plazo} meses. Mi cuota sería de ${formatCOP(cuota)} aprox.`;
  const whatsappUrl = `https://wa.me/573242014391?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="simulador" className="relative bg-slate-light py-20 lg:py-28">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-emerald/10 text-emerald font-semibold text-sm px-4 py-2 rounded-full mb-4">
            <Calculator className="w-4 h-4" />
            Simulador de Crédito
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
            Calcula tu cuota en segundos
          </h2>
          <p className="text-navy/60 font-body text-lg max-w-xl mx-auto">
            Ajusta el monto y plazo para conocer tu cuota mensual aproximada
          </p>
        </div>

        {/* Simulator card */}
        <div className="max-w-3xl mx-auto reveal">
          <div className="bg-white rounded-2xl shadow-xl shadow-navy/8 border border-navy/5 overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Monto slider */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-navy font-bold text-sm uppercase tracking-wide">
                    Monto del crédito
                  </label>
                  <span className="text-emerald font-black text-2xl sm:text-3xl tabular-nums">
                    {formatCOP(monto)}
                  </span>
                </div>
                <input
                  type="range"
                  min={MIN_MONTO}
                  max={MAX_MONTO}
                  step={STEP}
                  value={monto}
                  onChange={(e) => setMonto(Number(e.target.value))}
                  className="w-full"
                  style={{ "--value-percent": `${montoPercent}%` } as React.CSSProperties}
                />
                <div className="flex justify-between mt-2 text-xs text-navy/40 font-body">
                  <span>{formatCOP(MIN_MONTO)}</span>
                  <span>{formatCOP(MAX_MONTO)}</span>
                </div>
              </div>

              {/* Plazo slider */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-navy font-bold text-sm uppercase tracking-wide">
                    Plazo
                  </label>
                  <span className="text-navy font-black text-2xl tabular-nums">
                    {plazo} <span className="text-base font-semibold text-navy/50">meses</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={PLAZO_MESES}
                  step={6}
                  value={plazo}
                  onChange={(e) => setPlazo(Number(e.target.value))}
                  className="w-full"
                  style={{ "--value-percent": `${plazoPercent}%` } as React.CSSProperties}
                />
                <div className="flex justify-between mt-2 text-xs text-navy/40 font-body">
                  <span>12 meses</span>
                  <span>60 meses</span>
                </div>
              </div>

              {/* Result */}
              <div className="bg-navy rounded-xl p-6 sm:p-8 text-center mb-6">
                <p className="text-white/60 text-sm font-medium mb-1">Tu cuota mensual aproximada</p>
                <p className="text-4xl sm:text-5xl font-black text-emerald tabular-nums mb-2">
                  {formatCOP(cuota)}
                </p>
                <p className="text-white/40 text-xs font-body">
                  *Tasa referencial. Sujeta a estudio de crédito.
                </p>
              </div>

              {/* CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-emerald hover:bg-emerald-dark text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald/25"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
