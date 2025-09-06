// src/pages/PrimeiroMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import { FiAlertTriangle, FiPhoneCall} from "react-icons/fi";

import MonthNav from "../components/MonthNav";
import umMes from "../assets/1mes.svg"; // ilustração “Tenho 1 mês!”

const umMesCompletoData = [
  {
    id: 1,
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Consultas, vacinas e rastreios</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Próxima consulta</strong>: fim do 1.º mês (≈ 2 meses de idade).</li>
            <li><strong>Avaliação</strong>: peso, comprimento, perímetro cefálico, tónus e interação social.</li>
            <li><strong>PNV aos ~2 meses</strong>: confirmar com a equipa de saúde; rotavírus pode ser recomendado.</li>
            <li>Revisão de <strong>suplementação</strong> (ex.: vitamina D) conforme prescrição.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Higiene e cuidados</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Banhos curtos com água morna e produtos suaves; hidratar se necessário.</li>
            <li>Ambiente sem fumo; passeios ao ar livre evitando horas de maior calor/frio.</li>
            <li>Segurança: nunca deixar o bebé sozinho em superfícies altas; SRI adequado no carro.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Febre ≥ 38 °C, letargia marcada ou irritabilidade inconsolável.</li>
            <li>Dificuldade respiratória, coloração azulada, gemido.</li>
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
          <p className="font-bold">Adaptação após completar 1 mês</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Rotinas ficam <strong>um pouco mais previsíveis</strong> (alimentação/sono), ainda com variação.</li>
            <li><strong>Rede de apoio</strong> continua essencial: divisão de tarefas e pausas para descanso.</li>
            <li>Se houver sinais de <strong>depressão pós-parto</strong> em qualquer cuidador, procurar ajuda.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Gestão de cólicas e choro</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Pico de <strong>cólicas</strong> por volta de 6–8 semanas; tende a melhorar depois.</li>
            <li>Técnicas: embalar, <em>swaddle</em> leve (quando apropriado), ruído branco, manter posição vertical após as tomas.</li>
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
          <p className="font-bold">Marcos típicos (≈ 6–8 semanas)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Sorriso social</strong> em resposta à interação.</li>
            <li><strong>Maior controlo cervical</strong> em <em>tummy time</em>; levanta a cabeça por mais tempo.</li>
            <li>Segue objetos/rostos de um lado para o outro por curtos arcos.</li>
            <li>Emite <strong>arrulhos</strong> (sons vocais simples), além do choro.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong><em>Tummy time</em> diário</strong> várias vezes ao dia, sempre acordado e vigiado.</li>
            <li>Conversar, cantar, <strong>expressões faciais</strong> e contacto olho-no-olho.</li>
            <li>Brinquedos de <strong>alto contraste</strong> e chocalhos leves a 20–30 cm.</li>
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
            <li>Muitos bebés mamam <strong>8–10 vezes/24h</strong>; alguns começam a espaçar tomas noturnas.</li>
            <li>Observar <strong>sinais de fome/saciedade</strong> e ganho ponderal adequado.</li>
            <li>Arrotar após as tomas; manter em posição vertical alguns minutos.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Apoio especializado</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Dor, fissuras, dificuldade de pega ou <strong>ganho de peso insuficiente</strong> justificam avaliação profissional.</li>
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
          <p className="font-bold">Padrões entre 30–60 dias</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Total diário ainda elevado (≈ <strong>14–16 h</strong>); alguns bebés com <strong>blocos noturnos maiores</strong>.</li>
            <li>Consolidar <strong>pistas de rotina</strong>: luz diurna e interação de dia; pouca luz e estímulos à noite.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança do sono</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Sempre de <strong>costas</strong>, em <strong>superfície firme</strong>, sem objetos soltos no berço.</li>
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
          <p className="font-bold">Ligação crescente</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Sorriso social</strong>, arrulhos e contacto ocular frequentes.</li>
            <li>Manter <strong>pele-a-pele</strong>, colo e responsividade ao choro.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Rituais e registos</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Histórias curtas/canções e <strong>registo de memórias</strong> (fotografias, diário).</li>
            <li>Exposição gradual a <strong>música</strong> e elementos culturais da família (respeitando o tempo do bebé).</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function PrimeiroMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">Tenho 1 mês! Descobrir o mundo ao teu lado</h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">30–60 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Rotinas mais previsíveis, sorriso social, maior controlo cervical e preparação para as vacinas por volta dos 2 meses.
      </p>

      {/* Imagem */}
      <img
        src={umMes}
        alt="Tenho 1 mês (30–60 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Accordion */}
      <div className="space-y-4">
        {umMesCompletoData.map((item, index) => (
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
              <svg
                className={`transform transition-transform duration-300 text-gray-400 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                width="20" height="20" viewBox="0 0 24 24" fill="none"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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

      {/* Alerta e contacto (consistência com RN) */}
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
        prev={{ label: "Recém-nascido", to: "/recemnascido" }}
        next={{ label: "Tenho 2 meses", to: "/2mes" }}
      />
    </div>
  );
}
