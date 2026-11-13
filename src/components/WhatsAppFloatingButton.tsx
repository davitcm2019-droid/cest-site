// No client-side state or handlers here — it is a link with an icon, so it
// renders on the server and ships no JS.
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
      // The safe-area insets keep the button clear of the iPhone home
      // indicator and of notch cutouts in landscape.
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        right: "max(1.25rem, env(safe-area-inset-right))",
      }}
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand shadow-lg shadow-brand-dark/30 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
    >
      <MessageCircle className="h-7 w-7 text-[#0a0c0b]" strokeWidth={2} />
    </a>
  );
}
