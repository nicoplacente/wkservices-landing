import ServiceCard from "../components/service-card";

const services = [
  {
    img: "/materiales-electricos.webp",
    title: "Materiales Eléctricos",
    description:
      "Venta de insumos de primera calidad para instalaciones seguras.",
    alt: "Materiales Eléctricos",
  },
  {
    img: "/electrodomesticos.webp",
    title: "Reparación de Electrodomésticos",
    description:
      "Reparación de lavarropas, secarropas y electrodomésticos mayores.",
    alt: "Electrodomésticos",
  },
  {
    img: "/pequeños-electrodomesticos.webp",
    title: "Pequeños Electrodomésticos",
    description: "Soluciones para microondas, licuadoras y más.",
    alt: "Pequeños Electrodomésticos",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Productos y <span className="text-green-600">Servicios</span>
        </h2>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              img={service.img}
              title={service.title}
              description={service.description}
              alt={service.alt}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
