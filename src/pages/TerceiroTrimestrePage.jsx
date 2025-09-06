// eslint-disable-next-line
import React, { useState } from "react";
import terceiroTriImg from "../assets/3tri.svg";
import { FiChevronDown } from "react-icons/fi";

const trimestreData = [
  {
    id: 1,
    title: "1. Bem-estar emocional e social da mãe",
    content: (
      <div className="space-y-3">
        <p>
          No terceiro trimestre, a proximidade do parto pode trazer uma mistura de emoções:
          entusiasmo, ansiedade e, por vezes, receios. Muitas mulheres relatam o “<em>nesting</em>”
          (vontade de organizar a casa) e uma necessidade maior de apoio emocional e prático.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Fortaleça a <strong>rede de apoio</strong> (parceiro, família, amigos) e alinhe expectativas sobre o pós-parto.
          </li>
          <li>
            Pratique <strong>técnicas de relaxamento</strong> (respiração, mindfulness) e rotinas de sono.
          </li>
          <li>
            Participe em <strong>grupos de preparação para o parto e parentalidade</strong>.
          </li>
          <li>
            Se notar <strong>tristeza persistente, medo intenso ou irritabilidade</strong> que interfira no dia a dia, fale com a equipa de saúde
            (prevenção de depressão perinatal).
          </li>
        </ul>
        <p>
          Conversas abertas com o parceiro sobre plano de parto, cuidados ao recém-nascido e divisão de tarefas
          ajudam a reduzir a ansiedade e promovem um início de parentalidade mais confiante.
        </p>
      </div>
    ),
  },

  {
    id: 2,
    title: "2. O meu corpo",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-bold">Sintomas e alterações no corpo</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Crescimento acentuado da barriga</strong> e aumento de peso.</li>
            <li><strong>Dores lombares</strong>, pélvicas e nas articulações; postura alterada.</li>
            <li><strong>Edemas</strong> (inchaço) em pés/tornozelos, sobretudo ao fim do dia.</li>
            <li><strong>Azia e refluxo</strong>, sensação de estômago “cheio”.</li>
            <li><strong>Dificuldade para dormir</strong> e necessidade de urinar com frequência.</li>
            <li><strong>Contrações de Braxton Hicks</strong> (irregulares e indolores, preparatórias).</li>
            <li><strong>Falta de ar aos esforços</strong> pela elevação do diafragma.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Possíveis doenças e sinais de alerta</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Pré-eclâmpsia</strong>: dor de cabeça intensa, visão turva, dor no topo do abdómen, inchaço súbito, tensão elevada.
            </li>
            <li>
              <strong>Colestase intra-hepática</strong>: <em>comichão intensa</em>, especialmente em palmas e plantas dos pés.
            </li>
            <li>
              <strong>Trabalho de parto prematuro</strong>: contrações regulares antes das 37 semanas, perda de líquido ou sangramento.
            </li>
            <li>
              <strong>Diminuição dos movimentos fetais</strong>: procure avaliação se notar redução clara das mexidas.
            </li>
            <li>
              <strong>Infecções urinárias</strong>: ardor ao urinar, dor lombar, febre.
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Saúde e bem-estar da mãe</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Dormir de lado (preferência para o esquerdo)</strong> e usar almofadas entre os joelhos/abaixo da barriga.
            </li>
            <li>
              <strong>Exercícios do pavimento pélvico</strong> (Kegel) e alongamentos suaves; considerar <em>bola de parto</em>.
            </li>
            <li>
              <strong>Faixa de suporte</strong> para aliviar lombar/pélvis, se indicado.
            </li>
            <li>
              <strong>Hidratação e alimentação fracionada</strong> (pequenas refeições) para azia e refluxo.
            </li>
            <li>
              <strong>Meias de compressão</strong> para edemas e sensação de pernas pesadas (se recomendado).
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    title: "3. O meu bebé",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-bold">Desenvolvimento cognitivo e físico</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Ganho de peso rápido</strong> e depósito de gordura para regulação térmica.</li>
            <li><strong>Maturação pulmonar</strong> (produção de surfactante) e do sistema nervoso central.</li>
            <li><strong>Movimentos fortes</strong>, soluços e <strong>ciclos de sono-vigília</strong> mais definidos.</li>
            <li><strong>Resposta a estímulos</strong> sonoros e luminosos; habituação a vozes familiares.</li>
            <li><strong>Posicionamento cefálico</strong> nas últimas semanas para o parto (na maioria dos casos).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Crescimento</p>
          <p>
            Perto do termo, o bebé mede tipicamente <strong>45–50 cm</strong> e pesa entre <strong>2,8–3,6 kg</strong>,
            variando conforme fatores familiares e individuais.
          </p>
        </div>

        <div>
          <p className="font-bold">Vínculo afetivo</p>
          <p>
            <strong>Conversas, músicas e toques suaves</strong> na barriga reforçam a ligação.
            O parceiro e irmãos podem participar, criando memórias afetivas antes do nascimento.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 4,
    title: "4. Saúde materna e cuidados",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-bold">Consultas e exames essenciais</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Consulta quinzenal a partir de 36 semanas</strong> (ou conforme indicação), com vigilância de peso, tensão e altura uterina.
            </li>
            <li>
              <strong>Ecografia do 3.º trimestre</strong> (habitualmente entre 30–34 semanas): crescimento, placenta, líquido amniótico e posição fetal.
            </li>
            <li>
              <strong>Rastreio do Streptococcus do grupo B</strong> (cultura vaginal/retal por volta das 35–37 semanas), quando aplicável localmente.
            </li>
            <li>
              <strong>Atualização vacinal</strong> conforme orientação clínica (ex.: tosse convulsa na gravidez e gripe na época sazonal).
            </li>
            <li>
              <strong>CTG/monitorização fetal</strong> se indicado pela equipa de saúde.
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Amamentação e preparação</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Participar em <strong>sessões práticas</strong> de pega/posicionamento e primeiros dias do aleitamento.</li>
            <li>Plano para <strong>rede de apoio</strong> no pós-parto (tarefas domésticas, descanso da mãe, visitas).</li>
            <li>Informar-se sobre <strong>apoio em aleitamento</strong> (consultas, grupos, linha de ajuda).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Preparação para o parto</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Plano de nascimento</strong>: preferências de analgesia, posições, acompanhante, contacto pele-a-pele.</li>
            <li><strong>Mala da maternidade</strong> pronta (mãe e bebé) e documentos organizados.</li>
            <li><strong>Sinais de início de trabalho de parto</strong>: contrações ritmadas e dolorosas, perda de líquido, tampão mucoso com sangue.</li>
            <li><strong>Técnicas de alívio da dor</strong>: respiração, água morna, bola, movimento/gravidade.</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 5,
    title: "5. Atividades e desenvolvimento cultural",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-bold">Atividades físicas recomendadas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Caminhadas e alongamentos suaves</strong> para mobilidade e circulação.</li>
            <li><strong>Exercícios pélvicos</strong> (mobilidade/respiração) e <strong>massagem perineal</strong> a partir de ~34 semanas.</li>
            <li><strong>Técnicas de respiração e relaxamento</strong> para o trabalho de parto.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Atividades culturais</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Leitura em voz alta</strong> e escolha de uma <strong>playlist do parto</strong>.</li>
            <li><strong>Registo de memórias</strong> (diário, fotografias, vídeo da gravidez).</li>
            <li><strong>Visitas culturais leves</strong> (quando confortável) ou atividades artísticas em casa.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Vínculo e cultura familiar</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Preparar os <strong>últimos detalhes do quarto</strong> e do enxoval em família.</li>
            <li>Envolver <strong>irmãos mais velhos</strong> em conversas e rotinas de boas-vindas.</li>
            <li>Criar <strong>rituais</strong> (histórias, músicas, mensagens) para o momento da chegada.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function TerceiroTrimestrePage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Terceiro Trimestre de Gravidez: Preparação para a chegada do bebé
      </h1>
      <p className="italic text-zinc-600 mb-6">
        A reta final da gravidez: como o corpo se adapta, como o bebé evolui e quais os cuidados
        essenciais para o parto e o pós-parto.
      </p>

      <img
        src={terceiroTriImg}
        alt="Terceiro Trimestre"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl h-120 object-cover"
      />

      <div className="space-y-4">
        {trimestreData.map((item, index) => (
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
