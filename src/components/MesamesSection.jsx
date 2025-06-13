import React from 'react';

import foto0 from '../assets/0rn.svg';
import foto1 from '../assets/1mes.svg';
import foto2 from '../assets/2meses.svg';
import foto3 from '../assets/3meses.svg';
import foto4 from '../assets/4meses.svg';
import foto5 from '../assets/5meses.svg';
import foto6 from '../assets/6meses.svg';
import foto7 from '../assets/7meses.svg';
import foto8 from '../assets/8meses.svg';
import foto9 from '../assets/9meses.svg';
import foto10 from '../assets/10meses.svg';
import foto11 from '../assets/11meses.svg';

const meses = [
  {
    titulo: 'Recém-Nascido',
    descricao:
      'Apoio aos primeiros dias de vida, com orientações sobre vínculo afetivo, amamentação e cuidados básicos para promover um início saudável.',
    imagem: foto0,
  },
  {
    titulo: '1º Mês',
    descricao:
      'Foco no fortalecimento do vínculo, estímulo sensorial suave e acompanhamento das primeiras interações e rotinas do bebé.',
    imagem: foto1,
  },
  {
    titulo: '2º Mês',
    descricao:
      'Incentiva os primeiros sorrisos e resposta social, com atividades que estimulam a visão, audição e vínculo emocional.',
    imagem: foto2,
  },
  {
    titulo: '3º Mês',
    descricao:
      'Estimula o controlo da cabeça, exploração visual e auditiva, reforçando interações afetivas e brincadeiras simples.',
    imagem: foto3,
  },
  {
    titulo: '4º Mês',
    descricao:
      'Apoio ao desenvolvimento motor, exploração das mãos e objetos, com estímulos para fortalecer a comunicação e o vínculo afetivo.',
    imagem: foto4,
  },
  {
    titulo: '5º Mês',
    descricao:
      'Incentiva o rolar, descoberta do próprio corpo e interação ativa, promovendo curiosidade e desenvolvimento motor.',
    imagem: foto5,
  },
  {
    titulo: '6º Mês',
    descricao:
      'Introdução alimentar, reforço do sentar com apoio e estímulos para promover coordenação e interação social.',
    imagem: foto6,
  },
  {
    titulo: '7º Mês',
    descricao:
      'Incentivo ao gatinhar, exploração de objetos com as mãos e estímulos para fortalecer a comunicação e a curiosidade.',
    imagem: foto7,
  },
  {
    titulo: '8º Mês',
    descricao:
      'Apoio ao aperfeiçoamento do gatinhar, coordenação motora fina e brincadeiras que estimulam a compreensão e interação social.',
    imagem:  foto8,
  },
  {
    titulo: '9º Mês',
    descricao:
      'Incentiva a posição de pé com apoio, exploração ativa do ambiente e jogos que reforçam a comunicação e a curiosidade.',
    imagem: foto9,
  },
  {
    titulo: '10º Mês',
    descricao:
      'Apoio aos primeiros passos com apoio, exploração de objetos, e atividades que estimulam a linguagem e a autonomia.',
    imagem: foto10,
  },
  {
    titulo: '11º Mês',
    descricao:
      'Estímulo aos passos independentes, brincadeiras de imitação e atividades que reforçam a compreensão e a comunicação.',
    imagem: foto11,
  },
];

export default function MesamesSection() {
  return (
    <section className=" sm:-mt-12 -mt-6">
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        <h2 className="text-3xl  font-bold mb-8 text-gray-600">
          Cres(Ser) contigo... no colo
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 ">
          Os primeiros meses de vida são repletos de descobertas, emoções e aprendizagens tanto para os pais como para o bebé. <br />
O Cres(Ser) acompanha-te mês a mês, oferecendo apoio, dicas práticas e informações baseadas em evidências para fortalecer o vínculo, estimular o desenvolvimento e tornar este início ainda mais especial.
        </p>

        <div className="overflow-x-auto hide-scroll-bar pb-4">
          <div className="flex space-x-6 px-2 md:px-8 min-w-max">
            {meses.map((card, index) => (
              <div
                key={index}
                className="bg-[#FFE2A9] rounded-xl shadow-lg p-4 flex flex-col items-center text-center w-82 flex-shrink-0"
              >
                <img
                  src={card.imagem}
                  alt={card.titulo}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <div className="bg-[#FFC757] text-gray-800 font-semibold text-xl px-4 py-1 rounded-lg w-52 h-8 flex items-center justify-center -mt-8 mb-3 text-sm">
                {card.titulo}
                </div>

                <p className="text-gray-700 leading-snug text-sm px-2">{card.descricao}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-3xl  font-bold my-10 text-gray-600">
          Recursos pensados para si
        </h2>
      </div>
    </section>
  );
}
