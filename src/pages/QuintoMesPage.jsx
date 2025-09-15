// src/pages/QuintoMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import cincoMeses from "../assets/5meses.svg"; // ilustração “Tenho 5 meses!”

const cincoMesesData = [
  {
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Acompanhamento</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Vigilância do crescimento: peso, comprimento e perímetro cefálico.</li>
            <li>Rever tónus, coordenação e marcos do desenvolvimento.</li>
            <li>Confirmar calendário vacinal atualizado e suplementação (ex.: vitamina D).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Higiene e segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Banhos curtos; hidratar pele se necessário; ambiente livre de fumo.</li>
            <li><strong>Rolar mais</strong>: nunca deixar o bebé sozinho em locais altos.</li>
            <li>Transporte sempre no SRI adequado, bem instalado.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Pouca reação a sons/vozes ou contacto visual reduzido.</li>
            <li>Dificuldade marcada no controlo cervical ou movimentos muito assimétricos.</li>
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
          <p className="font-bold">Rotinas e brincadeiras diárias</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Janelas de vigília <strong>~1h30–2h</strong>, com mais curiosidade e energia.</li>
            <li>Reservar tempo para pausas dos cuidadores; rede de apoio continua essencial.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Comunicação afetiva</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Responder aos vocalizos, sorrir de volta, manter contacto olho-no-olho.</li>
            <li>Nomear objetos/pessoas nas rotinas (troca de fralda, banho, passeio).</li>
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
          <p className="font-bold">Marcos típicos (≈ 5 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Rola</strong> com mais facilidade (costas↔barriga); tenta apoiar-se nos antebraços.</li>
            <li>Leva objetos à boca; inicia <strong>transferência</strong> de um mão para a outra.</li>
            <li>Interessa-se pelos <strong>pés</strong> e tenta agarrá-los.</li>
            <li>Vocaliza mais (sons tipo “ba”, “ga”, “ma”) e ri com estímulos sociais.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação adequada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Tummy time</strong> diário, várias vezes, sempre acordado e vigiado.</li>
            <li>Brinquedos leves, de diferentes texturas, seguros para a boca.</li>
            <li>Jogos de esconder o rosto, espelho seguro e “conversas” imitando sons.</li>
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
          <p className="font-bold">Leite continua a base</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Aleitamento materno exclusivo</strong> recomendado até ~6 meses.</li>
            <li>Se fórmula: seguir higiene, diluição correta e descarte de sobras.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de prontidão para sólidos (em aproximação aos 6 meses)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Bom controlo cervical e consegue <strong>manter-se sentado com apoio</strong>.</li>
            <li>Interesse pela comida dos adultos, tenta agarrar.</li>
            <li>Desaparecimento do <strong>reflexo de protrusão da língua</strong>.</li>
          </ul>
          <p className="text-xs text-gray-500 mt-1">
            A introdução alimentar costuma iniciar por volta dos 6 meses; seguir indicação da equipa de saúde.
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
            <li>Total ≈ <strong>13–15 h</strong>/dia (noite + 2–3 sestas).</li>
            <li>Manter rotina consistente: luz e interação de dia; ambiente calmo e escuro à noite.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança do sono</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>De costas numa superfície firme, sem objetos soltos no berço.</li>
            <li>Quarto partilhado (sem partilha de cama) continua recomendado.</li>
            <li>Evitar sobreaquecimento; roupa adequada à estação.</li>
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
          <p className="font-bold">Laços em crescimento</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Mais <strong>sorrisos</strong>, risos e contacto visual; responde ao nome ocasionalmente.</li>
            <li>Rituais diários (histórias curtas, canções, massagem) reforçam a segurança.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function QuintoMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Tenho 5 meses! Mãos curiosas, muitos sorrisos
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">150–180 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Mais controlo, mais risos e muita vontade de explorar: rolar, agarrar, levar à boca e
        “conversar” com sons. Dicas de brincadeiras, sono e alimentação nesta fase.
      </p>

      {/* Imagem */}
      <img
        src={cincoMeses}
        alt="Tenho 5 meses (150–180 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {cincoMesesData.map((item, index) => (
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
          dificuldade marcada de movimentos simétricos, recusa alimentar persistente,
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
        prev={{ label: "Tenho 4 meses", to: "/4mes" }}
        next={{ label: "Tenho 6 meses", to: "/6mes" }}
      />
    </div>
  );
}
