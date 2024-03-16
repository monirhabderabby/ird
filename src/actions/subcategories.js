"use server";

export const getAllSubcategories = async (id) => {
  const res = await fetch(`${process.env.backend}/subcategories/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data;
};
