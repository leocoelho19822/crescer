// src/pages/QuartoMesPage.jsx
// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import MonthNav from "../components/MonthNav";
import quatroMeses from "../assets/4meses.svg"; // ilustração “Tenho 4 meses!”

const quatroMesesData = [
  {
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Consulta e vacinação</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Avaliação de crescimento: peso, comprimento, perímetro cefálico.</li>
            <li>Vacinas da 2.ª dose devem estar em dia.</li>
            <li>Atualizar suplementação (como vitamina D), conforme orientação profissional.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Higiene e segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Banhos rápidos; hidratar se necessário; manter ambiente livre de fumo.</li>
            <li>Segurança em espaços altos ou escorregadios — não deixar o bebé sozinho.</li>
            <li>Uso correto do SRI no carro e proteção ativa no lar.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Falta de reação a sons/vozes ou ausência de sorriso social.</li>
            <li>Dificuldade no controle da cabeça ou recusa alimentar persistente.</li>
            <li>Choro inconsolável ou sinais de desidratação.</li>
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
          <p className="font-bold">Rotinas mais consistentes</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Janelas de vigília maiores (até ~1h45) e ciclos mais regulares de sono.</li>
            <li>Rede de apoio continua essencial — pausas ajudam a recuperar energia.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Brincar e interagir</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Responde a sorrisos, arrulhos e jogos simples, como esconde-esconde.</li>
            <li>Incentivar contacto visual, expressões faciais e trocas afetivas.</li>
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
          <p className="font-bold">Marcos típicos</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Controle da cabeça firme; apoia-se nos braços em tummy time.</li>
            <li>Começa a rolar, especialmente da barriga para as costas.</li>
            <li>Coordenação mão-olho melhorada — agarra e leva objetos à boca.</li>
            <li>Segue objetos com o olhar e reage a cores e padrões.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estimulação apropriada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Oferecer tummy time várias vezes ao dia, sempre sob vigilância.</li>
            <li>Brinquedos sonoros, espelhos seguros e objetos para agarrar.</li>
            <li>Cantar, imitar arrulhos e promover trocas de vocalizações.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "4. Alimentação",
    content: (
      <div className="space-y-6">
        <p className="font-bold">Aleitamento materno / fórmula</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Amamentação exclusiva até os 6 meses continua recomendada.</li>
          <li>Se com fórmula, atenção à higiene, diluição correta e descarte adequado de sobras.</li>
        </ul>
      </div>
    ),
  },

  {
    title: "5. Sono",
    content: (
      <div className="space-y-6">
        <p className="font-bold">Padrões típicos</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Necessita ~14–16 horas por dia, incluindo 9–10 h noturnas e 2 sestas.</li>
          <li>Rotinas de luz natural durante o dia e ambiente calmo à noite ajudam a consolidar o ritmo.</li>
        </ul>
      </div>
    ),
  },

  {
    title: "6. Vínculo afetivo e cultura familiar",
    content: (
      <div className="space-y-6">
        <p className="font-bold">Laços cada vez mais fortes</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Sorrisos espontâneos, risadinhas e reconhecimento dos cuidadores.</li>
          <li>Estimular com colo, brincadeiras faciais e leitura de histórias curtas.</li>
        </ul>
      </div>
    ),
  },
];

export default function QuartoMesPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo + resumo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Tenho 4 meses! Descobertas com mais energia
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">
        120–150 dias
      </p>
      <p className="italic text-zinc-600 mb-6">
        Mais força no pescoço, começa a rolar, agarrar objetos e dar risadas.
        Uma fase cheia de descobertas e novas interações.
      </p>

      {/* Imagem */}
      <img
        src={quatroMeses}
        alt="Tenho 4 meses (120–150 dias)"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      {/* Acordeão */}
      <div className="space-y-4">
        {quatroMesesData.map((item, index) => (
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
          <h2 className="text-lg font-bold text-red-700">
            Quando procurar ajuda
          </h2>
        </div>
        <p className="text-sm text-red-800 mb-4">
          Se notar falta de contato visual, atraso no controle de cabeça,
          recusa alimentar persistente, choro inconsolável, febre ou sinais de
          desidratação, procure avaliação médica imediata.
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
        prev={{ label: "Tenho 3 meses", to: "/3mes" }}
        next={{ label: "Tenho 5 meses", to: "/5mes" }}
      />
    </div>
  );
}
