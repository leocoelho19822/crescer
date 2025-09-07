// eslint-disable-next-line
import React, { useState } from "react";
import segundoTriImg from "../assets/2tri.svg";
import { FiChevronDown, FiAlertTriangle, FiPhoneCall } from "react-icons/fi";

const trimestreData = [
  {
  id: 1,
  title: "1. Bem-estar emocional e social da mãe",
  content: (
    <div className="space-y-3">
      <p>
        No segundo trimestre, o equilíbrio hormonal tende a trazer maior serenidade e 
        disposição. Muitas grávidas relatam sentir-se mais confiantes e otimistas, pois a 
        ansiedade inicial diminui e o corpo começa a adaptar-se melhor às mudanças. 
        A sensação de bem-estar é reforçada pela redução de sintomas como náuseas e fadiga.
      </p>
      <p>
        Este período também favorece a <strong>conexão emocional com o bebé</strong>, já que os primeiros movimentos fetais 
        (as chamadas “mexidas” ou <em>quickening</em>) tornam a gravidez mais palpável e real. 
        Socialmente, é um momento em que muitas mulheres se sentem mais confortáveis em partilhar 
        a notícia e em integrar grupos de apoio, atividades culturais e encontros de preparação 
        para a maternidade.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Aproveite a energia e o humor mais estável para planear a chegada do bebé 
          (escolha do enxoval, organização do espaço em casa, preparação logística).
        </li>
        <li>
          Participe em <strong>grupos de apoio ou encontros de grávidas</strong>, trocando experiências e fortalecendo a rede social.
        </li>
        <li>
          Continue a praticar técnicas de relaxamento, como meditação guiada, respiração ou yoga, 
          para reduzir stress e preparar-se para o parto.
        </li>
        <li>
          Fale abertamente sobre expectativas, receios e necessidades com o parceiro e profissionais 
          de saúde, reforçando a comunicação e o apoio mútuo.
        </li>
        <li>
          Explore atividades prazerosas e culturais que estimulem a criatividade e tragam leveza ao dia a dia.
        </li>
      </ul>
      <p>
        Investir no bem-estar emocional e social durante este trimestre contribui para uma maternidade 
        mais confiante e fortalece o vínculo com o bebé em formação.
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
        <p>
          Entre o 4.º e o 6.º mês de gestação, o corpo da mãe adapta-se ao crescimento acelerado do bebé. 
          Muitas grávidas relatam maior disposição, mas surgem novas transformações físicas, algumas 
          agradáveis (como a chamada “luz da gravidez”), outras menos confortáveis.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            A <strong>barriga cresce de forma visível</strong>, tornando a gravidez facilmente reconhecível.
          </li>
          <li>
            Em muitos casos há <strong>diminuição das náuseas e do cansaço</strong>, permitindo maior bem-estar diário.
          </li>
          <li>
            O <strong>aumento do apetite</strong> é comum, exigindo atenção para escolhas alimentares equilibradas.
          </li>
          <li>
            <strong>Dores lombares e nas articulações</strong> surgem devido ao peso crescente do útero e alterações na postura.
          </li>
          <li>
            Possível aparecimento de <strong>estrias e alterações na pele</strong> (como cloasma gravídico, também chamado “máscara da gravidez”).
          </li>
          <li>
            Algumas mulheres relatam <strong>sensação de falta de ar</strong> em esforços leves, resultado da elevação do diafragma.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Possíveis doenças e sinais de alerta</p>
        <p>
          Apesar de ser um período geralmente estável, é fundamental vigiar a saúde para prevenir 
          complicações. Exames específicos são recomendados.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <strong>Anemia gestacional:</strong> comum nesta fase devido ao aumento do volume sanguíneo. 
            Pode causar fadiga e palpitações.
          </li>
          <li>
            <strong>Diabetes gestacional:</strong> avaliada entre a 24.ª e a 28.ª semana com o teste de tolerância à glicose. 
            Requer acompanhamento nutricional e, em alguns casos, tratamento médico.
          </li>
          <li>
            <strong>Pressão arterial:</strong> deve ser monitorizada em todas as consultas para prevenir 
            <em> pré-eclâmpsia</em>, que pode manifestar-se com dores de cabeça, visão turva, inchaço excessivo e tensão elevada.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Saúde e bem-estar da mãe</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            Pratique <strong>atividade física leve e adaptada</strong>, como caminhadas, hidroginástica ou yoga para grávidas.
          </li>
          <li>
            Faça <strong>pausas regulares para descanso</strong>, especialmente se passa muitas horas em pé ou sentada.
          </li>
          <li>
            Utilize <strong>roupas confortáveis e sapatos adequados</strong>, evitando saltos altos para proteger a postura.
          </li>
          <li>
            Durma de lado (preferencialmente sobre o lado esquerdo), facilitando a circulação sanguínea para o bebé.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Alimentação saudável</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            Continue a <strong>suplementação de ferro e cálcio</strong> se indicada pelo profissional de saúde.
          </li>
          <li>
            Priorize <strong>alimentos ricos em fibras</strong> (frutas, legumes, cereais integrais) para prevenir obstipação.
          </li>
          <li>
            Mantenha-se <strong>bem hidratada</strong>, ingerindo água ao longo do dia (1,5 a 2 litros).
          </li>
          <li>
            Evite alimentos ultraprocessados e reduza a ingestão de açúcares para prevenir o excesso de peso.
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
        <p>
          Entre as semanas 13 e 27, o bebé passa por um crescimento acelerado e 
          adquire novas capacidades sensoriais e motoras. O feto já tem uma aparência 
          mais humana e começa a interagir com o ambiente intrauterino.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <strong>Audição:</strong> a partir da 18.ª semana, o bebé já consegue ouvir sons externos 
            e reage a vozes, música e ruídos do ambiente.
          </li>
          <li>
            <strong>Feições do rosto:</strong> tornam-se mais definidas, com sobrancelhas, cílios e cabelo fino (lanugem).
          </li>
          <li>
            <strong>Papilas gustativas:</strong> começam a formar-se, permitindo que o bebé sinta sabores 
            através do líquido amniótico.
          </li>
          <li>
            <strong>Movimentos ativos:</strong> os primeiros pontapés e voltas podem ser sentidos pela mãe, 
            criando um vínculo emocional ainda mais forte.
          </li>
          <li>
            <strong>Órgãos vitais:</strong> desenvolvimento dos pulmões, sistema digestivo e imunológico, 
            preparando o corpo para funcionar após o nascimento.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Crescimento</p>
        <p>
          Ao final do segundo trimestre, o bebé mede cerca de <strong>30 cm</strong> e pesa em torno de 
          <strong> 900 g a 1 kg</strong>. A pele ainda é fina e translúcida, mas já começa a acumular 
          gordura corporal, essencial para a regulação térmica após o nascimento.
        </p>
      </div>

      <div>
        <p className="font-bold">Vínculo afetivo</p>
        <p>
          O contacto precoce pode ser fortalecido com <strong>músicas suaves</strong>, 
          <strong>conversas frequentes</strong> e <strong>toques delicados na barriga</strong>. 
          Estes estímulos não só criam laços emocionais, como também ajudam no 
          desenvolvimento cognitivo e sensorial do bebé.
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
        <p>
          No segundo trimestre, a vigilância pré-natal torna-se mais regular e detalhada, 
          permitindo acompanhar o crescimento saudável do bebé e prevenir complicações na mãe.  
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <strong>Consulta mensal:</strong> avaliação do bem-estar materno e fetal, com monitorização de peso, 
            tensão arterial, altura uterina e batimentos cardíacos do bebé.
          </li>
          <li>
            <strong>Ecografia morfológica (20.ª–22.ª semana):</strong> exame fundamental que analisa a anatomia fetal, 
            incluindo cérebro, coração, rins, membros e coluna, além de avaliar a placenta e o líquido amniótico.
          </li>
          <li>
            <strong>Teste de tolerância à glicose:</strong> realizado entre a 24.ª e a 28.ª semana para rastrear a diabetes gestacional. 
            Caso positivo, será necessário acompanhamento nutricional e, em alguns casos, tratamento médico.
          </li>
          <li>
            <strong>Exames laboratoriais de rotina:</strong> incluem rastreio de anemia, infeções urinárias e 
            outros parâmetros relevantes para a saúde materna.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Amamentação e preparação</p>
        <p>
          Embora a amamentação só aconteça após o parto, a preparação desde já ajuda a reduzir ansiedades 
          e aumenta as probabilidades de sucesso.  
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            Participação em <strong>sessões de preparação para o parto e amamentação</strong>, muitas vezes oferecidas nos centros de saúde.
          </li>
          <li>
            Informação sobre <strong>bancos de leite humano</strong> e grupos de apoio à amamentação, que podem ser úteis em situações especiais.
          </li>
          <li>
            Orientação sobre cuidados com as mamas e posicionamento correto do bebé durante a amamentação.
          </li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Preparação para o parto</p>
        <p>
          O segundo trimestre é um bom momento para começar a planear e organizar aspectos logísticos e emocionais do nascimento.  
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            Definir o <strong>local do parto</strong> (hospital público, privado ou casa de parto, quando disponível) e conhecer a equipa de saúde.
          </li>
          <li>
            Discutir <strong>preferências para o trabalho de parto</strong>, como uso de analgesia, posições, acompanhante e contacto pele a pele.
          </li>
          <li>
            Elaborar um <strong>plano de nascimento</strong>, documento que pode ser partilhado com a equipa de saúde para alinhar expectativas.
          </li>
          <li>
            Aprender a identificar <strong>sinais de alerta</strong> de trabalho de parto prematuro: contrações regulares antes da 37.ª semana, 
            perda de líquido ou sangramento vaginal.
          </li>
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
        <p>
          No segundo trimestre, a maioria das grávidas sente-se com mais energia e
          disposição, sendo um momento favorável para manter hábitos saudáveis.
          A prática regular de exercício ajuda a controlar o peso, melhorar a circulação
          e reduzir dores típicas desta fase.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Caminhadas, natação e hidroginástica</strong>: estimulam o sistema cardiovascular sem sobrecarregar as articulações.</li>
          <li><strong>Yoga e pilates para grávidas</strong>: fortalecem a musculatura, promovem o equilíbrio e ajudam na respiração consciente.</li>
          <li><strong>Alongamentos diários</strong>: aliviam dores lombares e aumentam a flexibilidade.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Atividades culturais</p>
        <p>
          Além da preparação física, o contacto com práticas culturais e educativas
          favorece o bem-estar emocional e contribui para o desenvolvimento sensorial
          e cognitivo do bebé.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Ler em voz alta</strong>: promove o vínculo afetivo e familiariza o bebé com a voz dos pais.</li>
          <li><strong>Ouvir músicas relaxantes</strong> ou com valor cultural para a família, criando memórias sonoras desde a gestação.</li>
          <li><strong>Workshops e palestras</strong> sobre parentalidade, cuidados com o recém-nascido e amamentação.</li>
          <li><strong>Visitas culturais</strong> a museus, concertos ou eventos familiares, adaptados ao bem-estar da grávida.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Dicas para vínculo e cultura familiar</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Preparar o quarto do bebé em família, envolvendo irmãos e parceiros nas escolhas.</li>
          <li>Registar momentos da gravidez em <strong>fotografias, vídeos ou diário pessoal</strong>.</li>
          <li>Conversar com o bebé, incluindo familiares próximos, fortalecendo a ligação afetiva desde cedo.</li>
          <li>Criar <strong>rituais familiares</strong>, como escolher uma canção especial para ouvir durante a gravidez.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Sugestões de leitura</p>
        <p>
          O segundo trimestre é uma boa oportunidade para aprofundar conhecimentos
          sobre parentalidade e saúde materna, preparando-se de forma mais consciente
          para a nova fase.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Livros e artigos sobre <strong>desenvolvimento fetal</strong> no segundo trimestre.</li>
          <li>Leituras sobre <strong>parentalidade positiva</strong> e estratégias de educação.</li>
          <li>Guias de <strong>saúde emocional</strong> e bem-estar durante a gestação.</li>
          <li>Materiais práticos sobre <strong>preparação para o parto e amamentação</strong>.</li>
        </ul>
      </div>
    </div>
  ),
},

];

export default function SegundoTrimestrePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Segundo Trimestre de Gravidez: O equilíbrio entre mudanças e bem-estar
      </h1>
      <p className="italic text-zinc-600 mb-6">
        O segundo trimestre é conhecido como a fase de maior bem-estar na gravidez. Saiba o que acontece com o corpo da mãe, como o bebê se desenvolve e quais os cuidados essenciais para esta etapa.
      </p>

      <img
        src={segundoTriImg}
        alt="Segundo Trimestre"
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
      {/* Alerta e contacto SNS24 - 2º Trimestre */}
<div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
  <div className="flex items-center mb-4">
    <FiAlertTriangle className="text-red-600 mr-2" size={24} />
    <h2 className="text-lg font-bold text-red-700">Quando procurar ajuda</h2>
  </div>
  <p className="text-sm text-red-800 mb-4">
    No segundo trimestre, procure ajuda se notar{" "}
    <strong>sangramento vaginal</strong>, <strong>dores abdominais fortes</strong>, 
    <strong>perda de líquido amniótico</strong>, <strong>febre </strong>, 
    ou <strong>diminuição dos movimentos fetais</strong> após já os sentir.
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
