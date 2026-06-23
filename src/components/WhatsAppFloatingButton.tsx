"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/siteConfig";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappLink(
        "Olá! Gostaria de solicitar um orçamento de Segurança do Trabalho."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand shadow-lg shadow-brand-dark/30 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-7 w-7 text-white" strokeWidth={2} />
    </a>
  );
}
