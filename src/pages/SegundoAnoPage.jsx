// eslint-disable-next-line
import React, { useState } from "react";
import { FiChevronDown, FiAlertTriangle, FiPhoneCall } from "react-icons/fi";
import segundoano from "../assets/2anos.svg";

const segundoAnoData = [
  {
  id: 1,
  title: "1. Saúde e bem-estar",
  content: (
    <div className="space-y-3">
      <p>
        Entre os 2 e os 3 anos, a criança torna-se cada vez mais autónoma e ativa. 
        Nesta fase, o bem-estar depende de um equilíbrio entre cuidados de saúde, 
        prevenção de acidentes e promoção de hábitos saudáveis. O acompanhamento 
        em consultas de vigilância continua a ser fundamental para monitorizar o 
        crescimento e o desenvolvimento global.
      </p>
      <p>
        É também uma idade em que surgem maior curiosidade e desejo de explorar, 
        o que aumenta o risco de quedas, intoxicações ou pequenos acidentes domésticos. 
        Garantir um ambiente seguro, aliado a rotinas consistentes de alimentação, 
        sono e higiene, é essencial para o desenvolvimento saudável.
      </p>

      <div>
        <p className="font-bold">Cuidados essenciais</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Respeitar o <strong>calendário vacinal</strong>, incluindo reforços aos 2 anos.</li>
          <li>Realizar <strong>consultas regulares</strong> para avaliar crescimento, linguagem e desenvolvimento motor.</li>
          <li>Garantir <strong>higiene oral</strong> diária com escovagem e início da consulta de saúde oral.</li>
          <li>Estimular <strong>atividade física livre</strong> em espaços seguros, incentivando o movimento.</li>
          <li>Manter <strong>ambiente protegido</strong>: segurança em escadas, janelas e produtos de limpeza fora do alcance.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Sinais de alerta</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Crescimento ou ganho de peso muito abaixo do esperado.</li>
          <li>Quedas ou acidentes frequentes pela falta de coordenação motora.</li>
          <li>Infecções respiratórias ou otites de repetição.</li>
          <li>Atrasos na linguagem: ausência de frases simples até aos 3 anos.</li>
        </ul>
      </div>

      <p>
        O investimento em saúde e bem-estar entre os 2 e os 3 anos contribui para que 
        a criança explore o mundo com segurança, confiança e energia. Pequenos cuidados 
        diários fazem toda a diferença no crescimento equilibrado.
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
        Entre os 2 e os 3 anos, a criança ganha maior autonomia e começa a testar 
        limites de forma mais clara. É um período de afirmação da identidade, 
        em que surgem as birras e a necessidade de dizer “não”. Para os cuidadores, 
        esta fase pode ser desafiante e requer paciência, consistência e afeto.
      </p>
      <p>
        O apoio mútuo entre os cuidadores e a rede familiar continua a ser essencial. 
        Dividir responsabilidades e partilhar estratégias educativas ajuda a reduzir a 
        sobrecarga e a manter um ambiente equilibrado. Procurar informação e apoio em 
        grupos de parentalidade ou junto da equipa de saúde pode trazer maior segurança 
        nesta etapa.
      </p>

      <div>
        <p className="font-bold">Estratégias de apoio à parentalidade</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Estabelecer <strong>rotinas previsíveis</strong>, que oferecem segurança à criança.</li>
          <li>Usar <strong>regras simples e consistentes</strong>, adaptadas à idade.</li>
          <li>Reforçar comportamentos positivos com <strong>elogios e atenção</strong>.</li>
          <li>Partilhar responsabilidades entre cuidadores para reduzir o cansaço.</li>
          <li>Envolver irmãos ou familiares em brincadeiras e cuidados diários.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Quando procurar ajuda</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Sinais de <strong>exaustão persistente</strong> ou dificuldade em lidar com birras.</li>
          <li>Sentimentos contínuos de <strong>tristeza, irritabilidade ou isolamento</strong> nos cuidadores.</li>
          <li>Conflitos familiares frequentes relacionados com a educação da criança.</li>
          <li>Dificuldade em criar <strong>estratégias de disciplina positiva</strong>.</li>
        </ul>
      </div>

      <p>
        O apoio à parentalidade entre os 2 e os 3 anos ajuda a transformar desafios 
        em oportunidades de crescimento. Com rotinas estáveis e uma rede de suporte, 
        a família vive esta fase com mais confiança e equilíbrio.
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
        Entre os 2 e os 3 anos, a criança passa por uma fase de enorme evolução no 
        desenvolvimento motor, cognitivo, linguístico e social. Torna-se mais independente, 
        interage de forma mais complexa com os outros e demonstra novas capacidades de 
        aprendizagem e imaginação.
      </p>
      <p>
        Apesar de haver variação no ritmo individual, acompanhar os marcos principais 
        ajuda a identificar progressos e a oferecer estímulos adequados. É também uma 
        etapa em que atrasos significativos podem ser sinalizados para acompanhamento 
        especializado.
      </p>

      <div>
        <p className="font-bold">Motor (grosseiro e fino)</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Corre com maior segurança e consegue chutar ou lançar bola.</li>
          <li>Sobe e desce escadas apoiando-se no corrimão.</li>
          <li>Começa a pedalar triciclo com ajuda.</li>
          <li>Constrói torres de 6–8 blocos e faz rabiscos mais intencionais.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Cognitivo e linguagem</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Compreende instruções de dois passos (“vai buscar o brinquedo e dá ao papá”).</li>
          <li>Vocabulário aumenta para 200 ou mais palavras até aos 3 anos.</li>
          <li>Começa a formar <strong>frases de 2 a 3 palavras</strong>.</li>
          <li>Identifica cores, partes do corpo e objetos familiares.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Emocional e social</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Mostra maior independência, mas ainda procura segurança nos cuidadores.</li>
          <li>Começa a brincar em paralelo com outras crianças e pode iniciar interações simples.</li>
          <li>Demonstra frustração em birras, mas também alegria em partilhar conquistas.</li>
          <li>Imita atividades do quotidiano (fingir cozinhar, dar comida a bonecas).</li>
        </ul>
      </div>

      <p>
        O desenvolvimento entre os 2 e os 3 anos é marcado por rápidas conquistas e 
        maior autonomia. Estimular a criança com afeto, brincadeiras e oportunidades de 
        aprendizagem contribui para que cresça confiante e preparada para os próximos desafios.
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
        Entre os 2 e os 3 anos, a alimentação da criança deve estar bem integrada na 
        rotina familiar. Nesta fase, a autonomia alimentar aumenta: a criança quer comer 
        sozinha, explorar utensílios e escolher alimentos, o que faz parte do processo 
        de aprendizagem.
      </p>
      <p>
        É comum surgirem preferências alimentares e recusas temporárias, conhecidas como 
        “neofobia alimentar”. Cabe aos cuidadores manterem a oferta variada, evitando 
        pressões excessivas, para que a criança desenvolva uma relação positiva com a comida.
      </p>

      <div>
        <p className="font-bold">Princípios da alimentação saudável</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Oferecer <strong>refeições equilibradas</strong>, semelhantes às da família, adaptadas à idade.</li>
          <li>Manter <strong>variedade de frutas, legumes e leguminosas</strong> ao longo da semana.</li>
          <li>Evitar <strong>sal, açúcar e alimentos ultraprocessados</strong>.</li>
          <li>Servir <strong>água como principal bebida</strong>, em detrimento de sumos ou refrigerantes.</li>
          <li>Incentivar a criança a <strong>comer sozinha</strong>, mesmo que suje ou demore mais tempo.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Autonomia e hábitos à mesa</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Usar pratos e talheres infantis para facilitar a aprendizagem.</li>
          <li>Promover <strong>refeições em família</strong>, reforçando o vínculo afetivo.</li>
          <li>Respeitar sinais de saciedade, evitando forçar a ingestão de comida.</li>
          <li>Evitar distrações como televisão ou telemóvel durante as refeições.</li>
        </ul>
      </div>

      <p>
        A alimentação entre os 2 e os 3 anos é uma oportunidade para consolidar hábitos 
        saudáveis e incentivar a autonomia. A paciência e a consistência dos cuidadores 
        são fundamentais para formar uma relação positiva com a comida.
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
        Entre os 2 e os 3 anos, o padrão de sono da criança começa a consolidar-se, 
        embora ainda possam ocorrer despertares noturnos ocasionais. A maioria mantém 
        uma sesta diurna, mas alguns começam a abandoná-la por volta dos 3 anos.
      </p>
      <p>
        Rotinas consistentes ao deitar e um ambiente calmo favorecem noites mais 
        tranquilas. O sono adequado é essencial para o crescimento físico, o 
        desenvolvimento cognitivo e o equilíbrio emocional.
      </p>

      <div>
        <p className="font-bold">Padrões e rotinas</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>A criança precisa de <strong>10 a 13 horas de sono</strong> por dia (incluindo sesta).</li>
          <li>Estabelecer <strong>rotina previsível</strong>: higiene, leitura ou canção e ambiente escuro.</li>
          <li>Manter horários regulares, mesmo aos fins de semana, para facilitar o adormecer.</li>
          <li>Evitar ecrãs e atividades muito estimulantes antes de dormir.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Segurança do sono</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Transição gradual do berço para a cama, quando a criança já tenta sair sozinha.</li>
          <li>Garantir que o quarto é seguro, sem objetos que representem risco de queda.</li>
          <li>Manter temperatura agradável e roupa adequada à estação.</li>
          <li>Incentivar a criança a adormecer no próprio espaço, promovendo autonomia.</li>
        </ul>
      </div>

      <p>
        Um sono de qualidade entre os 2 e os 3 anos contribui para o equilíbrio diário 
        da criança, melhorando o humor, a aprendizagem e a capacidade de explorar o mundo 
        com energia.
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
        Entre os 2 e os 3 anos, a criança começa a afirmar de forma mais clara a sua 
        autonomia e personalidade. É comum testar limites, dizer “não” com frequência 
        e manifestar birras, que fazem parte do desenvolvimento saudável. Para os 
        cuidadores, esta fase exige firmeza, paciência e afeto.
      </p>
      <p>
        A disciplina deve ser entendida como orientação, não como punição. 
        A consistência nas regras, aliada ao reforço positivo, ajuda a criança 
        a compreender o que é esperado e a desenvolver segurança emocional.
      </p>

      <div>
        <p className="font-bold">Princípios da parentalidade positiva</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Dar <strong>instruções simples e claras</strong>, adequadas à idade.</li>
          <li><strong>Validar emoções</strong> (“percebo que estás zangado”) e oferecer alternativas.</li>
          <li>Reforçar <strong>comportamentos positivos</strong> com elogios e atenção.</li>
          <li>Estabelecer <strong>limites consistentes</strong> com calma e previsibilidade.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Ambiente de aprendizagem</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Promover <strong>brincadeiras simbólicas</strong> (faz de conta, jogos simples).</li>
          <li>Estimular a linguagem com <strong>livros ilustrados, música e rimas</strong>.</li>
          <li>Dar espaço para <strong>brincadeira livre</strong>, incentivando autonomia e criatividade.</li>
          <li>Reduzir tempo de ecrã e priorizar interações presenciais.</li>
        </ul>
      </div>

      <p>
        A educação entre os 2 e os 3 anos deve equilibrar afeto e regras claras. 
        Com limites consistentes e um ambiente estimulante, a criança aprende a 
        lidar com as suas emoções e a desenvolver hábitos saudáveis para os anos seguintes.
      </p>
    </div>
  ),
},

];

export default function SegundoAnoPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Já tenho 2 anos! Explorar, falar e crescer
      </h1>

      <p className="italic text-zinc-600 mb-6">
        Aprendo a comunicar de forma mais clara, a brincar com outras crianças e a testar limites, enquanto descubro a minha própria identidade e conquisto novas formas de me expressar.
      </p>

      <img
        src={segundoano}
        alt="Segundo ano do bebé"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl h-120 object-cover"
      />

      <div className="space-y-4">
        {segundoAnoData.map((item, index) => (
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
      {/* Alerta e contacto SNS24 - 3º Ano (24–36 meses) */}
<div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
  <div className="flex items-center mb-4">
    <FiAlertTriangle className="text-red-600 mr-2" size={24} />
    <h2 className="text-lg font-bold text-red-700">Quando procurar ajuda</h2>
  </div>
  <p className="text-sm text-red-800 mb-4">
    Entre os 2 e os 3 anos, procure avaliação médica se a criança apresentar situações de <strong>febre persistente</strong>,{" "}
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
