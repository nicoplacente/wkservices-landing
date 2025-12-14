import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex mt-12 sm:mt-0 items-center justify-center bg-black"
    >
      <div className="absolute inset-0 opacity-10">
        <img
          src="/tools-hero.webp"
          alt="Herramientas"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold mb-4 border border-green-500/50">
          Técnicos Matriculados
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Soluciones Rápidas <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600">
            y Confiables.
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Reparación experta de electrodomésticos y venta de productos
          eléctricos. Calidad garantizada por una familia de expertos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/5492926497753"
            rel="noopener noreferrer nofollow"
            aria-label="Número de WhatsApp de Luciano Wasytak"
            target="_blank"
            className="px-8 py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            Pedir Presupuesto
          </Link>
          <Link
            href="#nosotros"
            aria-label="Conocer al Equipo"
            className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
          >
            Conocer al Equipo
          </Link>
        </div>
      </div>
    </section>
  );
}
