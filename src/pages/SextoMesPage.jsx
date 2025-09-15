// src/pages/SextoMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import seisMeses from "../assets/6meses.svg"; // ilustração “Tenho 6 meses!”

const seisMesesData = [
  {
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Acompanhamento e vacinas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Vigilância do crescimento: peso, comprimento e perímetro cefálico.</li>
            <li>Revisão do calendário vacinal e de suplementação (ex.: vitamina D).</li>
            <li>Segurança: proteger tomadas/cantos, atenção a peças pequenas (risco de engasgamento).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Pouco contacto visual ou pouca resposta a sons/vozes.</li>
            <li>Não rola para ambos os lados ou controlo cervical muito frágil.</li>
            <li>Recusa alimentar persistente, vómitos biliosos, sangue nas fezes ou sinais de desidratação.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "2. Parentalidade e apoio",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Rotinas e brincadeiras</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Janelas de vigília ~<strong>2–2h30</strong>, com muita curiosidade e energia.</li>
            <li>Tempo diário para o autocuidado dos cuidadores ajuda a reduzir o stress.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Comunicação afetiva</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Descrever as rotinas (“agora vamos tomar banho”, “vamos calçar a meia”).</li>
            <li>Brincar de imitar sons e expressões; nomear pessoas e objetos do quotidiano.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "3. Desenvolvimento do bebé",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Marcos típicos (≈ 6 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Rola</strong> para ambos os lados e tenta apoiar-se nas mãos.</li>
            <li><strong>Senta com apoio</strong> (por curtos períodos); melhor controlo de tronco.</li>
            <li>Transfere objetos entre as mãos; <strong>preensão em “rastelo”</strong> (apanhar com toda a mão).</li>
            <li>Balbucia sons (“ba”, “da”, “ga”) e reage ao próprio nome.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Tummy time</strong> diário; incentivar rolar e alcançar brinquedos.</li>
            <li>Brinquedos de diferentes texturas, fáceis de agarrar e seguros para a boca.</li>
            <li>Brincadeiras de esconde-aparece, espelho seguro e leitura de livros cartonados.</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          Cada bebé tem o seu ritmo; a vigilância regular orienta estímulos e sinaliza necessidades adicionais.
        </p>
      </div>
    ),
  },

  {
    title: "4. Alimentação",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Introdução alimentar</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Por volta dos <strong>6 meses</strong> inicia-se a introdução de sólidos, mantendo o leite como base.</li>
            <li>Priorizar alimentos <strong>ricos em ferro</strong> (ex.: carnes bem cozidas e desfiadas, leguminosas, cereais fortificados).</li>
            <li>Apresentar <strong>texturas adequadas</strong> à maturidade (amassado, desfiado, tiras macias).</li>
            <li>Oferecer água em <strong>copo</strong> nas refeições; evitar açúcar e sal.</li>
            <li>Introduzir potenciais <strong>alergénios</strong> de forma gradual e individualizada.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de prontidão</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Bom controlo cervical e mantém-se <strong>sentado com apoio</strong>.</li>
            <li>Interesse por comida e tentativa de levar alimentos à boca.</li>
            <li>Desaparecimento do <strong>reflexo de protrusão</strong> da língua.</li>
          </ul>
          <p className="text-xs text-gray-500 mt-1">
            Seguir as indicações da equipa de saúde para plano e progressão.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: "5. Sono",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Padrões habituais</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Total diário ≈ <strong>12–15 h</strong> (noite + <strong>2–3 sestas</strong>).</li>
            <li>Rotina consistente: luz e interação de dia; ambiente escuro e calmo à noite.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança do sono</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>De costas numa superfície firme; berço sem objetos soltos.</li>
            <li>Quarto partilhado (sem partilha de cama) continua recomendado.</li>
            <li>Roupa adequada à estação; evitar sobreaquecimento.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "6. Vínculo afetivo e cultura familiar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Laços e rotinas afetivas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Brincadeiras de “conversa” (imitar sons), canções e leitura diária.</li>
            <li>Rituais antes de dormir (banho, história, canção) dão previsibilidade e segurança.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function SextoMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Tenho 6 meses! Novos sabores, novas conquistas
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">180–210 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Começam os sólidos, o sentar com apoio e muitas brincadeiras de imitar sons.
        Sugestões simples para estimular, alimentar e cuidar com segurança.
      </p>

      {/* Imagem */}
      <img
        src={seisMeses}
        alt="Tenho 6 meses (180–210 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {seisMesesData.map((item, index) => (
          <div
            key={index}
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

      {/* Alerta e contacto SNS24 */}
      <div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <FiAlertTriangle className="text-red-600 mr-2" size={24} />
          <h2 className="text-lg font-bold text-red-700">Quando procurar ajuda</h2>
        </div>
        <p className="text-sm text-red-800 mb-4">
          Procure avaliação se houver perda de contacto visual, pouca resposta a sons,
          dificuldade marcada no controlo cervical, recusa alimentar persistente,
          febre ou sinais de desidratação.
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
        prev={{ label: "Tenho 5 meses", to: "/5mes" }}
        next={{ label: "Tenho 7 meses", to: "/7mes" }}
      />
    </div>
  );
}
