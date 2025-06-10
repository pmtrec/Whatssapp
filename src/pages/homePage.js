
import { router } from "../router";
import { 
  ChatIcon, 
  StatusIcon, 
  NewsletterIcon, 
  CommunityIcon, 
  SettingsIcon,
  NewChatIcon,
  MenuIcon,
  SearchIcon,
  ArchiveIcon,
  LockIcon
  
}from "./home/icone";


export function renderHome() {
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="bg-gray-900 h-screen overflow-hidden font-sans">
      <div class="flex h-full">
        <!-- Sidebar -->
        <div class="h-full w-20 bg-gray-900 flex flex-col justify-between items-center py-4 border-r-2 border-gray-700">
          <!-- Top icons -->
          <div class="flex flex-col space-y-6 items-center">
            <!-- Chat icon avec badge vert -->
            <div class="relative cursor-pointer hover:scale-110 transition-transform duration-200">
              ${ChatIcon}
              <span class="absolute -top-2 -right-2 bg-green-500 text-xs text-white rounded-full px-2 font-bold animate-pulse">
                85
              </span>
            </div>
            
            <!-- Status icon avec point vert -->
            <div class="relative cursor-pointer hover:scale-110 transition-transform duration-200">
              ${StatusIcon}
              <span class="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></span>
            </div>
            
            <!-- Newsletter icon avec point vert -->
            <div class="relative cursor-pointer hover:scale-110 transition-transform duration-200">
              ${NewsletterIcon}
              <span class="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></span>
            </div>
            
            <!-- Community icon -->
            <div class="cursor-pointer hover:scale-110 transition-transform duration-200">
              ${CommunityIcon}
            </div>
          </div>

          <!-- Bottom icons -->
          <div class="flex flex-col items-center space-y-6">
            <div class="w-10 h-[2px] bg-gray-500"></div>
            <div class="cursor-pointer hover:scale-110 transition-transform duration-200">
              ${SettingsIcon}
            </div>
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="avatar"
              class="w-10 h-10 rounded-full border-2 border-gray-700 cursor-pointer hover:border-green-500 transition-colors duration-200"
            />
          </div>
        </div>

        <!-- Chat List -->
        <div class="w-[500px] bg flex flex-col">
          <!-- Header -->
          <div class="bg-gray-900 p-4 flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
              </div>
              <h1 class="text-white text-xl font-medium">WhatsApp</h1>
            </div>
            <div class="flex items-center space-x-8 text-gray-300">
              ${NewChatIcon}
              <button id="menu_icon" class="cursor-pointer">
                ${MenuIcon}
              </button>

            </div>
          </div>

          <!-- Search -->
          <div class="p-3 bg-gray-900">
            <div class="relative">
              ${SearchIcon}
              <input
                type="text"
                placeholder="Rechercher ou démarrer une discussion"
                class="w-full bg-gray-600 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:bg-gray-500"
              />
            </div>
          </div>

          <!-- Chat List -->
          <div class="flex-1 overflow-y-auto">
            <!-- Archives -->
            <div class="px-10 py-3 flex items-center space-x-3 text-gray-300 border-gray-600 cursor-pointer hover:bg-gray-700">
              ${ArchiveIcon}
              <span class="text-sm">Archivées</span>
            </div>
            
            <!-- Conversations dynamiques ici -->
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 bg-gray-800 flex items-center justify-center">
          <div class="text-center max-w-md">
            <h2 class="text-2xl font-light text-white mb-4">WhatsApp Web</h2>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">
              Envoyez et recevez des messages sans avoir à garder votre téléphone connecté.
            </p>
            <p class="text-gray-300 text-sm leading-relaxed mb-8">
              Utilisez WhatsApp sur un maximum de 4 appareils et 1 téléphone, simultanément.
            </p>

            <!-- Privacy Notice -->
            <div class="flex items-center justify-center text-gray-400 text-xs">
              ${LockIcon}
              <span>Vos messages personnels sont chiffrés de bout en bout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
      const menuIcon = element.querySelector("#menu_icon");
  if (menuIcon) {
    menuIcon.addEventListener("click", () => {
      console.log("✅ Menu cliqué !");
      router("/menu");
    });
  }
    
    return element;
}

