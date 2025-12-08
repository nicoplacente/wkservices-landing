import { getReviews } from "../reviews-actions/reviews.action";
import AllReviewsCard from "../components/all-reviews-card";

export const dynamic = "force-dynamic";

export default async function AllReviewsPage() {
  const allReviews = await getReviews();

  const sortedReviews = allReviews.sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-gray-50 mt-20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-16">
          Todas las Reseñas
        </h1>

        {/* Usamos sortedReviews en lugar de allReviews */}
        {sortedReviews.length === 0 ? (
          <div className="text-center text-gray-600 text-xl">
            Aún no hay reseñas para mostrar.
          </div>
        ) : (
          <div
            className="
              grid gap-8 
              sm:grid-cols-1 
              md:grid-cols-2 
              lg:grid-cols-3
            "
          >
            {sortedReviews.map((review) => (
              <AllReviewsCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
