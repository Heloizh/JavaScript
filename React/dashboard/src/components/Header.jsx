import React from "react";
import { GoBell } from "react-icons/go"; // Ícone de sino para notificações

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Área de boas-vindas */}
      <div>
        <h1 className="text-xs">Welcome Back!</h1>
        <p className="text-xl font-semibold">Alexia</p>
      </div>

      {/* Área de interação: busca, notificações, avatar */}
      <div className="flex items-center space-x-5">
        {/* Campo de busca visível somente em telas médias ou maiores */}
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="bg-blue-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2"
          />
        </div>

        {/* Botão de notificações e imagem de avatar */}
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl text-gray-600">
            {/* Ícone de sino com contador de notificações */}
            <GoBell size={28} />
            <span className="absolute -top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-blue-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
              9
            </span>
          </button>

          {/* Avatar com borda arredondada */}
          <img
            className="w-8 h-8 rounded-full border-4 border-blue-400"
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
