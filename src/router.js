import { renderHome } from "./pages/homePage"
import { renderInscription } from "./pages/InscriptionPage"
import { renderLogin } from "./pages/LoginPage"
import { renderMenuPage } from "./pages/MenuPage"

const route={
    "/login" : renderLogin,
    "/inscription" :renderInscription,
    "/home" :renderHome,
    "/menu": renderMenuPage,
      // "*": renderNotFoundPage
}
export function router(path="/login"){
  const views = route[path]
  const app = document.querySelector("#app")
  app.appendChild(views())
}
