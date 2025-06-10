import { router } from "../router";
import { showAppMessage } from "../utils/function.utils";
// import { showAppMessage } from "./MenuPage";
export function renderNewContactPage() {
  const element = document.createElement("div");
  
  element.innerHTML = `
  <div class="min-h-screen bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center fixed inset-0 z-50">
    <div class="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 mx-4 transform transition-all duration-300">
      <h2 class="text-xl font-bold text-center text-green-600 mb-6">➕ Nouveau Contact</h2>
      
      <button id="backButton" class="w-full text-left px-4 py-3 mb-6 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center">
        ← Retour
      </button>
      
      <form id="contactForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Nom complet <span class="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="contact-name" 
            required
            placeholder="Entrez le nom complet"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Numéro de téléphone <span class="text-red-500">*</span>
          </label>
          <input 
            type="tel" 
            id="contact-phone" 
            required
            placeholder="+221 XX XXX XX XX"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email (optionnel)
          </label>
          <input 
            type="email" 
            id="contact-email" 
            placeholder="exemple@email.com"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Statut (optionnel)
          </label>
          <input 
            type="text" 
            id="contact-status" 
            placeholder="En ligne, Occupé, Disponible..."
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
          >
        </div>
        
        <div class="flex space-x-3 pt-4">
          <button id="cancelButton" type="button" class="flex-1 px-4 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium">
            Annuler
          </button>
          <button id="saveButton" type="submit" class="flex-1 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium">
            Sauvegarder
          </button>
        </div>
      </form>
    </div>
  </div>
  `;

  // Animation d'entrée
  const card = element.querySelector("div > div");
  card.style.transform = "translateY(-20px) scale(0.95)";
  card.style.opacity = "0";
  
  setTimeout(() => {
    card.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    card.style.transform = "translateY(0) scale(1)";
    card.style.opacity = "1";
  }, 10);

  // Gestion des événements
  const backButton = element.querySelector("#backButton");

backButton.addEventListener("click", () => {
  card.style.transform = "translateY(-20px) scale(0.95)";
  card.style.opacity = "0";

  setTimeout(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
    router("/menu");
  }, 300);
});


  const cancelButton = element.querySelector("#cancelButton");
  cancelButton.addEventListener("click", () => {
    router("/menu");
  });

  // Fermer en cliquant à l'extérieur
  element.addEventListener("click", (e) => {
    if (e.target === element) {
      router("/menu");
    }
  });

  // Fermer avec la touche Escape
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      router("/menu");
      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);

  // Gestion du formulaire
  const contactForm = element.querySelector("#contactForm");
  const saveButton = element.querySelector("#saveButton");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = {
      name: element.querySelector("#contact-name").value.trim(),
      phone: element.querySelector("#contact-phone").value.trim(),
      email: element.querySelector("#contact-email").value.trim(),
      status: element.querySelector("#contact-status").value.trim()
    };

    // Validation
    if (!formData.name) {
      showAppMessage("❌ Le nom est obligatoire", "error");
      return;
    }

    if (!formData.phone) {
      showAppMessage("❌ Le numéro de téléphone est obligatoire", "error");
      return;
    }

    // Validation basique du téléphone
    const phoneRegex = /^(\+221|221)?[0-9]{9}$|^(\+|00)[1-9][0-9]{7,14}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      showAppMessage("❌ Format de téléphone invalide (ex: +221771234567)", "error");
      return;
    }

    // Validation email si fourni
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showAppMessage("❌ Format d'email invalide", "error");
        return;
      }
    }

    // Désactiver le bouton pendant la sauvegarde
    saveButton.disabled = true;
    saveButton.textContent = "Sauvegarde...";
    saveButton.classList.replace("hover:bg-green-600", "opacity-50", "cursor-not-allowed");

    try {
      // Sauvegarder le contact
      const result = await saveContactToDb(formData);
      
      if (result.success) {
        showAppMessage("✅ Contact ajouté avec succès!", "success");
        
        // Attendre un peu puis rediriger
        setTimeout(() => {
          router("/home");
        }, 1500);
      } else {
        throw new Error(result.error || "Erreur lors de la sauvegarde");
      }
    } catch (error) {
      console.error("Erreur:", error);
      showAppMessage(`❌ ${error.message}`, "error");
      
      // Réactiver le bouton
      saveButton.disabled = false;
      saveButton.textContent = "Sauvegarder";
      saveButton.classList.replace("opacity-50", "cursor-not-allowed", "hover:bg-green-600");
    }
  });

  return element;
}

// Fonction pour sauvegarder le contact dans db.json
async function saveContactToDb(contactData) {
  try {
    // Récupérer l'utilisateur connecté
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    const authToken = localStorage.getItem('authToken');
    
    

    // Préparer les données à envoyer
    const dataToSend = {
      name: contactData.name,
      phone: contactData.phone,
      email: contactData.email,
      status: contactData.status
    };

    // Appel API
    const response = await fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(dataToSend)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || `Erreur HTTP: ${response.status}`);
    }

    // Mettre à jour le localStorage avec le nouveau contact
    const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    existingContacts.push(result.contact);
    localStorage.setItem('contacts', JSON.stringify(existingContacts));
    
    return { success: true, contact: result.contact };
    
  } catch (error) {
    // Gestion des erreurs spécifiques
    let errorMessage = error.message;
    
    if (error.message.includes('Failed to fetch')) {
      errorMessage = 'Erreur de connexion au serveur';
    } else if (error.message.includes('409')) {
      errorMessage = 'Ce numéro de téléphone existe déjà dans vos contacts';
    } else if (error.message.includes('401')) {
      errorMessage = 'Session expirée, veuillez vous reconnecter';
    }
    
    return { success: false, error: errorMessage };
  }
}