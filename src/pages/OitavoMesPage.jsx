// src/pages/OitavoMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import oitoMeses from "../assets/8meses.svg"; // ilustração “Tenho 8 meses!”

const oitoMesesData = [
  {
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Acompanhamento</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Vigilância do crescimento (peso, comprimento, PC) e marcos motores/linguagem.</li>
            <li>Rever suplementação (ex.: vitamina D) e calendário vacinal atualizado.</li>
            <li>Casa “à prova de bebé”: proteger tomadas, cantos, escadas, portas, detergentes e objetos pequenos.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Pouco contacto visual ou pouca resposta a sons/vozes.</li>
            <li>Não se senta com apoio estável, não usa ambas as mãos ou movimentos muito assimétricos.</li>
            <li>Recusa alimentar persistente, engasgamentos frequentes, perdas ponderais, febre ou sinais de desidratação.</li>
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
            <li>Pode surgir <strong>ansiedade de separação</strong> e estranheza — despedidas curtas e consistentes ajudam.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Brincar em segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Espaço no chão com tapete firme; incentivar explorar e mudar de posição.</li>
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
          <p className="font-bold">Marcos típicos (≈ 8 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Senta sem apoio</strong> por períodos maiores; roda o tronco para alcançar objetos.</li>
            <li><strong>Gatinhar</strong> pode iniciar (ou “exército”, arrastar, rebolar); começa a puxar-se para joelhos.</li>
            <li><strong>Preensão mais fina</strong> em evolução (pinça grosseira); transfere objetos entre mãos.</li>
            <li>Balbucio variado (“bababa”, “dadada”, “mamama”); responde ao nome e à entoação.</li>
            <li>Procura objetos parcialmente escondidos (início de permanência do objeto).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Tummy time e tempo no chão diário; percursos simples com almofadas para contornar/trepar com ajuda.</li>
            <li>Brinquedos para bater, encaixar, empilhar; livros cartonados e espelho seguro.</li>
            <li>“Conversas” a imitar sons e ritmos; nomear objetos/pessoas nas rotinas.</li>
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
          <p className="font-bold">Sólidos com mais variedade e texturas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>2–3 refeições</strong> de sólidos/dia + leite (materno/fórmula).</li>
            <li>Avançar texturas: amassado → pedacinhos macios → finger foods seguros (tamanho do dedo indicador).</li>
            <li>Priorizar <strong>ferro</strong> (carnes bem cozidas/desfiadas, leguminosas, ovos bem cozidos) e oferecer água em copo.</li>
            <li>Evitar sal, açúcar e mel; introduzir alimentos novos um de cada vez e observar tolerância.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Autonomia e segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Posição sentada estável com apoio; supervisão sempre.</li>
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
            <li>Total ≈ <strong>12–14 h</strong> (noite + <strong>2 sestas</strong> principais; às vezes 3 sestas curtas).</li>
            <li>Novas habilidades podem perturbar temporariamente o sono; manter rotina consistente e ambiente calmo.</li>
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
            <li>Muitos sorrisos, balbucio e contacto visual; incentivar turn-taking nas “conversas”.</li>
            <li>Rituais (histórias, canções, massagem) e passeios calmos reforçam segurança e conexão.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function OitavoMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Tenho 8 meses! Aventura no chão e muita conversa
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">240–270 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Senta sem apoio, explora o chão e balbucia cada vez mais. Ideias para brincar,
        alimentar com segurança e manter rotinas tranquilas.
      </p>

      {/* Imagem */}
      <img
        src={oitoMeses}
        alt="Tenho 8 meses (240–270 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {oitoMesesData.map((item, index) => (
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
          desequilíbrios marcados, recusa alimentar persistente, febre ou sinais de desidratação.
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
        prev={{ label: "Tenho 7 meses", to: "/7mes" }}
        next={{ label: "Tenho 9 meses", to: "/9mes" }}
      />
    </div>
  );
}
