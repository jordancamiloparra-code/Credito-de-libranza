/*
 * Design: Diagonal Trust Architecture
 * Navbar: Sticky, navy background, DM Sans Bold for brand
 * Green CTA button for WhatsApp, clean minimal links
 */
import { WHATSAPP_LINK } from "@shared/const";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy-dark/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <div className="w-9 h-9 bg-emerald rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-lg leading-none">C</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight hidden sm:inline">
            CrediLibranza
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { label: "Simulador", id: "simulador" },
            { label: "Beneficios", id: "beneficios" },
            { label: "Cómo funciona", id: "como-funciona" },
            { label: "Testimonios", id: "testimonios" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald hover:bg-emerald-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="container py-4 flex flex-col gap-3">
            {[
              { label: "Simulador", id: "simulador" },
              { label: "Beneficios", id: "beneficios" },
              { label: "Cómo funciona", id: "como-funciona" },
              { label: "Testimonios", id: "testimonios" },
              { label: "Solicitar crédito", id: "formulario" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/80 hover:text-white text-left py-2 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald text-white font-semibold py-3 rounded-lg mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
