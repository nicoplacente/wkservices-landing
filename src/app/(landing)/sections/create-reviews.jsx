"use client";

import { useState, useRef } from "react";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { createReview } from "../reviews-actions/reviews.action";

export default function CreateReviews() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const router = useRouter();

  const hideMessages = () => {
    setTimeout(() => {
      setSuccess(false);
      setError(null);
    }, 4000); //
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    setIsSubmitted(true);

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const comment = formData.get("comment");

    // VALIDACIÓN
    if (!firstName || !lastName || !comment || rating === 0) {
      let errorMessage = "Por favor, completa todos los campos.";
      if (rating === 0) {
        errorMessage =
          "Debes seleccionar al menos una estrella (mínimo 1). ⭐️";
      }

      setError(errorMessage);
      hideMessages();
      return;
    }

    setIsSubmitted(false);
    setIsSubmitting(true);

    try {
      await createReview({
        firstName,
        lastName,
        rating,
        comment,
      });

      setSuccess(true);
      hideMessages();

      if (formRef.current) {
        formRef.current.reset();
      }
      setRating(0);
      setIsSubmitted(false);
      router.refresh();
    } catch (err) {
      console.error(err);

      setError("Hubo un error al enviar tu reseña. Inténtalo de nuevo.");
      hideMessages();
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStarsInput = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      return (
        <Star
          key={index}
          className={`w-8 h-8 cursor-pointer transition-colors duration-200`}
          onClick={() => {
            setRating(starValue);
            if (isSubmitted && error && starValue > 0) {
              setError(null);
            }
          }}
          onMouseEnter={() => setHoverRating(starValue)}
          onMouseLeave={() => setHoverRating(0)}
          style={{
            color: starValue <= (hoverRating || rating) ? "#FACC15" : "#D1D5DB",
            fill: starValue <= (hoverRating || rating) ? "#FACC15" : "none",
          }}
        />
      );
    });
  };

  return (
    <section id="crear-reseñas" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          ¡Tu opinión nos importa. Deja tu Reseña! ✍️
        </h2>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="bg-white p-8 rounded-xl shadow-2xl border border-green-100"
        >
          <div className="flex gap-4 mb-4">
            <input
              name="firstName"
              type="text"
              placeholder="Nombre"
              required
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Apellido"
              required
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-green-700 mb-2">
              Tu Calificación:
            </label>
            <div className="flex justify-center md:justify-start space-x-1">
              {renderStarsInput()}
            </div>

            {isSubmitted && rating === 0 && (
              <p className="text-sm text-red-500 mt-2">
                Debes seleccionar al menos una estrella.
              </p>
            )}
          </div>

          <div className="mb-6">
            <textarea
              name="comment"
              rows={4}
              placeholder="Escribe tu comentario aquí..."
              required
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
            ></textarea>
          </div>

          {error && (
            <div className="p-3 mb-4 text-sm font-medium text-red-700 bg-red-100 rounded-lg text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="p-3 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-lg text-center">
              ¡Gracias! Tu reseña se envió correctamente.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 text-lg font-semibold rounded-lg transition duration-200 ${
              isSubmitting
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white shadow-lg"
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar Reseña"}
          </button>
        </form>
      </div>
    </section>
  );
}
