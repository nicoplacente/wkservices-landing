export default function AllReviewsCard({ review }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-green-500">
      <div className="flex items-center mb-4">
        <div className="text-2xl font-bold text-yellow-500 mr-2">
          {Array(review.rating).fill("★").join("")}
          <span className="text-gray-300 ml-1">
            {Array(5 - review.rating)
              .fill("★")
              .join("")}
          </span>
        </div>
      </div>
      <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
      <div className="text-right">
        <p className="font-semibold text-gray-800">
          - {review.firstName} {review.lastName}
        </p>
      </div>
    </div>
  );
}
