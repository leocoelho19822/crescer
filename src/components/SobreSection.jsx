// src/components/SobreSection.jsx
import React from "react";
import image1 from "../assets/familia.svg";
import image2 from "../assets/cerebro.svg";
import Button from "./Button";

export default function SobreSection() {
  return (
    <section className="bg-gray-200 sm:-mt-12 -mt-6">
      {/* Divisor em onda */}
      

      {/* Primeira Linha */}
      <div className="max-w-screen-xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-gray-800">
            Conhece o Projeto Cres(Ser)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            O Cres(SER) é um projeto desenvolvido pelo Centro de Saúde de Águeda,
            em articulação com parceiros locais como câmara municipal, creches,
            escolas, empresas e universidades.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            O objetivo é promover a saúde mental desde a gravidez até aos 3 anos,
            atuando nos contextos de saúde, educação e ação social.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sabemos que os primeiros 1000 dias de vida são decisivos para o
            desenvolvimento emocional, cognitivo e social das crianças.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Por isso, o Cres(SER) oferece apoio especializado, fortalecendo os laços
            familiares e ajudando os cuidadores a atravessarem esta fase com
            confiança, informação e suporte.
          </p>
        </div>
        <div>
          <img src={image1} alt="Família feliz" className="w-full rounded-2xl shadow-xl" />
        </div>
      </div>

      {/* Segunda Linha */}
      <div className="max-w-screen-xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={image2} alt="Cérebro montado com quebra-cabeça" className="w-full rounded-lg shadow-md" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Baseado em Conhecimento, <br /> Sustentado pela Ciência
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No Cres(SER), trabalhamos com base nas evidências mais recentes da
            psicologia do desenvolvimento e das neurociências, que mostram a
            importância das primeiras experiências da criança.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cada conteúdo e cada ação são cuidadosamente preparados por profissionais
            especializados para garantir apoio qualificado, atualizado e relevante.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            O projeto atua em três grupos-chave:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-14">
            <li>Profissionais de saúde, para reforçar competências no apoio às famílias;</li>
            <li>
              Profissionais de educação, para promover práticas de qualidade nas creches;
            </li>
            <li>
              Pais e cuidadores, oferecendo suporte emocional, partilha de
              experiências e preparação para os desafios da gravidez, do nascimento e
              da parentalidade.
            </li>
          </ul>
          <Button className="w-50">Saiba mais</Button>
        </div>
      </div>
    </section>
  );
}
