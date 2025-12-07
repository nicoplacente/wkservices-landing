import { getReviews } from "../reviews-actions/reviews.action";
import ReviewCard from "../components/review-card";
import Link from "next/link"; // Necesitas importar Link de Next.js para la navegación

export default async function Reviews() {
  const allReviews = await getReviews();

  // 1 - Filtrar para obtener solo las reseñas con 5 estrellas y limitar a las primeras 6.
  const topReviews = allReviews
    .filter((review) => review.rating === 5)
    .slice(0, 6);

  // Determinar si hay más de 6 reseñas en total (sin importar la puntuación),
  // para decidir si mostrar el botón "Ver todas las reseñas".
  const hasMoreThanSixReviews = allReviews.length > 6;

  return (
    <section id="reseñas" className="py-20 bg-green-500">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          Lo que dicen nuestros clientes ✨
        </h2>
      </div>

      {topReviews.length === 0 ? (
        // Mensaje si no hay reseñas de 5 estrellas para mostrar
        <div className="text-center text-white container mx-auto px-4">
          Aún no hay reseñas de 5 estrellas. ¡Sé el primero!
        </div>
      ) : (
        <>
          <div
            className="
            mx-auto container pb-4 px-4 md:px-12 lg:px-20 space-y-2 
            mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
            columns-1 sm:columns-2 md:columns-3"
          >
            {topReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* 2 - Botón condicional para ver todas las reseñas */}
          {hasMoreThanSixReviews && (
            <div className="text-center mt-10">
              <Link
                href="/all-reviews"
                aria-label="Ver todas las reseñas"
                className="
                  inline-block px-8 py-3 
                  text-lg font-semibold text-green-700 bg-white 
                  rounded-lg shadow-xl 
                  hover:bg-green-100 hover:shadow-2xl 
                  transition duration-300 ease-in-out
                "
              >
                Ver todas las reseñas
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
}
