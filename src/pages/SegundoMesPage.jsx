// src/pages/SegundoMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import doisMeses from "../assets/2meses.svg"; // ilustração “Tenho 2 meses!”

const doisMesesData = [
  {
    id: 1,
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Consulta e vacinas dos 2 meses</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Consulta dos 2 meses</strong>: crescimento (peso, comprimento, PC), tónus, contacto ocular e interação.</li>
            <li><strong>PNV aos 2 meses</strong>: vacinas combinadas e antipneumocócica; <em>rotavírus</em> pode ser recomendada segundo avaliação.</li>
            <li>Rever <strong>vitamina D</strong> e outras suplementações conforme prescrição.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Higiene e segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Banhos curtos; hidratar pele se necessário; ambiente livre de fumo.</li>
            <li><strong>Transporte</strong>: sempre no SRI adequado, corretamente instalado.</li>
            <li><strong>Casa segura</strong>: superfícies estáveis, nunca deixar o bebé sozinho em locais altos.</li>
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
          <p className="font-bold">Rotinas mais estáveis</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Padrões de alimentação e sono começam a ficar <strong>mais previsíveis</strong>, com variação individual.</li>
            <li>Manter <strong>rede de apoio</strong>, pausas e autocuidado dos cuidadores.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Choro e consolo</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>O pico de choro tende a <strong>reduzir</strong> após as 8 semanas.</li>
            <li>Consolar com colo, embalar, ruído branco suave e contacto pele-a-pele.</li>
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
          <p className="font-bold">Marcos típicos (≈ 2–3 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Sorriso social</strong> mais frequente; reage a rostos e vozes.</li>
            <li><strong>Controlo cervical</strong> a melhorar: levanta a cabeça e começa a suster por mais tempo.</li>
            <li>Segue objetos por arcos maiores; atenção a padrões de alto contraste.</li>
            <li><strong>Arrulhos</strong> e sons “oo/aa”; início de <em>turn-taking</em> (troca de vocalizações).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong><em>Tummy time</em> diário</strong> (várias vezes por dia, sempre acordado e vigiado).</li>
            <li>Conversar, cantar, brincar de “cara-a-cara” e incentivar <strong>contacto olho-no-olho</strong>.</li>
            <li>Brinquedos leves/sonoros a 20–30 cm; livros de imagens simples e alto contraste.</li>
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
            <li>Média de <strong>7–9 tomas/24h</strong>; alguns bebés prolongam blocos noturnos.</li>
            <li>Seguir <strong>sinais de fome/saciedade</strong>; observar ganho ponderal adequado.</li>
            <li>Arrotar após as tomas; manter posição vertical alguns minutos.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Quando procurar apoio</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Dor/fissuras, dificuldade de pega ou <strong>ganho de peso insuficiente</strong>.</li>
            <li>Fórmula: <strong>higiene rigorosa</strong>, diluição correta, descarte de sobras e limpeza de biberões.</li>
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
          <p className="font-bold">Padrões esperados (60–90 dias)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Total diário ≈ <strong>14–16 h</strong>, com possibilidade de <strong>blocos noturnos mais longos</strong>.</li>
            <li>Rotina: luz e interação de dia; pouco estímulo à noite para sinalizar “hora de dormir”.</li>
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
            <li>Responder ao choro rapidamente ajuda a construir <strong>segurança</strong>.</li>
            <li>Mais <strong>sorrisos</strong>, <strong>arrulhos</strong> e trocas de “conversa”.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Rituais e memórias</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Histórias curtas, canções, passeios calmos; manter <strong>registos</strong> (fotografias, diário).</li>
            <li>Apresentar gradualmente música e elementos culturais da família.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function SegundoMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">Tenho 2 meses! Mais atento e sorridente</h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">60–90 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Consulta e vacinas dos 2 meses, rotinas mais estáveis, sorriso social e mais controlo cervical.
        Dicas de sono seguro, alimentação e estímulos adequados a esta fase.
      </p>

      {/* Imagem */}
      <img
        src={doisMeses}
        alt="Tenho 2 meses (60–90 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {doisMesesData.map((item, index) => (
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
        prev={{ label: "Tenho 1 mês", to: "/1mes" }}
        next={{ label: "Tenho 3 meses", to: "/3mes" }}
      />
    </div>
  );
}
