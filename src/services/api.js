export async function getContacts() {
  const res = await fetch("http://localhost:3000/contacts");
  if (!res.ok) {
    throw new Error("Erreur lors du chargement des contacts");
  }
  return res.json();
}
