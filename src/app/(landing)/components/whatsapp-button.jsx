import Link from "next/link";
import { WhatsappIcon } from "./icons/icons";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5492926497753"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center gap-2"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsappIcon className="w-6 h-6" />
      <span className="hidden md:inline font-bold">Consultar ahora</span>
    </Link>
  );
}
