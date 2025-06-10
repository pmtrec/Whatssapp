import { router } from "../router";

export function renderLogin() {
  const element = document.createElement("div");
  element.className = "min-h-screen flex items-center justify-center bg-gray-100";

  const box = document.createElement("div");
  box.className = "bg-white p-8 rounded-2xl shadow-lg w-full max-w-md";

  const title = document.createElement("h2");
  title.className = "text-2xl font-bold text-center text-green-600 mb-6";
  title.textContent = "Connexion WhatsApp";

  const form = document.createElement("form");
  form.className = "space-y-4";

  // Téléphone
  const phoneGroup = document.createElement("div");
  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Numéro de téléphone";
  phoneLabel.className = "block text-sm font-medium text-gray-700";
  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.required = true;
  phoneInput.placeholder = "Ex: +243 000 000 000"
  phoneInput.className = "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500";
  phoneGroup.appendChild(phoneLabel);
  phoneGroup.appendChild(phoneInput);

  // Mot de passe
  const passGroup = document.createElement("div");
  const passLabel = document.createElement("label");
  passLabel.textContent = "Mot de passe";
  passLabel.className = "block text-sm font-medium text-gray-700";
  const passInput = document.createElement("input");
  passInput.type = "password";
  passInput.required = true;
  passInput.className = "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500";
  passGroup.appendChild(passLabel);
  passGroup.appendChild(passInput);

  // Bouton
  const btnConnecter = document.createElement("button");
  btnConnecter.type = "submit";
  btnConnecter.textContent = "Se connecter";
  btnConnecter.className = "w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition duration-300";

  // Message d’erreur
  const errorMsg = document.createElement("p");
  errorMsg.id = "errorMsg";
  errorMsg.className = "text-red-500 text-sm text-center";

  form.appendChild(phoneGroup);
  form.appendChild(passGroup);
  form.appendChild(btnConnecter);
  form.appendChild(errorMsg);

  // Inscription
  const bottomText = document.createElement("p");
  bottomText.className = "text-sm text-center text-gray-500 mt-6";
  const signupLink = document.createElement("a");
  signupLink.href = "#";
  signupLink.textContent = "Inscrivez-vous";
  signupLink.className = "text-green-600 hover:underline";
  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    router("/inscription");
  });
  bottomText.textContent = "Vous n'avez pas de compte ? ";
  bottomText.appendChild(signupLink);

  box.appendChild(title);
  box.appendChild(form);
  box.appendChild(bottomText);

  element.appendChild(box);

  // ⚙️ Action de connexion
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const phone = phoneInput.value.trim();
    const password = passInput.value.trim();
    errorMsg.textContent = "";

    if (!phone || !password) {
      errorMsg.textContent = "Tous les champs sont obligatoires.";
      return;
    }

    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => {
        const foundUser = users.find(user =>
          user.phone === phone && user.password === password
        );

        if (foundUser) {
          console.log("Connecté :", foundUser);
          document.querySelector("#app").innerHTML = "";
          router("/home");
        } else {
          errorMsg.textContent = "❌ Numéro ou mot de passe incorrect.";
        }
      })
      
      .catch(err => {
         console.log("papa");
        console.error("Erreur serveur :", err);
       
        
        errorMsg.textContent = "Erreur de connexion au serveur.";
      });
  });

  return element;
}
