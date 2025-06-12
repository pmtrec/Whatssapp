export async function getContacts() {
  const res = await fetch("https://backwhat-jo3k.onrender.com");
  if (!res.ok) {
    throw new Error("Erreur lors du chargement des contacts");
  }
  return res.json();
}
