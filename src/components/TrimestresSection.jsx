// src/components/TrimestresSection.jsx
import React from "react";
import trimestre1 from "../assets/1tri.svg";
import trimestre2 from "../assets/2tri.svg";
import trimestre3 from "../assets/3tri.svg";

const cards = [
  {
    titulo: "1º Trimestre",
    imagem: trimestre1,
    texto:
      "Foco nos cuidados maternos, adaptação emocional, nutrição adequada e desenvolvimento inicial do bebé.",
  },
  {
    titulo: "2º Trimestre",
    imagem: trimestre2,
    texto:
      "Apoio ao bem-estar materno, vínculo com o bebê, preparação para o parto e acompanhamento do crescimento fetal.",
  },
  {
    titulo: "3º Trimestre",
    imagem: trimestre3,
    texto:
      "Preparação para o parto, cuidados com o corpo, fortalecimento do vínculo e planeamento para a chegada do bebé.",
  },
];

export default function TrimestresSection() {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-left mb-12">
        <h2 className="text-3xl sm:text-3xl font-bold text-gray-600 mb-4">
          Cres(Ser) contigo... na barriga
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 ">
          Cada trimestre da gravidez traz desafios, descobertas e momentos únicos para a mãe, o bebê e a família. Desde os primeiros cuidados e adaptações até à preparação para o parto, o Cres(Ser) acompanha-te com informações, dicas e apoio para que vivas esta jornada com confiança e segurança.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#DAE9E3] rounded-xl shadow-xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={card.imagem}
              alt={card.titulo}
              className="w-full h-auto rounded-md mb-4"
            />
            <div className="bg-[#618F7D] text-white font-semibold text-xl px-6 py-2 -mt-10 w-70 rounded-full mb-4">
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
