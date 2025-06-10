import { router } from "../router";
export function renderMenuPage() {
  const container = document.createElement("div");

  container.className = "min-h-screen bg-gray-100 flex flex-col items-center pt-20";

  const card = document.createElement("div");
  card.className = "w-full max-w-sm bg-white rounded-xl shadow-lg p-4";

  const title = document.createElement("h2");
  title.className = "text-xl font-bold text-center text-green-600 mb-4";
  title.textContent = "Menu WhatsApp";

  const options = [
    { label: "➕ Nouveau contact", action: "new-contact" },
    { label: "👥 Nouveau groupe", action: "new-group" },
    { label: "🟢 Statut", action: "status" },
    { label: "🚪 Déconnexion", action: "logout", isDanger: true },
  ];

  const ul = document.createElement("ul");
  ul.className = "space-y-2";

  options.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt.label;
    li.dataset.action = opt.action;
    li.className =
      "block w-full text-left px-4 py-2 rounded-lg cursor-pointer transition " +
      (opt.isDanger
        ? "bg-red-50 text-red-600 hover:bg-red-100"
        : "bg-gray-100 hover:bg-green-100");

    li.addEventListener("click", () => {
      switch (opt.action) {
        case "new-contact":
          alert("🔧 À implémenter : Nouveau contact");
          break;
        case "new-group":
          alert("🔧 À implémenter : Nouveau groupe");
          break;
        case "status":
          alert("🔧 À implémenter : Statut");
          break;
        case "logout":
          localStorage.removeItem("user");
          document.querySelector("#app").innerHTML = "";
          router("/login");
          break;
      }
    });

    ul.appendChild(li);
  });

  card.appendChild(title);
  card.appendChild(ul);
  container.appendChild(card);
  
  return container;
}

