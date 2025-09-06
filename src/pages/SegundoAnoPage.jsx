// eslint-disable-next-line
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import segundoano from "../assets/2anos.svg";

const segundoAnoData = [
  {
    id: 1,
    title: "1. Saúde e bem-estar",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Higiene e autocuidado</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Incentivar a <strong>participação nas rotinas</strong> (lavar mãos, tentar escovar os dentes com ajuda).</li>
            <li><strong>Higiene oral</strong>: escova macia + pasta fluoretada na quantidade de um grão de arroz; duas vezes ao dia.</li>
            <li>Cuidados com a <strong>pele</strong> e unhas; roupas confortáveis para facilitar autonomia.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Vacinas e consultas</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Reforços do <strong>Plano Nacional de Vacinação</strong> conforme o calendário.</li>
            <li>Consultas de <strong>vigilância</strong> (crescimento, desenvolvimento psicomotor, visão/audição quando indicado).</li>
            <li>Aconselhamento sobre <strong>ferro, vitamina D</strong> e saúde oral (primeira consulta de medicina dentária recomendada até aos 2 anos).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Prevenção de acidentes</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Segurança em <strong>escadas, tomadas, janelas, móveis</strong> e anti-queda em tapetes.</li>
            <li><strong>Supervisão</strong> na cozinha e casa de banho; produtos químicos fora do alcance.</li>
            <li>Transporte sempre em <strong>sistema de retenção infantil</strong> adequado (cadeirinha homologada).</li>
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
          <p className="font-bold">Desafios emocionais dos pais</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Gestão de <strong>birras</strong> e afirmação da vontade: manter calma, validar emoções e oferecer alternativas.</li>
            <li>Equilíbrio entre <strong>autonomia</strong> e <strong>segurança</strong>: permitir tentativa/erro com supervisão.</li>
            <li>Rede de <strong>apoio</strong> (família, creche, amigos) reduz stress e sobrecarga.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Promoção da independência</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Pequenas tarefas: <strong>arrumar brinquedos</strong>, escolher roupa entre 2 opções, levar prato à banca.</li>
            <li>Rotinas visuais simples (quadros/ícones) para <strong>previsibilidade</strong> do dia.</li>
            <li>Reforço positivo: elogiar <strong>esforço</strong> mais do que o resultado.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Dicas parentais</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Usar <strong>linguagem simples</strong> e coerente; dar tempo para responder e colaborar.</li>
            <li>Reservar <strong>tempo de qualidade</strong> diário sem ecrãs: brincar no chão, ler, cantar.</li>
            <li>Modelar <strong>autorregulação</strong>: nomear emoções e demonstrar estratégias (respirar fundo, contar até 5).</li>
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
            <li>Aperfeiçoa <strong>marcha e corrida</strong>, sobe degraus com apoio, chuta bola.</li>
            <li>Motricidade fina: <strong>empilhar blocos</strong>, virar páginas grossas, rabiscar formas simples.</li>
            <li>Início de <strong>autocuidado</strong>: tenta vestir peças simples, tirar sapatos/chapéu.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Cognitivo e linguagem</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Rápido aumento de <strong>vocabulário</strong>; combina 2 palavras perto dos 24 meses (variação é normal).</li>
            <li>Segue <strong>instruções simples</strong>; identifica partes do corpo, objetos e cores básicas.</li>
            <li>Brincadeira <strong>simbólica</strong> inicial (dar de comer ao boneco, telefonar de faz-de-conta).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Emocional e social</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Egocentrismo típico: dificuldade em <strong>partilhar</strong> e esperar a vez.</li>
            <li>Primeiras <strong>amizades paralelas</strong> (brincar ao lado); imitação de adultos.</li>
            <li>Importância do <strong>apego seguro</strong>: responsividade e rotinas consistentes.</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          Nota: os marcos variam entre crianças. Acompanhamento regular ajuda a orientar estímulos
          e sinalizar eventuais necessidades de avaliação adicional.
        </p>
      </div>
    ),
  },

  {
    id: 4,
    title: "4. Alimentação",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Alimentação diversificada</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Integração gradual na <strong>dieta familiar</strong> com cortes seguros e pouco sal/açúcar.</li>
            <li>Rotina de <strong>refeições e lanches</strong>; evitar petiscar constante.</li>
            <li>Água como principal bebida; limitar sumos e ultraprocessados.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Autonomia e preferências</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Usar <strong>talheres</strong> adequados à idade e copo aberto ou com palhinha.</li>
            <li>Respeitar <strong>sinais de saciedade</strong>; expor repetidamente a novos alimentos sem pressão.</li>
            <li>Envolver a criança em <strong>tarefas simples</strong> (lavar legumes, pôr a mesa).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Segurança alimentar</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Prevenir <strong>engasgamento</strong>: cortes adequados, atenção a frutos secos inteiros e uvas.</li>
            <li>Higiene das mãos e superfícies; conservação correta dos alimentos.</li>
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
            <li>Média de <strong>11–14 horas</strong> diárias (incluindo 1 sesta, podendo reduzir ao longo do ano).</li>
            <li>Manter <strong>rotinas previsíveis</strong> (banho, história/canção, luz suave) e horários regulares.</li>
            <li>Possíveis <strong>regressões</strong> associadas a saltos de desenvolvimento; consistência ajuda a estabilizar.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Ambiente de descanso</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Quarto escuro e calmo; evitar ecrãs antes de dormir.</li>
            <li>Transição do <strong>berço para cama</strong> quando demonstra capacidade de subir/descer ou por questões de segurança.</li>
            <li>Objetos de <strong>transição</strong> (peluche, fralda) podem auxiliar na autorregulação.</li>
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
          <p className="font-bold">Disciplina positiva</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Regras simples</strong> e consistentes; antecipar o que vai acontecer (“agora vamos guardar os brinquedos”).</li>
            <li><strong>Redirecionar</strong> comportamentos indesejados para alternativas aceitáveis.</li>
            <li><strong>Validar emoções</strong> (“vejo que estás frustrado”) e ensinar soluções (pedir ajuda, respirar).</li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Ambiente de aprendizagem e cultura</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Leitura diária de <strong>livros ilustrados</strong>, rimas e música; visitas culturais curtas e adequadas à idade.</li>
            <li>Brincadeira <strong>livre</strong> no chão e atividades sensoriais; menos ecrãs, mais interação.</li>
            <li>Criar <strong>rituais familiares</strong> (história antes de dormir, canções, participação em tradições).</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function SegundoAnoPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        O 2.º ano do bebé: descobertas, autonomia e primeiros passos para a infância
      </h1>

      <p className="italic text-zinc-600 mb-6">
        Entre os 12 e os 24 meses, o bebé torna-se um pequeno explorador: anda, fala, experimenta limites e ganha autonomia.
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
    </div>
  );
}
