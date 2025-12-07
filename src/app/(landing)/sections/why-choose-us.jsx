import { Clock, ShieldCheck, Star, Truck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="porque-elegirnos" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nos destacamos por nuestra responsabilidad, atención al detalle y
            enfoque en el cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Clock />,
              title: "Rapidez",
              desc: "Tiempos de reparación eficientes, aproximadamente un día según el caso.",
            },
            {
              icon: <Truck />,
              title: "Retiro y Entrega",
              desc: "Servicio a domicilio para tu máxima comodidad.",
            },
            {
              icon: <ShieldCheck />,
              title: "Garantía",
              desc: "Trabajo seguro y perfeccionista que supera expectativas.",
            },
            {
              icon: <Star />,
              title: "Atención",
              desc: "Enfoque personalizado y excelente trato al cliente.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700 hover:border-green-500 group"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  {
    /* --- PRODUCTOS & GALERIA --- */
  }
  <section id="servicios" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
        Productos y <span className="text-green-600">Servicios</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Product Card Example 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gray-200 relative">
            <img
              src="https://imgs.search.brave.com/Qgu3Qj2b8mWIP6rRcS6NSXWAV7xxVRGgz6A_fEEXjaQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9oZXJyYW1pZW50/YXMtY29tcG9uZW50/ZXMtdHJhYmFqby1v/YmpldG9zLWVsZWN0/cmljb3NfMjIwODcz/LTIxODYuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA"
              alt="Materiales Eléctricos"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">Materiales Eléctricos</h3>
            <p className="text-gray-600 text-sm">
              Venta de insumos de primera calidad para instalaciones seguras.
            </p>
          </div>
        </div>

        {/* Product Card Example 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gray-200 relative">
            <img
              src="https://imgs.search.brave.com/_-DJflApmEj0JrJQXcXUCX7SGSXzQRpDvVM9PX3moOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/MTU1NDE2NC9lcy9m/b3RvLzNkLXJlbmRl/ci1kZS1jb25qdW50/by1kZS1yZWNvZ2lk/YS1kZS1lbGVjdHJv/ZG9tJUMzJUE5c3Rp/Y29zLmpwZz9iPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bzk1/SG1kblVPekY4WnhE/Z00xOFJCS3hZQ3Q5/anFNb2cwOFF3Zl8z/QlItRT0"
              alt="Electrodomésticos"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">
              Reparación de Electrodomésticos
            </h3>
            <p className="text-gray-600 text-sm">
              Reparación de lavarropas, secarropas y electrodomésticos mayores.
            </p>
          </div>
        </div>

        {/* Product Card Example 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gray-200 relative">
            <img
              src="https://imgs.search.brave.com/BHkoFMv_-zjHr2s-LrNljmnH7f283s_uhV6-N3A-9oI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYWNl/YmNvLnZ0ZXhhc3Nl/dHMuY29tL2Fzc2V0/cy92dGV4LmZpbGUt/bWFuYWdlci1ncmFw/aHFsL2ltYWdlcy9h/ZWFmMDFmYy05NmVi/LTRmMzEtYjI3Zi1l/OThmNWZjNTBiNDJf/X19mNGY5MGQ3Yzg5/Y2FlZmEyOTRmNzJl/YzQzMDY5MDQzOC5w/bmc"
              alt="Pequeños Electrodomésticos"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">
              Pequeños Electrodomésticos
            </h3>
            <p className="text-gray-600 text-sm">
              Soluciones para microondas, licuadoras y más.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
