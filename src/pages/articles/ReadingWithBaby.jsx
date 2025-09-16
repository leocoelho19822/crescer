// src/pages/ReadingWithBabyPage.jsx
// eslint-disable-next-line
import React from "react";
import leituraBebe from "../../assets/leituraart.png";

export default function ReadingWithBabyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-24 text-zinc-800">
      {/* Título + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
        Ler com o seu bebé
      </h1>
      
      <p className="italic text-zinc-600 mb-6">
        Partilhe momentos de leitura com o bebé para estimular a linguagem,
        a imaginação e o vínculo afetivo desde cedo.
      </p>
      <p className="text-xs uppercase tracking-wide text-zinc-500 mb-2">
        Atividade de estimulação precoce
      </p>
      

      {/* Imagem */}
      <img
        src={leituraBebe}
        alt="Mãe a ler com o bebé"
        className="rounded-lg mb-8 mx-auto w-full max-w-4xl max-h-[480px] object-cover"
      />

      {/* Texto integral */}
      <div className="space-y-8 text-zinc-800 leading-relaxed">
  <div>
    <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3">
      Materiais necessários
    </h2>
    <p className="text-base">
      Um livro para bebé (pode ser de pano, cartão rígido ou capa dura, com
      cores vivas, imagens grandes e elementos táteis). Caso não tenha um,
      pode utilizar folhas de papel dobradas ao meio, desenhando algumas
      figuras ou formas simples em cores fortes.
    </p>
  </div>

  <div>
    <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3">
      O que podem fazer juntos
    </h2>
    <p className="text-base mb-4">
      Coloque o bebé no seu colo de forma a que ambos possam ver o livro,
      mas garantindo também que consegue observar o rosto do bebé. Segure o
      livro de forma visível e leia em voz alta. Pode descrever as imagens,
      inventar pequenas histórias, apontar para as figuras e nomeá-las. Use
      frases curtas e simples. Varie o tom de voz — fale baixo, mostre
      surpresa, faça pausas.
    </p>
    <p className="text-base mb-4">
      Deixe o bebé observar as suas expressões faciais e reaja às dele.
      Identifique o que ele parece gostar mais ou menos. Permita que toque
      no livro, explore as páginas e até leve à boca (se for seguro). Se o
      bebé emitir sons enquanto lê, incentive-o a “ler” consigo. Repita os
      seus sons, faça perguntas simples e elogie as suas reações.
    </p>
    <p className="text-base">
      Se notar que o bebé perde o interesse (afasta o olhar ou protesta),
      espere pacientemente até que volte a prestar atenção. Se isso não
      acontecer, interrompa a leitura e retome mais tarde.
    </p>
  </div>

  <div>
    <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3">
      O que o seu bebé está a aprender
    </h2>
    <p className="text-base">
      Partilhar momentos de leitura fortalece as competências de comunicação
      e favorece o desenvolvimento da linguagem desde cedo.
    </p>
  </div>
</div>

    </div>
  );
}
