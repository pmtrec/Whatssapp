import { BASE_URL } from "../app";

export async function getContacts() {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) {
    throw new Error("Erreur lors du chargement des contacts");
  }
  return res.json();
}
