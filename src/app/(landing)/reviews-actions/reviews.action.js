"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../../lib/prisma";

export async function createReview(data) {
  if (
    !data.firstName ||
    !data.lastName ||
    !data.comment ||
    data.rating < 1 ||
    data.rating > 5
  ) {
    throw new Error("Datos de reseña inválidos o incompletos.");
  }

  try {
    const newReview = await prisma.review.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        rating: data.rating,
        comment: data.comment,
      },
    });

    revalidatePath("/");

    return newReview;
  } catch (error) {
    throw new Error("Error al guardar la reseña en la base de datos.");
  }
}

export async function getReviews() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return reviews;
  } catch (error) {
    throw new Error("Error al cargar las reseñas de la base de datos.");
  }
}
