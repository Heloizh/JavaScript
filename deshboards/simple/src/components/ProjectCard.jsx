import React from "react";
import { TiAttachment } from "react-icons/ti";
// Importa React e o ícone de anexo da biblioteca react-icons.

const ProjectCard = ({ project }) => {
  return (
    <div className="p-6 bg-white rounded-xl space-y-5">
      {/* Container principal da card com padding, cor de fundo branca e bordas arredondadas */}
      <div>
        {/* Seção para o nome e tipo do projeto */}
        <h1 className="text-xl font-semibold text-gray-700">{project.name}</h1>
        <p className="text-sm text-gray-500">{project.type}</p>
      </div>
      <p>
        {/* Data do projeto com estilo de fundo cinza claro */}
        <span className="text-xs- p-2 rounded bg-gray-100">{project.date}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="w-[40%] bg-blue-500 rounded-full h-2"></div>
        {/* Barra de progresso com preenchimento parcial */}
      </div>

      <div className="flex justify-between items-center">
        {/* Container para a lista de imagens dos colaboradores e o contador de arquivos */}
        <div className="relative">
          {/* Imagens dos participantes do projeto sobrepostas */}
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            className="w-8  h-8 rounded-full border-4 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/women/35.jpg"
            alt=""
            className="w-8  h-8 rounded-full border-4 border-white absolute top-0 left-8"
          />
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt=""
            className="w-8  h-8 rounded-full border-4 border-white absolute top-0 left-8"
          />
          {/* Sobreposição feita com 'absolute' e 'left' */}
        </div>
        <p className="flex space-x-1 items-center text-gray-400">
          {/* Ícone de anexo seguido pela quantidade de arquivos */}
          <TiAttachment />
          <span>{project.files} files</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
