// eslint-disable-next-line
import React, { useState } from "react";
import { FiChevronDown, FiAlertTriangle, FiPhoneCall } from "react-icons/fi";
import terceiroano from "../assets/3anos.svg";

const terceiroAnoData = [
  {
  id: 1,
  title: "1. Saúde e bem-estar",
  content: (
    <div className="space-y-3">
      <p>
        Entre os 3 e os 4 anos, a criança ganha maior independência e energia, explorando o 
        ambiente com mais confiança. Nesta fase, o acompanhamento da saúde continua a ser 
        fundamental para garantir um crescimento equilibrado e prevenir problemas.
      </p>
      <p>
        As consultas de rotina permitem avaliar peso, altura, visão, audição e marcos de 
        desenvolvimento. O reforço das vacinas do calendário nacional é essencial, assim 
        como a promoção de hábitos de higiene, alimentação saudável e atividade física regular.
      </p>

      <div>
        <p className="font-bold">Cuidados essenciais</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Manter <strong>consultas regulares</strong> para monitorizar crescimento e desenvolvimento.</li>
          <li>Cumprir o <strong>calendário vacinal</strong>, incluindo reforços indicados nesta idade.</li>
          <li>Incentivar <strong>hábitos de higiene oral</strong>, com escovagem supervisionada após as refeições.</li>
          <li>Promover <strong>atividade física diária</strong>, como correr, saltar e brincar ao ar livre.</li>
          <li>Assegurar um <strong>ambiente seguro</strong>, prevenindo quedas e acidentes domésticos.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Sinais de alerta</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Crescimento ou ganho de peso abaixo do esperado.</li>
          <li>Dificuldade persistente na visão ou audição.</li>
          <li>Infecções recorrentes ou problemas respiratórios frequentes.</li>
          <li>Atrasos evidentes na fala ou na interação social.</li>
        </ul>
      </div>

      <p>
        Promover a saúde e o bem-estar entre os 3 e os 4 anos significa investir em hábitos 
        saudáveis que acompanham a criança na transição para a vida escolar, fortalecendo o 
        seu desenvolvimento físico, cognitivo e emocional.
      </p>
    </div>
  ),
},
{
  id: 2,
  title: "2. Parentalidade e apoio",
  content: (
    <div className="space-y-3">
      <p>
        Entre os 3 e os 4 anos, a criança começa a demonstrar maior independência, mas ainda 
        necessita de apoio constante dos cuidadores para se sentir segura. É uma fase em que 
        explora regras sociais, aprende a partilhar e a lidar com frustrações, o que exige 
        paciência e consistência por parte da família.
      </p>
      <p>
        O papel dos cuidadores é criar um ambiente de apoio, com rotinas claras e comunicação 
        positiva. A cooperação entre os membros da família e o envolvimento em atividades em 
        conjunto fortalecem vínculos e oferecem à criança uma base emocional estável.
      </p>

      <div>
        <p className="font-bold">Estratégias de apoio à parentalidade</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Estabelecer <strong>rotinas previsíveis</strong> (refeições, sono, brincadeiras) que transmitam segurança.</li>
          <li>Usar <strong>linguagem simples e positiva</strong> para orientar comportamentos.</li>
          <li>Incentivar a <strong>autonomia</strong> em pequenas tarefas, como vestir-se ou arrumar brinquedos.</li>
          <li>Partilhar momentos de qualidade em família, reforçando o vínculo afetivo.</li>
          <li>Procurar apoio em <strong>grupos de parentalidade</strong> ou junto da equipa de saúde se surgirem dificuldades.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Quando procurar ajuda</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Sinais de <strong>exaustão persistente</strong> ou sobrecarga nos cuidadores.</li>
          <li>Conflitos familiares recorrentes relacionados com a educação da criança.</li>
          <li>Dificuldade em lidar com <strong>birras intensas</strong> ou comportamentos agressivos.</li>
          <li>Preocupações quanto ao desenvolvimento emocional ou social da criança.</li>
        </ul>
      </div>

      <p>
        O apoio parental entre os 3 e os 4 anos é essencial para ajudar a criança a desenvolver 
        competências sociais e emocionais. Um ambiente familiar equilibrado favorece a sua 
        autonomia e prepara-a para os desafios da vida escolar.
      </p>
    </div>
  ),
},
{
  id: 3,
  title: "3. Desenvolvimento do bebé",
  content: (
    <div className="space-y-3">
      <p>
        Entre os 3 e os 4 anos, a criança mostra avanços significativos em todas as áreas do 
        desenvolvimento. O corpo ganha mais coordenação, a linguagem torna-se mais clara e o 
        pensamento simbólico abre caminho para jogos de faz de conta e maior imaginação.
      </p>
      <p>
        É também uma fase de consolidação das competências sociais: a criança aprende a brincar 
        com pares, a partilhar, a negociar e a lidar com frustrações. Estes progressos variam 
        de criança para criança, mas seguir os marcos principais ajuda a acompanhar o seu ritmo.
      </p>

      <div>
        <p className="font-bold">Motor (grosseiro e fino)</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Corre, salta e sobe escadas alternando os pés.</li>
          <li>Consegue pedalar triciclo com mais segurança.</li>
          <li>Desenha círculos e começa a copiar cruzes ou linhas simples.</li>
          <li>Constrói torres de 8 a 10 blocos e usa tesoura infantil com supervisão.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Cognitivo e linguagem</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Usa <strong>frases completas</strong> de 4 a 5 palavras.</li>
          <li>Compreende conceitos de tamanho, quantidade e cores básicas.</li>
          <li>Participa em jogos de faz de conta elaborados, imitando situações do dia a dia.</li>
          <li>Consegue seguir instruções de 2 a 3 etapas.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Emocional e social</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Brinca em grupo e começa a fazer amizades.</li>
          <li>Mostra orgulho nas conquistas e busca aprovação dos adultos.</li>
          <li>Pode apresentar <strong>birras</strong>, mas começa a aprender a expressar emoções de forma mais adequada.</li>
          <li>Imita papéis familiares ou sociais nos jogos de faz de conta.</li>
        </ul>
      </div>

      <p>
        O desenvolvimento entre os 3 e os 4 anos é marcado por maior autonomia, 
        criatividade e interação social. Estimular estas competências com afeto, 
        brincadeiras e oportunidades de aprendizagem é essencial para preparar a 
        criança para a entrada no contexto escolar.
      </p>
    </div>
  ),
},
{
  id: 4,
  title: "4. Alimentação",
  content: (
    <div className="space-y-3">
      <p>
        Entre os 3 e os 4 anos, a criança já deve participar ativamente nas refeições 
        familiares, seguindo uma alimentação variada e equilibrada. É uma fase em que 
        pode surgir seletividade alimentar, mas a persistência e o exemplo dos cuidadores 
        ajudam a manter hábitos saudáveis.
      </p>
      <p>
        A relação com a comida continua a ser construída nesta idade. 
        Incentivar autonomia, oferecer variedade e evitar pressões ou recompensas 
        associadas à alimentação são estratégias importantes para que a criança 
        desenvolva uma atitude positiva em relação aos alimentos.
      </p>

      <div>
        <p className="font-bold">Princípios da alimentação saudável</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Oferecer refeições <strong>semelhantes às da família</strong>, adaptadas em textura e porção.</li>
          <li>Incluir <strong>frutas, legumes, cereais integrais, leguminosas e proteínas magras</strong> diariamente.</li>
          <li>Servir <strong>água como principal bebida</strong>; evitar sumos industrializados e refrigerantes.</li>
          <li>Reduzir alimentos ultraprocessados, ricos em sal e açúcar.</li>
          <li>Garantir <strong>regularidade</strong>: 5 a 6 pequenas refeições ao longo do dia.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Autonomia e hábitos à mesa</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Permitir que a criança <strong>use talheres</strong> e sirva-se em pequenas quantidades.</li>
          <li>Envolver a criança em tarefas simples, como ajudar a pôr a mesa.</li>
          <li>Promover refeições em família como momento de <strong>convivência e aprendizagem</strong>.</li>
          <li>Evitar distrações como televisão ou telemóveis durante as refeições.</li>
        </ul>
      </div>

      <p>
        A alimentação entre os 3 e os 4 anos é uma oportunidade para consolidar hábitos 
        saudáveis e incentivar autonomia. Com paciência e consistência, os cuidadores 
        ajudam a criança a construir uma relação equilibrada e positiva com a comida.
      </p>
    </div>
  ),
},
{
  id: 5,
  title: "5. Sono",
  content: (
    <div className="space-y-3">
      <p>
        Entre os 3 e os 4 anos, o sono continua a ser essencial para o crescimento e o 
        desenvolvimento da criança. Nesta fase, muitas já abandonam a sesta diurna, mas 
        ainda necessitam de longos períodos de descanso noturno para recuperar energias.
      </p>
      <p>
        Rotinas consistentes e um ambiente calmo continuam a ser fundamentais. 
        O estabelecimento de bons hábitos de sono nesta idade contribui para o 
        equilíbrio emocional, a aprendizagem e o comportamento diário.
      </p>

      <div>
        <p className="font-bold">Padrões e rotinas</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Necessitam em média de <strong>10 a 12 horas de sono noturno</strong>.</li>
          <li>A sesta pode deixar de ser necessária, mas deve ser respeitada se a criança mostrar cansaço.</li>
          <li>Manter <strong>rotina previsível</strong> ao deitar: higiene, leitura ou canção, ambiente tranquilo.</li>
          <li>Evitar estímulos intensos antes de dormir, como ecrãs ou brincadeiras agitadas.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Segurança e transições</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Transição do berço para a <strong>cama infantil</strong>, caso ainda não tenha ocorrido.</li>
          <li>Garantir que o quarto é seguro e livre de objetos perigosos.</li>
          <li>Manter iluminação suave, se necessário, para reduzir medos noturnos.</li>
          <li>Incentivar a criança a adormecer no próprio espaço, reforçando autonomia.</li>
        </ul>
      </div>

      <p>
        Consolidar bons hábitos de sono entre os 3 e os 4 anos favorece não só o descanso, 
        mas também a regulação emocional e o desempenho nas aprendizagens do dia a dia.
      </p>
    </div>
  ),
},
{
  id: 6,
  title: "6. Educação e disciplina iniciais",
  content: (
    <div className="space-y-3">
      <p>
        Entre os 3 e os 4 anos, a criança afirma cada vez mais a sua autonomia, 
        curiosidade e vontade própria. É comum testar limites, fazer perguntas 
        constantes e expressar frustrações através de birras. Esta etapa é 
        fundamental para começar a consolidar noções de regras, respeito e cooperação.
      </p>
      <p>
        A disciplina deve continuar a ser construída de forma positiva, baseada na 
        orientação e no exemplo dos cuidadores. Regras claras, rotinas consistentes 
        e reforço de comportamentos adequados ajudam a criança a compreender o que 
        é esperado e a sentir-se segura.
      </p>

      <div>
        <p className="font-bold">Princípios da parentalidade positiva</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Usar <strong>frases simples e objetivas</strong> para dar instruções.</li>
          <li><strong>Validar emoções</strong> (“sei que estás zangado”) e orientar para alternativas adequadas.</li>
          <li>Reforçar <strong>bons comportamentos</strong> com elogios e atenção.</li>
          <li>Aplicar <strong>limites consistentes</strong>, explicando o motivo das regras.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Ambiente de aprendizagem</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Estimular a linguagem com <strong>histórias, músicas e conversas diárias</strong>.</li>
          <li>Promover <strong>brincadeiras de faz de conta</strong>, que desenvolvem imaginação e competências sociais.</li>
          <li>Incentivar pequenas responsabilidades, como arrumar brinquedos ou ajudar a pôr a mesa.</li>
          <li>Reduzir tempo de ecrã e valorizar atividades criativas e interações presenciais.</li>
        </ul>
      </div>

      <p>
        A educação entre os 3 e os 4 anos deve equilibrar afeto e regras claras. 
        Ao oferecer limites consistentes e um ambiente estimulante, os cuidadores 
        ajudam a criança a desenvolver autonomia, responsabilidade e competências 
        sociais para a próxima etapa do crescimento.
      </p>
    </div>
  ),
},

];

export default function TerceiroAnoPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Já tenho 3 anos! Imaginar e partilhar
      </h1>

      <p className="italic text-zinc-600 mb-6">
        Dos jogos de faz de conta às primeiras amizades, aprendo a compreender regras, a partilhar e a usar a imaginação para criar histórias que me ajudam a entender o mundo à minha volta.
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
      {/* Alerta e contacto SNS24 - 4º Ano (36–48 meses) */}
<div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
  <div className="flex items-center mb-4">
    <FiAlertTriangle className="text-red-600 mr-2" size={24} />
    <h2 className="text-lg font-bold text-red-700">Quando procurar ajuda</h2>
  </div>
  <p className="text-sm text-red-800 mb-4">
    Entre os 3 e os 4 anos, procure avaliação médica se a criança apresentar casos de <strong>febre alta persistente</strong>,{" "}
    <strong>dificuldade respiratória</strong> ou <strong>convulsões</strong>.
  </p>
  <a
    href="tel:808242424"
    className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
  >
    <FiPhoneCall size={18} />
    Contactar SNS 24 (808 24 24 24)
  </a>
</div>

    </div>
  );
}
