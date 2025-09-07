// eslint-disable-next-line
import React, { useState } from "react";
import terceiroTriImg from "../assets/3tri.svg";
import { FiChevronDown, FiAlertTriangle, FiPhoneCall } from "react-icons/fi";

const trimestreData = [
  {
  id: 1,
  title: "1. Bem-estar emocional e social da mãe",
  content: (
    <div className="space-y-3">
      <p>
        No terceiro trimestre, a proximidade do parto intensifica emoções como entusiasmo, 
        ansiedade e, por vezes, receios. Muitas mulheres descrevem o fenómeno do 
        “<em>nesting</em>”, caracterizado por uma energia direcionada para preparar a casa 
        e organizar o ambiente para a chegada do bebé. Este impulso pode ser positivo, mas 
        também gerar fadiga e aumentar a pressão para que “tudo esteja pronto” a tempo.
      </p>
      <p>
        Nesta fase, o <strong>apoio emocional e social</strong> torna-se ainda mais importante. 
        Conversar abertamente com o parceiro e com a rede de apoio sobre o plano de parto, 
        os cuidados iniciais ao recém-nascido e a divisão de tarefas no pós-parto ajuda a 
        reduzir a ansiedade e fortalece a confiança da mãe. Participar em grupos de preparação 
        para o parto ou de parentalidade também pode trazer segurança e partilha de experiências.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Reforce a <strong>rede de apoio</strong> (parceiro, família, amigos) para o período do pós-parto.</li>
        <li>Pratique <strong>técnicas de relaxamento</strong> como respiração consciente, alongamentos ou mindfulness.</li>
        <li>Participe em <strong>cursos de preparação para o parto e amamentação</strong>.</li>
        <li>Estabeleça <strong>rotinas de descanso</strong>, respeitando os sinais de cansaço do corpo.</li>
        <li>
          Procure apoio profissional se sentir <strong>tristeza persistente, medo intenso ou irritabilidade</strong>, 
          prevenindo a depressão perinatal.
        </li>
      </ul>
      <p>
        Investir no bem-estar emocional no final da gravidez contribui para um parto mais confiante 
        e para uma transição mais tranquila para a parentalidade, beneficiando tanto a mãe como o bebé.
      </p>
    </div>
  ),
},
{
  id: 2,
  title: "2. O meu corpo",
  content: (
    <div className="space-y-3">
      <p>
        No terceiro trimestre, o corpo da mãe encontra-se em plena adaptação para o parto. 
        O crescimento acelerado do bebé aumenta a pressão sobre os órgãos internos e pode 
        intensificar alguns desconfortos físicos. Apesar destes sintomas, é um período crucial 
        de preparação natural do organismo para o nascimento.
      </p>
      <p>
        É importante distinguir alterações normais das que exigem atenção médica. 
        O acompanhamento regular com a equipa de saúde garante que a mãe e o bebé se 
        mantêm saudáveis até ao final da gestação.
      </p>
      <div>
        <p className="font-bold">Sintomas mais comuns</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Dores lombares e pélvicas</strong> causadas pelo peso do útero.</li>
          <li><strong>Inchaço</strong> em pés e tornozelos, sobretudo ao fim do dia.</li>
          <li><strong>Azia e refluxo</strong> frequentes após as refeições.</li>
          <li><strong>Dificuldade para dormir</strong> e idas frequentes à casa de banho.</li>
          <li><strong>Contrações de Braxton Hicks</strong>, geralmente irregulares e indolores.</li>
          <li><strong>Sensação de falta de ar</strong> devido à elevação do diafragma.</li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Sinais de alerta</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Pré-eclâmpsia:</strong> dor de cabeça forte, visão turva, tensão alta.</li>
          <li><strong>Comichão intensa</strong> em mãos e pés (colestase intra-hepática).</li>
          <li><strong>Contrações regulares antes das 37 semanas</strong> (risco de parto prematuro).</li>
          <li><strong>Redução clara dos movimentos do bebé</strong>, que deve ser valorizada.</li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Cuidados recomendados</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Dormir de lado</strong>, preferencialmente à esquerda, com apoio de almofadas.</li>
          <li><strong>Alongamentos suaves</strong> e exercícios do pavimento pélvico.</li>
          <li><strong>Alimentação fracionada</strong> em pequenas porções para reduzir azia.</li>
          <li><strong>Meias de compressão</strong>, se recomendadas pelo médico, para aliviar inchaço.</li>
        </ul>
      </div>
      <p>
        Estas adaptações fazem parte da preparação natural do corpo para o parto. 
        Seguir hábitos saudáveis e estar atenta a sinais de alerta contribui para um final 
        de gravidez mais seguro e confortável.
      </p>
    </div>
  ),
},

{
  id: 3,
  title: "3. O meu bebé",
  content: (
    <div className="space-y-3">
      <p>
        No terceiro trimestre, o bebé encontra-se em fase final de desenvolvimento. 
        Os órgãos já estão formados e passam por processos de maturação essenciais 
        para a vida fora do útero. Nesta etapa, o crescimento é rápido e visível, 
        preparando o corpo para o nascimento.
      </p>
      <p>
        O bebé também responde de forma mais clara a estímulos externos, como luzes, 
        sons e movimentos. As suas rotinas de sono e vigília tornam-se mais definidas, 
        o que ajuda os pais a reconhecerem padrões de atividade.
      </p>
      <div>
        <p className="font-bold">Desenvolvimento e capacidades</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Pulmões</strong> em amadurecimento, prontos para a respiração após o parto.</li>
          <li><strong>Depósito de gordura</strong> sob a pele, ajudando na regulação térmica.</li>
          <li><strong>Movimentos mais fortes e coordenados</strong>, incluindo voltas e pontapés evidentes.</li>
          <li><strong>Resposta a estímulos</strong> de voz, música e luz com movimentos ou aceleração cardíaca.</li>
          <li><strong>Posição cefálica</strong> (cabeça para baixo), comum nas últimas semanas, preparando-se para o parto.</li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Crescimento</p>
        <p>
          No final da gestação, o bebé mede em média <strong>48 a 52 cm</strong> e pesa cerca de 
          <strong> 3 a 3,5 kg</strong>, embora haja variações individuais. A pele torna-se mais lisa, 
          perde parte da lanugem (penugem fina) e mantém o <em> vérnix</em>, uma camada protetora esbranquiçada.
        </p>
      </div>
      <div>
        <p className="font-bold">Vínculo afetivo</p>
        <p>
          Nesta fase, o bebé reconhece vozes familiares e pode acalmar-se com músicas ou palavras repetidas. 
          Conversar, cantar ou acariciar a barriga fortalece o <strong>vínculo emocional</strong> e ajuda 
          a preparar a transição para o contacto após o nascimento.
        </p>
      </div>
      <p>
        O terceiro trimestre é, portanto, uma fase em que o bebé se torna cada vez mais ativo e pronto 
        para a vida fora do útero, estabelecendo laços precoces com a família e concluindo o ciclo de 
        crescimento intrauterino.
      </p>
    </div>
  ),
},

{
  id: 4,
  title: "4. Saúde materna e cuidados",
  content: (
    <div className="space-y-3">
      <p>
        No terceiro trimestre, o acompanhamento pré-natal torna-se mais frequente e 
        detalhado. Esta é uma fase crucial para garantir a saúde da mãe e do bebé, 
        identificar precocemente complicações e preparar a família para o parto.
      </p>
      <p>
        As consultas e exames ajudam a monitorizar o bem-estar fetal, o estado clínico 
        da grávida e a planear os últimos passos antes do nascimento. É também o momento 
        de esclarecer dúvidas sobre o trabalho de parto, amamentação e cuidados imediatos 
        ao recém-nascido.
      </p>
      <div>
        <p className="font-bold">Consultas e exames essenciais</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Consultas quinzenais ou semanais</strong> nas últimas semanas, avaliando peso, tensão arterial e movimentos fetais.</li>
          <li><strong>Ecografia do 3.º trimestre</strong> (30.ª–34.ª semana), para verificar crescimento, posição fetal, placenta e líquido amniótico.</li>
          <li><strong>Cardiotocografia (CTG)</strong>, geralmente após as 37 semanas, para monitorizar os batimentos cardíacos do bebé.</li>
          <li><strong>Exames laboratoriais de rotina</strong>, incluindo hemograma e urina, para rastrear anemia e infeções.</li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Preparação para o parto</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Discutir e registar um <strong>plano de parto</strong> com preferências sobre analgesia, posições e acompanhante.</li>
          <li>Organizar a <strong>mala da maternidade</strong> para mãe e bebé com antecedência.</li>
          <li>Aprender a reconhecer sinais de <strong>trabalho de parto</strong>: contrações regulares, perda de líquido ou sangramento.</li>
          <li>Conhecer o <strong>hospital ou maternidade</strong> onde o parto ocorrerá, visitando ou participando em sessões de esclarecimento, quando disponíveis.</li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Amamentação e cuidados iniciais</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Participar em <strong>sessões de preparação para a amamentação</strong> oferecidas em centros de saúde ou hospitais.</li>
          <li>Informar-se sobre <strong>apoios pós-parto</strong>, como grupos de amamentação e visitas domiciliárias de enfermagem.</li>
          <li>Conhecer as <strong>primeiras vacinas e rastreios neonatais</strong>, preparando-se para os cuidados iniciais do bebé.</li>
        </ul>
      </div>
      <p>
        Esta etapa final da gravidez é uma oportunidade para reforçar a confiança da mãe 
        e da família, preparar-se logisticamente para o parto e garantir que tudo está 
        alinhado para uma transição segura e tranquila para a parentalidade.
      </p>
    </div>
  ),
},

{
  id: 5,
  title: "5. Atividades e desenvolvimento cultural",
  content: (
    <div className="space-y-3">
      <p>
        No terceiro trimestre, o ritmo das atividades pode ser ajustado às limitações físicas 
        e ao maior cansaço, mas manter práticas leves e prazerosas continua a ser essencial 
        para o bem-estar da mãe e para o vínculo com o bebé.
      </p>
      <p>
        Atividades culturais e momentos de lazer também ajudam a reduzir a ansiedade em torno 
        do parto, favorecem a socialização e estimulam o desenvolvimento sensorial do bebé, 
        que já reage de forma clara a sons e estímulos externos.
      </p>
      <div>
        <p className="font-bold">Atividades físicas leves</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Caminhadas curtas</strong> em locais seguros e tranquilos para estimular a circulação.</li>
          <li><strong>Alongamentos suaves e yoga para grávidas</strong>, adaptados ao estágio da gestação.</li>
          <li><strong>Exercícios de respiração</strong>, úteis para relaxamento e preparação para o parto.</li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Atividades culturais e de lazer</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Ouvir música relaxante</strong> ou com valor afetivo, criando memórias sonoras para o bebé.</li>
          <li><strong>Ler em voz alta</strong>, promovendo vínculo e estimulando a familiarização com a voz dos pais.</li>
          <li><strong>Participar em encontros ou workshops</strong> sobre parentalidade, parto e amamentação.</li>
          <li><strong>Visitar espaços culturais</strong>, como museus ou concertos leves, se houver disposição.</li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Sugestões para vínculo familiar</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Preparar em família o <strong>quarto ou enxoval do bebé</strong>, envolvendo irmãos e parceiro.</li>
          <li>Registar momentos da gravidez em <strong>fotografias ou diário pessoal</strong>.</li>
          <li>Criar <strong>rituais familiares</strong>, como escolher uma canção para ouvir no parto ou na chegada a casa.</li>
        </ul>
      </div>
      <p>
        Mais do que a intensidade das atividades, o importante é que tragam prazer e equilíbrio. 
        Pequenos gestos culturais e afetivos ajudam a reforçar o bem-estar da mãe e criam um ambiente 
        positivo para a chegada do bebé.
      </p>
    </div>
  ),
},

];

export default function TerceiroTrimestrePage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
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
      {/* Alerta e contacto SNS24 - 3º Trimestre */}
<div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
  <div className="flex items-center mb-4">
    <FiAlertTriangle className="text-red-600 mr-2" size={24} />
    <h2 className="text-lg font-bold text-red-700">Quando procurar ajuda</h2>
  </div>
  <p className="text-sm text-red-800 mb-4">
    No terceiro trimestre, procure observação médica se tiver{" "}
    <strong>contrações dolorosas e regulares antes das 37 semanas</strong>, 
    <strong>perda de sangue</strong>, <strong>saída de líquido claro</strong>, 
    <strong>diminuição ou ausência de movimentos fetais </strong> 
    ou <strong>dores de cabeça intensas acompanhadas de visão turva e inchaço súbito</strong>.
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
