// eslint-disable-next-line
import React from "react";
import trimestre1 from "../assets/1tri.jpg";
import trimestre2 from "../assets/2tri.jpg";
import trimestre3 from "../assets/3tri.jpg";
import { Link } from "react-router-dom";


const cards = [
  {
    titulo: "1.º trimestre",
    alt: "Primeiro trimestre",
    imagem: trimestre1,
    link: "/page/1tri",
    texto:
      "Mudanças iniciais do corpo, adaptação emocional e cuidados essenciais para um início saudável da gravidez.",
  },
  {
    titulo: "2.º trimestre",
    alt: "Segundo trimestre",
    imagem: trimestre2,
    link: "/page/2tri",
    texto:
      "Fase de maior bem-estar, fortalecimento do vínculo e acompanhamento do crescimento fetal.",
  },
  {
    titulo: "3.º trimestre",
    alt: "Terceiro trimestre",
    imagem: trimestre3,
    link: "/page/3tri",
    texto:
      "Preparação para o parto, cuidados com o corpo e organização para a chegada do bebé.",
  },
];

export default function TrimestresSection() {
  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4 text-left mb-12">
        <h2 className="text-3xl sm:text-3xl font-bold text-zinc-800 mb-4">
          Cres(SER) contigo... na barriga
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          A gravidez transforma o corpo, as emoções e a vida da família. O Cres(SER) está ao lado de grávidas, pais e cuidadores, oferecendo orientação clara e validada para tornar esta etapa mais tranquila e confiante.
        </p>
      </div>

      <ul className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <li key={index}>
            <Link to={card.link}>
              <div className="bg-[#DAE9E3] rounded-xl shadow-xl p-6 flex flex-col items-center text-center sm:h-125">
                <img src={card.imagem} alt={card.alt} className="w-full h-auto rounded-md mb-4" />
                <div className="bg-[#3C6D59] text-white font-semibold text-xl px-6 py-2 -mt-10 w-70 rounded-full mb-4">
                  {card.titulo}
                </div>
                <p className="text-gray-800 leading-relaxed text-sm">{card.texto}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>

  );
}
