export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-green-500 pl-4">
              Familia y Profesión
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Somos un equipo familiar apasionado por brindar soluciones rápidas
              y confiables. Lo que comenzó como un proyecto entre padre e hijo
              se transformó en un negocio local comprometido con la calidad, la
              confianza y la atención personalizada.
            </p>

            <div className="space-y-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <img
                    src="/mario.webp"
                    alt="Mariano Wasytak"
                    className="size-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Mariano Wasytak</h3>
                  <p className="text-sm text-gray-500">
                    Técnico en reparación de electrodomésticos y electricista
                    matriculado.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <img
                    src="/rayito.webp"
                    alt="Luciano Wasytak"
                    className="size-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Luciano Wasytak</h3>
                  <p className="text-sm text-gray-500">
                    Técnico matriculado en reparación de electrodomésticos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsinline
              tabIndex="-1"
              src="/working/video-presentacion.webm"
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
