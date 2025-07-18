// eslint-disable-next-line
import React from 'react';
import amamentacao from '../assets/car4.webp';
import Button from './Button';

const corMap = {
  mes: '#FFE2A9',
  gravidez: '#DAE9E3',
  idade: '#D4E4FF',
};

const textoMap = {
  amarelo: 'text-yellow-800',
  verde: 'text-green-800',
  azul: 'text-blue-800',
};

// eslint-disable-next-line
export default function RecursosPensadosParaSi({ cor = 'mes' }) {
  const corBg = corMap[cor] || '#FFE2A9';
  const corTexto = textoMap[cor] || 'text-gray-800';

  return (
    <div className="max-w-screen-xl mx-auto px-4 text-left">
      <h2 className="text-3xl font-bold  text-zinc-800 mb-8">
        Recursos pensados para si
      </h2>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
        {/* Artigo principal */}
        
          <div
            className="p-4 rounded-lg shadow-md h-full flex flex-col"
            style={{ backgroundColor: corBg }}
          >
            <a href='/artigos/b53f28e9-628a-11f0-942d-e6643f0e8c94'>
            <img
              src={amamentacao}
              alt="Amamentação"
              className="w-full h-68 object-cover rounded-md"
            />
            </a>
            <div className="pt-4">
              <h3 className={`font-bold text-lg mb-2 ${corTexto}`}>
                Amamentação: 8 posições para tornar o início mais fácil
              </h3>
              <p className="text-sm text-gray-700">
                Amamentar pode ser um desafio, especialmente no início. Conheça posições que oferecem mais conforto e ajudam a garantir uma boa pega e uma amamentação tranquila.
              </p>
            </div>
          
        </div>

        {/* 4 artigos menores */}
        <div className="grid grid-cols-2 gap-6">
          {[2, 3, 4, 5].map((i) => (
            
              <div key={1}
                className="p-3 rounded-lg shadow-md flex flex-col h-full"
                style={{ backgroundColor: corBg }}
              >
                <img
                  src={amamentacao}
                  alt={`Artigo ${i}`}
                  className="w-full h-28 object-cover rounded-md"
                />
                <div className="pt-2">
                  <h4 className={`font-semibold text-sm leading-snug ${corTexto}`}>
                    Título do artigo {i} em duas linhas como fica?
                  </h4>
                </div>
              </div>
            
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
          <Button>Ver mais</Button>
      </div>
    </div>
  );
}
