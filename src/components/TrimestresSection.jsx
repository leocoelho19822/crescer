// eslint-disable-next-line
import React from "react";
import trimestre1 from "../assets/1tri.jpg";
import trimestre2 from "../assets/2tri.jpg";
import trimestre3 from "../assets/3tri.jpg";
import { Link } from "react-router-dom";


const cards = [
  {
    titulo: "1º Trimestre",
    imagem: trimestre1,
    link: "/page/1tri",
    texto:
      "Foco nos cuidados maternos, adaptação emocional, nutrição adequada e desenvolvimento inicial do bebé.",
  },
  {
    titulo: "2º Trimestre",
    imagem: trimestre2,
    link: "/page/2tri",
    texto:
      "Apoio ao bem-estar materno, vínculo com o bebê, preparação para o parto e acompanhamento do crescimento fetal.",
  },
  {
    titulo: "3º Trimestre",
    imagem: trimestre3,
    link: "/page/3tri",
    texto:
      "Preparação para o parto, cuidados com o corpo, fortalecimento do vínculo e planeamento para a chegada do bebé.",
  },
];

export default function TrimestresSection() {
  return (
    <section className=" py-16 ">
      <div className="max-w-7xl mx-auto px-4  text-left mb-12">
        <h2 className="text-3xl sm:text-3xl font-bold text-zinc-800 mb-4">
          Cres(Ser) contigo... na barriga
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 ">
          Cada trimestre da gravidez traz desafios, descobertas e momentos únicos para a mãe, o bebê e a família. Desde os primeiros cuidados e adaptações até à preparação para o parto, o Cres(Ser) acompanha-te com informações, dicas e apoio para que vivas esta jornada com confiança e segurança.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Link to={card.link} key={index}>
            <div className="bg-[#DAE9E3] rounded-xl shadow-xl p-6 flex flex-col items-center text-center">
              <img src={card.imagem} alt={card.titulo} className="w-full h-auto rounded-md mb-4" />
              <div className="bg-[#618F7D] text-white font-semibold text-xl px-6 py-2 -mt-10 w-70 rounded-full mb-4">
                {card.titulo}
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">{card.texto}</p>
            </div>
          </Link>

        ))}
        
      </div>
      
    </section>
  );
}
