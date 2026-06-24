/*
 * Design: Diagonal Trust Architecture
 * WhatsApp Float: Fixed bottom-right, green with pulse animation
 * Always visible, high z-index
 */
import { WHATSAPP_LINK } from "@shared/const";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling a bit
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    // Show after 3 seconds anyway
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-105 active:scale-95 wa-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm">¿Necesitas ayuda?</span>
    </a>
  );
}
