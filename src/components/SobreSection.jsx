// eslint-disable-next-line
import React from "react";
import image1 from "../assets/familia.jpg";
import image2 from "../assets/cerebro.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function SobreSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-200">
      {/* Primeira Linha */}
      <div className="max-w-7xl px-4 mx-auto py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-lg md:text-2xl font-bold mb-3 text-gray-800">
            Conhece o Projeto Cres(SER)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Cres(SER) é um projeto desenvolvido pelo Centro de Saúde de Águeda,
            em articulação com parceiros locais como câmara municipal, creches,
            escolas, empresas e universidade de Aveiro.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            O objetivo é promover a saúde mental da criança desde a gravidez até aos 3 anos,
            atuando nos contextos de saúde, educação e ação social.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
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
          <img
            src={image1}
            alt="Família feliz"
            className="w-full max-h-72 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Segunda Linha */}
      <div className="max-w-7xl px-4 mx-auto pb-10 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <img
            src={image2}
            alt="Cérebro montado com quebra-cabeça"
            className="w-full max-h-72 object-cover rounded-xl shadow-md"
          />
        </div>
        <div>
          <h2 className="text-lg md:text-2xl font-bold mb-3 text-gray-800">
            Baseado em conhecimento, <br /> sustentado pela ciência
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            No Cres(SER), trabalhamos com base nas evidências mais recentes das neurociências e da psicologia do desenvolvimento, valorizando as primeiras experiências da criança.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Os conteúdos são preparados por profissionais especializados, garantindo informação qualificada e relevante para famílias e educadores.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold mb-2">
            Atuamos com três grupos-chave:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
            <li>Profissionais de saúde, reforçando competências no apoio às famílias;</li>
            <li>Profissionais de educação, promovendo práticas de qualidade nas creches;</li>
            <li>Pais e cuidadores, oferecendo orientação e apoio à parentalidade.</li>
          </ul>
          
        </div>
        
      </div>
      <div className="text-center">
            <Button
              onClick={() => navigate("/page/sobre")}
              className="w-40 py-2 text-sm"
            >
              Saiba mais
            </Button>
          </div>
    </section>
  );
}
