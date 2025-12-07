import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
  const { firstName, lastName, rating, comment } = review;

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 transition-colors duration-200 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 stroke-1"
        }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <div
      className="
       p-8 bg-white 
      rounded-3xl shadow-2xl 
      border-t-4 border-green-600
      transition-all duration-300 hover:shadow-green-300/50
       w-full break-inside-avoid
    "
    >
      <div
        className="flex mb-3 space-x-0.5"
        role="img"
        aria-label={`Valoración de ${rating} de 5 estrellas`}
      >
        {renderStars()}
      </div>
      <p
        className="
        text-gray-800 italic mb-6 text-lg 
        grow leading-relaxed
      "
      >
        <span className="text-xl font-serif text-green-600 mr-1">"</span>
        {comment}
        <span className="text-xl font-serif text-green-600 ml-1">"</span>
      </p>
      <div
        className="
        font-bold text-xl text-green-700 
        border-t border-gray-200 pt-4 mt-auto 
        tracking-wide
      "
      >
        {firstName} {lastName}
      </div>
    </div>
  );
}
