// src/pages/ExploringObjectsPage.jsx
// eslint-disable-next-line
import React from "react";
import explorarObjetos from "../../assets/exploring.png"; 

export default function ExploringObjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
        Explorar objetos
      </h1>
      
      <p className="italic text-zinc-600 mb-6">
        Uma forma simples e divertida de estimular a coordenação e a força das
        mãos do bebé, usando brinquedos e objetos do dia a dia.
      </p>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">
        Atividade de estimulação precoce
      </p>
      <hr className="py-6"/>

      {/* Imagem */}
      <img
        src={explorarObjetos}
        alt="Bebé a explorar objetos"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Texto integral formatado */}
      <div className="space-y-8 text-zinc-800 leading-relaxed">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3">
            Materiais necessários
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-base">
            <li>Tabuleiro de cartão, plástico ou alumínio</li>
            <li>Bolas ou brinquedos pequenos que caibam nas mãos do bebé</li>
            <li>Fita-cola de papel</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3">
            O que podem fazer juntos
          </h2>
          <p className="text-base mb-4">
            Antes de começar, prepare o local onde a atividade vai decorrer. O
            bebé deve estar sentado numa cadeira.
          </p>
          <p className="text-base mb-4">
            Cole os brinquedos ou bolas no tabuleiro com a fita-cola. Coloque o
            tabuleiro em frente ao bebé e incentive-o a observar os objetos e a
            tentar agarrá-los com a mão.
          </p>
          <p className="text-base mb-4">
            Pode modelar o movimento para que ele imite os seus gestos e ajudá-lo
            caso tenha dificuldade em retirar completamente o brinquedo (lembre-se
            de remover a fita dos brinquedos antes de os entregar ao bebé).
          </p>
          <p className="text-base">
            Motivar e felicitar o bebé é essencial: elogie sempre que ele
            conseguir pegar num objeto ou se esforçar para o retirar.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3">
            O que o bebé está a aprender
          </h2>
          <p className="text-base">
            Com esta atividade, o bebé fortalece os músculos das mãos, melhora a
            coordenação dos movimentos e aprende pela imitação.
          </p>
        </div>
      </div>
    </div>
  );
}
