import { renderNotFoundPage } from "./pages/home/fond"
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
       "/discusion": renderNotFoundPage
    
}

const middleViewPaths=[
  "/menu",
  "/new-contact"
]
const rightViewPaths=[
  "/discusion"
]
export async function router(path = "/login") {


  const views = route[path];

  if (views) {
    const viewElement = await views();

    if (middleViewPaths.includes(path)) {
        const page=document.querySelector("#page");
        page.innerHTML="";
        page.appendChild(viewElement);
    }else if(rightViewPaths.includes(path)){
      const main=document.querySelector("#main");
      main.innerHTML="";
      main.appendChild(viewElement);
    }
    else{
          const app = document.querySelector("#app");
          app.innerHTML = "";
          app.appendChild(viewElement);
    }
  } else {
    app.innerHTML = `<p class="text-red-500 text-center">Erreur : Page ${path} introuvable</p>`;
  }
}