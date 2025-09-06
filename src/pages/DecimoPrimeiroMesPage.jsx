// src/pages/DecimoPrimeiroMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import onzeMeses from "../assets/11meses.svg"; // ilustração “Tenho 11 meses!”

const onzeMesesData = [
  {
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Acompanhamento e segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Monitorizar peso, comprimento e perímetro cefálico.</li>
            <li>Casa bem adaptada: fixar móveis, colocar barreiras em escadas, manter objetos pequenos fora do alcance.</li>
            <li>Continuar vigilância da pele, dentes em erupção (primeiros molares podem surgir).</li>
            <li>Transporte no SRI adequado, virado para trás.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Não se põe de pé com apoio ou não tenta deslocar-se.</li>
            <li>Pouca resposta a sons, voz ou ausência de balbucio variado.</li>
            <li>Não demonstra interesse em interagir com cuidadores.</li>
            <li>Recusa alimentar persistente, perda de peso, febre ou sinais de desidratação.</li>
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
          <p className="font-bold">Rotinas e autonomia</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Janelas de vigília ~<strong>3 h</strong>; duas sestas diárias tendem a manter-se.</li>
            <li>Ansiedade de separação ainda presente; apoio emocional e rotinas consistentes ajudam.</li>
            <li>Estimular autonomia com brincadeiras de escolha simples (dois brinquedos, dois livros).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Comunicação no dia a dia</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Nomear objetos, ações e pessoas nas rotinas.</li>
            <li>Estimular gestos sociais: apontar, acenar, dar “tchau”, bater palmas.</li>
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
          <p className="font-bold">Marcos típicos (≈ 11 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Põe-se de pé sozinho</strong> por alguns segundos.</li>
            <li><strong>Anda com apoio</strong> (móveis, mãos dos cuidadores); pode ensaiar primeiros passos.</li>
            <li>Usa a <strong>pinça fina</strong> (polegar + indicador) para apanhar objetos pequenos seguros.</li>
            <li>Balbucio rico; imita sons, pode dizer 1–2 palavras simples com sentido.</li>
            <li>Imita gestos dos adultos (aplaudir, acenar, dar beijo).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Deixar explorar o chão, encorajar levantar-se apoiado e deslocar-se entre móveis.</li>
            <li>Brinquedos de empilhar, abrir/fechar, encaixar; jogos de causa-efeito.</li>
            <li>Conversar, ler livros ilustrados, cantar músicas com gestos.</li>
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
          <p className="font-bold">Refeições variadas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>3 refeições principais</strong> + lanches + leite (materno/fórmula).</li>
            <li>Texturas: pedacinhos macios, <em>finger foods</em> seguros; incentivar mastigação.</li>
            <li>Foco em alimentos ricos em ferro, proteínas, frutas e legumes variados.</li>
            <li>Água em copo; evitar sal, açúcar, mel e alimentos processados.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Autonomia alimentar</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Permitir autoalimentação com alimentos seguros; encorajar pinça fina.</li>
            <li>Supervisão constante durante as refeições.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "5. Sono",
    content: (
      <div className="space-y-6">
        <p className="font-bold">Padrões habituais</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Total ≈ <strong>12–14 h</strong> (noite + <strong>2 sestas</strong>).</li>
          <li>Possíveis despertares noturnos por ansiedade de separação ou novas habilidades.</li>
          <li>Rotina consistente e ambiente calmo ajudam na regulação.</li>
        </ul>
      </div>
    ),
  },

  {
    title: "6. Vínculo afetivo e cultura familiar",
    content: (
      <div className="space-y-6">
        <p className="font-bold">Laços e socialização</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Responde a gestos e brincadeiras sociais (cucu, palminhas, tchau).</li>
          <li>Imita sons e ações simples; procura aprovação dos cuidadores.</li>
          <li>Rituais diários (histórias, canções, passeios) reforçam vínculo e previsibilidade.</li>
        </ul>
      </div>
    ),
  },
];

export default function DecimoPrimeiroMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Tenho 11 meses! Quase a dar os primeiros passos
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">
        330–360 dias
      </p>
      <p className="italic text-zinc-600 mb-6">
        Levantar-se sozinho, andar com apoio, balbuciar muito e imitar gestos.
        Sugestões para estimular a autonomia, brincar com segurança e apoiar a alimentação variada.
      </p>

      {/* Imagem */}
      <img
        src={onzeMeses}
        alt="Tenho 11 meses (330–360 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {onzeMesesData.map((item, index) => (
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
          Procure avaliação se houver ausência de tentativa de pôr-se de pé ou deslocar-se,
          pouca resposta a sons/vozes, ausência de balbucio variado, recusa alimentar persistente,
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
        prev={{ label: "Tenho 10 meses", to: "/10mes" }}
        next={{ label: "Tenho 1 ano", to: "/1ano" }}
      />
    </div>
  );
}
