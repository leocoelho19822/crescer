// eslint-disable-next-line
import React, { useState } from "react";
import primeiroTriImg from "../assets/1tri.svg";
import { FiChevronDown } from "react-icons/fi";

const trimestreData = [
 {
  id: 1,
  title: "1. Bem-estar emocional e social da mãe",
  content: (
    <div className="space-y-3">
      <p>
        O início da gravidez é marcado por intensas transformações emocionais e sociais. 
        As oscilações de humor, a ansiedade, o choro fácil e até momentos de euforia são comuns, 
        resultando de alterações hormonais (como o aumento da progesterona e estrogénio) e da 
        adaptação à nova realidade da maternidade. Esta fase pode ser acompanhada de inseguranças 
        quanto à saúde do bebé, mudanças corporais e preocupações com o futuro.
      </p>
      <p>
        Para além da dimensão biológica, existe um impacto social relevante: o relacionamento com 
        o parceiro, a família e até com os colegas de trabalho pode sofrer alterações. Muitas mães 
        relatam necessidade acrescida de apoio, compreensão e empatia. A comunicação aberta e a 
        construção de uma rede de suporte emocional são fundamentais para atravessar este período 
        de forma mais tranquila.
      </p>
      <p>
        A investigação científica mostra que o bem-estar psicológico da grávida está diretamente 
        ligado a melhores resultados na gravidez, incluindo menor risco de depressão pré-natal e 
        pós-parto. Cuidar da saúde mental desde o início é, portanto, essencial.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Aceite que é normal sentir-se mais sensível ou vulnerável.</li>
        <li>Converse regularmente com o parceiro, familiares e profissionais de saúde.</li>
        <li>Pratique atividades relaxantes como respiração profunda, caminhadas leves ou meditação.</li>
        <li>Mantenha uma rede de apoio social e emocional ativa.</li>
        <li>Se sentir ansiedade ou tristeza persistente, procure ajuda especializada.</li>
      </ul>
    </div>
  ),
},

  {
  id: 2,
  title: "2. O meu corpo",
  content: (
    <div className="space-y-3">
      <p>
        Durante o primeiro trimestre, o corpo da mãe passa por mudanças rápidas e intensas, 
        consequência direta do aumento hormonal e da adaptação do organismo à gestação. 
        Algumas destas alterações podem ser desconfortáveis, mas são geralmente transitórias 
        e fazem parte do processo natural da gravidez.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Náuseas e vómitos:</strong> conhecidos como “enjoo matinal”, podem ocorrer a qualquer hora 
          do dia, sendo mais frequentes nas primeiras semanas devido ao aumento da hormona beta-hCG.
        </li>
        <li>
          <strong>Cansaço e sonolência:</strong> o corpo trabalha mais para sustentar a gravidez, o que 
          provoca fadiga acentuada e necessidade de descanso.
        </li>
        <li>
          <strong>Tensão e aumento mamário:</strong> as mamas tornam-se mais sensíveis e pesadas, 
          preparando-se para a futura amamentação.
        </li>
        <li>
          <strong>Alterações no paladar e olfato:</strong> sabores e cheiros podem parecer diferentes ou mais intensos, 
          contribuindo para os enjoos ou mudanças no apetite.
        </li>
        <li>
          <strong>Aumento da frequência urinária:</strong> causado pela maior irrigação sanguínea na região pélvica 
          e pelo crescimento do útero, que começa a pressionar a bexiga.
        </li>
        <li>
          <strong>Possíveis tonturas e dores de cabeça:</strong> relacionadas a oscilações da pressão arterial 
          e mudanças no sistema circulatório.
        </li>
      </ul>
      <p>
        Apesar de serem manifestações comuns, cada mulher vive a gravidez de forma diferente: 
        algumas sentem todos os sintomas, outras quase nenhum. O acompanhamento médico regular 
        ajuda a distinguir o que é esperado do que pode requerer atenção especial.
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
        Durante o primeiro trimestre acontecem alguns dos momentos mais importantes do
        desenvolvimento do bebé. Nestas primeiras semanas, ele passa de um pequeno embrião
        a um feto já com forma reconhecível. Cada etapa é essencial para garantir o seu
        crescimento saudável.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Semanas 3 a 4:</strong> forma-se o <em>tubo neural</em>, que dará origem ao cérebro e à medula espinhal.
        </li>
        <li>
          <strong>Semanas 5 a 6:</strong> surgem os primeiros <em>batimentos cardíacos</em>, visíveis no exame de ecografia, e 
          começam a formar-se os braços e pernas em forma de pequenos brotos.
        </li>
        <li>
          <strong>Semanas 7 a 8:</strong> aparecem os olhos, nariz e boca; o cérebro cresce rapidamente e os órgãos internos 
          começam a organizar-se.
        </li>
        <li>
          <strong>Semanas 9 a 12:</strong> o bebé já é considerado um <em>feto</em>. Os ossos iniciam a sua formação, os dedos das 
          mãos e dos pés tornam-se visíveis, e já é possível ver movimentos sutis nos exames.
        </li>
      </ul>
      <p>
        Ao final do 1.º trimestre, o bebé mede em média 6 a 8 cm e pesa cerca de 14 g. 
        Embora ainda muito pequeno, todos os principais órgãos e sistemas já estão em desenvolvimento, 
        preparando-se para crescer e amadurecer nos próximos meses.
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
        O acompanhamento médico no primeiro trimestre é fundamental para garantir a saúde
        da mãe e do bebé. É nesta fase que se estabelecem as bases de toda a gravidez,
        sendo importante cumprir as recomendações clínicas e realizar os exames iniciais.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Consulta pré-natal:</strong> deve ser realizada, idealmente, até à 10ª semana de gestação. 
          Nela, o profissional de saúde recolhe o histórico clínico, avalia fatores de risco e esclarece dúvidas.
        </li>
        <li>
          <strong>Exames laboratoriais de rotina:</strong> incluem análises ao sangue e urina para verificar anemia, 
          glicemia, função renal e hepática, grupo sanguíneo e fator Rh, além de rastreio de infeções (HIV, sífilis, hepatite B, rubéola, toxoplasmose).
        </li>
        <li>
          <strong>Ecografia do 1.º trimestre:</strong> realizada entre as semanas 11 e 13, permite avaliar a vitalidade do feto, 
          medir a translucência da nuca (importante no rastreio de anomalias cromossómicas) e confirmar a idade gestacional.
        </li>
        <li>
          <strong>Suplementação nutricional:</strong> o ácido fólico deve ser iniciado idealmente antes da conceção e mantido até, pelo menos, ao final do 1.º trimestre, 
          reduzindo o risco de malformações do tubo neural. O ferro, o iodo e a vitamina D podem ser recomendados consoante cada caso.
        </li>
        <li>
          <strong>Estilo de vida saudável:</strong> evitar o consumo de álcool, tabaco e drogas, bem como reduzir a ingestão de cafeína. 
          Uma alimentação equilibrada, rica em frutas, legumes e cereais integrais, é essencial.
        </li>
      </ul>
      <p>
        Seguir estas orientações contribui para uma gravidez mais tranquila e segura. 
        Em caso de sintomas persistentes como hemorragias, dores fortes ou febre, deve-se procurar assistência médica imediata.
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
        Para além dos cuidados médicos e físicos, o primeiro trimestre pode ser um momento
        propício para iniciar rotinas que promovam o bem-estar global da mãe e estimulem
        o vínculo precoce com o bebé. Atividades leves e práticas culturais simples
        ajudam a equilibrar corpo e mente, reduzindo o stress e fortalecendo a dimensão
        emocional da gravidez.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Caminhadas leves e alongamentos:</strong> melhoram a circulação, reduzem o inchaço e ajudam no controlo da ansiedade.
        </li>
        <li>
          <strong>Yoga ou pilates adaptados para grávidas:</strong> contribuem para a flexibilidade, consciência corporal e preparação para o parto, 
          desde que praticados com orientação profissional.
        </li>
        <li>
          <strong>Ouvir música suave:</strong> estudos indicam que a música pode reduzir a tensão materna e criar um ambiente de relaxamento benéfico.
        </li>
        <li>
          <strong>Leitura e contação de histórias:</strong> favorecem o vínculo afetivo entre mãe, pai e bebé, além de estimularem a imaginação e promoverem momentos de partilha.
        </li>
        <li>
          <strong>Participação em atividades culturais:</strong> assistir a um concerto, visitar exposições ou participar em grupos de apoio para grávidas pode enriquecer a experiência da maternidade.
        </li>
      </ul>
      <p>
        O mais importante é que estas atividades sejam adaptadas ao ritmo de cada mulher e
        proporcionem prazer, sem sobrecarga física. Manter hábitos culturais e criativos
        desde cedo fortalece não só a saúde mental da mãe, como também o ambiente emocional
        em que o bebé irá crescer.
      </p>
    </div>
  ),
},

];

export default function PrimeiroTrimestrePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Primeiro Trimestre de Gravidez: O que esperar e como se cuidar
      </h1>
      <p className="italic text-zinc-600 mb-6">
        Descubra o que acontece no primeiro trimestre da gravidez: mudanças no corpo e nas emoções,
        desenvolvimento do bebê, exames essenciais, cuidados e atividades para fortalecer o bem-estar e o
        vínculo familiar.
      </p>

      <img
        src={primeiroTriImg}
        alt="Primeiro Trimestre"
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
                openIndex === index ? "max-h-196" : "max-h-0"
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
