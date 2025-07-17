// eslint-disable-next-line
import React from "react";
import terceiroTriImg from "../assets/3tri.svg";

export default function TerceiroTrimestrePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-30 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Terceiro Trimestre de Gravidez: Preparação para a chegada do bebé
      </h1>
      <p className="italic text-zinc-600 mb-6">
        O terceiro trimestre marca a reta final da gravidez. Saiba como o corpo se adapta, como evolui o desenvolvimento do bebé e quais os cuidados essenciais para o parto e o pós-parto.
      </p>

      <img
        src={terceiroTriImg}
        alt="Terceiro Trimestre"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl h-120 object-cover"
        />


      <div className="prose prose-zinc max-w-none">
        <h2 className="text-xl font-semibold mb-3">1. Bem-estar emocional e social da mãe</h2>
        <p className="font-bold">Alterações emocionais</p>
        <p className="mb-3">Nesta fase, é comum a mistura de emoções: ansiedade pela proximidade do parto, receios sobre a nova rotina e, simultaneamente, entusiasmo e expectativa.</p>

        <p className="font-bold">Como lidar com as emoções nesta fase</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Fale abertamente sobre medos e expectativas com a equipa de saúde.</li>
            <li>Continue a praticar técnicas de relaxamento e mindfulness.</li>
            <li>Organize momentos de lazer e descanso em família.</li>
            <li>Valorize o apoio da rede familiar e social.</li>
        </ul>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">2. O meu corpo</h2>
        <p className="font-bold">Sintomas e alterações no corpo</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Aumento significativo da barriga e peso corporal.</li>
            <li>Dores nas costas, pernas e articulações.</li>
            <li>Inchaço (edemas), principalmente em pés e tornozelos.</li>
            <li>Azia e dificuldade em dormir.</li>
            <li>Contrações de Braxton Hicks (preparatórias).</li>
            <li>Aumento da frequência urinária e possível incontinência leve.</li>
        </ul>

        <p className="font-bold mt-6">Possíveis doenças e sinais de alerta</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Pré-eclâmpsia (vigiar tensão arterial e edemas).</li>
            <li>Diabetes gestacional (controlo até ao final da gravidez).</li>
            <li>Infecções urinárias.</li>
        </ul>

        <p className="font-bold mt-6">Saúde e bem-estar da mãe</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Priorizar o descanso e adaptar a rotina às limitações físicas.</li>
            <li>Praticar atividades físicas suaves para aliviar desconfortos.</li>
            <li>Continuar com uma alimentação equilibrada e hidratação.</li>
        </ul>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">3. O meu bebé</h2>
        <p className="font-bold">Desenvolvimento cognitivo e físico do bebé</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>O bebé ganha peso e desenvolve gordura corporal.</li>
            <li>Os pulmões amadurecem para a vida fora do útero.</li>
            <li>Movimentos tornam-se mais fortes e visíveis.</li>
            <li>O bebé responde a estímulos sonoros e luminosos.</li>
            <li>Desenvolve ciclos de sono-vigília.</li>
            <li>O bebé posiciona-se para o parto nas últimas semanas (posição cefálica).</li>
        </ul>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">4. Saúde Materna e Cuidados</h2>
        <p className="font-bold">Consultas e exames essenciais</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Consultas quinzenais a partir da 36.ª semana.</li>
            <li>Ecografia do 3.º trimestre para avaliar crescimento e posicionamento do bebé.</li>
            <li>Monitorização da pressão arterial, peso e sinais de trabalho de parto.</li>
        </ul>

        <p className="font-bold mt-6">Amamentação e preparação</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Participação em sessões práticas sobre amamentação.</li>
            <li>Informação sobre as primeiras semanas do pós-parto.</li>
        </ul>

        <p className="font-bold mt-6">Preparação para o parto e trabalho de parto</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Identificação dos sinais de início de trabalho de parto.</li>
            <li>Preparação da mala da maternidade.</li>
            <li>Definir o plano de parto com a equipa de saúde.</li>
            <li>Conhecer técnicas de alívio da dor e posições para o trabalho de parto.</li>
        </ul>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">5. Atividades e Desenvolvimento Cultural</h2>
        <p className="font-bold">Atividades físicas recomendadas</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Alongamentos e caminhadas suaves.</li>
            <li>Exercícios de preparação pélvica para o parto.</li>
            <li>Técnicas de respiração e relaxamento.</li>
        </ul>

        <p className="font-bold mt-6">Atividades culturais</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Leitura em voz alta para o bebé.</li>
            <li>Criação de memórias visuais (sessões fotográficas da gravidez).</li>
            <li>Participar em eventos culturais de interesse da família, se possível.</li>
        </ul>

        <p className="font-bold mt-6">Dicas para estimular o vínculo e a cultura familiar</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Preparar em conjunto os últimos detalhes para a chegada do bebé.</li>
            <li>Manter rituais familiares (tradições, músicas, histórias).</li>
            <li>Envolver irmãos mais velhos na expectativa do nascimento.</li>
        </ul>
        </div>

    </div>
  );
}
