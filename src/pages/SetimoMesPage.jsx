// src/pages/SetimoMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import seteMeses from "../assets/7meses.svg"; // ilustração “Tenho 7 meses!”

const seteMesesData = [
  {
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Acompanhamento</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Vigilância do crescimento (peso, comprimento, perímetro cefálico) e marcos de desenvolvimento.</li>
            <li>Rever suplementação (ex.: vitamina D) e calendário vacinal conforme indicação.</li>
            <li>Segurança: casa mais “à prova de bebé” (tomadas, cantos, escadas, portas, detergentes).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Pouca resposta a sons/vozes ou contacto visual muito reduzido.</li>
            <li>Não se senta com apoio por curtos períodos ou não usa ambas as mãos para explorar.</li>
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
          <p className="font-bold">Rotinas e comunicação afetiva</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Janelas de vigília ~<strong>2–3 h</strong>, com muita curiosidade e necessidade de movimento.</li>
            <li>Nomear objetos/pessoas nas rotinas; descrever ações do dia (“vamos lavar as mãos”, “vamos vestir”).</li>
            <li>Manter tempo de autocuidado para quem cuida e pedir ajuda à rede de apoio quando necessário.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Brincar em segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Brincadeiras no chão, em tapete firme; evitar andadores/voadores.</li>
            <li>Exploração com supervisão constante e brinquedos adequados à idade.</li>
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
          <p className="font-bold">Marcos típicos (≈ 7 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Senta com apoio</strong> por períodos maiores; começa a equilibrar-se melhor.</li>
            <li>Inicia deslocações: rebolar, girar no eixo, “gatinhar militar” ou preparar-se para gatinhar.</li>
            <li>Suporta peso nas pernas com apoio; bate objetos um no outro (causa-efeito).</li>
            <li>Transfere objetos entre mãos; preensão mais precisa (radial palmar).</li>
            <li>Responde ao nome; <strong>balbucio</strong> repetitivo (ex.: “bababa”, “dadada”).</li>
            <li>Pode surgir <strong>estranheza</strong> com desconhecidos (normal nesta fase).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Tummy time e tempo no chão diariamente; incentivar alcançar, rolar e mudanças de posição.</li>
            <li>Brinquedos de diferentes texturas e tamanhos fáceis de agarrar; copos/argolas para empilhar.</li>
            <li>Jogos de esconde-aparece, espelho seguro e “conversas” a imitar sons e ritmos.</li>
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
          <p className="font-bold">Sólidos a ganhar variedade</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Oferecer <strong>2–3 refeições</strong> de sólidos por dia, mantendo leite (materno/fórmula).</li>
            <li>Priorizar <strong>alimentos ricos em ferro</strong> e avançar gradualmente nas texturas (amassado → pedaços macios).</li>
            <li>Apresentar alimentos <strong>um de cada vez</strong> e observar tolerância.</li>
            <li>Água em <strong>copo</strong> nas refeições; evitar açúcar, sal e mel.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança à mesa</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Posição sentada estável com apoio; supervisionar sempre.</li>
            <li>Evitar riscos de engasgamento (uvas inteiras, frutos secos inteiros, pedaços duros).</li>
            <li>Permitir auto-alimentação com alimentos seguros (“finger foods” macios e do tamanho adequado).</li>
          </ul>
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
            <li>Total diário ≈ <strong>12–14 h</strong> (noite + <strong>2–3 sestas</strong>).</li>
            <li>Possíveis regressões temporárias (novas habilidades motoras); manter rotina consistente.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança do sono</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>De costas numa superfície firme; berço sem objetos soltos.</li>
            <li>Quarto partilhado (sem partilha de cama) continua recomendado.</li>
            <li>Ambiente escuro, calmo e roupa adequada para evitar sobreaquecimento.</li>
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
            <li>Muitos sorrisos e vocalizações; incentivar turn-taking (alternância) nas “conversas”.</li>
            <li>Rituais diários (histórias curtas, canções, massagem) dão previsibilidade e segurança.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function SetimoMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Tenho 7 meses! Mais movimento e descobertas
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">210–240 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Sentar com apoio, preparar para gatinhar e explorar com muita curiosidade.
        Ideias simples para brincar, alimentar com segurança e manter uma boa rotina.
      </p>

      {/* Imagem */}
      <img
        src={seteMeses}
        alt="Tenho 7 meses (210–240 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {seteMesesData.map((item, index) => (
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
          grande assimetria motora, recusa alimentar persistente, febre ou sinais de desidratação.
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
        prev={{ label: "Tenho 6 meses", to: "/6mes" }}
        next={{ label: "Tenho 8 meses", to: "/8mes" }}
      />
    </div>
  );
}
