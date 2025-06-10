import { renderHome } from "./pages/homePage"
import { renderInscription } from "./pages/InscriptionPage"
import { renderLogin } from "./pages/LoginPage"
import { renderMenuPage } from "./pages/MenuPage"
import { renderNewContactPage } from "./pages/NewcontactPage"

const route={
    "/login" : renderLogin,
    "/inscription" :renderInscription,
    "/home" :renderHome,
    "/menu": renderMenuPage,
    "/new-contact": renderNewContactPage,
      // "*": renderNotFoundPage
    
}
export async function router(path = "/login") {
  const views = route[path];
  const app = document.querySelector("#app");
  app.innerHTML = "";

  if (views) {
    const viewElement = await views(); // ✅ Attendre le DOM de la vue
    app.appendChild(viewElement);
  } else {
    app.innerHTML = `<p class="text-red-500 text-center">Erreur : Page ${path} introuvable</p>`;
  }
}