// eslint-disable-next-line
import React from 'react';

export default function RecursosPensadosParaSi() {
  return (
<>
    <div className="max-w-screen-xl mx-auto px-4 text-left ">
        <h2 className="text-3xl  font-bold text-gray-600">
          Recursos pensados para si
        </h2>
    </div>



    <div className="p-6">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Artigo destaque */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-yellow-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="/images/amamentacao.jpg"
            alt="Amamentação"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg text-yellow-800 mb-1">
              Amamentação: 8 posições para tornar o início mais fácil
            </h3>
            <p className="text-sm text-gray-700">
              Amamentar pode ser um desafio, especialmente no início. Conheça posições que oferecem mais conforto e ajudam a garantir uma boa pega e uma amamentação tranquila.
            </p>
          </div>
        </div>

        {/* Outros artigos */}
        <div className="bg-yellow-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="/images/agua-bebe.jpg"
            alt="Água para o bebé"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h4 className="font-semibold text-yellow-800 text-sm">
              Quando posso começar a dar água ao bebé? E chá?
            </h4>
          </div>
        </div>

        <div className="bg-yellow-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="/images/alimentacao.jpg"
            alt="Alimentação e amamentação"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h4 className="font-semibold text-yellow-800 text-sm">
              Preciso continuar a amamentar um bebé que já come alimentos?
            </h4>
          </div>
        </div>

        <div className="bg-yellow-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="/images/choro.jpg"
            alt="Choro do bebé"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h4 className="font-semibold text-yellow-800 text-sm">
              O choro do bebé: compreender para cuidar com mais confiança
            </h4>
          </div>
        </div>

        <div className="bg-yellow-100 rounded-lg shadow-md overflow-hidden">
          <img
            src="/images/vacina.jpg"
            alt="Vacina BCG"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h4 className="font-semibold text-yellow-800 text-sm">
              O que fazer para amenizar a dor da ferida da vacina BCG?
            </h4>
          </div>
        </div>
      </div>

      {/* Botão Ver Mais */}
      <div className="flex justify-center mt-6">
        <button className="bg-green-200 hover:bg-green-300 text-green-900 font-semibold px-6 py-2 rounded-full shadow-sm">
          Ver mais
        </button>
      </div>
    </div>
    </>
  );
};


