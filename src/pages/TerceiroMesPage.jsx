// src/pages/TerceiroMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import tresMeses from "../assets/3meses.svg"; // ilustração “Tenho 3 meses!”

const tresMesesData = [
  {
    id: 1,
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Consultas e seguimento</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Avaliar crescimento (peso, comprimento e PC), tónus e marcos.</li>
            <li>Rever <strong>Plano Nacional de Vacinação</strong> e calendário próximo.</li>
            <li>Confirmar <strong>suplementação</strong> (ex.: vitamina D) conforme prescrição.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Higiene e segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Banhos curtos; hidratar pele se necessário; ambiente livre de fumo.</li>
            <li><strong>Transporte</strong>: sempre no SRI adequado, corretamente instalado.</li>
            <li>Superfícies estáveis; nunca deixar o bebé sozinho em locais altos.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Febre ≥ 38 °C, sonolência extrema ou irritabilidade inconsolável.</li>
            <li>Dificuldade respiratória, cianose, gemido respiratório.</li>
            <li>Recusa alimentar persistente, vómitos biliosos, sangue nas fezes.</li>
            <li>Desidratação (poucas fraldas molhadas, boca seca).</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 2,
    title: "2. Parentalidade e apoio",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Rotinas e previsibilidade</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Janelas de vigília um pouco maiores (<strong>~1h15–1h45</strong>).</li>
            <li>Manter <strong>rede de apoio</strong> e pausas para autocuidado dos cuidadores.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Brincar e interação</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Conversar, cantar, responder aos <strong>arrulhos</strong> e sorrisos.</li>
            <li>Momentos calmos e previsíveis ajudam o bebé a regular-se.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    title: "3. Desenvolvimento do bebé",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Marcos típicos (≈ 3 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Controlo cervical</strong> melhor: sustém a cabeça por mais tempo.</li>
            <li>Segue objetos por arcos amplos; olha para as mãos (<em>hand regard</em>).</li>
            <li><strong>Sorrisos sociais</strong> frequentes; responde a vozes e expressões.</li>
            <li>Arrulhos e “conversas” com pausas (início de <em>turn-taking</em>).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong><em>Tummy time</em> diário</strong>, várias vezes por dia (sempre acordado e vigiado).</li>
            <li>Brincadeiras “cara-a-cara”, espelho, livros/imagens simples de alto contraste.</li>
            <li>Brinquedos leves/sonoros a 20–30 cm; encorajar alcance e preensão inicial.</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          Cada bebé tem o seu ritmo; a vigilância regular orienta estímulos e sinaliza necessidades adicionais.
        </p>
      </div>
    ),
  },

  {
    id: 4,
    title: "4. Alimentação",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Aleitamento materno / fórmula</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Média de <strong>6–8 tomas/24h</strong>; alguns bebés fazem blocos noturnos mais longos.</li>
            <li>Seguir <strong>sinais de fome/saciedade</strong>; observar ganho ponderal.</li>
            <li>Arrotar após as tomas; manter em posição vertical alguns minutos.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Apoio se necessário</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Dificuldade de pega, dor/fissuras ou <strong>ganho de peso insuficiente</strong> → pedir avaliação.</li>
            <li>Fórmula: <strong>higiene rigorosa</strong>, diluição correta e descarte de sobras.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 5,
    title: "5. Sono",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Padrões esperados (90–120 dias)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Total diário ≈ <strong>14–15 h</strong>; mais <strong>regularidade noturna</strong> em alguns bebés.</li>
            <li>Manter rotina: luz e interação de dia; pouca luz/estímulos à noite.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança do sono</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>De costas</strong> numa <strong>superfície firme</strong>, sem objetos soltos no berço.</li>
            <li><strong>Quarto partilhado</strong> (sem partilha de cama) continua recomendado.</li>
            <li>Evitar sobreaquecimento; roupa adequada à estação.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 6,
    title: "6. Vínculo afetivo e cultura familiar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Relação e responsividade</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Responder ao choro e aos sinais com <strong>rapidez e carinho</strong> cria segurança.</li>
            <li>Mais trocas de sorrisos, arrulhos e atenção ao rosto do cuidador.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Rituais e memórias</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Histórias curtas, canções e passeios calmos; manter <strong>registos</strong> (fotografias, diário).</li>
            <li>Introduzir gradualmente música e elementos culturais da família.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function TerceiroMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Tenho 3 meses! Força e curiosidade em ação
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">90–120 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Mais controlo cervical, sorrisos e “conversas” com arrulhos. Sugestões de sono seguro,
        alimentação e estímulos que acompanham esta fase de descoberta.
      </p>

      {/* Imagem */}
      <img
        src={tresMeses}
        alt="Tenho 3 meses (90–120 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {tresMesesData.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center text-left p-4 md:p-5 cursor-pointer"
            >
              <p className="text-sm md:text-base font-semibold text-gray-700">
                {item.title}
              </p>
              <FiChevronDown
                className={`transform transition-transform duration-300 text-gray-400 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openIndex === index ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="px-4 pb-4 md:px-5 md:pb-5 text-sm text-gray-600 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alerta e contacto */}
      <div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <FiAlertTriangle className="text-red-600 mr-2" size={24} />
          <h2 className="text-lg font-bold text-red-700">Quando procurar ajuda</h2>
        </div>
        <p className="text-sm text-red-800 mb-4">
          Febre ≥ 38 °C, dificuldade respiratória, recusa alimentar persistente,
          vómitos biliosos, sangue nas fezes ou sinais de desidratação justificam avaliação imediata.
        </p>
        <a
          href="tel:808242424"
          className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
          aria-label="Ligar SNS 24"
        >
          <FiPhoneCall size={18} />
          Contactar SNS 24 (808 24 24 24)
        </a>
      </div>

      {/* Navegação entre meses */}
      <MonthNav
        prev={{ label: "Tenho 2 meses", to: "/2mes" }}
        next={{ label: "Tenho 4 meses", to: "/4mes" }}
      />
    </div>
  );
}
