// eslint-disable-next-line
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import terceiroano from "../assets/3anos.svg";

const terceiroAnoData = [
  {
    id: 1,
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Higiene e autocuidado</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Estimular a criança a <strong>lavar as mãos</strong>, escovar os dentes com supervisão e participar em pequenas rotinas de higiene.</li>
            <li>Início de <strong>autonomia no vestir e despir</strong> (puxar calças, tentar colocar sapatos).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Vacinas e consultas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Reforços vacinais previstos no <strong>Plano Nacional de Vacinação</strong>.</li>
            <li>Consultas de vigilância do desenvolvimento: peso, altura, perímetro cefálico, avaliação da <strong>linguagem e comportamento</strong>.</li>
            <li>Primeira consulta de <strong>saúde oral infantil</strong>, se ainda não foi realizada.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Prevenção de acidentes</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Reforçar a segurança em casa (escadas, janelas, produtos perigosos).</li>
            <li>Ensinar noções básicas de <strong>cuidado</strong> (não mexer em objetos quentes, não atravessar a rua sozinho).</li>
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
          <p className="font-bold">Afirmação da autonomia</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Fase do <strong>“não”</strong>: testar regras é esperado e faz parte do desenvolvimento.</li>
            <li>Oferecer <strong>escolhas controladas</strong> (ex.: “queres esta t-shirt azul ou a vermelha?”).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Gestão de frustrações e birras</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>As birras são manifestações de frustração e de aprendizagem emocional.</li>
            <li>Manter a calma, validar emoções e ensinar alternativas de expressão.</li>
            <li>Reforçar comportamentos positivos com <strong>elogios e encorajamento</strong>.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Dicas parentais</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Rotinas consistentes dão segurança.</li>
            <li>Manter diálogo simples e claro, incentivando a criança a expressar-se.</li>
            <li>Equilibrar <strong>afeto</strong> e <strong>limites</strong> é fundamental para o desenvolvimento emocional.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    title: "3. Desenvolvimento da criança",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Motor</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Maior <strong>coordenação motora</strong>: correr, saltar, subir degraus alternando os pés.</li>
            <li>Motricidade fina: desenhar formas simples, empilhar, usar tesoura de bicos redondos com ajuda.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Cognitivo e linguagem</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Constrói frases simples e aumenta rapidamente o <strong>vocabulário</strong>.</li>
            <li>Compreende conceitos básicos (cores, tamanhos, opostos).</li>
            <li>Imita ações do dia a dia e participa em <strong>jogos simbólicos</strong> (dar comida à boneca, brincar ao médico).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Emocional e social</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Início da <strong>empatia</strong>: tenta confortar ou imitar estados emocionais dos outros.</li>
            <li>Primeiras amizades e brincadeiras interativas (partilha ainda limitada).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Cultural</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Interesse por histórias mais longas, músicas e tradições familiares.</li>
            <li>Participação em <strong>atividades culturais</strong> com os pais (teatro infantil, museus, festas tradicionais).</li>
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
          <p className="font-bold">Alimentação saudável e variada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Participar nas refeições familiares, reforçando hábitos saudáveis.</li>
            <li>Autonomia crescente: usar talheres, servir-se em pequenas quantidades.</li>
            <li>Evitar excesso de alimentos processados, refrigerantes e doces.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Educação alimentar</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Envolver a criança em <strong>tarefas simples</strong> de preparação (lavar legumes, pôr a mesa).</li>
            <li>Ensinar noções básicas de <strong>alimentação saudável</strong> de forma lúdica.</li>
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
            <li>Média de <strong>10 a 12 horas</strong> de sono noturno, com ou sem sesta.</li>
            <li>Eventuais <strong>medos noturnos</strong> (do escuro, da separação) podem surgir.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Transições</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Transição definitiva para cama de criança, se ainda não aconteceu.</li>
            <li>Rotinas consistentes (história, canção, luz suave) ajudam a adormecer com segurança.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 6,
    title: "6. Educação e disciplina iniciais",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Regras e limites com afeto</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Explicar <strong>regras simples</strong> e reforçá-las com consistência.</li>
            <li>Redirecionar comportamentos indesejados sem punições agressivas.</li>
            <li>Modelar comportamentos desejáveis através do exemplo.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Parentalidade positiva</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Validar emoções, mesmo em situações de birra.</li>
            <li>Encorajar a autonomia e o pensamento crítico desde cedo.</li>
            <li>Estimular a curiosidade natural da criança com jogos, leituras e perguntas abertas.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function TerceiroAnoPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        O 3.º ano do bebé: autonomia, linguagem e construção da identidade
      </h1>

      <p className="italic text-zinc-600 mb-6">
        Entre os 2 e os 3 anos, o bebé transforma-se numa criança curiosa, faladora e independente.
        É uma fase de grandes saltos no desenvolvimento social, emocional e cognitivo, marcada pela exploração
        e pelas primeiras noções de regras e limites.
      </p>

      <img
        src={terceiroano}
        alt="Terceiro ano do bebé"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl h-120 object-cover"
      />

      <div className="space-y-4">
        {terceiroAnoData.map((item, index) => (
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
    </div>
  );
}
