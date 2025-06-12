// src/components/TrimestresSection.jsx
import React from "react";
import ano1 from "../assets/1ano.svg";
import ano2 from "../assets/2anos.svg";
import ano3 from "../assets/3anos.svg";

const cards = [
  {
    titulo: "1º Ano",
    imagem: ano1,
    texto:
      "Incentivo à marcha independente, exploração segura do ambiente e atividades que fortalecem a linguagem, autonomia e socialização.",
  },
  {
    titulo: "2º Ano",
    imagem: ano2,
    texto:
      "Apoio ao desenvolvimento da linguagem, autonomia nas rotinas e brincadeiras que estimulam criatividade e interação social.",
  },
  {
    titulo: "3º Ano",
    imagem: ano3,
    texto:
      "Estímulo ao pensamento simbólico, desenvolvimento emocional e social, com atividades que promovem linguagem, curiosidade e autonomia.",
  },
];

export default function ParaVida() {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-left mb-12">
        <h2 className="text-3xl sm:text-3xl font-bold text-gray-600 mb-4">
          Cres(Ser) contigo... para a vida
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 ">
          À medida que a criança cresce, surgem novas aprendizagens, desafios e descobertas que marcam o seu desenvolvimento. 
O Cres(Ser) acompanha-te ano a ano, oferecendo apoio prático, atividades e conteúdos científicos para estimular a linguagem, a autonomia, a curiosidade e a interação social, ajudando-te a construir bases sólidas para o futuro.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#D4E4FF] rounded-xl shadow-xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={card.imagem}
              alt={card.titulo}
              className="w-full h-auto rounded-md mb-4"
            />
            <div className="bg-[#467AD5] text-white font-semibold text-xl px-6 py-2 -mt-10 w-70 rounded-full mb-4">
              {card.titulo}
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">{card.texto}</p>
          </div>
        ))}
        
      </div>
      <div className="max-w-screen-xl mx-auto text-left mt-12">
        <h2 className="text-3xl  font-bold my-10 text-gray-600">
          Recursos que você vai adorar
        </h2>
        </div>
    </section>
  );
}
