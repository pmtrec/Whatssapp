import { router } from "../router";
import { showAppConfirm, showAppMessage } from "../utils/function.utils";

const MENU_OPTIONS = [
  { label: "➕ Nouveau contact", action: "new-contact" },
  { label: "👥 Nouveau groupe", action: "new-group" },
  { label: "🟢 Statut", action: "status" },
  { label: "⚙️ Paramètres", action: "settings" },
  { label: "📁 Médias, liens et docs", action: "media" },
  { label: "⭐ Messages importants", action: "starred" },
  { label: "🚪 Déconnexion", action: "logout", isDanger: true },
];

function createMenuCard() {
  const card = document.createElement("div");
  card.className = "w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 mx-4 transform transition-all duration-300";
  
  const title = document.createElement("h2");
  title.className = "text-xl font-bold text-center text-green-600 mb-6";
  title.textContent = "Menu WhatsApp";
  
  const backButton = createBackButton();
  const menuList = createMenuList();
  
  card.append(title, backButton, menuList);
  return card;
}

function createBackButton() {
  const button = document.createElement("button");
  button.className = "w-full text-left px-4 py-3 mb-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center";
  button.textContent = "Retour";
  
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenu();
  });
  
  return button;
}

function createMenuList() {
  const ul = document.createElement("ul");
  ul.className = "space-y-2";
  
  MENU_OPTIONS.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt.label;
    li.className = `block w-full text-left px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
      opt.isDanger 
        ? "bg-red-50 text-red-600 hover:bg-red-100 hover:shadow-md" 
        : "bg-gray-50 hover:bg-green-50 hover:text-green-600 hover:shadow-md"
    }`;
    
    li.addEventListener("click", () => handleMenuAction(opt.action));
    ul.appendChild(li);
  });
  
  return ul;
}

function handleMenuAction(action) {
  switch (action) {
    case "new-contact":
      router("/new-contact");
      break;
    case "logout":
      handleLogout();
      break;
    default:
      showAppMessage(`🔧 Fonctionnalité à implémenter : ${action}`, "info");
      if (action !== "logout") router("/home");
  }
}

function handleLogout() {
  showAppConfirm(
    "Êtes-vous sûr de vouloir vous déconnecter ?",
    () => {
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      document.querySelector("#app").innerHTML = "";
      showAppMessage("✅ Déconnexion réussie", "success");
      router("/login");
    },
    () => {
      showAppMessage("Déconnexion annulée", "info");
    }
  );
}

function closeMenu() {
  const menuElement = document.querySelector(".bg-gray-900.bg-opacity-50");
  if (menuElement) {
    menuElement.remove();
  }
  router("/home");
}

export function renderMenuPage() {
  const element = document.createElement("div");
  element.className = "min-h-screen bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center fixed inset-0 z-50";
  
  const card = createMenuCard();
  element.appendChild(card);
  
  // Fermer le menu en cliquant à l'extérieur ou avec Escape
  element.addEventListener("click", (e) => e.target === element && closeMenu());
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());
  
  // Animation d'entrée
  requestAnimationFrame(() => {
    card.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    card.style.transform = "translateY(0) scale(1)";
    card.style.opacity = "1";
  });
  
  return element;
}