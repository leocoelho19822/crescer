// eslint-disable-next-line
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import primeiroano from "../assets/1ano.svg";

const primeiroAnoData = [
  {
    id: 1,
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-bold">Higiene e rotinas de cuidado</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Estabeleça um <strong>horário regular de banho</strong> (não precisa ser diário) e seque bem as pregas da pele.</li>
            <li>Inicie a <strong>higiene oral</strong> quando surgirem os primeiros dentes (escova macia + água; pasta fluoretada em quantidade do tamanho de um grão de arroz conforme indicação profissional).</li>
            <li>Corte de <strong>unhas</strong> com tesoura de pontas arredondadas; atenção a arranhões.</li>
            <li>Cuidados com a <strong>pele</strong>: hidratação suave; evite produtos perfumados e banhos muito quentes.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Vacinas e consultas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Cumprimento do <strong>Plano Nacional de Vacinação</strong> (acompanhado pelo enfermeiro/médico de família).</li>
            <li>Consultas de <strong>vigilância do desenvolvimento</strong> (peso, comprimento, perímetro cefálico) e orientação parental.</li>
            <li>Rastreio e prevenção de <strong>deficiências de ferro e vitamina D</strong> quando indicadas.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Sinais de alerta frequentes no 1.º ano</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Febre persistente</strong>, dificuldade respiratória, recusa alimentar marcada.</li>
            <li><strong>Desidratação</strong> (menos fraldas molhadas, boca seca, letargia).</li>
            <li><strong>Acidentes domésticos</strong>: prevenção de quedas, queimaduras e ingestão de pequenos objetos.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 2,
    title: "2. Parentalidade e apoio",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-bold">Desafios emocionais dos pais</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Gestão do <strong>cansaço</strong> e da <strong>ansiedade</strong> com rotinas realistas e rede de apoio.</li>
            <li>Partilha de tarefas entre cuidadores; pedir ajuda quando necessário.</li>
            <li>Tempo de <strong>qualidade</strong> com o bebé e preservação de momentos do casal.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Estímulo à autonomia</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Encorajar <strong>exploração segura</strong> do espaço (brincadeiras no chão, tapete de atividades).</li>
            <li>Permitir pequenas conquistas: tentar segurar a colher, beber pelo copo, puxar-se para a posição de pé.</li>
            <li>Definir <strong>limites consistentes</strong> com afeto e linguagem simples.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Dicas parentais práticas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Rotinas previsíveis (alimentação, sestas, higiene) dão <strong>segurança</strong> ao bebé.</li>
            <li>Aceitar que cada bebé tem o <strong>seu ritmo</strong> de desenvolvimento.</li>
            <li>Usar <strong>contacto pele-a-pele</strong>, colo e responsividade às necessidades como base do vínculo seguro.</li>
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
          <p className="font-bold">Motor (grosseiro e fino)</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>0–3 meses</strong>: controlo cervical progressivo; levar mãos à boca.</li>
            <li><strong>4–6 meses</strong>: rolar, sentar com apoio; preensão palmar voluntária.</li>
            <li><strong>7–9 meses</strong>: sentar sem apoio, gatinhar; pinça em desenvolvimento.</li>
            <li><strong>10–12 meses</strong>: pôr-se de pé com apoio, <em>cruising</em>; primeiros passos podem surgir.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Cognitivo e linguagem</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Exploração sensorial, permanência do objeto por volta dos 8–9 meses.</li>
            <li><strong>Balbucio</strong> (ba-ba, da-da), compreensão de palavras simples; primeiras palavras perto dos 12 meses (varia).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Emocional e social</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Vínculo seguro com cuidadores; <strong>ansiedade de separação</strong> pode surgir no 2.º semestre.</li>
            <li>Imitação de gestos e expressão de preferências; início do jogo social simples.</li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Nota: os marcos variam entre bebés. Acompanhamento regular ajuda a detetar necessidades de estimulação adicional.
          </p>
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
          <p className="font-bold">Diversificação alimentar</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Introdução de <strong>alimentos complementares</strong> por volta dos 6 meses, mantendo leite materno ou fórmula.</li>
            <li>Respeitar <strong>texturas</strong> progressivas e sinais de prontidão (sustentar a cabeça, interesse pela comida, sentar com apoio).</li>
            <li>Oferecer <strong>variedade</strong> de sabores e cores; evitar sal e açúcar adicionados.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Autonomia à mesa</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Incentivar o bebé a <strong>segurar alimentos</strong> adequados e usar utensílios com supervisão.</li>
            <li>Ambiente calmo, sem ecrãs; aceitar a <strong>sujidade</strong> como parte da aprendizagem.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança alimentar</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Cortes adequados para prevenir <strong>engasgamento</strong>; atenção a frutos secos inteiros e uvas.</li>
            <li>Higiene das mãos, utensílios e conservação correta dos alimentos.</li>
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
          <p className="font-bold">Padrões e rotinas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>No 1.º ano, muitos bebés totalizam <strong>12–15 horas de sono</strong> por dia (inclui sestas).</li>
            <li>Estabelecer <strong>rotina previsível</strong> (banho, massagem, história/canção, quarto escuro).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança do sono</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Superfície firme, sem almofadas/edredões; <strong>dormir de costas</strong> salvo indicação clínica.</li>
            <li>Manter o berço em local seguro; atenção à transição para a cama quando apropriado.</li>
            <li>Evitar sobreaquecimento; roupa adequada à estação.</li>
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
          <p className="font-bold">Parentalidade positiva</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Mensagem curta, concreta e <strong>positiva</strong> (“vamos guardar os brinquedos”).</li>
            <li><strong>Validar emoções</strong> e orientar o comportamento (nomear sentimentos ajuda a regular).</li>
            <li>Consistência nos <strong>limites</strong> com afeto e previsibilidade.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Ambiente de aprendizagem</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Brincadeiras sensoriais, <strong>livros ilustrados</strong>, música e rimas.</li>
            <li>Tempo diário de <strong>brincadeira livre</strong> no chão; menos ecrãs, mais interação.</li>
            <li>Criar <strong>rituais familiares</strong> (leituras antes de dormir, canções, festas tradicionais).</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function PrimeiroAnoPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        O 1.º ano do bebé: desenvolvimento, cuidados e primeiros marcos
      </h1>
      <p className="italic text-zinc-600 mb-6">
        O primeiro ano é marcado por grandes conquistas: sentar, gatinhar, primeiras palavras e início da autonomia. 
        É também um período de intensa aprendizagem para a família.
      </p>

      <img
        src={primeiroano}
        alt="Primeiro ano do bebé"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl h-120 object-cover"
      />

      <div className="space-y-4">
        {primeiroAnoData.map((item, index) => (
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
