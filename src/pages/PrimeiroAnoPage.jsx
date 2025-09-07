// eslint-disable-next-line
import React, { useState } from "react";
import { FiChevronDown, FiAlertTriangle, FiPhoneCall } from "react-icons/fi";
import primeiroano from "../assets/1ano.svg";

const primeiroAnoData = [
  {
  id: 1,
  title: "1. Saúde e bem-estar",
  content: (
    <div className="space-y-3">
      <p>
        Entre 1 e 2 anos, o bebé transforma-se rapidamente numa criança pequena, mais ativa 
        e curiosa. Esta fase exige atenção redobrada à saúde e ao ambiente em que cresce, 
        pois a exploração constante aumenta o risco de quedas, acidentes e infeções comuns. 
        O acompanhamento médico regular continua a ser fundamental para vigiar o crescimento, 
        o desenvolvimento e prevenir problemas futuros.
      </p>
      <p>
        Além do controlo de peso, altura e perímetro cefálico, as consultas permitem avaliar 
        marcos de desenvolvimento motor, cognitivo e da linguagem. O calendário vacinal mantém-se 
        como elemento essencial de proteção contra doenças graves, enquanto hábitos de higiene, 
        sono e alimentação saudável sustentam o bem-estar global da criança.
      </p>

      <div>
        <p className="font-bold">Cuidados essenciais</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Respeitar o <strong>calendário de vacinas</strong>, incluindo reforços previstos entre os 12 e 18 meses.</li>
          <li>Manter <strong>consultas de vigilância</strong> para acompanhar crescimento, dentição e desenvolvimento.</li>
          <li>Garantir <strong>ambiente seguro</strong>, com proteções em escadas, tomadas e objetos pequenos fora do alcance.</li>
          <li>Incentivar <strong>higiene oral</strong>, com escovagem suave dos dentes duas vezes ao dia.</li>
          <li>Promover <strong>atividade física livre</strong>, permitindo que a criança explore e movimente-se em segurança.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Sinais de alerta</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Perda de interesse em brincar ou interagir com outras pessoas.</li>
          <li>Dificuldade persistente em andar com apoio após os 18 meses.</li>
          <li>Ausência de palavras simples ou falta de resposta ao nome após os 18 meses.</li>
          <li>Febres recorrentes, infecções frequentes ou perda de peso inexplicada.</li>
        </ul>
      </div>

      <p>
        Garantir a saúde e o bem-estar entre 1 e 2 anos é investir num crescimento equilibrado. 
        Consultas regulares, ambiente seguro e estímulos adequados fazem toda a diferença para que 
        a criança se desenvolva de forma saudável e confiante.
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
        Entre 1 e 2 anos, a parentalidade ganha novos desafios. A criança começa a andar, 
        explorar o ambiente e afirmar a sua vontade, o que exige dos cuidadores paciência, 
        flexibilidade e presença constante. É um período intenso de descobertas, em que o 
        apoio mútuo entre os cuidadores e a rede familiar é essencial para manter o equilíbrio 
        emocional e a organização da rotina.
      </p>
      <p>
        A partilha de responsabilidades e a comunicação aberta entre os cuidadores ajudam a 
        reduzir a sobrecarga, prevenindo o cansaço extremo. Além disso, procurar apoio em 
        serviços de saúde, grupos de pais ou programas comunitários pode trazer segurança 
        adicional e partilha de experiências.
      </p>

      <div>
        <p className="font-bold">Estratégias de apoio</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Dividir as <strong>tarefas do dia a dia</strong>, como alimentação, higiene e brincadeiras.</li>
          <li>Manter <strong>rotinas previsíveis</strong>, que oferecem segurança e reduzem birras.</li>
          <li>Valorizar o <strong>tempo de descanso</strong> e autocuidado dos cuidadores.</li>
          <li>Procurar <strong>apoio em grupos de pais</strong> para trocar experiências e reduzir a sensação de isolamento.</li>
          <li>Envolver irmãos e familiares próximos nas rotinas para reforçar os vínculos afetivos.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Quando procurar ajuda</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Sinais de <strong>exaustão persistente</strong> ou falta de motivação nos cuidadores.</li>
          <li>Dificuldade em <strong>lidar com birras</strong> ou comportamentos desafiantes da criança.</li>
          <li>Sentimentos contínuos de <strong>tristeza, irritabilidade ou isolamento</strong>.</li>
          <li>Conflitos familiares recorrentes relacionados com a rotina da criança.</li>
        </ul>
      </div>

      <p>
        O apoio à parentalidade nesta fase é essencial para garantir equilíbrio emocional 
        e qualidade nos cuidados prestados. Uma rede sólida de suporte beneficia tanto os 
        cuidadores como a criança, promovendo um ambiente familiar saudável e seguro.
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
        Entre 1 e 2 anos, o desenvolvimento do bebé é marcado por grandes conquistas motoras, 
        cognitivas e sociais. A criança passa da dependência quase total para uma autonomia 
        crescente: aprende a andar, começa a falar palavras simples e demonstra maior curiosidade 
        sobre o mundo à sua volta.
      </p>
      <p>
        Embora cada criança tenha o seu ritmo, acompanhar os marcos do desenvolvimento ajuda os 
        cuidadores a estimular novas habilidades e a identificar precocemente eventuais atrasos 
        que necessitem de apoio especializado.
      </p>

      <div>
        <p className="font-bold">Motor (grosseiro e fino)</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>12–15 meses</strong>: andar com apoio ou sozinho; empilhar 2–3 blocos.</li>
          <li><strong>16–18 meses</strong>: subir degraus com ajuda; usar colher com supervisão.</li>
          <li><strong>19–24 meses</strong>: correr, chutar bola, rabiscar com lápis; construir torres de 4–6 blocos.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Cognitivo e linguagem</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Compreende ordens simples (“dá-me a bola”, “vem cá”).</li>
          <li>Vocabular crescentemente ativo: 10–20 palavras por volta dos 18 meses; 50 ou mais até aos 2 anos.</li>
          <li>Começa a juntar <strong>duas palavras</strong> (“quer água”, “mais pão”).</li>
          <li>Explora brinquedos de forma funcional (empurra carrinho, alimenta boneca).</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Emocional e social</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Imita ações dos adultos e começa a brincar de “faz de conta”.</li>
          <li>Mostra preferência por pessoas conhecidas e pode ter <strong>ansiedade de separação</strong>.</li>
          <li>Demonstra emoções como frustração, alegria e orgulho com maior clareza.</li>
        </ul>
      </div>

      <p>
        Os 12 a 24 meses são um período de enorme evolução. Estimular o desenvolvimento com 
        brincadeiras, linguagem, afeto e oportunidades de movimento ajuda a criança a ganhar 
        confiança e competências fundamentais para os próximos anos.
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
        Entre 1 e 2 anos, a alimentação da criança evolui para maior diversidade e aproxima-se 
        cada vez mais da dieta familiar. É uma fase de descoberta de sabores e texturas, mas 
        também de possíveis recusas alimentares, que fazem parte do processo de autonomia.
      </p>
      <p>
        O papel dos cuidadores é oferecer variedade e consistência, mantendo uma alimentação 
        equilibrada e respeitando o apetite da criança. Estabelecer boas práticas nesta fase 
        contribui para hábitos saudáveis ao longo da vida.
      </p>

      <div>
        <p className="font-bold">Princípios da alimentação saudável</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Oferecer <strong>refeições variadas</strong>, incluindo frutas, legumes, cereais integrais, leguminosas, peixe e carne magra.</li>
          <li>Evitar <strong>sal, açúcar e ultraprocessados</strong>, que não são adequados para a idade.</li>
          <li>Manter o <strong>leite materno ou fórmula</strong> como complemento, se disponível, mas já não como base exclusiva da dieta.</li>
          <li>Estimular a <strong>autonomia</strong>, permitindo que a criança use colher, beba em copo e explore os alimentos.</li>
          <li>Oferecer <strong>água</strong> como principal bebida, evitando sumos e refrigerantes.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Autonomia e educação alimentar</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Respeitar sinais de saciedade, evitando forçar a criança a comer.</li>
          <li>Promover <strong>refeições em família</strong>, que reforçam bons hábitos e vínculo afetivo.</li>
          <li>Incentivar o contacto com diferentes alimentos, mesmo que inicialmente rejeitados.</li>
          <li>Evitar distrações como televisão ou telemóvel durante as refeições.</li>
        </ul>
      </div>

      <p>
        A alimentação entre 1 e 2 anos é uma oportunidade para formar preferências saudáveis 
        e incentivar a autonomia. Com paciência e variedade, os cuidadores ajudam a criança 
        a desenvolver uma relação positiva com a comida.
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
        Entre 1 e 2 anos, os padrões de sono começam a consolidar-se, mas ainda podem 
        ocorrer despertares noturnos e resistência para adormecer. Muitos bebés fazem 
        duas sestas no início desta fase e, gradualmente, passam a apenas uma por dia.
      </p>
      <p>
        Rotinas consistentes e um ambiente adequado são fundamentais para que a criança 
        associe o momento de dormir a segurança e tranquilidade. Bons hábitos de sono 
        contribuem para o desenvolvimento físico, cognitivo e emocional.
      </p>

      <div>
        <p className="font-bold">Padrões e rotinas</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Total de <strong>11 a 14 horas de sono</strong> por dia, incluindo sestas.</li>
          <li>Rotina previsível: banho, história ou canção, luz suave e ambiente calmo.</li>
          <li>Transição gradual de duas para uma sesta diurna entre 15 e 18 meses.</li>
          <li>Evitar estímulos intensos (ecrãs, brincadeiras agitadas) antes de dormir.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Segurança do sono</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Cama ou berço firme, sem almofadas, edredões ou brinquedos grandes.</li>
          <li>Colocar a criança a <strong>dormir de costas</strong> até indicação médica contrária.</li>
          <li>Evitar sobreaquecimento: roupa adequada à estação e quarto bem ventilado.</li>
          <li>Garantir que a criança não consegue sair do berço sem supervisão.</li>
        </ul>
      </div>

      <p>
        Criar rotinas tranquilas e seguras entre 1 e 2 anos ajuda a criança a desenvolver 
        uma boa relação com o sono, favorecendo o descanso e a energia necessária para 
        explorar o mundo durante o dia.
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
        Entre 1 e 2 anos, a criança começa a afirmar a sua autonomia e vontade própria. 
        É uma fase de birras, curiosidade intensa e exploração do ambiente, que exige dos 
        cuidadores paciência, consistência e uma abordagem educativa positiva.
      </p>
      <p>
        Nesta idade, a disciplina deve ser entendida como orientação e não como punição. 
        Regras simples e consistentes ajudam a criança a sentir-se segura, enquanto o 
        afeto e a validação das emoções favorecem o desenvolvimento de competências 
        sociais e emocionais.
      </p>

      <div>
        <p className="font-bold">Princípios da parentalidade positiva</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Dar <strong>instruções curtas e claras</strong> (“vamos guardar os brinquedos”).</li>
          <li><strong>Validar emoções</strong> (“sei que estás zangado”) e oferecer alternativas.</li>
          <li>Reforçar <strong>comportamentos positivos</strong> com elogios e atenção.</li>
          <li>Estabelecer <strong>limites consistentes</strong>, sempre com calma e previsibilidade.</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Ambiente de aprendizagem</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Promover <strong>brincadeiras sensoriais</strong>, livros ilustrados, música e rimas.</li>
          <li>Incentivar <strong>brincadeira livre no chão</strong>, estimulando autonomia e criatividade.</li>
          <li>Criar <strong>rituais familiares</strong>, como ler uma história antes de dormir.</li>
          <li>Reduzir tempo de ecrã e priorizar interações presenciais.</li>
        </ul>
      </div>

      <p>
        A disciplina nos primeiros anos deve ser construída sobre afeto, clareza e rotina. 
        Ao oferecer limites consistentes e um ambiente estimulante, os cuidadores ajudam 
        a criança a desenvolver segurança emocional e hábitos saudáveis que servirão de 
        base para os próximos estágios do crescimento.
      </p>
    </div>
  ),
},


];

export default function PrimeiroAnoPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Já tenho 1 ano! O ano das grandes conquistas
      </h1>
      <p className="italic text-zinc-600 mb-6">
        Entre os primeiros passos, as primeiras palavras e a curiosidade em cada descoberta, este é o ano em que começo a ganhar autonomia e a explorar o mundo com mais confiança.
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
      {/* Alerta e contacto SNS24 - 2º Ano (12–24 meses) */}
<div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
  <div className="flex items-center mb-4">
    <FiAlertTriangle className="text-red-600 mr-2" size={24} />
    <h2 className="text-lg font-bold text-red-700">Quando procurar ajuda</h2>
  </div>
  <p className="text-sm text-red-800 mb-4">
    Entre 1 e 2 anos, procure avaliação médica se a criança apresentar casos de <strong>febre alta persistente</strong>,{" "}
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
