// eslint-disable-next-line
import React, {useRef} from 'react';

import foto0 from '../assets/recemnascido.jpg';
import foto1 from '../assets/1mes.jpg';
import foto2 from '../assets/2meses.jpg';
import foto3 from '../assets/3meses.jpg';
import foto4 from '../assets/4meses.jpg';
import foto5 from '../assets/5meses.jpg';
import foto6 from '../assets/6meses.jpg';
import foto7 from '../assets/7meses.jpg';
import foto8 from '../assets/8meses.jpg';
import foto9 from '../assets/9meses.jpg';
import foto10 from '../assets/10meses.jpg';
import foto11 from '../assets/11meses.jpg';

import { FaArrowRightLong, FaArrowLeftLong  } from "react-icons/fa6";

import { Link, useLocation } from "react-router-dom";



const meses = [
  {
    titulo: 'Recém-Nascido',
    link: '/page/recem-nascido',
    descricao:
      'Apoio aos primeiros dias de vida, com orientações sobre vínculo afetivo, amamentação e cuidados básicos para promover um início saudável.',
    imagem: foto0,
  },
  {
    titulo: 'Tenho 1 mês',
    link: '/page/1mes',
    descricao:
      'Foco no fortalecimento do vínculo, estímulo sensorial suave e acompanhamento das primeiras interações e rotinas do bebé.',
    imagem: foto1,
  },
  {
    titulo: 'Tenho 2 meses',
    link: '/page/2mes',
    descricao:
      'Incentiva os primeiros sorrisos e resposta social, com atividades que estimulam a visão, audição e vínculo emocional.',
    imagem: foto2,
  },
  {
    titulo: 'Tenho 3 meses',
    link: '/page/3mes',
    descricao:
      'Estimula o controlo da cabeça, exploração visual e auditiva, reforçando interações afetivas e brincadeiras simples.',
    imagem: foto3,
  },
  {
    titulo: 'Tenho 4 meses',
    link: '/page/4mes',
    descricao:
      'Apoio ao desenvolvimento motor, exploração das mãos e objetos, com estímulos para fortalecer a comunicação e o vínculo afetivo.',
    imagem: foto4,
  },
  {
    titulo: 'Tenho 5 meses',
    link: '/page/5mes',
    descricao:
      'Incentiva o rolar, descoberta do próprio corpo e interação ativa, promovendo curiosidade e desenvolvimento motor.',
    imagem: foto5,
  },
  {
    titulo: 'Tenho 6 meses',
    link: '/page/6mes',
    descricao:
      'Introdução alimentar, reforço do sentar com apoio e estímulos para promover coordenação e interação social.',
    imagem: foto6,
  },
  {
    titulo: 'Tenho 7 meses',
    link: '/page/7mes',
    descricao:
      'Incentivo ao gatinhar, exploração de objetos com as mãos e estímulos para fortalecer a comunicação e a curiosidade.',
    imagem: foto7,
  },
  {
    titulo: 'Tenho 8 meses',
    link: '/page/8mes',
    descricao:
      'Apoio ao aperfeiçoamento do gatinhar, coordenação motora fina e brincadeiras que estimulam a compreensão e interação social.',
    imagem:  foto8,
  },
  {
    titulo: 'Tenho 9 meses',
    link: '/page/9mes',
    descricao:
      'Incentiva a posição de pé com apoio, exploração ativa do ambiente e jogos que reforçam a comunicação e a curiosidade.',
    imagem: foto9,
  },
  {
    titulo: 'Tenho 10 meses',
    link: '/page/10mes',
    descricao:
      'Apoio aos primeiros passos com apoio, exploração de objetos, e atividades que estimulam a linguagem e a autonomia.',
    imagem: foto10,
  },
  {
    titulo: 'Tenho 11 meses',
    link: '/page/11mes',
    descricao:
      'Estímulo aos passos independentes, brincadeiras de imitação e atividades que reforçam a compreensão e a comunicação.',
    imagem: foto11,
  },
];

export default function MesamesSection() {
  const scrollRef = useRef(null);
  const location = useLocation();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="relative ">
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        {location.pathname === "/" && (
          <>
            <h2 className="text-3xl font-bold mb-8 text-zinc-800">
              Cres(Ser) contigo... no colo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Os primeiros meses de vida são repletos de descobertas, emoções e aprendizagens tanto para os pais como para o bebé. <br />
              O Cres(Ser) acompanha-te mês a mês, oferecendo apoio, dicas práticas e informações baseadas em evidências para fortalecer o vínculo, estimular o desenvolvimento e tornar este início ainda mais especial.
            </p>
          </>
        )}

        {/* Botões de scroll */}
        <button
          onClick={scrollLeft}
          className="flex items-center justify-center absolute left-2 top-[55%] bottom-2 z-10 bg-white/80 hover:bg-white text-gray-700 rounded-full w-10 h-10 shadow-md"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={scrollRight}
          className="flex items-center justify-center absolute right-2 top-[55%] bottom-2 z-10 bg-white/80 hover:bg-white text-gray-700 rounded-full w-10 h-10 shadow-md"
        >
          <FaArrowRightLong />
        </button>


        {/* Scroll horizontal */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scroll-bar pb-4 scroll-smooth"
        >
          <div className="flex space-x-6 px-2 md:px-8 min-w-max">
            {meses.map((card, index) => (
              <Link to={card.link} key={index}>
              <div
                key={index}
                className="bg-[#FFE2A9] rounded-xl shadow-lg p-4 flex flex-col items-center text-center w-72 h-100 flex-shrink-0"
              >
                <img
                  src={card.imagem}
                  alt={card.titulo}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <div className="bg-[#FFC757] text-gray-800 font-semibold text-xl px-4 py-1 rounded-lg w-52 h-8 flex items-center justify-center -mt-8 mb-3 text-sm">
                  {card.titulo}
                </div>
                <p className="text-gray-700 leading-snug text-sm px-2">
                  {card.descricao}
                </p>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
