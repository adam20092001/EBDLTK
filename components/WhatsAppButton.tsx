import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  label: string;
  message: string;
  className?: string;
};

export function WhatsAppButton({ label, message, className }: WhatsAppButtonProps) {
  return (
    <a
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={label}
    >
      <MessageCircle aria-hidden="true" size={20} />
      <span>{label}</span>
    </a>
  );
}
