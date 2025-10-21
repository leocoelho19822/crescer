// eslint-disable-next-line
import React from "react";
import ano1 from "../assets/1ano.jpg";
import ano1_2 from "../assets/1_2anos.jpg";
import ano2 from "../assets/2anos.jpg";


import { Link } from "react-router-dom";

const cards = [
  {
    titulo: "Com 1 ano",
    alt: "Com um ano",
    imagem: ano1,
    link: "/page/1ano",
    texto:
      "Incentivo à marcha independente, exploração segura do ambiente e atividades que fortalecem a linguagem, autonomia e socialização.",
  },
  {
    titulo: "Com 18 meses",
    alt: "Com dezoito meses",
    imagem: ano1_2,
    link: "/page/18mes",
    texto:
      "Apoio ao desenvolvimento da linguagem, autonomia nas rotinas e brincadeiras que estimulam criatividade e interação social.",
  },
  {
    titulo: "Com 2 anos",
    alt: "Com dois anos",
    imagem: ano2,
    link: "/page/2ano",
    texto:
      "Estímulo ao pensamento simbólico, desenvolvimento emocional e social, com atividades que promovem linguagem, curiosidade e autonomia.",
  },
];

export default function ParaVida() {
  return (
    <section className=" pt-16 ">
      <div className="max-w-7xl px-4 mx-auto text-left mb-12">
        <h2 className="text-3xl sm:text-3xl font-bold text-zinc-800 mb-4">
          Cres(Ser) contigo... na vida
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 ">
          À medida que a criança cresce, surgem novas aprendizagens, desafios e descobertas que marcam o seu desenvolvimento. 
O Cres(Ser) acompanha-te ano a ano, oferecendo apoio prático, atividades e conteúdos científicos para estimular a linguagem, a autonomia, a curiosidade e a interação social, ajudando-te a construir bases sólidas para o futuro.
        </p>
      </div>


            <div className="max-w-screen-xl mx-auto px-4">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                  <li key={index}>
                    <Link to={card.link}>
                      <div className="bg-azul-10 rounded-xl shadow-xl p-6 flex flex-col items-center text-center">
                        <img
                          src={card.imagem}
                          alt={card.alt}
                          className="w-full h-auto rounded-md mb-4"
                        />
                        <div className="bg-azul-60 text-white font-semibold text-xl px-6 py-2 -mt-10 w-70 rounded-full mb-4">
                          {card.titulo}
                        </div>
                        <p className="text-gray-800 leading-relaxed text-sm">
                          {card.texto}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>



      
      
    </section>
  );
}
