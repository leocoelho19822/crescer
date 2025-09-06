// eslint-disable-next-line
import React, { useState } from "react";
import {
  FiChevronDown,
  FiAlertTriangle,
  FiPhoneCall,
} from "react-icons/fi";
import recemnascido from "../assets/recemnascido.svg";
import MonthNav from "../components/MonthNav";

const recemNascidoData = [
  {
    id: 1,
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Cuidados de higiene e rotina</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Umbigo</strong>: manter limpo e seco; observar vermelhidão, odor ou secreção.</li>
            <li><strong>Banho</strong>: não precisa ser diário; água morna e produtos suaves.</li>
            <li><strong>Pele</strong>: hidratar se seca; evitar perfumes e talcos.</li>
            <li><strong>Fraldas</strong>: trocar sempre que suja; limpeza correta.</li>
            <li><strong>Temperatura</strong>: vestir em camadas, sem sobreaquecimento.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Consultas, vacinas e rastreios</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Consulta de recém-nascido</strong> nas primeiras semanas.</li>
            <li>“<strong>Teste do pezinho</strong>”, rastreio auditivo e oximetria de pulso.</li>
            <li>Vacinas conforme <strong>Plano Nacional de Vacinação</strong>.</li>
            <li>Registo no <strong>Boletim de Saúde Infantil</strong>.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Febre</strong> ≥ 38 °C, letargia ou hipotermia.</li>
            <li><strong>Dificuldade respiratória</strong> ou coloração azulada.</li>
            <li><strong>Recusa alimentar</strong> persistente ou vómitos biliosos.</li>
            <li><strong>Desidratação</strong>: poucas fraldas molhadas, boca seca.</li>
            <li><strong>Icterícia intensa</strong> ou agravamento após alta.</li>
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
          <p className="font-bold">Adaptação no pós-parto</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>“Baby blues”</strong> é comum; procurar ajuda se persistente.</li>
            <li><strong>Rede de apoio</strong>: repartir tarefas e garantir descanso.</li>
            <li>Procure <strong>ajuda profissional</strong> em sinais de depressão pós-parto.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Cuidar de quem cuida</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Boa hidratação e alimentação dos cuidadores.</li>
            <li>Manter comunicação aberta e pedir ajuda quando necessário.</li>
            <li>Participar em <strong>grupos de apoio</strong> pode reduzir a ansiedade.</li>
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
          <p className="font-bold">Reflexos e marcos iniciais</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Reflexo de sucção, procura, Moro (sobressalto) e preensão.</li>
            <li>Movimentos descoordenados, tónus flexor típico.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sentidos e interação</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Visão</strong>: foca melhor a 20–30 cm, prefere rostos.</li>
            <li><strong>Audição</strong>: reconhece vozes familiares.</li>
            <li><strong>Pele-a-pele</strong> acalma e favorece vínculo.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 4,
    title: "4. Alimentação",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Aleitamento materno</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Em <strong>livre demanda</strong>: oferecer sempre que o bebé procurar.</li>
            <li>Pega correta: boca bem aberta e conforto da mãe.</li>
            <li>Esvaziar uma mama antes de trocar para a outra.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Fórmula (quando indicada)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Preparar conforme indicação profissional.</li>
            <li>Higienizar biberões e descartar sobras.</li>
            <li>Alimentar em posição semi-erguida.</li>
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
          <p className="font-bold">Padrões de sono</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Recém-nascidos dormem <strong>14–17 horas</strong> por dia, em ciclos curtos.</li>
            <li>É normal acordar frequentemente para mamar.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Sempre de <strong>costas</strong>, em <strong>superfície firme</strong>.</li>
            <li>Sem almofadas, brinquedos ou edredões no berço.</li>
            <li>Quarto partilhado, mas não cama partilhada.</li>
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
          <p className="font-bold">Vínculo precoce</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Pele-a-pele</strong>: regula temperatura e fortalece a ligação.</li>
            <li><strong>Conversar e cantar</strong> para o bebé cria segurança.</li>
            <li><strong>Massagem infantil</strong> pode ajudar no relaxamento.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Cultura e rituais familiares</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Pequenos <strong>rituais</strong> (histórias, canções) desde cedo.</li>
            <li>Registar memórias (fotografias, diário).</li>
            <li>Respeitar o <strong>tempo do bebé</strong> e evitar estímulos excessivos.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function RecemNascidoPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      {/* Título descontraído + subtítulo */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">Recém-nascido. Olá, mundo! </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500 mb-2">0–30 dias</p>
      <p className="italic text-zinc-600 mb-6">
        Primeiras semanas: cuidados essenciais, sinais de alerta, alimentação, sono seguro e construção do vínculo.
      </p>

      {/* Imagem */}
      <img
        src={recemnascido}
        alt="Recém-nascido"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl max-h-[480px] object-cover"
      />

      <div className="space-y-4">
        {recemNascidoData.map((item, index) => (
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

      {/* Bloco de alerta e contacto */}
      <div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <FiAlertTriangle className="text-red-600 mr-2" size={24} />
          <h2 className="text-lg font-bold text-red-700">Quando procurar ajuda</h2>
        </div>
        <p className="text-sm text-red-800 mb-4">
          Procure assistência médica imediata se o bebé apresentar febre, dificuldade em
          respirar, recusar alimentar-se, sinais de desidratação ou icterícia intensa.
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

      {/* Navegação entre meses (novo componente) */}
      <MonthNav prev={null} next={{ label: "Tenho 1 mês", to: "/1mes" }} />
    </div>
  );
}
