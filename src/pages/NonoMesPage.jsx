// src/pages/NonoMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import noveMeses from "../assets/9meses.svg"; // ilustração “Tenho 9 meses!”

const noveMesesData = [
  {
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Acompanhamento</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Vigilância de crescimento (peso, comprimento, PC) e marcos motores/linguagem.</li>
            <li>Rever suplementação (ex.: vitamina D) e calendário vacinal em dia.</li>
            <li>Casa segura: proteger tomadas, cantos, escadas, portas e produtos de limpeza fora do alcance.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Pouco contacto visual ou resposta fraca a sons/vozes.</li>
            <li>Não se desloca no chão (rolar/arrastar/gatinhar) ou grande assimetria motora.</li>
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
            <li>Janelas de vigília ~<strong>2–3 h</strong>; manter rotina previsível de sestas e refeições.</li>
            <li>Ansiedade de separação é comum — despedidas curtas e consistentes ajudam.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Brincar em segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Espaço no chão com tapete firme; incentivar explorar, trepar com ajuda e contornar obstáculos baixos.</li>
            <li>Supervisão constante; evitar andadores/voadores e brinquedos com peças pequenas destacáveis.</li>
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
          <p className="font-bold">Marcos típicos (≈ 9 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Gatinhar</strong> mais consistente (ou arrastar/“militar”); desloca-se para alcançar o que quer.</li>
            <li><strong>Puxa-se para pôr-se de pé</strong> com apoio; pode começar a dar passos laterais apoiado.</li>
            <li><strong>Pinça</strong> a evoluir (polegar + indicador) para apanhar objetos pequenos seguros.</li>
            <li>Explora causa-efeito (bater, abrir/fechar), procura objetos escondidos (permanência do objeto).</li>
            <li>Balbucio variado; entende “não” simples e o próprio nome.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Percursos com almofadas/túneis baixos; brincar de pôr-se de joelhos e levantar com apoio.</li>
            <li>Brinquedos de encaixe, empilhar copos/argolas, livros cartonados, bola leve para rolar.</li>
            <li>Nomear objetos/pessoas nas rotinas; imitar e alternar sons nos “diálogos”.</li>
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
          <p className="font-bold">Variedade e texturas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>3 refeições</strong> de sólidos/dia + leite (materno/fórmula).</li>
            <li>Texturas mais desafiantes: pedacinhos macios e <em>finger foods</em> seguros (formato dedo).</li>
            <li>Manter foco em <strong>ferro</strong> (carnes bem cozidas, leguminosas, ovos bem cozidos) e oferecer água em copo.</li>
            <li>Evitar sal, açúcar e mel; introduzir novos alimentos um de cada vez e observar tolerância.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Autonomia e segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Posição sentada estável à mesa; supervisão sempre.</li>
            <li>Permitir autoalimentação com alimentos adequados; evitar riscos de engasgamento (uvas inteiras, frutos secos inteiros, pedaços duros).</li>
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
            <li>Novas habilidades podem perturbar o sono temporariamente; manter rotina consistente e ambiente calmo.</li>
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
            <li>Rituais (histórias, canções, massagem) e passeios calmos reforçam a segurança e a conexão.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function NonoMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Tenho 9 meses! Gatinhar, subir e explorar
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">270–300 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Gatinhar consistente, pôr-se de pé com apoio e pinça a afinar. Ideias para brincar,
        promover segurança e evoluir nos sólidos com confiança.
      </p>

      {/* Imagem */}
      <img
        src={noveMeses}
        alt="Tenho 9 meses (270–300 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {noveMesesData.map((item, index) => (
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
        prev={{ label: "Tenho 8 meses", to: "/8mes" }}
        next={{ label: "Tenho 10 meses", to: "/10mes" }}
      />
    </div>
  );
}
