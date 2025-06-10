
 export const Sidebar = () => {
  return (
    <div className="h-screen w-16 bg-gray-100 flex flex-col items-center py-4 border-r border-gray-200 shadow-sm">
      {/* Top navigation items */}
      <div className="flex flex-col items-center gap-6 mb-auto">
        {/* Message button with notification */}
        <div className="relative">
          <button 
            className={`p-2 rounded-full flex items-center justify-center transition-colors ${activeItem === 0 ? 'bg-green-100' : 'hover:bg-gray-200'}`}
            onClick={() => handleItemClick(0)}
          >
            <MessageSquare size={24} className={activeItem === 0 ? 'text-green-600' : 'text-gray-700'} />
          </button>
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
            4
          </span>
        </div>

        {/* Circle user button */}
        <button 
          className={`p-2 rounded-full flex items-center justify-center transition-colors ${activeItem === 1 ? 'bg-green-100' : 'hover:bg-gray-200'}`}
          onClick={() => handleItemClick(1)}
        >
          <CircleUser size={24} className={activeItem === 1 ? 'text-green-600' : 'text-gray-700'} />
        </button>
        
        {/* Green notification dot */}
        <div className="relative">
          <div className="w-2 h-2 bg-green-500 rounded-full absolute -top-1 right-0"></div>
          <div className="w-8 h-2"></div>
        </div>

        {/* Message square button */}
        <button 
          className={`p-2 rounded-full flex items-center justify-center transition-colors ${activeItem === 2 ? 'bg-green-100' : 'hover:bg-gray-200'}`}
          onClick={() => handleItemClick(2)}
        >
          <MessageSquare size={24} className={activeItem === 2 ? 'text-green-600' : 'text-gray-700'} />
        </button>
        
        {/* Green notification dot */}
        <div className="relative">
          <div className="w-2 h-2 bg-green-500 rounded-full absolute -top-1 right-0"></div>
          <div className="w-8 h-2"></div>
        </div>

        {/* Users button */}
        <button 
          className={`p-2 rounded-full flex items-center justify-center transition-colors ${activeItem === 3 ? 'bg-green-100' : 'hover:bg-gray-200'}`}
          onClick={() => handleItemClick(3)}
        >
          <Users size={24} className={activeItem === 3 ? 'text-green-600' : 'text-gray-700'} />
        </button>
      </div>

      {/* Bottom navigation items */}
      <div className="flex flex-col items-center gap-6 mt-auto">
        {/* Settings button */}
        <button 
          className={`p-2 rounded-full flex items-center justify-center transition-colors ${activeItem === 4 ? 'bg-green-100' : 'hover:bg-gray-200'}`}
          onClick={() => handleItemClick(4)}
        >
          <Settings size={24} className={activeItem === 4 ? 'text-green-600' : 'text-gray-700'} />
        </button>

        {/* User avatar button */}
        <button 
          className="w-8 h-8 rounded-full bg-cover bg-center border border-gray-300 overflow-hidden"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
          onClick={() => handleItemClick(5)}
        >
        </button>
      </div>
    </div>
  );
};

