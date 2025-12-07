import { Clock, MailIcon, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "./icons/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 items-center gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-black font-bold text-xl">
                WK
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Services
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Tu socio de confianza para reparaciones y materiales eléctricos.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 ">
                <MapPin className="text-green-500 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Dirección</h4>
                  <Link
                    href="https://www.google.com/maps/place/Av.+Alemanes+del+Volga+4648,+B7541+San+Jose,+Provincia+de+Buenos+Aires/@-37.5102944,-61.9209971,20z/data=!4m6!3m5!1s0x95eb72398de931d9:0x4affe556fef55c6c!8m2!3d-37.5103186!4d-61.9210765!16s%2Fg%2F11thqz7xn_?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                    className="text-gray-400 hover:underline"
                    rel="noopener noreferrer nofollow"
                    aria-label="Ubicación en Google Maps"
                    target="_blank"
                  >
                    Av. Alemanes del Volga 4648, Coronel Suárez
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-green-500 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Teléfono / WhatsApp</h4>
                  <p className="text-gray-400">
                    <Link
                      href="https://wa.me/5492926497753"
                      className="hover:underline"
                      rel="noopener noreferrer nofollow"
                      aria-label="Número de WhatsApp de Luciano Wasytak"
                    >
                      2926497753
                    </Link>{" "}
                    /{" "}
                    <Link
                      href="https://wa.me/5492926465966"
                      className="hover:underline"
                      rel="noopener noreferrer nofollow"
                      aria-label="Número de WhatsApp de Mariano Wasytak"
                    >
                      2926465966
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MailIcon className="text-green-500 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <Link
                    href="mailto:wasytaklucianojesus@Lmail.com"
                    className="text-gray-400 hover:underline"
                    rel="noopener noreferrer nofollow"
                    aria-label="Email de Luciano Wasytak"
                    target="_blank"
                  >
                    wasytaklucianojesus@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <InstagramIcon className="text-green-500 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Instagram</h4>
                  <Link
                    href="https://www.instagram.com/wkservices.cs/"
                    className="text-gray-400 hover:underline"
                    aria-label="Instagram de WK Services"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    @wkservices.cs
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-green-500 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Horarios</h4>
                  <p className="text-gray-400">
                    Lunes a Viernes: 9:00 - 17:00, Sábados: 9:00 - 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-[300px] bg-gray-800 rounded-xl overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.7790758927604!2d-61.9333532!3d-37.460763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e29c1a9af33d4f%3A0x79d79bc4b0f4d0a5!2sAv.%20Alemanes%20del%20Volga%204648%2C%20Coronel%20Su%C3%A1rez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1733272250000!5m2!1ses!2sar"
              style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full max-w-full"
              title="Ubicación en mapa de Google Maps"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} WK Services. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
