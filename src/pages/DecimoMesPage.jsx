// src/pages/DecimoMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import dezMeses from "../assets/10meses.svg"; // ilustração “Tenho 10 meses!”

const dezMesesData = [
  {
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Acompanhamento e segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Vigilância do crescimento (peso, comprimento, perímetro cefálico) e marcos motores/linguagem.</li>
            <li>Casa “à prova de bebé”: fixar móveis/TV, travas em gavetas/portas, proteger escadas e tomadas.</li>
            <li>Peças pequenas, sacos plásticos, cordões e imans fora do alcance (risco de engasgamento/asfixia).</li>
            <li>Transporte sempre no SRI adequado, virado para trás, corretamente instalado.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Pouca resposta a sons/vozes ou contacto visual muito reduzido.</li>
            <li>Não se desloca no chão (gatinhar/arrastar) ou grande assimetria motora.</li>
            <li>Recusa alimentar persistente, engasgamentos frequentes, perda de peso, febre ou sinais de desidratação.</li>
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
          <p className="font-bold">Rotinas e emoções</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Janelas de vigília ~<strong>2–3 h</strong>; duas sestas tendem a manter-se.</li>
            <li>Ansiedade de separação pode estar mais evidente — despedidas curtas e consistentes ajudam.</li>
            <li>Manter tempo de autocuidado para quem cuida; pedir apoio quando necessário.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Comunicação no dia a dia</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Nomear objetos/pessoas e descrever ações (“vamos lavar as mãos”, “vamos calçar os sapatos”).</li>
            <li>Brincar de imitar sons e gestos; incentivar “tchau”, bater palmas e apontar.</li>
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
          <p className="font-bold">Marcos típicos (≈ 10 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Põe-se de pé</strong> agarrado aos móveis e pode dar <strong>passos laterais</strong> com apoio.</li>
            <li>Explora causa-efeito (abrir/fechar, pôr/tirar), procura objetos escondidos (permanência do objeto).</li>
            <li><strong>Pinça</strong> mais fina (polegar + indicador) para apanhar pedaços pequenos seguros.</li>
            <li>Balbucio com entoação; pode dizer sons/palavras simples e reconhece rotinas.</li>
            <li>Gestos sociais: <strong>bater palmas</strong>, acenar “tchau”, apontar para mostrar interesse.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Percursos no chão com obstáculos baixos; subir/descer com ajuda e muita supervisão.</li>
            <li>Brinquedos de encaixe, copos/argolas para empilhar, livros cartonados, bolas leves para rolar.</li>
            <li>“Conversas” a alternar sons; nomear, apontar e esperar resposta do bebé.</li>
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
          <p className="font-bold">Variedade, texturas e autonomia</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>3 refeições</strong> de sólidos/dia + leite (materno/fórmula); oferecer <strong>água</strong> em copo.</li>
            <li>Texturas mais consistentes e <em>finger foods</em> seguros (tamanho do dedo, macios).</li>
            <li>Foco em <strong>ferro</strong> (carnes bem cozidas, leguminosas, ovos bem cozidos) e variedade de frutas/legumes.</li>
            <li>Evitar sal, açúcar e mel; apresentar alimentos novos um de cada vez e observar tolerância.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança à mesa</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Posição sentada estável com apoio; supervisão constante.</li>
            <li>Evitar riscos de engasgamento (uvas inteiras, frutos secos inteiros, pedaços duros/escorregadios).</li>
            <li>Permitir autoalimentação com alimentos adequados; encorajar pinça fina com pedaços pequenos seguros.</li>
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
            <li>Total ≈ <strong>12–14 h</strong> (noite + <strong>2 sestas</strong> principais).</li>
            <li>Novas habilidades podem perturbar o sono; manter rotina consistente e ambiente calmo/escuro.</li>
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
          <p className="font-bold">Laços e socialização</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Muito balbucio e contacto visual; incentivar alternância nas “conversas”.</li>
            <li>Rituais diários (histórias, canções, massagem) e passeios calmos reforçam segurança e conexão.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function DecimoMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Tenho 10 meses! Em pé, com muitas conversas
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">300–330 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Ficar de pé com apoio, passos laterais, pinça a afinar e muita curiosidade.
        Ideias para brincar com segurança, evoluir nos sólidos e apoiar a comunicação.
      </p>

      {/* Imagem */}
      <img
        src={dezMeses}
        alt="Tenho 10 meses (300–330 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {dezMesesData.map((item, index) => (
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
        prev={{ label: "Tenho 9 meses", to: "/9mes" }}
        next={{ label: "Tenho 11 meses", to: "/11mes" }}
      />
    </div>
  );
}
